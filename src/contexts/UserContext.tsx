import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { api } from "../services/api";
import {parseCookies, setCookie, destroyCookie} from 'nookies'
import Router from "next/router";

type User = {
  id: number;
  name: string;
  entries: number;
  email: string;
  joined: Date;
  token: string;
};

type UserContextType = {
  user: User | null;
  login: (userData: User) => void;
  signUp: (userData: User) => void;
  logout: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { 'auth.token': token } = parseCookies();
    if (token) {
      api.post("/verifyToken")
      .then(response => {
          setUser(response.data.user);
        })
        .catch(error => {
          logout();
        });
    }
  }, []);
  
  const login = (userData: User) => {
    setCookie(undefined, 'auth.token', userData.token, {
      maxAge: 60 * 60 * 1, // 1 hour in seconds
      path: '/'
    });
    setUser(userData);
    Router.push("/homepage");
  };
  
  const signUp = (userData: User) => {
    setCookie(undefined, 'auth.token', userData.token, {
      maxAge: 60 * 60 * 1, // 1 hour in seconds
      path: '/'
    });
    setUser(userData);
    Router.push("/homepage");
  };
  
  const logout = async (): Promise<void> => {
    setUser(null);
    destroyCookie(null, 'auth.token');
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