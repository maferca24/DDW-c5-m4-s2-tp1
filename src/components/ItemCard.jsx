export function ItemCard({ item, onToggle, isInList }) {
  return (
    <div className="card">
      {/* Badge condicional con && */}
      {item.esDestacado && <span className="badge">⭐ DESTACADO</span>}

      <h3>{item.nombre}</h3>
      <p>{item.categoria} • {item.tiempoPrep}</p>

      {/* Botón con ternario */}
      <button onClick={() => onToggle(item)}>
        {isInList ? "✓ En mi lista" : "+ Agregar"}
      </button>
    </div>
  );
}