//Importando dependências e ou arquivos que vamos utilizar e ou referenciar.
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
// import { useState } from "react";

export default function App() {

  return (
    
    <>
      <div>
      <Cabecalho />
      <Outlet/>
      <Rodape />
      </div>
    </>
  );
}