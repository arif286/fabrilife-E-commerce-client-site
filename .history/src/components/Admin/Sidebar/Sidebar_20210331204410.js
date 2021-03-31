import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddEvent from "../AddEvent/AddEvent";
import ProductManage from '../ProductManage/ProductManage';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/admin/product",
    exact: true,
    main: () => <ProductManage/>
  },
  {
    path: "/admin/addEvent",
    main: () => <AddEvent/>
  },
  {
    path: "/admin/editProduct",
    main: () => <h2>Shoelaces</h2>,
  },
];

const Sidebar = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            minWidth: "160px",
            height: '100vh',
            background: "#f0f0f0",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/admin/product">Home</Link>
            </li>
            <li>
              <Link to="/admin/addEvent">Bubblegum</Link>
            </li>
            <li>
              <Link to="/admin/editProduct">Shoelaces</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
              />
            ))}
          </Switch>
        </div>

        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default Sidebar;