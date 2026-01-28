import express from 'express';
import cors from 'cors';
import passport from 'passport';
import studentRoutes from './routes/student.routes';
import authRoutes from './routes/auth.routes';
// import './auth/google.strategy'; // Descomentar cuando tengas las credenciales de Google

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/students', studentRoutes);
app.use('/auth', authRoutes);


export default app;
