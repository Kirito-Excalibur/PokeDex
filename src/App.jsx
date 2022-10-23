import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";

function App() {
  const [Pokemons, setPokemons] = useState([]);
  const [keyval, setKey] = useState();

  useEffect(() => {
    async function getArray() {
      const resp = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=647"
      );
      const respData = await resp.json();

      const arr = respData.results;
      setPokemons(arr);
      console.log(arr);
    }

    getArray();
  }, [keyval]);

  return (
    <div className="mx-auto items-center justify-center flex flex-wrap gap-5 pb-5 bg-red-600 w-[420px] ">
      {Pokemons.map((data, key) => {
        return (
          <div key={key}>
            <h1>{key + 1}</h1>
            <Link to={`pokemon/${key+1}`}>
           
              <h1 className="text-3xl">{data.name}</h1>
            </Link>
          </div>
        );
      })}
      <Link to={`pokemon/`}>Here</Link>
    </div>
  );
}

export default App;
