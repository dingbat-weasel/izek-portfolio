import { useLoaderData } from "react-router-dom";

function Post() {
  const post = useLoaderData();
  return <div>{post}</div>;
}

export async function loader() {
  const post = "sample post";
  return post;
}
export default Post;
