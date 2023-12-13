import Header from "../ui/Header";
import NavLayout from "../features/algorithms/ui/NavLayout";
import Explainer from "../features/algorithms/ui/Explainer";

function Algorithms() {
  const navArr = ["leetcode"];
  const explainer = [
    "This section is in constant flux. It begins simply as a place for me to work out leetcode problems in a more abstract setting. These aren't meant as a resource to study from; nothing here is perfected or maximally efficient. It's a playground, a hope that by exploring a solution in greater depth I add to my own learning.",
  ];

  return (
    <>
      <Header />
      <NavLayout navArr={navArr} />
      <Explainer arr={explainer} />
    </>
  );
}

export default Algorithms;
