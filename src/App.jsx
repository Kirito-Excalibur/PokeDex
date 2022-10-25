import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import { PropagateLoader } from "react-spinners";
function App() {
  const [Pokemons, setPokemons] = useState([]);
  const [keyval, setKey] = useState(true);
  const [imgdata, setImgdata] = useState([]);
  const [maxVal, setmaxVal] = useState(40);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getArray() {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${maxVal}`
      );
      const respData = await resp.json();
      const arr = respData.results;
      setPokemons(arr);

      const imges = arr.map(async (imgd) => {
        const resp1 = await fetch(imgd.url);
        const resp1Data = await resp1.json();
        return resp1Data.sprites.front_default;
      });
      setImgdata(await Promise.all(imges));
      setLoading(false);
    }

    getArray();
  }, [maxVal]);
  setInterval(() => setKey(!keyval), 100);

  return (
    <div className="mx-auto flex flex-col items-center relative z-10 justify-center p-5 bg-red-600 w-[420px] sm:w-[1810px]  ">
      <h1 className="text-center text-3xl pb-4">PokéDex</h1>

   
        <div className="flex flex-wrap   gap-4  justify-center items-center">
          {imgdata.map((imgi, key) => {
            return (
              <Link key={key} to={`pokemon/${key + 1}`}>
                <div className="flex flex-col justify-center items-center">
                  <img
                    loading="eager"
                    className="w-[150px] h-[150px] rounded-xl bg-white border border-green-500"
                    src={imgi}
                  />
                  <h1 className="text-2xl">{Pokemons[key].name}</h1>
                </div>
              </Link>
            );
          })}
        </div>
   

      <button className="mt-5" onClick={() => setmaxVal(maxVal + 20)}>Show More +20</button>
      <button onClick={() => setmaxVal(647)}>Show All</button>
    </div>
  );
}

export default App;
