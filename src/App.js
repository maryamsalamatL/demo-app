import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path}>
            {route.children
              ? route.children.map((nestedRoute) => <Route {...nestedRoute} />)
              : ""}
          </Route>
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
