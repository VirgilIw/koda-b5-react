import { useEffect, useState } from "react";
import { Link } from "react-router";

const Minitask7 = () => {
  const [dataRick, setDataRick] = useState([]);
  const urlRick = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    (async function () {
      const response = await fetch(urlRick);
      const datas = await response.json();

      const output = datas.results.map((item) => {
        return item;
      });
      console.log(output);
      setDataRick(output);
    })();
  }, []);

  const handleReset = () => {
    setDataRick("");
  };
  return (
    <>
      <section>
        <div className="flex justify-center py-4">
          <select className="mr-2">
            <option value="0" selected disabled>
              Chose Status:
            </option>
            <option value="alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <button onClick={handleReset} className="bg-red-400 px-4 rounded">
            reset
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {dataRick.map((item) => {
            return (
              <Link to={`/character/${item.id}`} key={item.id}>
                <img src={item.image} alt={item.name} className="rounded-md" />
                <p>{item.name}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Minitask7;
