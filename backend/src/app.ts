import express from 'express';
import cors from 'cors';
import router from './routes/authRoute';

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use("/api",router);

app.get('/', (_req, res) => {
  res.send('<h1>Server is running...</h1>');
});

export default app;