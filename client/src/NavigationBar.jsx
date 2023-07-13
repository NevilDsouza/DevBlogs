import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  return (
    <nav>
      <Link to="/" className="blog-logo">
        Blogify
      </Link>

      {username && (
        <div>
          <Link to="/create">Create New Post</Link>
          <Link to="">Logout</Link>
        </div>
      )}

      {!username && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
}
