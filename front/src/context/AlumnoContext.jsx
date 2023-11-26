import { createContext, useContext, useState } from "react";
import { fetchAlumnoById } from "../api/alumno.api.js";

export const AlumnoContext = createContext();

export const useAlumno = () => {
  const context = useContext(AlumnoContext);
  if (!context) {
    throw new Error("useAlumno must be used within a AlumnoProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const AlumnoProvider = ({ children }) => {
  const [alumno, setAlumno] = useState();

  const obtenerAlumno = async (id) => {
    try {
      const alumnoData = await fetchAlumnoById(id);
      console.log("Alumno data:", alumnoData); // Aquí puedes ver los datos del alumno en la consola.
      setAlumno(alumnoData);
      return alumnoData;
    } catch (error) {
      console.error("Error fetching alumno: ", error);
      throw error;
    }
  };

  return (
    <AlumnoContext.Provider value={{ alumno, obtenerAlumno }}>
      {children}
    </AlumnoContext.Provider>
  );
};
