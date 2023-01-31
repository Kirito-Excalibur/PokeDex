import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
function App() {
  const [loading, setLoading] = useState(false);
  const [keyval, setKey] = useState(true);
  const [imgdata, setImgdata] = useState([]);
  const [maxVal, setmaxVal] = useState(40);
  const [searchVal, setsearchVal] = useState("");
  useEffect(() => {
    setLoading(true);
    async function getArray() {
      console.log(searchVal);
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${maxVal}`
      );
      const respData = await resp.json();
      const arr = respData.results;

      const imges = arr.map(async (imgd) => {
        const resp1 = await fetch(imgd.url);
        const resp1Data = await resp1.json();

        return resp1Data;
      });
      setImgdata(await Promise.all(imges));
      setLoading(false);
    }

    getArray();
  }, [maxVal, searchVal]);
  setInterval(() => setKey(!keyval), 100);

  console.log(imgdata);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="mx-auto flex flex-col items-center relative z-10 justify-center p-5 bg-red-600   ">
      <h1 className="text-center text-3xl pb-4">PokéDex</h1>
      <input
        type="text"
        placeholder="Search..."
        className="pl-2"
        onChange={(e) => {
          setsearchVal(e.target.value);
          setmaxVal(647);
        }}
      />
      <div className="flex flex-wrap mt-5 gap-4  justify-center items-center">
        {imgdata
          .filter((val) => {
            if (searchVal == "") {
              return val;
            } else if (String(val.name).includes(searchVal)) {
              return val;
            }
          })
          .map((name, key) => {
            return (
              <div className="flex flex-col justify-center items-center">
                <Link key={key} to={`pokemon/${name.id}`}>
                  <h1>{name.id}</h1>

                  <img
                    loading="eager"
                    className="w-[150px] h-[150px] rounded-xl bg-white border border-green-500"
                    src={name.sprites.front_default}
                  />
                </Link>
                <h1 className="text-2xl">{capitalizeFirstLetter(name.name)}</h1>
              </div>
            );
          })}
      </div>

      <button className="mt-5" onClick={() => setmaxVal(maxVal + 20)}>
        Show More +20
      </button>
      <button onClick={() => setmaxVal(647)}>Show All</button>
    </div>
  );
}

export default App;
