/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input className="form-control" type="text" />
        </div>
        <div>
          Body: <input className="form-control" type="text" />
        </div>
        <div>
          Image: <input className="form-control" type="text" />
        </div>
        <button className="btn btn-outline-success" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}
