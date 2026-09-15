export function ListPanel({ lista, onToggle }) {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="bg-white border-2 border-[var(--color-border-card)] rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-6">
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] flex items-center gap-2">
            📋 Mi Lista Seleccionada
          </h2>
          <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
            {lista.length} {lista.length === 1 ? 'receta' : 'recetas'}
          </span>
        </div>

        {lista.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="text-sm">
              Todavía no agregaste recetas a tu lista. Buscá arriba y elegí tus favoritas 👆
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lista.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-[var(--color-background)] border border-gray-200 rounded-xl"
              >
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{item.nombre}</h4>
                  <span className="text-xs text-gray-500">{item.categoria}</span>
                </div>
                <button
                  onClick={() => onToggle(item)}
                  className="text-xs font-semibold text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1.5 rounded-lg border border-red-200 transition-colors cursor-pointer"
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}