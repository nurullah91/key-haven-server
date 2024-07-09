import express, { Application } from "express";
import cors from "cors";
import router from "./app/route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Key Haven server is working");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
