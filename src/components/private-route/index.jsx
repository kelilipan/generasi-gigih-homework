import { Redirect, Route } from "react-router-dom";
import { useUser } from "../../lib/useUser";
const PrivateRoute = ({ children, fallbackUrl = "/", ...props }) => {
  const { isAuthenticated } = useUser();
  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
