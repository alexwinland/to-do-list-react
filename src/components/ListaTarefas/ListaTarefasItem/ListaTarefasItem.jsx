import { useState } from "react";

import { useAppContext } from "../../../hooks";
import { Botao, CampoTexto, Loading, TIPO_BOTAO } from "../../../components";

import style from "./ListaTarefasItem.module.css";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const [estaEditando, setEstaEditando] = useState(false);

  const { loadingEditar, loadingDeletar, editarTarefa, removerTarefa } =
    useAppContext();

  const onBlurTarefa = (event) => {
    const nomeTarefa = event.currentTarget.value;

    editarTarefa(id, nomeTarefa);

    setEstaEditando(false);
  };

  const loadingEstaEditando = loadingEditar == id;
  const loadingEstaDeletando = loadingDeletar == id;

  return (
    <li className={style.ListaTarefasItem}>
      {(loadingEstaDeletando || estaEditando) && (
        <CampoTexto defaultValue={nome} onBlur={onBlurTarefa} autoFocus />
      )}

      {!loadingEstaDeletando && !estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}

      {loadingEstaDeletando && <Loading />}

      <Botao
        texto={loadingEstaEditando ? <Loading /> : "-"}
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
