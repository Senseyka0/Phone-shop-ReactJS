import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-lists">
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/iphones">Iphone</NavLink>
          <NavLink to="/mac">Mac</NavLink>
          <NavLink to="/ipad">Ipad</NavLink>
          <NavLink to="/watch">Watch</NavLink>
          <NavLink to="/accessories">Accessories</NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
