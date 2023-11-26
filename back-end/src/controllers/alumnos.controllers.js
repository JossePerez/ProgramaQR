import { pool } from "../db.js";

export const getAlumno = async (req, res) => {
  const [rowAlumno] = await pool.query(
    "SELECT * FROM `alumnos` WHERE NumeroControl=?",
    [req.params.id]
  );
  console.log("Estos son los datos del alumno: ", rowAlumno);
  if (rowAlumno.length === 0) {
    console.log("No existe este alumno");

    return res.status(404).send({ message: "No existe este alumno" });
  }
  // Lógica adicional si hay alumnos
  res.status(200).send({ message: "Alumno encontrado", alumno: rowAlumno[0] });
};
