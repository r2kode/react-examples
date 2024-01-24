import { Outlet, Link } from "react-router-dom";

export default function Root() {
  const navItems = [
    {
      path: "/",
      label: "Main",
    },
    {
      path: "error-boundaries",
      label: "Error Boundrie",
    },
    {
      path: "recurrence",
      label: "Recurrence",
    },
    {
      path: "dall-e",
      label: "Dall-E",
    },
    {
      path: "data-structures",
      label: "Data Structures",
    },
    {
      path: "editor",
      label: "Editor",
    },
  ];

  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <nav>
          <ul>
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
