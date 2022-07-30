const posts = [
  { id: 1, title: "hello world", content: " welcome to learning react !" },
  {
    id: 2,
    title: "installation",
    content: " you can install React from npm install react ",
  },
];

function Blog() {
  function BlogContainer() {
    const Sidebar = (props) => {
      return (
        <div
          style={{
            display: "flex",
            padding: "0.1em 1em",
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: "4px",
          }}
        >
          {props.posts.map((post) => (
            <li
              key={post.id}
              style={{
                fontSize: 24,
                fontWeight: "bold",
                listStyle: "none",
                margin: "0.3em 0.3em",
                textTransform: "capitalize",
                color: "teal",
                fontFamily: "monospace",
                padding: "0em 1em",
                cursor: "pointer",
                background: "white",
                borderRadius: "4px",
                border:'1p solid black'
              }}
            >
              {post.title}
            </li>
          ))}
        </div>
      );
    };

    const Content = (props) => {
      return (
        <div>
          {props.posts.map((post) => (
            <div key={post.id}>
              <h3
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  color: "steelblue",
                  fontSize: 21,
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  fontFamily: "monospace",
                }}
              >
                {post.content}
              </p>
            </div>
          ))}
        </div>
      );
    };
    return (
      <div>
        <Sidebar posts={posts} />
        <hr />
        <Content posts={posts} />
      </div>
    );
  }

  return (
    <div>
      <BlogContainer />
    </div>
  );
}

export default Blog;
