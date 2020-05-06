import React from "react";

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = (div, elementId, insertElementId, menuOpen) =>
  React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      console.log(elementId, "element id");
      const filesElement = document.getElementById(elementId);
      if (menuOpen && !filesElement) {
        console.log("here");
        const folderElement = document.getElementById(insertElementId);
        folderElement.insertAdjacentHTML("afterend", div);
      }
    }
  );
export default CustomMenu;
