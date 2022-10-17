import React from "react";

function PokeDesc({ desc }) {
  return (
    <div className="flex  justify-center items-center w-[900px]">
      <p className="bg-white inline-block">
  {desc}
      </p>
    </div>
  );
}

export default PokeDesc;
