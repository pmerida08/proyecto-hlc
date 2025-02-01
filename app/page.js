import styles from "./page.module.css";
import MiNombre from "./components/MiNombre";
import Toggle from "./components/Toggle";
import Cliqueando from "./components/Cliqueando";
import Contando from "./components/Contando";
import Holi from "./components/Holi";
// import DespliegueEnViernes from "./components/DespliegueEnViernes";
import Destino from "./components/Destino";
import { ImagenesDestino } from "./components/ImagenDestino";
import Reloj from "./components/Reloj";
import CuentaFuegos from "./components/CuentaFuegos";

export default function Home() {
  return (
    <main className={styles.main}>
      <MiNombre />
      <Toggle />
      <Cliqueando />
      <Contando />
      <Holi nombre="Pablo" />
      <Holi />
      {/* <DespliegueEnViernes /> */}
      <CuentaFuegos />
      <Destino />
      <ImagenesDestino />
      <Reloj />
    </main>
  );
}
