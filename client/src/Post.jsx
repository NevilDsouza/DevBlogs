export default function Post() {
  return (
    <div className="post">
      <img
        src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2023/02/clock-sin-cos-trig.png?w=1200&ssl=1"
        alt="clock"
      />
      <div className="texts">
        <h2>
          Creating a Clock with the New CSS sin() and cos() Trigonometry
          Functions{" "}
        </h2>

        <div className="article-info">
          <a href="#" className="author">
            Nevil Dsouza
          </a>
          <time>12-07-2023 18:51</time>
        </div>

        <p className="article-summary">
          CSS trigonometry functions are here! Well, they are if you’re using
          the latest versions of Firefox and Safari, that is. Having this sort
          of mathematical power in CSS opens up a whole bunch of possibilities.
          In this tutorial, I thought …
        </p>
      </div>
    </div>
  );
}
