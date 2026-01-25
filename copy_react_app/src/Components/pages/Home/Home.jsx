import Footer from "../../Footer/Footer";
import Greeter from "../../Greeter/Greeter";
import Header from "../../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Greeter name="Colin" />
      <h2>You are on the home page</h2>
      <Footer />
    </div>
  );
}

export default Home;
