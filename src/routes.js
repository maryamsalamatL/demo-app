import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./component/Blog";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Dashboard from "./component/Dashboard";
import Download from "./component/Download";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/post/:id?", element: <PostPage /> },
  {
    path: "/profile/*",
    element: <Profile />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "download", element: <Download /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];
export default routes;
