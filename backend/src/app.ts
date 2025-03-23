import express from 'express';
import cors from 'cors';
import register from './routes/register';

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use("/api/auth/register",register);

app.get('/', (_req, res) => {
  res.send('<h1>Server is running...</h1>');
});

export default app;