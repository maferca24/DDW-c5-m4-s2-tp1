export function Navbar({ cantidadLista, alAbrirPanel }) {
  return (
    <header>
      
        <h1>
          🌱 Recetas Sin TACC
        </h1>

        <button
          onClick={alAbrirPanel}
              >
          📋 Mi Lista
          {cantidadLista > 0 && (
            <span >
              {cantidadLista}
            </span>
          )}
        </button>
        </header>
  );
}