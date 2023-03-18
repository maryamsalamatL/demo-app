import { useParams, Link } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Blog Detail -{id}</h1>
      <Link to={"/blogs"} style={{ textDecoration: "none" }}>
        return to blogs page
      </Link>
    </div>
  );
};

export default Blog;
