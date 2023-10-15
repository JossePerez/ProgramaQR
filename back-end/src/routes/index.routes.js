import { Router } from "express";
import fs from "fs";
const router = Router();
const jsonData = JSON.parse(fs.readFileSync("./../datos.json", "utf-8"));

router.post("/student", (req, res) => {
  const matricula = req.body.matricula;
  if (!matricula) {
    return res.status(400).json({
      error: "La matricula no esta siendo proporcionada en la solicitud ._.",
    });
  }
  const studentDetails = jsonData.alumno.find(
    (alumno) => alumno.matricula === matricula
  );
  res.json({ alumno: studentDetails });
});

export default router;
