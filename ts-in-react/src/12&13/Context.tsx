import { createContext, useState } from "react";

type AuthContextTypes = {
  userID: string | number | null;
  userName: string | null;
  password: string | null;
  userToken: string | null;
  login: (
    id: number | string,
    name: string,
    password: string,
    token: string
  ) => void;
  logout: () => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextTypes>(
  {} as AuthContextTypes
);

const AuthContextProvider = ({
  children,
}: AuthContextProviderProps): JSX.Element => {
  const [userID, setUserID] = useState<string | number | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);
  const login = (
    id: number | string,
    name: string,
    password: string,
    token: string
  ) => {
    setUserID(id);
    setUserName(name);
    setPassword(password);
    setUserToken(token);
  };
  const logout = () => {
    setUserID(null);
    setUserName(null);
    setPassword(null);
    setUserToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ userID, userName, password, userToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
