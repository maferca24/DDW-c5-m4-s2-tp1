import { useState, useRef } from "react";
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

  // 1. Referencia para marcar la sección final
  const seccionListaRef = useRef(null);

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
        ? prev.filter((item) => item.id !== receta.id)
        : [...prev, receta];
    });
  };

  // 2. Función para desplazarse suavemente hasta abajo
  const irALaLista = () => {
    seccionListaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
      <Navbar
        listCount={listaTotal}
        onOpenPanel={irALaLista}
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

        {/* 3. Lista visible al final con su referencia asignada */}
        <section ref={seccionListaRef} className="pt-8">
          <ListPanel
            lista={lista}
            onToggle={toggleLista}
          />
        </section>
      </main>
    </div>
  );
}