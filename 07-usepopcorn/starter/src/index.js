import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StarRating from "./components/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating  maxRating={5} size={44} color="red" onSetRating={setMovieRating} />
      <p>Movie was rating at {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
     */}
     <Test />
    <StarRating maxRating={5} messages={["terrible", "bad", "ok", "good", "amazing"]} />
    <StarRating maxRating={5} size={24} color="blue" defaultRating={3} />
  </React.StrictMode>
);
