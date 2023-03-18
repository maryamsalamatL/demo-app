import { useParams, useNavigate } from "react-router-dom";

const PostPage = () => {
  const navigate = useNavigate();
  const id = useParams().id || 1;
  console.log(id);
  return (
    <div className="page">
      <h1>post {id}</h1>
      <button onClick={() => navigate("/")} className="btn">
        go to home page
      </button>
    </div>
  );
};

export default PostPage;
