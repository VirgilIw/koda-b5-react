const CardProducts = ({ name, quantity, price, status }) => {
  return (
    <>
      <tr>
        <th>{name}</th>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{status}</td>
      </tr>
    </>
  );
};

export default CardProducts;
