import express, { Application } from "express";
import cors from "cors";
import router from "./app/route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/", router);

app.use("/", (req, res) => {
  res.send("Key Haven server is working");
});

export default app;
