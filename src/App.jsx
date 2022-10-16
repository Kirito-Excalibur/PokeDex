import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import PokeScreen from "./components/PokeScreen";


function App() {
  const[pokeno,setPokeno]=useState(0)
  const[pokeName,setpokeName]=useState("bulbasaur")
  useEffect(() => {
    async function getArray() {
      const resp = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=647"
      );
      const respData = resp.json();
      Promise.resolve(respData).then((data) => {
        const arr = data.results[pokeno].name;
        setpokeName(arr)
        console.log(arr,pokeno);
      });
    }
    getArray();
  });

  return (
    <div className="App mx-auto ">
      <div className="mx-auto mt-16 relative   bg-red-600 w-[750px] h-[600px] ">
        <br />
        <PokeScreen pokename={pokeName}/>
        <button onClick={()=>{pokeno>=1?setPokeno(pokeno-1):setPokeno(646)}}>Previous</button>
        <button onClick={()=>{pokeno<647?setPokeno(pokeno+1):setPokeno(0)}}>Next</button>
      </div>
    </div>
  );
}

export default App;
