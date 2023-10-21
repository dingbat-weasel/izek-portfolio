import About from "./components/About";
import CVPageLayout from "./CVPageLayout";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";

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
