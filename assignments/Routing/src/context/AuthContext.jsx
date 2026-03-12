import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AUTH_STORAGE_KEY = "routing-auth-user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = Boolean(user);

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      return;
    }

    localStorage.removeItem(AUTH_STORAGE_KEY);
  }, [user]);

  const login = (role) => {
    setIsLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeUser = {
          name: "Demo User",
          role,
        };

        setUser(fakeUser);
        setIsLoading(false);

        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
