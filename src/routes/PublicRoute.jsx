import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getToken } from "../redux/selectors";

const PublicRoute = ({ children }) => {
  const token = useSelector(getToken);

  return !token ? children : <Navigate to="/deals" />;
};

export default PublicRoute;
