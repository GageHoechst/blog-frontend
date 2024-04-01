/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { PostsShowPage } from "./PostsShowPage";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPosts, setCurrentPosts] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts = response.data;
      console.log(posts);
    });
  };
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPosts(post);
  };
  const handleUpdatePost = (id, params, successCallback) => {
    console.log("handleUpdatePost", params);
    axios.patch("http://localhost:3000/posts/${id.json", params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };
  const handleDestroyPost = (id) => {
    console.log("handleDestoryPost", id);
    axios.delete(`http://localhost:3000/posts/${id}.json`).then((response) => {
      setPosts(posts.filter((post) => post.id !== id));
      handleClose();
    });
  };
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts/:id" element={<PostsShowPage />} />
      </Routes>
      <div className="container">
        <PostsNew onCreatePost={handleCreatePost} />
        <button onClick={handleIndexPosts}>Load Posts</button>
        <PostsIndex posts={posts} onShowRecipe={handleShowPost} />
        <Modal show={isPostsShowVisible} onClose={handleClose}>
          <PostsShow post={currentPosts} onUpdatePost={handleUpdatePost} />
        </Modal>
      </div>
    </main>
  );
}
