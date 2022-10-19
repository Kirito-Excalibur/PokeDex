import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import PokeScreen from "./components/PokeScreen";
import PokeDesc from "./components/PokeDesc";
import Moves from "./components/Moves";

function App() {
  const [pokeno, setPokeno] = useState(0);
  const [pokeName, setpokeName] = useState("bulbasaur");

  useEffect(() => {
    async function getArray() {
      const resp = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=647"
      );
      const respData = await resp.json();

      const arr = respData.results[pokeno].name;
      setpokeName(arr);
      console.log(arr);
    }

    getArray();
  }, [pokeno]);

  return (
    <div className="App ">
      <div className="mx-auto mt-16  pb-5  bg-red-600 w-[850px] ">
        <div className="flex pt-4 justify-center">
          <form action="">
            <input type="text" />
            <button type="sumbit" className="ml-5">
              Search
            </button>
          </form>
        </div>

        <div className="p-4 mt-4 flex gap-4 ">
          <PokeScreen pokename={pokeName} />
          <PokeDesc pokename={pokeName} />
        </div>

        <Moves pokeName={pokeName} />
      </div>

      <button
        onClick={() => {
          pokeno >= 1 ? setPokeno(pokeno - 1) : setPokeno(646);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          pokeno < 647 ? setPokeno(pokeno + 1) : setPokeno(0);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
