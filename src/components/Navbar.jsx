export function Navbar({ listCount, onOpenPanel }) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          🌱 Recetas Sin TACC
        </h1>

        <button
          onClick={onOpenPanel}
          className="relative px-4 py-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-hover)] text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
        >
          📋 Mi Lista
          {/* Muestra el contador solo si hay al menos 1 item */}
          {listCount > 0 && (
            <span className="bg-white text-[var(--color-brand-primary)] text-xs font-bold px-2 py-0.5 rounded-full">
              {listCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}