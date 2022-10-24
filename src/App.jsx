import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";

function App() {
  const [Pokemons, setPokemons] = useState([]);
  const [keyval, setKey] = useState(true);
  const [imgdata, setImgdata] = useState([]);
  const[maxVal,setmaxVal]=useState(40)
  console.log(maxVal)
  useEffect(() => {
    async function getArray() {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${maxVal}`
      );
      const respData = await resp.json();

      const arr = respData.results;

      setPokemons(arr);

      const newArr = [];
      arr.map(async (imgd) => {
        const resp1 = await fetch(imgd.url);
        const resp1Data = await resp1.json();
        const final = resp1Data.sprites.front_default;

        newArr.push(final);
      });
      setImgdata(newArr);
   
    }

    getArray();
  }, [maxVal]);
  setInterval(() => setKey(!keyval), 100);
  return (
    <div className="mx-auto justify-center   flex flex-col flex-wrap pb-5 bg-red-600 w-[420px] ">
      <h1 className="text-center">POKEDEX</h1>
      <div className="flex flex-wrap  gap-4  justify-center items-center">
        {imgdata.map((imgi, key) => {
          return (
            <Link to={`pokemon/${key+1}`}>       <div className="flex flex-col justify-center items-center">
            <img
            loading="eager"
              className="w-[150px] h-[150px] rounded-xl bg-white border border-green-500"
              src={imgi}
            />
   <h1>{Pokemons[key].name}</h1> 
            </div></Link> 
          );
        })}
      </div>

      <button onClick={()=>setmaxVal(maxVal+20)}>Show More</button>
    </div>
  );
}

export default App;
