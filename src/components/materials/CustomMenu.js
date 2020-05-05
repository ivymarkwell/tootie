import React from "react";

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const div =
      "<div id='public-files'><div>favicon.ico</div><div>index.html</div><div>manifest.json</div></div>";

    const d1 = document.getElementById("public-folder");
    d1.insertAdjacentHTML("afterend", div);
  }
);
export default CustomMenu;
