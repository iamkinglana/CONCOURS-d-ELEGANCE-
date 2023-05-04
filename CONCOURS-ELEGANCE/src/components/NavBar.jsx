import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="./CarSearch">CAR LIST</Link>
        </li>
        <li>
          <Link to="./CarList">OUR COLLECTION</ Link>
        </li>{" "}
      </ul>
    </nav>
  );
}

export default Navbar;
