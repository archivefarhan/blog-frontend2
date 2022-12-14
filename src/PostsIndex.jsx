export function PostIndex(props) {
  return (
    <div>
      <h1> All Posts</h1>
      {props.posts.map((post) => (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.image}</p>
        </div>
      ))}
    </div>
  );
}
