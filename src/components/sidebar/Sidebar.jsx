import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.css";
import logo from "../../assets/images/logo.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner `}>
        <i className={props.icon}></i>
        <span>{props.display_name}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="Company logo" />
      </div>
      {sidebar_items.map((item, index) => (
        <NavLink
          to={item.route}
          key={index}
          className={({ isActive }) => `${isActive ? "active" : ""}`}
        >
          <SidebarItem {...item} />
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
