import { BrowserRouter as Router } from "react-router-dom";
import NavigationRoutes from "./Routes/NavigationRoutes";
import ErrorBoundry from "./shared/UIElements/ErrorBoundry";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

function App() {
  const { login, logout, token, userId } = useAuth();

  return (
    <Router>
      <ErrorBoundry>
        <AuthContext.Provider
          value={{ isLoggedIn: !!token, login, logout, userId, token }}
        >
          <NavigationRoutes />
        </AuthContext.Provider>
      </ErrorBoundry>
    </Router>
  );
}

export default App;
