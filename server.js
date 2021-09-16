import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./db/connect.js";

const app = express();
app.use(bodyParser.json());
app.use("*", cors());

app.listen({ port: 4000 }, () => {
  connectDB();
  console.log(`🚀 Server ready at http://localhost:4000`);
});
