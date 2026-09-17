import { useState } from "react";
import recetasSintacc from "./data/recetasSintacc.json";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { ItemList } from "./components/ItemList";
import { ListPanel } from "./components/ListPanel";

export default function App() {
  const [lista, setLista] = useState([]); //recetas que guardo el usuario
  const [busqueda, setBusqueda] = useState('');// guarda la busqueda y actualiza
  const [mostrarLista, setMostrarLista] = useState(false);//determina si el panel de recetas esta abierto o cerrado

  const recetasFiltradas = recetasSintacc.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase().trim())
  );

  const listaTotal = lista.length;//para pasar el total de elementos seleccionados
//actualiza la lista -agrega y quita en la misma función
  const toggleLista = (receta) => {
    setLista((prev) => {
      const yaEsta = prev.some((item) => item.id === receta.id);
      return yaEsta
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

      {/* Renderizado condicional del modal */}
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