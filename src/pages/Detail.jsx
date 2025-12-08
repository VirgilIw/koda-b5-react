import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const urlParams = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const response = await fetch(urlParams);
      const datas = await response.json();
      console.log(datas);

      setDetail(datas);
    })();
  }, []);
  return (
    <>
      <section className="w-50 text-center mx-auto h-screen">
        <img src={detail.image} alt={detail.name} />
        <p>{detail.name}</p>
        <p>{detail.species}</p>
        <p>{detail.status}</p>
        <p>{id}</p>
      </section>
    </>
  );
};

export default Detail;
