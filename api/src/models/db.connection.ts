import mongoose from 'mongoose';
import { envConfig } from '../envConfig';

const databaseUrl = envConfig.databaseUrl;

// Connect to the MongoDB database
mongoose.connect(databaseUrl);

// Get the default connection
const db = mongoose.connection;

// Set up event listeners for the database connection
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Export the Mongoose instance and the database connection
export { mongoose, db };
