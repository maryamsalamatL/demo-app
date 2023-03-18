import { Link } from "react-router-dom";

const blogs = [
  { to: "/blogs/1", name: "blog 1" },
  { to: "/blogs/2", name: "blog 2" },
  { to: "/blogs/3", name: "blog 3" },
];

const BlogPage = () => {
  return (
    <div className="page">
      {blogs.map((b) => {
        return (
          <Link
            to={{ pathname: b.to, search: "name" }}
            className="link"
            key={b.name}
          >
            {b.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPage;
