import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(cors());
app.use(bodyParser.json());

app.post('/qr', (req, res) => {
  const alumnoInfo = {
    nombre: 'Nombre del Alumno',
    numeroDeControl: '12345',
    fechaDeIngreso: '2023-11-01',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDfEm2RI-XLQed8IUqNuzlJa3srstfCAzVQJyIJIlgiISUfiiJ9-2IQGkVV2cJ-E72hI&usqp=CAU'
  };
  res.json(alumnoInfo);
});

export default app;
