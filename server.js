import app from './src/app.js';
import { testConnection } from './src/config/database.js';
import dotenv from 'dotenv';
import path from 'path';

const result = dotenv.config({ path: path.resolve(process.cwd(), '.env') });

if (result.error) {
  console.warn(' Could not load .env file:', result.error.message);
  console.log(' Using system environment variables');
} else {
  console.log('.env file loaded successfully');
}

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await testConnection();
    
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
      console.log(` API health check: http://localhost:${PORT}/api/health`);
      console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  console.log('\n Shutting down server');
  process.exit(0);
});

startServer();