import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [curFrom, setCurFrom] = useState("EUR");
  const [curTo, setCurTo] = useState("USD");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurrency() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${curFrom}&to=${curTo}`
        );
        const data = await res.json();
        setOutput(data.rates[curTo]);
        setIsLoading(false);
      }
      if (curTo === curFrom) return setOutput(amount);
      fetchCurrency();
    },
    [amount, curFrom, curTo]
  );

  return (
    <div className="box">
      <input type="text" className="input-el" onChange={e => Number(setAmount(e.target.value))} />
      <select className="input-el" value={curFrom} onChange={e => setCurFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select className="input-el" value={curTo} onChange={e => setCurTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading ? (
          "Loading..."
        ) : (
          <span>
            {output} {curTo}
          </span>
        )}
      </p>
    </div>
  );
}
