import Image from "next/image";
import styles from "./Sidebar.module.css";
import useKiosco from "../../hooks/useKiosco";
import Categorias from "../Categorias/Categorias";

const Sidebar = () => {
  const { categorias } = useKiosco();

  return (
    <>
      <div className={styles.containerNav}>
        <Image
          width={125}
          height={125}
          src="assets/img/logo.svg"
          alt="imagen icono"
          className={styles.logoImg}
          priority="true"
        />

        <nav className={styles.nav}>
          {categorias.map((categoria) => (
            <Categorias key={categoria.id} categoria={categoria} className={styles.categorias} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
