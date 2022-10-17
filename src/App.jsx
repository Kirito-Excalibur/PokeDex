import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import PokeScreen from "./components/PokeScreen";
import PokeDesc from "./components/PokeDesc";
import Moves from "./components/Moves";

function App() {
  const [pokeno, setPokeno] = useState(0);
  const [pokeName, setpokeName] = useState("bulbasaur");
  const [desc, setDesc] = useState("");
  const[move, setMove]= useState([])
  useEffect(() => {
    async function getArray() {
      const resp = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=647"
      );
      const respData = resp.json();
      Promise.resolve(respData).then((data) => {
        const arr = data.results[pokeno].name;
        setpokeName(arr);
        console.log(arr)
      });
    }

    async function getDesc() {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokeno + 1}`
      );
      const respData = resp.json();
      Promise.resolve(respData).then((data) => {
        const arr = data;
 
        setDesc(arr.flavor_text_entries[1].flavor_text);
      });
    }

    async function getMoves(){
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const respData= await resp.json()
      setMove(respData.moves)
    }
getMoves()
    getDesc();
    getArray();
  });

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
          <PokeDesc desc={desc} />
        </div>

       <Moves arr={move.slice(0,4)}/>
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
