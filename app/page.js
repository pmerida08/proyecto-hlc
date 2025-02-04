import styles from "./page.module.css";
import './styles/styles.css';
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
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div id={styles.groupMiNombre}>
          <MiNombre name="Pablo" surname="Mérida Velasco" instagram="https://www.instagram.com/pablomerida_/"/>
          <MiNombre name="Javier" surname="Ruiz Molero" instagram="https://www.bing.com/ck/a?!&&p=0828a79dbad32c0c8c543a3abc02811402817ee7878b369b7cf9e53696ba812dJmltdHM9MTczODYyNzIwMA&ptn=3&ver=2&hsh=4&fclid=306df61e-c49c-6ca6-232e-e2fcc5346dbf&psq=instragram+jruizm_11&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qcnVpem1fMTEv&ntb=1"/>
          <MiNombre name="Héctor" surname="Mora Sánchez" instagram="https://www.bing.com/ck/a?!&&p=99b7be37d7435a967d8657eccfb3fc102282f7db289959f4de6507d022f0d010JmltdHM9MTczODYyNzIwMA&ptn=3&ver=2&hsh=4&fclid=306df61e-c49c-6ca6-232e-e2fcc5346dbf&psq=instagram+h3ct0rrr._06&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9faDNjdDBycnJfLjYv&ntb=1"/>
        </div>
        <Toggle />
        <Cliqueando />
        <Contando />
        <div id={styles.groupHoli}>
          <Holi nombre="Pablo" />
          <Holi nombre="Javier" />
          <Holi nombre="Héctor" />
          <Holi />
        </div>
        {/* <DespliegueEnViernes /> */}
        <CuentaFuegos />
        <Destino />
        <ImagenesDestino />
        <Reloj />
    </main>
    </>
  );
}
