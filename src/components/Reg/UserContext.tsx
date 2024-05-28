import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface User {
  username: string;
  email: string;
  token: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    return token && username && email ? { token, username, email } : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('username', user.username);
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
    }
  }, [user]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
