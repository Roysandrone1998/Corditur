import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // ej: "duxxxxxx"
  api_key: process.env.CLOUDINARY_API_KEY,       // ej: "1234567890"
  api_secret: process.env.CLOUDINARY_API_SECRET  // ej: "abCDefGhIJKlmnoP"
});

export { cloudinary };