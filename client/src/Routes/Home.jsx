import { Outlet,Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <h1>Auto Growing Plant</h1>
      <nav         style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
        >
          <Link to="/">Home</Link>{ " | "}
          <Link to="/Settings">Settings</Link>
        </nav>
        <Outlet />
    </div>
  );
}