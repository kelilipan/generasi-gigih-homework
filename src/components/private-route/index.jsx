import { Redirect, Route } from "react-router-dom";
import { useUser } from "../../lib/useUser";
const PrivateRoute = ({ children, fallbackUrl = "/", ...props }) => {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to={fallbackUrl} />
  );
};

export default PrivateRoute;
