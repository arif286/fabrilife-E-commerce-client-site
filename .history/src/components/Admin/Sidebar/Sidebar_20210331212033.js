import React from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import AddEvent from "../AddEvent/AddEvent";
import ProductManage from '../ProductManage/ProductManage';
import './Sidebar.css';


const routes = [
  {
    path: "/admin",
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
            height: "100vh",
            background: "#4caf50",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <NavLink className="manage-link" to="/admin">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="manage-link" to="/admin/addEvent">
                Bubblegum
              </NavLink>
            </li>
            <li>
              <NavLink className="manage-link" to="/admin/editProduct">
                Shoelaces
              </NavLink>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch>
        </div>

        <div style={{ width: "100%", marginTop: "25px" }}>
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