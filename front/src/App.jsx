import { useState, useEffect } from 'react';
import DetalleAlumno from './components/DetalleAlumno';

const App = () => {
  const [idAlumno, setIdAlumno] = useState('1001');
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch(`http://localhost:3000/api/alumnos/${idAlumno}`);
        const datosAlumno = await respuesta.json();
        setAlumno(datosAlumno.rowAlumno);
      } catch (error) {
        console.error('Error al obtener datos del alumno:', error);
      }
    };

    fetchData();
  }, [idAlumno]);

  // Función para cambiar dinámicamente el ID del alumno
  const cambiarIDAlumno = (nuevoID) => {
    setIdAlumno(nuevoID);
  };

  return (
    <div>
      {/* Botón para cambiar dinámicamente el ID del alumno */}
      <button onClick={() => cambiarIDAlumno('1001')}>
        Cambiar ID del Alumno a 456
      </button>

      {alumno ? (
        <DetalleAlumno id={idAlumno} />
      ) : (
        <p>Cargando datos del alumno...</p>
      )}
    </div>
  );
};

export default App;
