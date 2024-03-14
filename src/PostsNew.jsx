export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form method="POST" action="http://localhost:3000/posts.json">
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="Body" type="text" />
        </div>
        <div>
          Image: <input name="Image" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
