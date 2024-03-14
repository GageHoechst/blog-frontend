/* eslint-disable no-undef */
import axios from "axios";
export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params);
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
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
