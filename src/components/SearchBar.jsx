export function SearchBar({ textoBusqueda, setTextoBusqueda }) {
  return (
    <div>
      <div >
        <input
          type="text"
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          placeholder="🔍 Buscar por nombre..."
          className=""
        />
        {textoBusqueda && (
          <button
            onClick={() => setTextoBusqueda('')}
            className=""
          >
            ✖
          </button>
        )}
      </div>
    </div>
  );
}