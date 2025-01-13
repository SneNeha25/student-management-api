import express from 'express';

import Routes from './routes/index.js';
const app = express();
const port = 3000;

app.use('/api', Routes);

app.listen(port, () => {
  console.log(`App is Running on ${port}`);
});
