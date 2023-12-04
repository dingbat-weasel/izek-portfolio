import { Link } from "react-router-dom";

const navItems = ["leetcode", "sort", "search", "example", "example2"];

function Algorithms() {
  return (
    <div className="grid grid-cols-4 gap-3 ">
      <Link
        className="rounded-lg border border-slate-800 bg-slate-300 px-6 py-3 text-center"
        to={"leetcode"}
      >
        leetcode
      </Link>
    </div>
  );
}

export default Algorithms;
