import React from "react";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const onToggleClick = (elementId, menuOpen, setMenuOpen) => {
  setMenuOpen(!menuOpen);
  if (menuOpen) {
    const filesElement = document.getElementById(elementId);
    while (filesElement.firstChild) {
      filesElement.removeChild(filesElement.lastChild);
    }
    filesElement.remove();
  }
};

const CustomToggle = (elementId, menuOpen, setMenuOpen) =>
  React.forwardRef(({ children }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();

        onToggleClick(elementId, menuOpen, setMenuOpen);
      }}
      style={{ all: "unset", cursor: "pointer" }}
    >
      {children}
    </a>
  ));

export default CustomToggle;
