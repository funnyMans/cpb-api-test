const app = require('./src/app');
const config = require('./src/config/config');
const logger = require('./src/config/logger');
const connectToDatabase = require('./src/db/dbConnect');
const { getShopifyCollectionAndStoreToDB } = require('./src/shopify');

const start = async () => {
  try {
    await connectToDatabase();
    await getShopifyCollectionAndStoreToDB();
  } catch (error) {
    logger.info(error);
  }

  const server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });

  return server;
};

const server = start();

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
