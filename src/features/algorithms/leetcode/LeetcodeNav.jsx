import { Link } from "react-router-dom";

import { leetcode_problems } from "../data/leetcode";
import NavLayout from "../ui/NavLayout";
import Header from "../../../ui/Header";

function LeetcodeNav() {
  const leetcodeNavArr = ["Two Sum"];

  return (
    <div>
      <Header back />
      <NavLayout navArr={leetcodeNavArr} />
    </div>
  );
}

export default LeetcodeNav;
