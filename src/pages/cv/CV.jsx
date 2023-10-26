import About from "./About";
import CVPageLayout from "./CVPageLayout";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";

function CV() {
  return (
    <CVPageLayout>
      <Home />
      <About />
      <Work />
      {/* <Socials /> */}
      <Contact />
    </CVPageLayout>
  );
}

export default CV;
