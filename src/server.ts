import { Server } from "http";
import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`Example app listening on the port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
