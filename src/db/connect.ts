import mongoose from "mongoose";
import config from "config";
import log from "../logger";
import app from "../../app";

const dbUri = config.get("dbUri") as string;
const port = config.get("port") as number;
const host = config.get("host") as string;

mongoose
  .connect(dbUri)
  .then(() => {
    log.info("Database connected");

    app.listen(port, host, () => {
      log.info(`Server listing at http://${host}:${port}`);
    });
  })
  .catch((error) => {
    log.error("db error", error);
    process.exit(1);
  });
