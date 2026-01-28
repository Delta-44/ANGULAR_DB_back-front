import passport from 'passport';
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import { pool } from '../config/db';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: '/auth/google/callback'
}, async (_accessToken: string, _refreshToken: string, profile: Profile, done: VerifyCallback) => {
  const googleId = profile.id;
  const email = profile.emails?.[0].value;
  const name = profile.displayName;

  const [rows]: any = await pool.query(
    'SELECT * FROM users WHERE google_id = ?',
    [googleId]
  );

  if (rows.length) return done(null, rows[0]);

  const [result]: any = await pool.query(
    'INSERT INTO users (email, name, provider, google_id) VALUES (?, ?, "google", ?)',
    [email, name, googleId]
  );

  done(null, { id: result.insertId, email });
}));
