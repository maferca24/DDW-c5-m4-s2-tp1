export function ItemCard({ item, onToggle, isInList }) {
  return (
    <article className="bg-white border-2 border-[var(--color-border-card)] rounded-xl p-5 shadow-xs flex flex-col justify-between h-full hover:shadow-md transition-shadow">
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <span className="text-xs font-semibold text-[var(--color-on-surface-variant)] uppercase">
            {item.categoria}
          </span>
          
          {item.aptoVegano && (
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
              🌱 APTO VEGANO
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold text-[var(--color-on-surface)] mb-1">
          {item.nombre}
        </h3>
        <p className="text-xs text-[var(--color-on-surface-variant)] mb-4">⏱️ {item.tiempoPreparacion}</p>
      </div>

      {/* Botón primario en naranja */}
      <button
        onClick={() => onToggle(item)}
        className={`w-full py-2.5 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
          isInList
            ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
            : 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white border-transparent shadow-xs'
        }`}
      >
        {isInList ? '✓ En mi lista' : '+ Agregar'}
      </button>
    </article>
  );
}