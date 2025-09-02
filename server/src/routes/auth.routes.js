import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// POST /api/auth/login   body: { email, contrasena }  (o { email, password })
router.post('/login', async (req, res) => {
    try {
        const { email, contrasena, password } = req.body || {};
        const pass = contrasena ?? password;
        if (!email || !pass) return res.status(400).json({ error: 'Credenciales incompletas' });

        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: 'Usuario o contraseña inválidos' });

        const ok = await bcrypt.compare(pass, user.passwordHash);
        if (!ok) return res.status(401).json({ error: 'Usuario o contraseña inválidos' });

        const token = jwt.sign(
        { id: user._id.toString(), role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '8h' }
        );

        return res.json({ token });
    } catch (e) {
        console.error('[AUTH] login error:', e);
        return res.status(500).json({ error: 'Error interno' });
    }
});

export default router;