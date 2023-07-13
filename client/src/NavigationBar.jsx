import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function NavigationBar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });

    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <nav>
      <Link to="/" className="blog-logo">
        DevBlogs
      </Link>

      {username && (
        <div>
          <Link to="/create">Create New Post</Link>
          <a onClick={logout}>Logout</a>
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
