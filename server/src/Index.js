import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import viajesRoutes from './routes/viajes.routes.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/auth', authRoutes);
app.use('/api/viajes', viajesRoutes);

const PORT = process.env.PORT || 4000;
await connectDB(process.env.MONGO_URI);
app.listen(PORT, () => console.log(`🚀 API en http://localhost:${PORT}`));