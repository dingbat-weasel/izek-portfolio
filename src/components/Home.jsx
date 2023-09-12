import burge_crowning from "/assets/burge_crowning.jpg";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="Home"
      className="mx-auto flex h-screen max-w-[1000px] flex-col justify-around px-4 sm:justify-between"
    >
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="flex justify-center text-center sm:justify-start sm:text-left">
        <h1 className="px-4 py-3 text-6xl font-semibold text-zinc-900 md:text-8xl">
          Full Stack <br /> Developer
        </h1>
      </div>
      <div className="flex justify-center ">
        <img
          src={burge_crowning}
          alt="subtle cover image"
          className="border border-zinc-600"
          width={500}
        />
      </div>
      <div className="flex justify-center sm:justify-end ">
        <h2 className="px-4 py-3 text-6xl font-semibold text-zinc-900 md:text-8xl">
          Isaac Perk
        </h2>
      </div>
      <div className="hidden px-4 py-3 sm:flex">
        <Link
          to="About"
          smooth={true}
          duration={500}
          className="hover:cursor-pointer hover:text-zinc-600"
        >
          {/* Would be nice if this transitioned to up-arrow after scrolling far enough and went to page-top */}
          <FaArrowDown className="h-24" size={"6rem"} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
