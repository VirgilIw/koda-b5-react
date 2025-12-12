import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

const Minitask7 = () => {
  const [dataRick, setDataRick] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(""); // <-- SEARCH BAR

  const [searchParams, setSearchParams] = useSearchParams();
  const urlRick = "https://rickandmortyapi.com/api/character";

  const species = searchParams.get("species") || "";

  useEffect(() => {
    (async function () {
      const response = await fetch(urlRick + `/?species=${species}`);
      const datas = await response.json();

      setDataRick(datas.results || []);
    })();
  }, [species]);

  const handleSelect = (e) => {
    const data = e.target.value;

    // update controlled input
    setValue(data);

    // update queryParams
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("species", data);
      return params;
    });
  };

  const handleReset = () => {
    setDataRick([]);
    setSearchParams({});
    setValue("");
    setSearch(""); // <-- reset search
  };

  // FILTER SEARCH (tidak fetch ulang, hanya filter array)
  const filteredData = dataRick.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section>
        {/* FILTER + SEARCH */}
        <div className="flex justify-center py-4 gap-4">
          {/* FILTER SPECIES */}
          <select className="mr-2" value={value} onChange={handleSelect}>
            <option value="0" disabled>
              Chose Species:
            </option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="unknown">Unknown</option>
          </select>

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search character..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // OnChange → setState → filter ulang → render ulang
            className="border px-3 py-1 rounded"
          />

          <button onClick={handleReset} className="bg-red-400 px-4 rounded">
            reset
          </button>
        </div>

        {/* LIST CHARACTERS (HASIL FILTER + SEARCH) */}
        <div className="grid grid-cols-4 gap-4">
          {filteredData.map((item) => (
            <Link to={`/character/${item.id}`} key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="rounded-md cursor-pointer"
              />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Minitask7;
