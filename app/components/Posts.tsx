import { Post } from "./posts/Post";

export function Posts() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
