import * as dotenv from 'dotenv';
import * as path from 'path';

// Define the path to your .env file in the base directory
const envPath = path.resolve(__dirname, '../../.env');

// Load the environment variables from the .env file
dotenv.config({ path: envPath });

// Export an object with the environment variables
export const envConfig = {
  databaseUrl: process.env.MONGODB_URI,
};
