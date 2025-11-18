import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = Router();

router.post("/login", async (req, res) => {
      try {
      const { email, password } = req.body;

      if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son requeridos" });
      }

      // Busca al usuario en la base de datos
      const user = await User.findOne({ email });
      if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
      }

      // Verifica la contraseña
      const isValid = await bcrypt.compare(password, user.passwordHash);
      if (!isValid) {
      return res.status(401).json({ error: "Credenciales inválidas" });
      }

      // Genera el token
      const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
      );

    // 🔑 CORRECCIÓN: Definir isSecure aquí. 
    // Comprueba si estamos en HTTPS (usando el header que Vercel añade). 
    // Si no es HTTPS (ej: localhost), será 'false'.
    const isSecure = req.headers['x-forwarded-proto'] === 'https';
    
      res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: isSecure // 👈 ¡Ahora definida y dinámica!
      });

      return res.json({ ok: true });
      } catch (err) {
      console.error("Error en login:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
      }
});

router.post("/logout", (req, res) => {
      res.clearCookie("token");
      res.json({ ok: true });
});

// 🔑 SUGERENCIA: Ajustamos /me para que también lea el token del Header 
// (aunque el frontend ya lo esté haciendo con cookies, es más robusto).
router.get("/me", (req, res) => {
      let token = req.cookies?.token;

      // Si no está en la cookie, busca en el Header Authorization (del frontend)
      if (!token) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
      }
      }

      if (!token) return res.json({ ok: false });
      
      try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      return res.json({ ok: true, user: payload });
      } catch {
      return res.json({ ok: false });
      }
});

export default router;