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

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>Gamera</h1>
      <body>Giant turtle who can fly.</body>
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
  return (
    <>
      <PostsNew />
      <PostsIndex />
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
