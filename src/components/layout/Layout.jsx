import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";

import "./layout.css";

import Router from "../Router";
import TopNav from "../topnav/TopNav";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <div className="layout__content">
          <TopNav />
          <div className="layout__content-main">
            <Router />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
