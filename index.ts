import cors from "cors";
import { mainApp } from "./main";
import express, { Application } from "express";
import env from "dotenv";
env.config();

const port = parseInt(process.env.PORT!);
const app: Application = express();

app.use(cors());
app.use(express.json());
mainApp(app);

const server = app.listen(port, () => {
  console.log("server");
});

process.on("uncaughtException", () => {
  console.log("uncaughtException");
  server.on("connect", () => {
    process.exit(1);
  });
});

process.on("uncaughtException", () => {
  console.log("uncaughtException");
  server.on("connect", () => {
    process.exit(1);
  });
});
