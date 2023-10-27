import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavItem({ title, link, items = [] }) {
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  if (!isExpandable)
    return (
      <li>
        <NavLink to={link}>
          <span>{title}</span>
        </NavLink>
      </li>
    );

  return (
    <li>
      <NavLink to={link}>
        <span onClick={handleClick}>{title}</span>

        {open &&
          items.map((item, index) => (
            <NavItem title={item.title} link={item.link} key={index} />
          ))}
      </NavLink>
    </li>
  );
}

export default NavItem;
