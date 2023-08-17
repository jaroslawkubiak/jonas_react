import { useState } from "react";
import { useGeolocation } from "./hooks/useGeolocation";
// function useGeolocation() {}

export default function Geolocation() {
  const [countClicks, setCountClicks] = useState(0);

  const { isLoading, error, lat, lng, getPosition} = useGeolocation();

  function handleClick() {
    getPosition();
    setCountClicks(count => count + 1);
  }
  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
