import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contacts/Contacts";
import Expenses from "./pages/Expenses/Expenses";
import Poke from "./pages/Poke/Poke";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";
import SinglePokePage from "./Components/Single_Poke/SinglePoke"

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
        <br />
        <Link to="/poke">Pokemon List</Link>
        <br />
        <Link to="/singlepoke">Single Pokemon</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mycontactinfo" element={<Contact />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/poke" element={<Poke />} />
        <Route path="/poke/:id" element={<PokemonDetail />} />
        <Route path="/singlepoke" element={<SinglePokePage />} />
      </Routes>
    </div>
  );
}

export default App;
