export function ItemCard({ item, onToggle, isInList }) {
  return (
    <article className="bg-white border border-[var(--color-border-subtle)] rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase">
            {item.categoria}
          </span>
          
          {/* Badge condicional usando && y el booleano isAptoVegano */}
          {item.aptoVegano && (
            <span className="bg-[var(--color-badge-bg)] text-[var(--color-badge)] text-[10px] font-bold px-2 py-0.5 rounded-md">
              🌱 APTO VEGANO
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold text-gray-900 mb-1">
          {item.nombre}
        </h3>
        <p className="text-xs text-gray-500 mb-4">⏱️ {item.tiempoPreparacion}</p>
      </div>

      {/* Botón con ternario según el estado derivado isInList- esta en la lista */}
      <button
        onClick={() => onToggle(item)}
        className={`w-full py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
          isInList
            ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
            : 'bg-gray-900 text-white border-transparent hover:bg-gray-800'
        }`}
      >
        {isInList ? '✓ En mi lista' : '+ Agregar'}
      </button>
    </article>
  );
}