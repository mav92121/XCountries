import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [countries, setContries] = useState([]);
  useEffect(() => {
    const url = `https://xcountries-backend.azurewebsites.net/all`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setContries(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="grid-container">
      {countries.map((country, i) => {
        return (
          <div
            className="country-card"
            key={i}
            style={{
              width: 150,
              height: 120,
              border: "1px solid black",
              display: "inline-block",
            }}
          >
            <img style={{ width: 70 }} src={country.flag} alt={country.abbr} />
            <p>{country.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
