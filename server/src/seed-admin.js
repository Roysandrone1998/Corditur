import 'dotenv/config';
import bcrypt from 'bcrypt';
import { connectDB } from './config/db.js';
import User from './models/User.js';

async function main() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error('Uso: npm run seed:admin -- <email> <contrasena>');
    process.exit(1);
  }

  await connectDB(process.env.MONGO_URI);

  const existe = await User.findOne({ email });
  if (existe) {
    console.log('Ya existe usuario con ese email');
    process.exit(0);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({ email, passwordHash, role: 'admin' });

  console.log('Admin creado correctamente');
  process.exit(0);
}

main().catch((err) => {
  console.error('Error creando admin:', err?.message || err);
  process.exit(1);
});