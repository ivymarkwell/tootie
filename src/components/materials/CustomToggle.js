import React from "react";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      // onClick(e);
    }}
    style={{ all: "unset", cursor: "pointer" }}
  >
    {children}
  </a>
));

export default CustomToggle;
