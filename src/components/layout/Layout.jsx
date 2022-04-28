import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import {
  setMode,
  setColor,
  selectMode,
  selectColor,
} from "../../features/theme/themeSlice";
import { useSelector, useDispatch } from "react-redux";

import "./layout.css";

import Router from "../Router";
import TopNav from "../topnav/TopNav";

const Layout = () => {
  const mode = useSelector(selectMode);
  const color = useSelector(selectColor);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(setMode(themeClass));
    dispatch(setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={`layout ${mode} ${color}`}>
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
