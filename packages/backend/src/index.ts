import express from "express";
import pino from "pino";
import "src/config/env";
import { db } from "src/db/knex";

const logger = pino();
const app = express();
const port = process.env.BACKEND_PORT;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}...`);

  logger.info(db.client.config.connection);
});
