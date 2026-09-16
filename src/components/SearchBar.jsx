//searchTerm contiene valor actual de búsqueda, 
//setSearchTerm función para actualizar el estado del buscador
export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full max-w-md mx-auto mb-6 px-4">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="🔍 Buscar por nombre..."
          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] shadow-xs"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
          >
            ✖
          </button>
        )}
      </div>
    </div>
  );
}