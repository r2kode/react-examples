import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Main</Link>
            </li>
            <li>
              <Link to={`error-boundaries`}>Error Boundries</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
