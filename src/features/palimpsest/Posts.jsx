import Post from "./Post";
import { postData } from "./data/posts";

function Posts() {
  const { id, title, createdAt, content } = postData[0];

  return <Post title={title} createdAt={createdAt} content={content} />;
}

export default Posts;
