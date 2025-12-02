import CardRow from "./CardRow";

const ShowTableProducts = (props) => {
  const { datas } = props;
  return (
    <table className="border-2 border-black gap-5">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, idx) => {
          return (
            <CardRow
              key={idx}
              name={data.name}
              price={data.price}
              quantity={data.quantity}
              status={data.status}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ShowTableProducts;
