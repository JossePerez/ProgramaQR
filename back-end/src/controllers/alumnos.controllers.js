import { pool } from "../db.js";

export const getAlumno = async (req, res) => {
  const [rowAlumno] = await pool.query(
    "SELECT * FROM `alumnos` WHERE NumeroControl=?",
    [req.params.id]
  );
  console.log("Estos son los datos del alumno: ",rowAlumno);
  if (rowAlumno.length===0){
    return res.status(404).send({message:"No existe este alumno"});
  }

  res.send({rowAlumno});
};


