import mongoose from 'mongoose';

export async function connectDB(uri) {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(uri);
        console.log('🗄️  MongoDB conectado');
    } catch (err) {
        console.error('Error MongoDB:', err.message);
        process.exit(1);
    }
}