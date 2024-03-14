/* eslint-disable no-undef */
export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>{currentPosts.title}</h2>
      <p>name: {currentPosts.name}</p>
      <p>body: {currentPosts.body}</p>
    </div>
  );
}
