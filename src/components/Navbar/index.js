import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light bg-light">
      <span className="navbar-brand mb-0 h1">Employee Directory</span>
      <i class="fas fa-search" aria-hidden="true"></i>
      <input
        class="form-control form-control-sm ml-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
      ></input>
    </nav>
  );
}

export default Navbar;
