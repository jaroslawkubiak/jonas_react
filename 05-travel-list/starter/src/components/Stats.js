export default function Stats({ items }) {
  if (!items.length)
    return (
      <p class="stats">
        <em>Start adding some items to yours packing list!</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentPackedItems = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPackedItems === 100
          ? "You got everything ready to go 🚀"
          : `You have ${numItems} items on your list, and you have already packed ${packedItems} (
        ${percentPackedItems}%)`}
      </em>
    </footer>
  );
}
