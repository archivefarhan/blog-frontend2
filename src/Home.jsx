import { PostIndex } from "./PostsIndex";
import { useState } from "react";

export function Home() {
  const [posts, setPosts] = useState([
    { id: 1, title: "text", body: "test text test text test text test text test text ", image: "image_url" },
    { id: 2, title: "text", body: "test text test text test text test text test text ", image: "image_url" },
    { id: 3, title: "text", body: "test text test text test text test text test text ", image: "image_url" },
  ]);
  return (
    <div>
      <h1>Welcome to React!</h1>
      <PostIndex posts={posts} />
    </div>
  );
}
