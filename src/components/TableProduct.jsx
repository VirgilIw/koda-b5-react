import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import {
  deleteProductThunk,
  editProductThunk,
} from "../redux/slices/product.slice";
import { useState } from "react";

const TableProducts = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // state untuk inline editing
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 py-12">
      {/* TITLE */}
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">
        Product Table
      </h1>

      {/* BACK BUTTOM */}
      <Link
        to="/form-product"
        className="mb-6 rounded-md bg-gray-800 px-5 py-2 font-medium text-white shadow transition hover:bg-black"
      >
        ← Back to Home
      </Link>

      {/* TABLE */}
      <table className="w-3/4 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Product Name</th>
            <th className="px-4 py-3 text-left">Quantity</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Delete</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="bg-gray-50 py-6 text-center text-gray-500 italic"
              >
                No products added yet.
              </td>
            </tr>
          ) : (
            products.map((item, idx) => (
              <tr
                key={item.id}
                className="border-b transition hover:bg-gray-100"
              >
                {/* NUMBER */}
                <td className="px-4 py-3">{idx + 1}</td>

                {/* PRODUCT NAME (INLINE EDIT) */}
                <td
                  className="cursor-pointer px-4 py-3"
                  onClick={() => {
                    setEditingId(item.id);
                    setEditingValue(item.nameProduct);
                  }}
                >
                  {editingId === item.id ? (
                    <input
                      autoFocus // agar bisa di klik lagi
                      value={editingValue}
                      onChange={(e) => setEditingValue(e.target.value)}
                      onBlur={() => {
                        dispatch(
                          editProductThunk({
                            ...item,
                            nameProduct: editingValue,
                          }),
                        );
                        setEditingId(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(
                            editProductThunk({
                              ...item,
                              nameProduct: editingValue,
                            }),
                          );
                          setEditingId(null);
                        }
                      }}
                      className="w-full rounded border px-2 py-1"
                    />
                  ) : (
                    <span className="text-blue-700 hover:underline">
                      {item.nameProduct}
                    </span>
                  )}
                </td>

                {/* QUANTITY */}
                <td className="px-4 py-3">{item.quantity}</td>

                {/* PRICE */}
                <td className="px-4 py-3">Rp {item.productPrice}</td>

                {/* STATUS */}
                <td className="px-4 py-3 capitalize">{item.status}</td>

                {/* DELETE BUTTON */}
                <td>
                  <button
                    className="flex w-full cursor-pointer items-center justify-center pt-4"
                    onClick={() => dispatch(deleteProductThunk(item.id))}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
