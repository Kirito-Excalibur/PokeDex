import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";

function App() {
  const [Pokemons, setPokemons] = useState([]);
  const [keyval, setKey] = useState(true);
  const [imgdata, setImgdata] = useState([]);
  useEffect(() => {
    async function getArray() {
      const resp = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=647"
      );
      const respData = await resp.json();

      const arr = respData.results;

      setPokemons(arr);

      const newArr = [];
      arr.map(async (imgd) => {
        const resp1 = await fetch(imgd.url);
        const resp1Data = await resp1.json();
        const final = resp1Data.sprites.other.home.front_default;

        newArr.push(final);
      });
      setImgdata(newArr);
   console.log(Pokemons[12])
    }

    getArray();
  }, []);
  setInterval(() => setKey(!keyval), 100);
  return (
    <div className="mx-auto justify-center   flex flex-col flex-wrap pb-5 bg-red-600 w-[420px] ">
      <h1 className="text-center">POKEDEX</h1>
      <div className="flex flex-wrap  gap-4  justify-center items-center">
        {imgdata.map((imgi, key) => {
          return (
            <div className="flex flex-col justify-center items-center">
            <img
              className="w-[150px] rounded-xl bg-white border border-green-500"
              src={imgi}
            />
        <Link to={`pokemon/${key+1}`}>  <h1>{Pokemons[key].name}</h1></Link>  
            </div>
          );
        })}
     
      </div>
    </div>
  );
}

export default App;
