/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>Monsters</h1>
      <h2>The name is {props.name}</h2>
      <div className="cards">
        {props.posts.map((post) => (
          <>
            <div key={post.id} className="Post card">
              <h2>{post.title}</h2>
              <img src={post.image_url} alt="" />
              <p>body:{post.body}</p>
              <button onClick={() => props.onShowPost(post)}>More info</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
