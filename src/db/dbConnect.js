const mongoose = require('mongoose');
const config = require('../config/config');
const logger = require('../config/logger');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoose.url);
    logger.info('Connected to the database!');
  } catch (error) {
    logger.error('Error connecting to the database:', error);
  }
};

module.exports = connectToDatabase;
