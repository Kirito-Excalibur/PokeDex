import React, { useEffect, useState } from "react";

function PokeDesc({ pokeno }) {
  const [desc, setDesc] = useState("");

  useEffect(() => {
    async function getDesc() {
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokeno + 1}`
      );
      const respData = resp.json();
      Promise.resolve(respData).then((data) => {
        const arr = data;

        setDesc(arr.flavor_text_entries[1].flavor_text);
      });
    }
    getDesc()
  });

  return (
    <div className="flex  justify-center items-center w-[900px]">
      <p className="bg-white inline-block">{desc}</p>
    </div>
  );
}

export default PokeDesc;
