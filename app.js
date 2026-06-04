import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://127.0.0.1:${port}`);
});
