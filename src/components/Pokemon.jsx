import { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import PokeScreen from "./PokeScreen";
import PokeDesc from "./PokeDesc";
import Moves from "./Moves";
import { useParams, Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

function Pokemon({ match }) {
  let { value } = useParams(parseInt(match));

  const [pokeno, setPokeno] = useState(parseInt(value));
  const [pokename, setPokename] = useState("");
  console.log(pokeno);

  useEffect(() => {
    async function getArray() {
      const resp = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=647"
      );
      const respData = await resp.json();

      const arr = respData.results[pokeno - 1].name;

      console.log(arr);
      setPokename(respData.results[pokeno - 1].name);
    }

    getArray();
  }, [pokeno]);


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="mx-auto  pb-5 rounded-lg relative bg-red-600 w-[420px]  ">
      <Link to="/">
        <h1 className="text-center text-3xl">Pokedex</h1>
      </Link>
      <div className="flex pt-4 justify-center">
        <form action="">
          <input type="text" />
          <button type="sumbit" className="ml-5">
            Search
          </button>
        </form>
      </div>

      <h1 className="text-2xl pl-5 mt-2 ">{capitalizeFirstLetter(pokename)}</h1>

      <div className="p-4 mt-4 flex gap-4 ">
        <PokeScreen pokename={pokeno} />
        <PokeDesc pokename={pokeno} />
      </div>
      <br />
      <Moves pokeName={pokeno} />

      <div className="flex justify-between mx-3">
        <button
          onClick={() => {
            pokeno > 1 ? setPokeno(pokeno - 1) : setPokeno(647);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            pokeno < 647 ? setPokeno(pokeno + 1) : setPokeno(1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pokemon;
