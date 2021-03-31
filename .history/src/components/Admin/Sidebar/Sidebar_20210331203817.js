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
    sidebar: () => <div>home!</div>,
    main: () => <ProductManage/>
  },
  {
    path: "/admin/addEvent",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <AddEvent/>
  },
  {
    path: "/admin/editProduct",
    sidebar: () => <div>shoelaces!</div>,
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
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
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