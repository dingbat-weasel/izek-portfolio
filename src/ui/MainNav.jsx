import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const navItems = [
  {
    title: "blog",
    link: "/palimpsest",
  },
  {
    title: "knight's options",
    link: "/knights_options",
  },
  {
    title: "algorithms",
    link: "/algorithms",
  },
  {
    title: "cv",
    link: "/cv",
  },
];

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {navItems.map((item, index) => (
          <NavItem title={item.title} link={item.link} key={index} />
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
