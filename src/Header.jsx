import { Link } from "react-router-dom";
export function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Monster mash
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    All Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts/new">
                    New Post
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
                {localStorage.jwt === undefined ? (
                  <>
                    <li className="nav-item">
                      <Link to="signup" className="nav-link">
                        Signup
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link to="logout" className="nav-link">
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
