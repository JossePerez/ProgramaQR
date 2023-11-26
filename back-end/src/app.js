import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2/promise";
import alumnosRoutes from "./routes/alumnos.routes.js";

const app = express();

//Se crean las cookies para que se mantenga la sesión
/*app.use(cookieSession({name:"session",
keys:["key1","key2"],
maxAge:24*60*60*1000}))
*/

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", alumnosRoutes);

export default app;
