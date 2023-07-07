import express from 'express';

const PORT = process.env.PORT || 8001;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
