import PageLayout from "./components/PageLayout";

import Home from "./components/Home";
import About from "./components/About";

import Work from "./components/Work";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

function App() {
  return (
    <PageLayout>
      <Home />
      <About />
      <Work />
      {/* <Socials /> */}
      <Contact />
    </PageLayout>
  );
}

export default App;
