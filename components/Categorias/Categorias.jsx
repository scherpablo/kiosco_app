import Image from "next/image";
import styles from "./Categorias.module.css";
import useKiosco from "../../hooks/useKiosco";

const Categorias = ({ categoria }) => {
  const { id, nombre, icono } = categoria;
  const { categoriaActual, handleClickCategoria } = useKiosco();

  return (
    <div
      className={`${categoriaActual?.id === id ? styles.bgAmbar : ""} ${
        styles.containerCat
      }`}
      onClick={() => handleClickCategoria(id)}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt="imagen icono"
      />

        <button
          className={styles.btnCat}
          type="button"
        >
          {nombre}
        </button>
    </div>
  );
};

export default Categorias;
