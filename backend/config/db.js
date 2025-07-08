import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

// Import mongoose for MongoDB connection
import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);  // Exit if database fails
  }
};

export default connectDB;
// orpP4HeOLAakAjjc