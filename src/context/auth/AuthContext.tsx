import { createContext, useCallback, useMemo, useState } from 'react';

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

  const login = useCallback(() => setAuthenticated(true), []);
  const logOut = useCallback(() => setAuthenticated(false), []);

  const fireBaseProviderValue = useMemo(
    () => ({ authenticated, login, logOut }),
    [authenticated, login, logOut]
  );

  return (
    <AuthContext.Provider value={fireBaseProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
