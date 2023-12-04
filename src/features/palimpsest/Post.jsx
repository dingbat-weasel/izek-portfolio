import { useParams } from "react-router-dom";

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
      className={`${quality} absolute transition-opacity delay-150 duration-500 ease-in`}
    >
      <header className="pt-4 text-4xl">{title}</header>
      <div className="px-6 py-1 text-end">{createdAt}</div>
      <main className="py-4">{content}</main>
    </div>
  );
}

export default Post;
