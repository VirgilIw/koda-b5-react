import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../redux/slices/product.slice";
import { Link } from "react-router";

const FormProducts = () => {
  const [form, setForm] = useState({
    nameProduct: "",
    quantity: 0,
    productPrice: 0,
    status: "available",
  });

  const dispatch = useDispatch();
  //
  const isLoading = useSelector(
    (state) => state.product.getDataStatus.product.isLoading,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getProductsThunk(form));

    setForm({
      nameProduct: "",
      quantity: 0,
      productPrice: 0,
      status: "available",
    });
  };

  return (
    <div className="flex min-h-screen w-full justify-center bg-gray-50 py-12">
      <div className="flex flex-col items-center gap-6">
        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="flex w-96 flex-col gap-4 rounded-lg border bg-white p-8 shadow-lg"
        >
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            Add New Product
          </h2>

          {/* NAME */}
          <div className="flex flex-col gap-1">
            <label htmlFor="nameProduct" className="text-sm font-medium">
              Product Name
            </label>
            <input
              type="text"
              name="nameProduct"
              id="nameProduct"
              value={form.nameProduct}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter product name"
            />
          </div>

          {/* QUANTITY */}
          <div className="flex flex-col gap-1">
            <label htmlFor="quantity" className="text-sm font-medium">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={form.quantity}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="0"
            />
          </div>

          {/* PRICE */}
          <div className="flex flex-col gap-1">
            <label htmlFor="productPrice" className="text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              name="productPrice"
              id="productPrice"
              value={form.productPrice}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="0"
            />
          </div>

          {/* STATUS */}
          <div className="flex flex-col gap-1">
            <label htmlFor="status" className="text-sm font-medium">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={form.status}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className={`cursor-pointer rounded-md py-2 font-medium text-white transition hover:bg-blue-700 ${isLoading ? "bg-slate-500" : "bg-blue-600"}`}
          >
            Submit
          </button>
        </form>

        {/* LINK TO TABLE */}
        <Link
          to="/table-product"
          className="rounded-md bg-gray-800 px-5 py-2 font-medium text-white shadow transition hover:bg-black"
        >
          View Product Table
        </Link>
      </div>
    </div>
  );
};

export default FormProducts;
