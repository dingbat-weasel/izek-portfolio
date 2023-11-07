import { Link } from "react-router-dom";

import { leetcode_problems } from "../../../data/leetcode";

function LeetcodeNav() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-10">
      {leetcode_problems.map((item, index) => (
        <Link
          className="rounded-md border border-slate-100 bg-slate-300 p-7"
          to={`/algorithms/leetcode/${item.navigator}`}
          key={index}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default LeetcodeNav;
