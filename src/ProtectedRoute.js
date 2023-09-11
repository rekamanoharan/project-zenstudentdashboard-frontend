import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ACTION_TYPES, AuthContext } from "./AuthContext";
import { axiosInstance } from "./apiUtils";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { state, dispatch } = useContext(AuthContext);
  debugger;
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get("/test/user");
      dispatch({
        type: ACTION_TYPES.SET_USER_DETAILS,
        payload: {
          user: response.data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (!state.isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
