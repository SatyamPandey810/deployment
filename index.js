import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
// const PORT = 8000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello! Server is alive",
    time: new Date().toISOString(),
    query: req.query
  });
});

app.get('/ping', (req, res) => {
  res.json({ status: 'ok', pong: true });
});

app.get('/test', (req, res) => {
  res.json({ status: 'ok', test: true,data:process.env.PORT });
});

app.get('/test/:id', (req, res) => {
  res.json({
    receivedId: req.params.id,
    message: `You asked for item #${req.params.id}`
  });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running → http://localhost:${process.env.PORT}`);
});