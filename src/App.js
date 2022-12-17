import { useState, useCallback } from "react";
import NavigationRoutes from "./Routes/NavigationRoutes";
import ErrorBoundry from "./shared/UIElements/ErrorBoundry";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <ErrorBoundry>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <NavigationRoutes />
      </AuthContext.Provider>
    </ErrorBoundry>
  );
}

export default App;
