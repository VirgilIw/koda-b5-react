const FormProducts = ({ setDatas }) => {
  const handleProductForm = (e) => {
    e.preventDefault();

    const newProducts = {};
    //
    Object.assign(newProducts, { name: e.target["product-name"].value });
    Object.assign(newProducts, {
      quantity: e.target["quantity-product"].value,
    });
    //
    Object.assign(newProducts, { price: e.target["products-price"].value });
    Object.assign(newProducts, { status: e.target.status.value });
    //
    setDatas((datas) => {
      return [...datas, newProducts];
    });
    //
    e.target["product-name"].value = "";
    e.target["quantity-product"].value = "";
    e.target["products-price"].value = "";
    e.target.status.value = "";
  };

  return (
    <>
      <form onSubmit={handleProductForm} className="flex flex-col w-96">
        <label htmlFor="name-product">Product Name</label>
        <input
          type="text"
          name="product-name"
          id="name-product"
          className="border-2 border-black"
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity-product"
          id="quantity"
          className="border-2 border-black"
        />
        <label htmlFor="price-products">Price</label>
        <input
          type="number"
          name="products-price"
          id="price-products"
          className="border-2 border-black"
        />
        <label htmlFor="status">Status:</label>
        <select name="status" id="status">
          <option value="available">Available</option>
          <option value="not-available">Not Available</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormProducts;
