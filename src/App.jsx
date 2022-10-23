import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";

function App() {
  const [Pokemons, setPokemons] = useState([]);
  const [keyval, setKey] = useState(true);
  const [imgdata, setImgdata] = useState([]);
  useEffect(() => {
    async function getArray() {
      const newArr=[]
      const resp = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=647"
      );
      const respData = await resp.json();

      const arr = respData.results;

      setPokemons(arr);
    
      arr.slice(0,4).map(async (imgd) => {
        const resp1 = await fetch(imgd.url);
        const resp1Data = await resp1.json();

        newArr.push(resp1Data);
      });
      setImgdata(newArr)
    }
 
    getArray();
  },[keyval] );

  return (
    <div className="mx-auto items-center justify-center flex flex-wrap gap-5 pb-5 bg-red-600 w-[420px] ">
      <button onClick={()=>setKey(!keyval)}>CLICK ME FOR PIC</button>
      <div>
      {imgdata.map((imgi,key)=>{

         
          return <img className="w-[100px]" src={imgi.sprites.other.home.front_default} />;
        })
      }
     
      <Link to={`pokemon/`}>Here</Link>
      </div>
    </div>
  );
}

export default App;
