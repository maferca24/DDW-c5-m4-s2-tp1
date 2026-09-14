import { useState } from "react";
import recetasSintacc from "./data/recetasSintacc.json";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { ItemList } from "./components/ItemList";
import { ListPanel } from "./components/ListPanel";

export default function App() {
  const [lista, setLista] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarLista, setMostrarLista] = useState(false);

  const recetasFiltradas = recetasSintacc.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase().trim())
  );

  const cantidadLista = lista.length;

  const toggleLista = (receta) => {
    setLista((prev) => {
      const yaEsta = prev.some((item) => item.id === receta.id);
      return yaEsta
        ? prev.filter((item) => item.id !== receta.id)
        : [...prev, receta];
    });
  };

  return (
    <>
      <Navbar
        cantidadLista={cantidadLista}
        alAbrirPanel={() => setMostrarLista(true)}
      />

      <main className="flex-1 py-6">
        <SearchBar
          textoBusqueda={busqueda}
          setTextoBusqueda={setBusqueda}
        />

        <ItemList
          items={recetasFiltradas}
          lista={lista}
          alAlternar={toggleLista}
          busqueda={busqueda}
        />
      </main>

      {mostrarLista && (
        <ListPanel
          lista={lista}
          alAlternar={toggleLista}
          alCerrar={() => setMostrarLista(false)}
        />
      )}
    </>
  );
}