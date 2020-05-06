import React from "react";

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = (menuOpen) =>
  React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const div =
        "<div id='public-files' style='margin-left: 20px;'><div>favicon.ico</div><div>index.html</div><div>manifest.json</div></div>";

      const filesElement = document.getElementById("public-files");
      if (menuOpen && !filesElement) {
        const folderElement = document.getElementById("public-folder");
        folderElement.insertAdjacentHTML("afterend", div);
      }
    }
  );
export default CustomMenu;
