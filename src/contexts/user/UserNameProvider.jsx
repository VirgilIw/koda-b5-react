import { useEffect, useReducer } from "react";
import { userNameContext as UserNameContext } from "./userNameContext";

const UserNameProvider = ({ children }) => {
  const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
  };

  // ACTION BERBENTUK OBJECT
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case "LOGIN_USER":
        return { ...prevState, user: action.payload };
      case "LOGOUT_USER":
        return { ...prevState, user: null };

      case "EDIT_PROFILE":
        return {
          ...prevState,
          user: { ...prevState.user, ...action.payload },
        };

      default:
        return prevState;
    }
  }, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <UserNameContext.Provider value={{ state, dispatch }}>
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameProvider;
