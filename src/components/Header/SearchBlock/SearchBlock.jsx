import React from "react";

import { BiSearchAlt2 } from "react-icons/all";

import "./SearchBlock.scss";

function SearchBlock() {
  return (
    <div className="header-searchBlock">
      <BiSearchAlt2 />
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBlock;
