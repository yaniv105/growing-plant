import { Outlet,Link } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <h1>Auto Growing Plant</h1>
      <nav         style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
        >
          <Link to="/home">Home</Link>{ " | "}
          <Link to="/Settings">Settings</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
