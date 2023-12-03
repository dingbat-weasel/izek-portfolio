import { Link, useParams } from "react-router-dom";
import { postData } from "./data/posts";

function PalimpsestNav() {
  let { postId: currentParamId } = useParams();

  const { id: currentId, title: currentTitle } = postData[currentParamId];

  const { id: previousPostId, title: previousTitle } =
    postData[currentId - 1] || {};
  const { id: nextPostId, title: nextTitle } = postData[currentId + 1] || {};

  return (
    <div className="flex items-center justify-center gap-10 border-b-zinc-100 bg-zinc-300 px-20 py-5 ">
      {previousTitle && (
        <Link to={`/palimpsest/post/${previousPostId}`}>
          &lt;- {previousTitle}
        </Link>
      )}
      <div>{currentTitle}</div>
      {nextTitle && (
        <Link to={`/palimpsest/post/${nextPostId}`}>{nextTitle}-&gt;</Link>
      )}
    </div>
  );
}

export default PalimpsestNav;
