import React, { useEffect, useState } from "react";

function Types({ final }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
     function getTypes() {
 

       const newArr=[]
      final.map(async (item) => {
        const respType = await fetch(item.move.url);
        const respTypeData = await respType.json();
        const final2 = respTypeData.type.name;
       console.log(final2)
        newArr.push(final2);
     console.log(newArr)
      });
      setTypes(newArr)
    

    }
    getTypes()
  },[final]);

  return (
    <ul className="text-3xl flex gap-6 flex-col items-center">
      <li className="w-[150px]">
        <img src="../src/assets/normal.svg" alt="" />
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}

export default Types;
