import "./Alumno.css";
import { useState } from "react";
import { useAlumno } from "../context/AlumnoContext";

export default function AlumnoPage() {
  const { alumno, obtenerAlumno } = useAlumno();

  console.log(alumno);
  const [idAlumno, setIdAlumno] = useState(1001);

  const manejarBuscarClick = async () => {
    try {
      await obtenerAlumno(idAlumno);
    } catch (error) {
      console.error("Error al obtener el alumno", error);
    }
  };

  return (
    <div className="container">
      <label>ID del alumno:</label>
      <input
        type="number"
        value={idAlumno}
        onChange={(e) => setIdAlumno(parseInt(e.target.value, 10))}
      />
      <button onClick={manejarBuscarClick}>Buscar</button>

      {alumno && (
        <div className="card">
          <div className="profileimage">
            <img className="pfp" src={alumno.alumno.Foto} alt="" />
          </div>
          <div className="Name">
            <p>{alumno.alumno.Nombre}</p>
          </div>
          <div className="infobar">
            <b>No.Control: </b> <span> {alumno.alumno.NumeroControl}</span>
          </div>
        </div>
      )}
    </div>
  );
}
