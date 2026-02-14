import Footer from "../../Components/Footer/Footer";
import Greeter from "../../Components/Greeter/Greeter";
import Header from "../../Components/Header/Header";

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
