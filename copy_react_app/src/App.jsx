import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/pages/About/About";
import Home from "./Components/pages/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
