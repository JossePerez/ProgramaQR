import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(indexRoutes);
export default app;
