import { useParams } from "react-router-dom";
import Post from "./Post";
import { postData } from "./data/posts";

function Posts() {
  let { postId } = useParams();
  const { title, createdAt, content } = postData[postId];

  return <Post title={title} createdAt={createdAt} content={content} />;
}

export default Posts;
