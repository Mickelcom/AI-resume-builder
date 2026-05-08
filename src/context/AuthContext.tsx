"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  name: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (
    name: string,
    token: string
  ) => void;
  logout: () => void;
}

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    const name =
      localStorage.getItem("name");

    if (token && name) {

      setUser({
        token,
        name,
      });
    }

    setLoading(false);

  }, []);

  const login = (
    name: string,
    token: string
  ) => {

    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "name",
      name
    );

    setUser({
      name,
      token,
    });
  };

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("name");

    setUser(null);

    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
}

export function useAuth() {

  const context =
    useContext(AuthContext);

  if (!context) {

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}