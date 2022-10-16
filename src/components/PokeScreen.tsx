import React, { useEffect, useState } from "react";

function PokeScreen({pokename}) {
 
  const [image, setImage] = useState("");
  useEffect(() => {
    async function getImage() {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
      const respData = resp.json();
      Promise.resolve(respData).then((data) => {
      
        setImage(data.sprites.other.home.front_default);
      });
    }



    getImage();
  });

  return (
    <div className="grid bg-white ml-10 relative mt-3 place-content-center border border-black w-[200px] h-[200px]">
      <img src={image} alt="" />
    </div>
  );
}

export default PokeScreen;
