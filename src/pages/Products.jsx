import { useState } from "react";
import FormProducts from "../components/FormProducts";
import ShowTableProducts from "../components/ShowTableProducts";

const Products = () => {
  const [datas, setDatas] = useState([]);

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="text-center text-2xl w-screen pt-2 bg-amber-300">
        Products App
      </header>
      <FormProducts setDatas={setDatas} />
      <ShowTableProducts datas={datas} />
    </div>
  );
};

export default Products;
