import React, { useRef } from "react";

import "./dropdown.css";

const clickOutsideRef = (conten_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      conten_ref.current.classList.toggle("active");
    } else {
      if (conten_ref.current && !conten_ref.current.contains(e.target)) {
        conten_ref.current.classList.remove("active");
      }
    }
  });
};

const Dropdown = ({
  icon,
  badge,
  customToggle,
  contentData,
  renderItems,
  renderFooter,
}) => {
  const dropdown_content_el = useRef(null);
  const dropdown_toggle_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {icon ? <i className={icon}></i> : ""}
        {badge ? <span className="dropdown__toggle-badge">{badge}</span> : ""}
        {customToggle ? customToggle() : ""}
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {contentData && renderItems
          ? contentData.map((item, index) => renderItems(item, index))
          : ""}
        {renderFooter ? (
          <div className="dropdown__footer">{renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
