import React from "react";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const onToggleClick = (menuOpen, setMenuOpen) => {
  setMenuOpen(!menuOpen);
  if (menuOpen) {
    const filesElement = document.getElementById("public-files");
    while (filesElement.firstChild) {
      filesElement.removeChild(filesElement.lastChild);
    }
    filesElement.remove();
  }
};

const CustomToggle = (menuOpen, setMenuOpen) =>
  React.forwardRef(({ children }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();

        onToggleClick(menuOpen, setMenuOpen);
      }}
      style={{ all: "unset", cursor: "pointer" }}
    >
      {children}
    </a>
  ));

export default CustomToggle;
