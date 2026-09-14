import { useState } from "react";
import recetasSintacc from "./data/recetasSintacc.json";

import { Navbar } from "./components/Navbar";


export default function App() {
const [lista, setLista] = useState([]);
  const cantidadLista = 2;

  return (
    <>
      <Navbar
        cantidadLista={cantidadLista}
        alAbrirPanel={() => setMostrarLista(true)}   />     
      
    </>
  );
}
