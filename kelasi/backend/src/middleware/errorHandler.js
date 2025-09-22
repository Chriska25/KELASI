// Centralized error and 404 handlers

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  const details = process.env.NODE_ENV === 'development' ? err.stack : undefined;
  res.status(status).json({ message, status, details });
}

function notFoundHandler(req, res) {
  res.status(404).json({ message: 'Not Found' });
}

module.exports = { errorHandler, notFoundHandler };

