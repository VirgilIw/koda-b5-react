import { Link } from "react-router";
import Heading from "../components/Heading";

const NotFound = () => {
  return (
    <>
      <Heading title={"Not found"} />
      <section className="flex flex-col justify-center items-center h-[90vh]">
        <p className=" text-red-400 text-5xl font-bold">
          404: Pages Not Found!
        </p>
        <Link to={"/"} className="mt-5">
          Back To home
        </Link>
      </section>
    </>
  );
};

export default NotFound;
