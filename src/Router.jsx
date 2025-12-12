import { Routes, Route } from "react-router";

// import TodoList from "./pages/TodoList";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import FormReview from "./pages/FormReview";
import Minitask7 from "./pages/Minitask7";
import Detail from "./pages/Detail";
// import Input from "./components/Input";
import FakeStore from "./components/FakeStore";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import FormPerokok from "./components/FormPerokok";
import FormProducts from "./components/FormProducts";
import TableProduct from "./components/TableProduct";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form-review" element={<FormReview />} />
      <Route path="/form-perokok" element={<FormPerokok />} />
      <Route path="/form-product" element={<FormProducts />} />
      <Route path="/table-product" element={<TableProduct />} />

      <Route path="/character">
        <Route index element={<Minitask7 />} />
        <Route path=":id" element={<Detail />} />
      </Route>
      <Route path="/usefetch" element={<FakeStore />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login">
        <Route index element={<Login />} />
        <Route path=":id">
          <Route index element={<Logout />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
