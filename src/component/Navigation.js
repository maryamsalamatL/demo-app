import { NavLink } from "react-router-dom";

const items = [
  { to: "/", name: "Home" },
  { to: "/about-us", name: "About Us" },
  { to: "/blogs", name: "Blogs" },
  { to: "/post", name: "Post" },
  { to: "/profile", name: "Profile" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((i) => {
          return (
            <li key={i.name}>
              <NavLink
                to={i.to}
                className={(navData) =>
                  navData.isActive ? `${"activeClass"} ${"link"}` : "link"
                }
              >
                {i.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
