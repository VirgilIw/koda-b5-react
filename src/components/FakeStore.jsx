import useFetch from "../hooks/useFetch";

const FakeStore = () => {
  const url = "https://fakestoreapi.com/products";
  const { data, loading, error, setUrl } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  //
  const urlToogle = () => {
    setUrl((prev) => {
      return prev === url ? "https://rickandmortyapi.com/api/character" : url;
    });
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <button
        onClick={urlToogle}
        className="my-4 rounded bg-black px-1 py-2 text-white"
      >
        ganti fetching
      </button>
      {data.map((item) => (
        <section key={item.id}>
          <img src={item.image} alt={item.category || item.name} />
          <p>{item.title || item.name}</p>
          <p>{item.status}</p>
        </section>
      ))}
    </section>
  );
};

export default FakeStore;
