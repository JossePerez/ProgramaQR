const API_BASE_URL = "http://localhost:3000/api/alumnos";

export const fetchAlumnoById = async (taskId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${taskId}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Error fetching task details");
    }
    const taskData = await response.json();
    console.log("Task details:", taskData); // Aquí puedes ver los detalles de la tarea en la consola.
    return taskData; // Esto devolverá los detalles de la tarea.
  } catch (error) {
    console.error("Error fetching task details:", error);
    throw error;
  }
};
