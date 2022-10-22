import React, { useEffect, useState } from "react";

function Types({ final }) {
  const [types, setTypes] = useState([]);
  const[cond,setCond]=useState(false)
  useEffect(() => {
    async function getTypes() {
      const newArr = [];
      final.map(async (item) => {
        const respType = await fetch(item.move.url);
        const respTypeData = await respType.json();
        const final2 = respTypeData.type.name;
        console.log(final2);
        newArr.push(final2);
        setTypes(newArr);
      });
      console.log(types);
    }
    getTypes();
  }, [final]);

  return (
    <div>
      <button className="absolute" onClick={()=>setCond(!cond)} >Show him boss</button>
      <ul className="text-3xl flex gap-3 flex-col items-center">
        {types.map((type, key) => {
          return (
            <li key={key} className="w-[100px]">
              <img className="w-[100px]" src={`/assets/${type}.svg`} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Types;
