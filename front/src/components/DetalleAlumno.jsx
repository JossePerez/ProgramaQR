import { useState, useEffect } from 'react';

const DetalleAlumno = async ({ id }) => {
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    const obtenerDatosAlumno = async () => {
      try {
        // Hacer la solicitud al backend
        const respuesta = await fetch(`http://localhost:3000/api/alumnos/${id}`);
        const datosAlumno = await respuesta.json();

        // Actualizar el estado con los datos del alumno
        setAlumno(datosAlumno.rowAlumno);
      } catch (error) {
        console.error('Error al obtener datos del alumno:', error);
      }
    };

    // Llamar a la función obtenerDatosAlumno cuando el componente se monta
    obtenerDatosAlumno();
  }, [id]);

  // Renderizar los datos en el componente
  return (
    <div>
      {alumno ? (
        <div>
          <h2>Detalles del Alumno</h2>
          <p>Número de Control: {alumno.NumeroControl}</p>
          <p>Nombre: {alumno.Nombre}</p>
          {/* Agregar más detalles según la estructura de tu base de datos */}
        </div>
      ) : (
        <p>Cargando datos del alumno...</p>
      )}
    </div>
  );
};

export default DetalleAlumno;
