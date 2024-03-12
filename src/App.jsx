function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
    </div>
  );
}

function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>Gamera</h1>
      <p>The name is {props.name} </p>
      <img src="" alt="" />
    </div>
  );
}
function Footer() {
  return (
    <div>
      {" "}
      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}
function Content() {
  let name = "Test";
  return (
    <>
      <PostsNew />
      <PostsIndex name={name} />
    </>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
