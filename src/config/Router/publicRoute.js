import { Navigate } from "react-router-dom";
const PublicRoute = ({ user, redirectPath = "/profile", children }) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default PublicRoute;
