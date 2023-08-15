export default function TipBill({ bill, onSetBill }) {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={bill}
        onChange={e => onSetBill(Number(e.target.value))}
        placeholder="bill value"
      />
    </>
  );
}
