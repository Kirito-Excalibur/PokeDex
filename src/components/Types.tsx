import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
function Types({ final }) {
  const [types, setTypes] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function getTypes() {
      const types = final.map(async (item) => {
        const respType = await fetch(item.move.url);
        const respTypeData = await respType.json();
        return respTypeData.type.name;
      });
      setTypes(await Promise.all(types));
      setLoading(false)
    }

    getTypes();
  }, [final]);

  return (
    <div>
      {loading ? (
        <PropagateLoader size={30} color="black" loading={loading} />
      ) : (
        <ul className="text-3xl flex gap-3 flex-col items-center">
          {types.map((type, key) => {
            return (
              <li key={key} className="w-[100px]">
                <img className="w-[100px]" src={`/assets/${type}.svg`} alt="" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Types;
