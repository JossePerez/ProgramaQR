import Routers from "../routes/Routers";
import { AlumnoProvider } from "../context/AlumnoContext";
function Layout() {
  return (
    <AlumnoProvider>
      <main className=" ">
        <Routers />
      </main>
    </AlumnoProvider>
  );
}

export default Layout;
