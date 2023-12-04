import { useParams } from "react-router-dom";
import { postData } from "./data/posts";

function Post({ id, title, createdAt, content }) {
  let { postId: currentParamId } = useParams();

  let quality;

  if (id > currentParamId) {
    quality = "opacity-0";
  } else if (id < currentParamId) {
    quality = "opacity-10 text-emerald-900";
  }

  return (
    <div
      className={`absolute ${quality} transition-opacity delay-150 duration-500 ease-in`}
    >
      <header>{title}</header>
      <div>{createdAt}</div>
      <main>{content}</main>
    </div>
  );
}

export default Post;
