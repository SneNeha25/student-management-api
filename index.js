import express from 'express';
import cors from 'cors';
import Routes from './routes/index.js';
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use('/api', Routes);

app.listen(port, () => {
  console.log(`App is Running on ${port}`);
});
