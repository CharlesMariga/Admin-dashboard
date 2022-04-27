import React from "react";
import { NavLink } from "react-router-dom";

import "./topnav.css";

import Dropdown from "../dropdowns/Dropdown";
import notifications from "../../assets/JsonData/notification.json";
import user_image from "../../assets/images/tuat.png";
import user_menu from "../../assets/JsonData/user_menus.json";

const curr_user = {
  display_name: "Tuat Tran",
  image: user_image,
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user--image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user--name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <NavLink to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </NavLink>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            contentData={user_menu}
            customToggle={() => renderUserToggle(curr_user)}
            renderItems={renderUserMenu}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={renderNotificationItem}
            // renderFooter={() => <NavLink to="/">View All</NavLink>}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
