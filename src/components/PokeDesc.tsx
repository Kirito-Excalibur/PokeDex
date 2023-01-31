import React, { useEffect, useState } from "react";

function PokeDesc({ pokename }) {
  const [desc, setDesc] = useState("");
  const [pokeType, setPokeType] = useState("");
  const [pokeType2, setPokeType2] = useState("");
  const [present, setPresent] = useState(false);
  useEffect(() => {
    async function getDesc() {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokename}`
      );
      const respData = await resp.json();
      setDesc(respData.flavor_text_entries[1].flavor_text);

      const resp1 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokename}`
      );
      const respData2 = await resp1.json();
      setPokeType(respData2.types[0].type.name);

      try {
        setPokeType2(respData2.types[1].type.name);
        setPresent(true);
      } catch (error) {
        setPresent(false);
      }
    }

    getDesc();
  }, [pokename]);

  return (
    <div className="flex flex-col justify-center gap-4 items-center w-[800px]">
      <p className="bg-white rounded-xl p-4 text-xl inline-block">{desc}</p>

      <div className="flex">
        <img className="w-[80px]" src={`/assets/${pokeType}.svg`} alt="" />
        {present && (
          <img className="w-[80px]" src={`/assets/${pokeType2}.svg`} alt="" />
        )}
      </div>
    </div>
  );
}

export default PokeDesc;
