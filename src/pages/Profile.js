import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <div className="page">
      <h1 style={{ marginBottom: "20px" }}>Profile page</h1>
      <ul>
        <li>
          <Link to="dashboard" className="link">
            dashboard
          </Link>
        </li>
        <li>
          <Link to="download" className="link">
            download
          </Link>
        </li>
      </ul>
      <Outlet />
      {/* <Routes>
        <Route path="dashboard" element={<First />} />
        <Route path="download" element={<Second />} />
      </Routes> */}
    </div>
  );
};

export default Profile;
