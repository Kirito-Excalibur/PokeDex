import React, { useEffect, useState } from "react";

function Moves({ pokeName }) {
  const [move, setMove] = useState([]);
  const [arr, setArr] = useState([]);
 
  useEffect(() => {
    async function getMoves() {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const respData = await resp.json();
      const final = respData.moves.slice(0 , 4);
      setMove(final);

      const newArr = [];
      final.map(async (item) => {
        const respType = await fetch(item.move.url);
        const respTypeData = await respType.json();
        const final2 = respTypeData.type.name;
        console.log(final2); //Got rendered the moment I loaded the page
        newArr.push(final2);
      });
    
      setArr(newArr);
      console.log(arr) //Got rendered after I changing pokeName(Clicking a button), also one pokemon behind the current one
    }

    getMoves();
  },[pokeName]);

  return (
    <div className="bg-red-700 m-4 rounded-2xl pb-4">
      <h1 className="text-center text-4xl">Moves</h1>
      <div className="grid grid-flow-col row-span-2">
        <div>
          <ul className="text-3xl flex gap-6 flex-col items-center">
            {move.map((life, key) => {
              return <li key={key}>{life.move.name}</li>;
            })}
          </ul>
        </div>
        <div>
          <ul className="text-3xl flex gap-3 flex-col items-center">
           {

            arr.map(item =>{

              return <li className="w-[100px]" >
              <img src={`../src/assets/${item}.svg`} alt="" />
            </li>
            })
                
}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Moves;
