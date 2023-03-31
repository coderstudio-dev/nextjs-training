import { createContext, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logOut: () => void;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const defaultValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const login = () => setAuthenticated(true);
  const logOut = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
