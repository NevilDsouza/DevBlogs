export default function NavigationBar() {
  return (
    <nav>
      <a href="/" className="blog-logo">
        Blogify
      </a>

      <div>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}
