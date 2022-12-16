import NavigationRoutes from "./Routes/NavigationRoutes";
import ErrorBoundry from "./shared/UIElements/ErrorBoundry";

function App() {
  return (
    <ErrorBoundry>
      <NavigationRoutes />
    </ErrorBoundry>
  );
}

export default App;
