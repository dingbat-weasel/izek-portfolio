import { NavLink } from "react-router-dom";

function NavItem({ title, link }) {
  return (
    <li>
      <NavLink to={link}>
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
