import { useState } from "react";

import { Botao, CampoTexto, Loading, TIPO_BOTAO } from "../../components";
import { useAppContext } from "../../hooks";

import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = () => {
  const { adcionarTarefa, loadingCriar} = useAppContext();

  const [nomeTarefa, setNomeTarefa] = useState("");

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const submeterFormulario = (event) => {
    event.preventDefault();

    if (!nomeTarefa) {
      return;
    }

    adcionarTarefa(nomeTarefa);

    setNomeTarefa("");
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao texto={loadingCriar ? <Loading /> : "+"}  />
    </form>
  );
};

export { FormCriarTarefa };
