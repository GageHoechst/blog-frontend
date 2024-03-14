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
            <div key={post.id} className="Posts">
              <h2>{post.title}</h2>
              <img src={post.image} />
              <p>body:{post.body}</p>
              <img src="" alt="" />
            </div>
            <button onClick={props.onShowPosts}>More info</button>
          </>
        ))}
      </div>
    </div>
  );
}
