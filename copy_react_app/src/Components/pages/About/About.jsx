import Greeter from "../../Greeter/Greeter";
import Header from "../../Header/Header";

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
