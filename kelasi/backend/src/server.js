const app = require('./app');
const { PORT } = require('./config/constants');

const port = PORT || 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on port ${port}`);
});

