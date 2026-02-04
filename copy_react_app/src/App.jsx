import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Components/pages/About/About";
import Home from "./Components/pages/Home/Home";
import Contact from "./Components/pages/Contacts/Contacts";
import Expenses from "./Components/pages/Expenses/Expenses";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/mycontactinfo">Contact me</Link>
        <br />
        <Link to="/expenses">expenses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mycontactinfo" element={<Contact />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </div>
  );
}

export default App;
