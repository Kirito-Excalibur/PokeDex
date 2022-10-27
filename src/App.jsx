import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [Pokemons, setPokemons] = useState([]);
  const [keyval, setKey] = useState(true);
  const [imgdata, setImgdata] = useState([]);
  const [maxVal, setmaxVal] = useState(40);
  const [searchVal, setsearchVal] = useState("");
  useEffect(() => {
    
    async function getArray() {
      console.log(searchVal)
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
    }
   
    getArray();
  }, [maxVal,searchVal]);
  setInterval(() => setKey(!keyval), 100);

  
  console.log(Pokemons)
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="mx-auto flex flex-col items-center relative z-10 justify-center p-5 bg-red-600 w-[420px] sm:w-[1810px]  ">
      <h1 className="text-center text-3xl pb-4">PokéDex</h1>
<input type="text" placeholder="Search..."  className="pl-2" onChange={e=>setsearchVal(e.target.value)}/>
      <div className="flex flex-wrap mt-5 gap-4  justify-center items-center">
        {Pokemons.filter((val)=>{
          if(searchVal==""){
            return val
          }
          else if(String(val.name).includes(searchVal)){
            return val
          }
        }).map((name, key) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <Link key={key} to={`pokemon/${key + 1}`}>
                <h1>{key}</h1>
                <img
                  loading="eager"
                  className="w-[150px] h-[150px] rounded-xl bg-white border border-green-500"
                  src={imgdata[key]}
                />
              </Link>
              <h1 className="text-2xl">
                {capitalizeFirstLetter(name.name)}
              </h1>
            </div>
          );
        })}
      </div>

      <button className="mt-5" onClick={() => setmaxVal(maxVal + 20)}>
        Show More +20
      </button>
      <button onClick={() => setmaxVal(647)}>Show All</button>
    </div>
  );
}

export default App;
