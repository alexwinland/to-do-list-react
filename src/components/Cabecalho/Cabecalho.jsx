import { Link } from "react-router-dom";

import style from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <div className={style.Cabecalho}>
      <Link to="/">
        <h1>
          <span>ToDo </span>
          List
        </h1>
      </Link>

      <Link to="sobre-nos">Saiba Mais</Link>
    </div>
  );
};

export { Cabecalho };
