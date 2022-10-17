import React, { useEffect, useState } from "react";

function Moves({ pokeName }) {
  const [move, setMove] = useState([]);

  useEffect(() => {
    async function getMoves() {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const respData = await resp.json();
      setMove(respData.moves.slice(0,4));
     
      respData.moves.slice(0,4).map(move =>{
        console.log(move.move)
      })


      

    }
    getMoves();
  },[pokeName]);

  return (
    <div className="bg-red-700 m-4 rounded-2xl pb-4">
      <h1 className="text-center text-4xl">Moves</h1>
      <div className="grid grid-flow-col row-span-2">
        <div>
         <ul className="text-3xl flex gap-3 flex-col items-center">
       {
        move.map((life,key)=>{
            return <li key={key}>{life.move.name}</li>
        })
       }
         </ul>
        </div>
        <div>
          <ul className="text-3xl flex gap-3 flex-col items-center">
            <li>Normal</li>
            <li>Normal</li>
            <li>Normal</li>
            <li>Electric</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Moves;
