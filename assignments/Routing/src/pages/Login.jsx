import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = async (role) => {
  await login(role);
  navigate(from, { replace: true });
};

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={() => handleLogin("user")}>
        Login as User
      </button>

      <button onClick={() => handleLogin("admin")}>
        Login as Admin
      </button>
    </div>
  );
}