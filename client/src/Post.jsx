import { formatISO9075 } from "date-fns";

export default function Post({
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <img src={"http://localhost:4000/" + cover} />
      <div className="texts">
        <h2>{title}</h2>

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
