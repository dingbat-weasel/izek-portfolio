import About from "../features/cv/About";
import CVPageLayout from "../features/cv/CVPageLayout";
import Contact from "../features/cv/Contact";
import Home from "../features/cv/Home";
import Work from "../features/cv/Work";

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
