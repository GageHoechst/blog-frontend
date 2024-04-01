/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyPost(props.post.id);
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
      <button onClick={handleClick}>Destroy post</button>
    </div>
  );
}
