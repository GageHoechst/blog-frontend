/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };
  return (
    <div id="posts-show">
      <h2>{currentPosts.title}</h2>
      <p>Name: {props.post.name}</p>
      <p>Body: {props.post.body}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.post.name} name="name" type="text" />
        </div>
        Body: <input defaultValue={props.post.body} name="body" type="text" />
        <button type="submit">Update post</button>
      </form>
    </div>
  );
}
