import app from "./app.js";
const port = process.env.PORT || 3000;
const startServe = async () => {
  try {
    await app.listen(port);
    console.log(
      `El sevidor se conecto correctamente: http://localhost:${port}`
    );
  } catch (error) {
    console.error(`No se pudo iniciar el servidor ${error}`);
  }
};

startServe();
