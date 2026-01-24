import "./App.css";
import Greeter from "./Components/Greeter/Greeter";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <Greeter name="Joseph"/>
      <Greeter name="Colin"/>
    </>
  );
}

export default App;
