const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
require('dotenv').config();

const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const { APP_NAME, APP_VERSION } = require('./config/constants');

const routes = require('./routes');
const { initDatabase } = require('./database');

const app = express();

// Security & parsing
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', name: APP_NAME, version: APP_VERSION });
});

// API routes
app.use('/api', routes);

// API Docs
try {
  const swaggerDocument = YAML.load(path.join(__dirname, 'docs', 'swagger.yaml'));
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
  // Swallow docs errors in case the file is not ready yet
}

// 404
app.use(notFoundHandler);

// Error handler
app.use(errorHandler);

// Initialize DB asynchronously (non-blocking)
initDatabase();

module.exports = app;

