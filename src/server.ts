import sequelize from './services/dbService';
import app from './app';
import { config } from './config/config';
import logger from './utils/logger';

const startServer = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Database connected!');
    
    await sequelize.sync(); 
    logger.info('Models synchronized with the database!');

    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
    });
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};

startServer();
