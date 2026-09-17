import logoSingluten from '../assets/trigo.png';

export function Navbar({ listCount, onOpenPanel }) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoSingluten}
            alt="Logo Sin TACC"
            className="w-10 h-auto"
          />
          <span className="font-display font-bold text-[var(--color-primary)] text-base leading-tight hidden sm:block">
            Recetas sin TACC
          </span>
        </div>

        {/* Botón usando las variables del theme */}
        <button
          onClick={onOpenPanel}
          className="relative px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
        >
          📋 Mi Lista
          {/* Contador de la lista */}
          {listCount > 0 && (
            <span className="bg-white text-[var(--color-primary)] text-xs font-bold px-2 py-0.5 rounded-full">
              {listCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}