import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import Carts from "./pages/Carts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
    </div>
  );
}

export default App;
