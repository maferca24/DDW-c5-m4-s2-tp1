//lista array de recetas guardadas
//onToggle para quitar elementos desde el panel
//onClose fcion para cambiar mostrarLista a false  al hacer click en la x
export function ListPanel({ lista, onToggle, onClose }) {
  return (
    //fixed inset-0 /40 posicion fija fondo semitransparente
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end">
      <aside className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Mi Lista Seleccionada</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 font-bold p-1 text-lg cursor-pointer"
          >
            ✖
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {/* Empty State requerido de lista vacía */}
          {lista.length === 0 ? (
            <div className="text-center py-12 px-2 text-gray-500">
              <p className="text-sm">Todavía no agregaste nada, buscá algo arriba 👆</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {lista.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">{item.nombre}</h4>
                    <span className="text-xs text-gray-500">{item.categoria}</span>
                  </div>
                  <button
                    onClick={() => onToggle(item)}
                    className="text-xs font-semibold text-red-600 hover:text-red-800 hover:bg-red-50 px-2 py-1 rounded cursor-pointer"
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
}