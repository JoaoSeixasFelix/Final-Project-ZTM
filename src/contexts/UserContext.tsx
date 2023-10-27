import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

type User = {
  id: number;
  username: string;
  entries: number;
  email: string;
  joined: Date;
};

type UserContextType = {
  user: User | null;
  login: (userData: User) => void;
  signUp: (userData: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = Cookies.get("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData));
  };

  const signUp = (userData: User) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <UserContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
