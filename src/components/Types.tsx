import React, { useEffect, useState } from "react";

function Types({ final }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
  async  function getTypes() {
      const newArr = [];
      final.map(async (item) => {
        const respType = await fetch(item.move.url);
        const respTypeData = await respType.json();
        const final2 = respTypeData.type.name;

        newArr.push(final2);
        setTypes(newArr);
      });
    }
    getTypes();
  });

  return (
    <ul className="text-3xl flex gap-6 flex-col items-center">
   {
    types.map((type,key)=>{
      return (
        <li key={key} className="w-[100px]" > <img className="w-[100px]" src={`src/assets/${type}.svg`} alt="" /></li>
        )
    })
   }
    </ul>
  );
}

export default Types;
