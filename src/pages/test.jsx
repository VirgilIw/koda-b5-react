import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Minitask7 = () => {
  const [dataRick, setDataRick] = useState([]);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status") || "";
  const urlRick = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    (async function () {
      // fetch langsung + tambah status
      const response = await fetch(urlRick + `/?status=${status}`);
      const datas = await response.json();

      setDataRick(datas.results || []);
    })();
  }, [status]); // fetch ulang kalau status berubah

  const handleSelect = (e) => {
    const data = e.target.value;

    setValue(data); // controlled input

    setSearchParams({ status: data }); // update query param
  };

  const handleReset = () => {
    setValue("");
    setSearchParams({});
    setDataRick([]);
  };

  return (
    <>
      <section>
        <div className="flex justify-center py-4">
          <select className="mr-2" value={value} onChange={handleSelect}>
            <option value="">Choose Status:</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>

          <button onClick={handleReset} className="rounded bg-red-400 px-4">
            reset
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {dataRick.map((item) => (
            <Link to={`/character/${item.id}`} key={item.id}>
              <img src={item.image} alt={item.name} className="rounded-md" />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Minitask7;
