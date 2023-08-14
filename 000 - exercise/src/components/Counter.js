import { useState } from "react";
export default function Counter() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + counter);

  // function handleIncStep() {
  //   setStep(s => s + 1);
  // }

  // function handleDecStep() {
  //   if (step > 1) setStep(s => s - 1);
  // }

  function handleDecCounter() {
    setCounter(c => c - step);
  }
  function handleIncCounter() {
    setCounter(c => c + step);
  }

  function handleReset() {
    setStep(1);
    setCounter(0);
  }
  return (
    <>
      {/* <div>
          <button onClick={handleDecStep}>-</button>&nbsp; STEP ({step})&nbsp;
          <button onClick={handleIncStep}>+</button>
        </div>
        <div>
          <button onClick={handleDecCounter}>-</button>&nbsp; COUNTER ({counter})&nbsp;
          <button onClick={handleIncCounter}>+</button>
        </div>
        <div>
          <span>{counter === 0 ? "Today is " : ""}</span>
          <span>{counter > 0 ? `${counter} from today ` : `${Math.abs(counter)} days ago was `}</span>
          <span>{date.toDateString()}</span>
        </div> */}

      <div>
        <div>
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={e => setStep(Number(e.target.value))}
          />
          &nbsp;{step}
        </div>
        <div>
          <button onClick={handleDecCounter}>-</button>
          <input type="text" value={counter} onChange={e => setCounter(Number(e.target.value))} />
          <button onClick={handleIncCounter}>+</button>
        </div>
        <div>
          <span>{counter === 0 ? "Today is " : ""}</span>
          <span>
            {counter > 0 ? `${counter} from today ` : `${Math.abs(counter)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </div>
        {(counter !== 0 || step !== 1) && <button onClick={handleReset}>Reset</button>}
      </div>
    </>
  );
}
