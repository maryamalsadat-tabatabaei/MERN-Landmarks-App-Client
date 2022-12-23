import { useState, useCallback } from "react";
import NavigationRoutes from "./Routes/NavigationRoutes";
import ErrorBoundry from "./shared/UIElements/ErrorBoundry";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  return (
    <ErrorBoundry>
      <AuthContext.Provider value={{ isLoggedIn, login, logout, userId }}>
        <NavigationRoutes />
      </AuthContext.Provider>
    </ErrorBoundry>
  );
}

export default App;
