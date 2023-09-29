import React from "react";
import logo from "../../images/logo192.png";

const Header = () => {
  return (
    <div className="pt-3 py-2 pl-2" style={{ backgroundColor: "black" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>{" "}
      &nbsp;
      <span className="h2 pt-4 text-white-50">Contact-O-Pedia</span>
    </div>
  );
};

export default Header;
