import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // Show loading while auth state is resolving
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // If user is not authenticated → redirect to login
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // If authenticated → render child routes
  return <Outlet />;
}
