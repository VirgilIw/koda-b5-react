import { Routes, Route } from "react-router";

// import TodoList from "./pages/TodoList";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import FormReview from "./pages/FormReview";
import Minitask7 from "./pages/Minitask7";
import Detail from "./pages/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form-review" element={<FormReview />} />

      <Route path="/character">
        <Route index element={<Minitask7 />} />
        <Route path=":id" element={<Detail />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
