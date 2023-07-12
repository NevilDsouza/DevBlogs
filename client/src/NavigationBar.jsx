import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <Link to="/" className="blog-logo">
        Blogify
      </Link>

      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
