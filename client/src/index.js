import { render } from "react-dom";
import App from "./App";
import Settings from "./Routes/settings";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Routes/Home";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="Home" element={<Home />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);