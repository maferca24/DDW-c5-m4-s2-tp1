export function ItemList({ items, list, onToggle, searchTerm }) {
  if (items.length === 0) {
    return (
      <p className="empty-state">
        No encontramos nada para "{searchTerm}"
      </p>
    );
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onToggle={onToggle}
          isInList={list.some((i) => i.id === item.id)}
        />
      ))}
    </div>
  );
}