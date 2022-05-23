import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbox">
      <div className="rightside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <span>
            <Link onClick={() => setShowLinks(!showLinks)} to="/clothing" className="navlink">
              Tekstiler
            </Link>
          </span>
          <span>
            <Link onClick={() => setShowLinks(!showLinks)} to="/accesories" className="navlink">
              Tilbehør
            </Link>
          </span>
          <span>
            <Link onClick={() => setShowLinks(!showLinks)} to="/about" className="navlink">
              Om os
            </Link>
          </span>
          <span>
            <Link className="log" to="/login">
              Login
            </Link>
          </span>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          <GiHamburgerMenu className="burger" />
        </button>
      </div>
      <div className="leftside">
        <Link to="/homepage" className="navlink">
          <h2>MILDT</h2>
        </Link>
      </div>

      <div className="middel">
        <span>
          <Link to="/cart" className="navlink">
            <AiOutlineShoppingCart className="icon" />
          </Link>
        </span>
      </div>
    </div>
  );
};
