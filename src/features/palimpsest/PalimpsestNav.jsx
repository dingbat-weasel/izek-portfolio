import { useParams } from "react-router-dom";
import { postData } from "./data/posts";

function PalimpsestNav() {
  let { postId: currentPostId } = useParams();
  const { title: currentTitle, createdAt: currentCreatedAt } =
    postData[currentPostId];
  const { title: previousTitle, createdAt: previousCreatedAt } =
    postData[currentPostId - 1] || {};
  const { title: nextTitle, createdAt: nextCreatedAt } =
    postData[currentPostId + 1] || {};

  const isPreviousPostAvailable = function () {
    if (postData[currentPostId] - 1) return true;
    return false;
  };

  const isNextPostAvailable = function () {
    if (postData[currentPostId] + 1) return true;
    return false;
  };

  return (
    <div className="flex items-center justify-center gap-10 border-b-zinc-100 bg-zinc-300 px-20 py-5 ">
      {isPreviousPostAvailable && <div>&lt;- {previousTitle}</div>}
      <div>
        {currentTitle}, {currentCreatedAt}
      </div>
      {isNextPostAvailable && <div>{nextTitle}-&gt;</div>}
    </div>
  );
}

export default PalimpsestNav;
