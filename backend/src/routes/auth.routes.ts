import { Router, Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { register, login } from '../controllers/auth.controller';

// Extender el tipo Request para incluir user
interface AuthRequest extends Request {
  user?: any;
}

const router = Router();

// Rutas locales email/password
router.post('/register', register);
router.post('/login', login);

// Rutas Google OAuth
router.get('/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  (req: AuthRequest, res: Response) => {
    const user = req.user as any;
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
      expiresIn: '1d'
    });

    // redirigimos a Angular con token
    res.redirect(`http://localhost:4200/auth/callback?token=${token}`);
  }
);

export default router;
