import { postData } from "./data/posts";
import Post from "./Post";

function Posts() {
  return (
    <div className="relative mx-40 my-14 h-auto">
      {postData.map((post) => (
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
