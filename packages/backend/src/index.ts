import dotenv from "dotenv";
import express from "express";
import { resolve } from "path";
import pino from "pino";

dotenv.config({
  path: resolve(
    process.cwd(),
    "../..",
    process.env.NODE_ENV === "development" ? ".env.development" : ".env"
  ),
});

const logger = pino();
const app = express();
const port = process.env.BACKEND_PORT;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}...`);
});
