import NavItem from "./NavItem";
import { postData } from "../features/palimpsest/data/posts";

const navItems = [
  {
    title: "blog",
    link: `/palimpsest/post/${postData.at(-1).id}`,
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
