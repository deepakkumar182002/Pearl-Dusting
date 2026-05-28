import mongoose from 'mongoose';

const connectDB = async () => {
  const connect = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`❌ MongoDB Connection Error: ${error.message}`);
      console.log('⏳ Retrying connection in 5 seconds...');
      setTimeout(connect, 5000);
    }
  };
  await connect();
};

export default connectDB;
