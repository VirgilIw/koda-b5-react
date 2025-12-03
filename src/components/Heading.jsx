import { Link } from "react-router";

function Heading({ title = "Home" }) {
  return (
    <>
      <header className="flex justify-between px-4 py-5 bg-amber-400">
        <h1>{title}</h1>
        <ul className="list-none flex gap-2 ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>{" "}
          <li>
            <Link to={"/form-review"}>Form Review</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Heading;
