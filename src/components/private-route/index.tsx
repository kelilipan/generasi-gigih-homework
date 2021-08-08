import { Redirect, Route, RouteProps } from "react-router-dom";
import { useUser } from "../../lib/useUser";
interface PrivateRouteProps extends RouteProps {
  fallbackUrl: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  fallbackUrl = "/",
  ...props
}) => {
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
              pathname: fallbackUrl,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
