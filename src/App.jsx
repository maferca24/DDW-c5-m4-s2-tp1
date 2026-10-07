import { useState, useEffect } from "react";
import recetasSintacc from "./data/recetasSintacc.json";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { ItemList } from "./components/ItemList";
import { ListPanel } from "./components/ListPanel";

import useToggle from "./hooks/useToogle";
import useRecetasList from "./hooks/useRecetasList";

export default function App() {
const { list, total, toggle, clear } = useRecetasList();
const [mostrarPanel, setMostrarPanel] = useToggle(false);
const [busqueda, setBusqueda] = useState("");// guarda la busqueda y actualiza

/*const [mostrarLista, setMostrarLista] = useState(false);//determina si el panel de recetas esta abierto o <cerrado></cerrado>*/
   
const recetasFiltradas = recetasSintacc.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase().trim())
  );

/*  const listaTotal = lista.length;//para pasar el total de elementos seleccionados*/
//useEffect para título de la ventana
useEffect(() => {
    const nombreApp = "Recetas Sin TACC";
    DocumentTimeline.title= total >0?  `Mi lista (${total}) | ${nombreApp}` : nombreApp;
  }, [total]);
    /*if (listaTotal > 0) {
      document.title = `Mi lista (${listaTotal}) | ${nombreApp}`;
    } else {
      document.title = nombreApp;
    }
  }, [listaTotal]);*/

//actualiza la lista -agrega y quita en la misma función
  /*const toggleLista = (receta) => {
    setLista((prev) => {
      const yaEsta = prev.some((item) => item.id === receta.id);
      return yaEsta
        ? prev.filter((item) => item.id !== receta.id) // sacar
        : [...prev, receta];                           // agregar
    });
  };
  //agrego funcion para vaciar lista
  const vaciarLista = () => {
    if (lista.length === 0) return;

    const confirmar = window.confirm("¿Estás seguro de que querés vaciar tu lista de recetas?");
    if (confirmar) {
      setLista([]);
      localStorage.removeItem(guardado);
    }
  };*/

  return (
    <div className="min-h-screen bg-[var(--color-surface-bg)] flex flex-col">
      <Navbar
        listCount={total}
        onOpenPanel={setMostrarPanel}
      />

      <main className="flex-1 py-6">
        <SearchBar
          searchTerm={busqueda}
          setSearchTerm={setBusqueda}
        />

        <ItemList
          items={recetasFiltradas}
          lista={list}
          onToggle={toggle}
          busqueda={busqueda}
        />
      </main>

      {/* Renderizado condicional del modal */}
      {mostrarPanel && (
        <ListPanel
          lista={list}
          onToggle={toggle}
          onVaciar={clear} // Le pasamos la función al panel
          onClose={setMostrarPanel}
        />
      )}
    </div>
  );
}