import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { userNameContext } from "../contexts/user/userNameContext";

const Logout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(userNameContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
    // localStorage.removeItem("user")
    navigate("/login", { replace: true });
  };

  return (
    <>
      <p>{atob(id)}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
