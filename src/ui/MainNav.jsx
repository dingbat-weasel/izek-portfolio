import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const navItems = [
  {
    title: "chapter1",
    link: "/sandbox/chapter1",
  },
  {
    title: "chapter2",
    items: [
      { title: "item1", link: "/sandbox/chapter2/item1" },
      { title: "item2", link: "/sandbox/chapter2/item2" },
      { title: "item3", link: "/sandbox/chapter2/item3" },
    ],
  },
  {
    title: "chapter3",
    items: [
      { title: "item1", link: "/sandbox/chapter3/item1" },
      { title: "item2", link: "/sandbox/chapter3/item2" },
      { title: "item3", link: "/sandbox/chapter3/item3" },
    ],
  },
];

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {navItems.map((item, index) => (
          <NavItem title={item.title} items={item.items} key={index} />
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
