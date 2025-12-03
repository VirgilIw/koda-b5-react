// RickAndMorty.jsx
import React from "react";
import FormSearchRick from "../components/FormSearchRick";
import FilterRickAndMorty from "../components/FilterRickAndMorty";
import ShowRickAndMorty from "../components/ShowRickAndMorty";

const RickAndMorty = () => {
  const [ricks, setRicks] = React.useState([]);
  const [allRicks, setAllRicks] = React.useState([]);
  // tempat simpan semua data

  const url = "https://rickandmortyapi.com/api/character";
  React.useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const datas = await response.json();
        // console.log(datas.results);

        const mapRick = datas.results.map((rick) => {
          return {
            img: rick.image,
            name: rick.name,
            species: rick.species,
            status: rick.status,
          };
        });
        //
        setRicks(mapRick);
        setAllRicks(mapRick);
        // tampilkan semua data
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <header
        onClick={() => {
          setRicks(allRicks);
        }}
        className="flex justify-center py-5 bg-amber-300 mb-5 text-4xl cursor-pointer"
      >
        Rick And Morty
      </header>
      <FilterRickAndMorty allRicks={allRicks} setRicks={setRicks} />
      <FormSearchRick setRicks={setRicks} allRicks={allRicks} />
      <ShowRickAndMorty ricks={ricks} />
    </>
  );
};

export default RickAndMorty;
