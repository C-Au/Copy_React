import Greeter from "../../Greeter/Greeter";
import Header from "../../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Greeter name="Alex" />
      <h2>You are on the home page</h2>
    </div>
  );
}

export default Home;
