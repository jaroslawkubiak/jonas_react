import { useState } from "react";
import TipBill from "./TipBill";
import TipSelectPercent from "./TipSelectPercent";

export default function TipCalc() {
  const [bill, setBill] = useState("");
  const [myPercent, setMyPercent] = useState(0);
  const [friendPercent, setFriendPercent] = useState(0);

  let avTip = Math.round(Number(myPercent) + Number(friendPercent)) / 2;
  let avTipValue = (bill * avTip) / 100;

  function handleReset() {
    setBill("");
    setMyPercent(0);
    setFriendPercent(0);
  }

  return (
    <div className="tip-container">
      <TipBill bill={bill} onSetBill={setBill} />

      <TipSelectPercent percent={myPercent} onSelect={setMyPercent}>
        How did you like the service?
      </TipSelectPercent>

      <TipSelectPercent percent={friendPercent} onSelect={setFriendPercent}>
        How did your friend like service?
      </TipSelectPercent>
      {bill > 0 && (
        <>
          <h5>
            You pay ${bill + avTipValue} (${bill} + ${avTipValue} tip)
          </h5>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}
