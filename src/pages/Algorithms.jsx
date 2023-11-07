import { Link } from "react-router-dom";

const navItems = ["leetcode", "sort", "search", "example", "example2"];

function Algorithms() {
  return (
    <div className="grid grid-cols-4 gap-3 ">
      {navItems.map((item, index) => (
        <Link
          className="rounded-lg border border-slate-800 bg-slate-300 px-6 py-3 text-center"
          to={`${item}`}
          key={index}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default Algorithms;
