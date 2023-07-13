import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <Link to={`/post/${_id}`}>
        <img src={"http://localhost:4000/" + cover} />
      </Link>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>

        <div className="article-info">
          <a href="#" className="author">
            {author.username}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </div>

        <p className="article-summary">{summary}</p>
      </div>
    </div>
  );
}
