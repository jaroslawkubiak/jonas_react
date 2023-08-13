import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
  return (
    <div>
      <Steps />
      <Counter />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(s => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep(s => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(is => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step: {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>
              Previous
            </button>
            <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(1);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + counter);

  function handleIncStep() {
    setStep(s => s + 1);
  }

  function handleDecStep() {
    if (step > 1) setStep(s => s - 1);
  }

  function handleDecCounter() {
    setCounter(c => c - step);
  }
  function handleIncCounter() {
    setCounter(c => c + step);
  }

  return (
    <>
      <div>
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
      </div>
    </>
  );
}
