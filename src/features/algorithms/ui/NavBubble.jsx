import { Link } from "react-router-dom";

function NavBubble({ navItem }) {
  const navStr = navItem.replace(" ", "_");

  return (
    <Link to={navStr}>
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-zinc-500">
        {navItem}
      </div>
    </Link>
  );
}

export default NavBubble;
