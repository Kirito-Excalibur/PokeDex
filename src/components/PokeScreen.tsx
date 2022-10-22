import React, { useEffect, useState } from "react";
function PokeScreen({ pokename }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    async function getImage() {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
    const respData= await resp.json()
    setImage(respData.sprites.other.home.front_default);
   
   
    }

    getImage();
  },[pokename]);

  return (
    <div className=" bg-white flex h-[200px] rounded-xl justify-center items-center border border-black  ">
      <img src={image} className="   " alt="" />
    </div>
  );
}

export default PokeScreen;
