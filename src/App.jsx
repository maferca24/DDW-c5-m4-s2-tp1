import { useState } from "react";
import recetasSintacc from "./data/recetasSintacc.json";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { ItemList } from "./components/ItemList";
import { ListPanel } from "./components/ListPanel";

export default function App() {
  //lista guarda las recetas que el usuario agrego a Mi lista
  //busqueda, string que guarda lo que el usuario van tipeando
  //booleano para abrir y cerrar el panel lateral (modal)
  const [lista, setLista] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarLista, setMostrarLista] = useState(false);

  //filtra el json de recetas
  const recetasFiltradas = recetasSintacc.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase().trim())
  );

  const listaTotal = lista.length;
//revisa  si la receta ya existe en el array lista
  const toggleLista = (receta) => {
    setLista((prev) => {
      const yaEsta = prev.some((item) => item.id === receta.id);
      return yaEsta
      //Si ya esta lo remueve(filter) si no esta lo agrega con ..prev
        ? prev.filter((item) => item.id !== receta.id) // sacar
        : [...prev, receta];                           // agregar
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface-bg)] flex flex-col">
      <Navbar
        listCount={listaTotal}
        onOpenPanel={() => setMostrarLista(true)}
      />

      <main className="flex-1 py-6">
        <SearchBar
          searchTerm={busqueda}
          setSearchTerm={setBusqueda}
        />

        <ItemList
          items={recetasFiltradas}
          lista={lista}
          onToggle={toggleLista}
          busqueda={busqueda}
        />
      </main>

      {/* Renderizado condicional del modal-solo dibuja listPanel si mostrar lista=true
 */}
      {mostrarLista && (
        <ListPanel
          lista={lista}
          onToggle={toggleLista}
          onClose={() => setMostrarLista(false)}
        />
      )}
    </div>
  );
}