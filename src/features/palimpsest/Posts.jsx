import { useParams } from "react-router-dom";
import Post from "./Post";
import { postData } from "./data/posts";

function Posts() {
  let { postId } = useParams();
  // const { title, createdAt, content } = postData[postId];

  return (
    <div className="relative mx-40 my-14 h-auto">
      {postData.map((post, i) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          createdAt={post.createdAt}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default Posts;
