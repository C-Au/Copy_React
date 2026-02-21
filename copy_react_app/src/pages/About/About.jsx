import Greeter from "../../Components/Greeter/Greeter";
import Header from "../../Components/Header/Header";

function About() {
  return (
    <div>
      <Header />
      <Greeter name="Colin's page" />
      <h2>This is the ABOUT page</h2>
    </div>
  );
}

export default About;
