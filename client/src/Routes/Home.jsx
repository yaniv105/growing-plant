import { Outlet } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
    <main>
    <h2>Home</h2>
    <div className="inline">

    </div>
    <div className="inline">
      
      </div>
      <div className="details">

      </div>
    <Outlet />
    </main>
  );
}