import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-200">
      <ul className="flex h-20 text-lg font-semibold text-zinc-800 sm:items-center sm:justify-around ">
        <li>
          <RouterLink to="/">Isaac Perk</RouterLink>
        </li>
        <li>
          Currently <br /> Open to Work
        </li>
        <li>
          Based in Seattle <br /> United States
        </li>

        <div className="flex gap-2">
          <li className="hover:cursor-pointer hover:text-zinc-500">
            <Link
              to="Work"
              smooth={true}
              duration={500}
              className="hover:text-zinc-600"
            >
              Work,
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:text-zinc-500">
            <Link to="About" smooth={true} duration={500}>
              About,
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:text-zinc-500">
            <Link to="Contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
