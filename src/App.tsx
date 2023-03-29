import { UserProvider } from "./context/UserContext";
import { ResizeProvider } from "./context/ResizeContext";
import { RoutesMain } from "./routes";

function App() {
  return (
    <UserProvider>
      <ResizeProvider>
        <RoutesMain />
      </ResizeProvider>
    </UserProvider>
  );
}

export default App;
