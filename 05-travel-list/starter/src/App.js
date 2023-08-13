import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Drone", quantity: 1, packed: true },
  { id: 3, description: "Camera", quantity: 1, packed: false },
  { id: 4, description: "Cash", quantity: 1200, packed: false },
  { id: 5, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats allItem={initialItems} />
    </div>
  );
}

function Logo() {
  return <h1>🩲 Far Away 🤿</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if(!description) return;

    const newItem = {
      id: initialItems.length + 1,
      description: description,
      quantity: quantity,
      packed: false,
    };
    setDescription('');
    setQuantity(1);

    // initialItems = { ...initialItems, newItem };
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Stats({ allItem }) {
  return (
    <footer className="stats">
      <em>You have {allItem.length} items on your list, and you have already packed x (x%)</em>
    </footer>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
