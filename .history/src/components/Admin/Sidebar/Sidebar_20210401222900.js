import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
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
    main: () => <h2>This feature will be coming soon</h2>,
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
            background: "#5c6bc0",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li className="manage-item">
              <NavLink className="manage-link" to="/admin">
                Manage Product
              </NavLink>
            </li>
            <li className="manage-item">
              <NavLink className="manage-link" to="/admin/addEvent">
                <AddIcon/> Add Product
              </NavLink>
            </li>
            <li className="manage-item">
              <NavLink className="manage-link" to="/admin/editProduct">
                <EditIcon/> Edit Product
              </NavLink>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch>
        </div>

        <div
          style={{
            width: "100%",
            marginBottom: "25px",
            backgroundColor: "#9fa8da",
          }}
        >
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