import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      {isAuthenticated && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}

      {user?.role === "admin" && (
        <NavLink to="/admin">Admin</NavLink>
      )}

      {!isAuthenticated ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
}