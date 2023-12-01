function Post({ title, createdAt, content }) {
  return (
    <div>
      <header>{title}</header>
      <div>{createdAt}</div>
      <main>{content}</main>
    </div>
  );
}

export default Post;
