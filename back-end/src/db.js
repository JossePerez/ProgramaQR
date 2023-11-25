// Importa las bibliotecas necesarias
/*import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';*/
import { createPool } from 'mysql2/promise';  // Importa createPool de mysql2


// Configura la conexión a la base de datos con createPool :D
export const pool = createPool({
  host: '127.0.0.1',
  user: 'root',
  database: 'qr-alumnos-maestros',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});