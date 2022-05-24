import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      navigate("/login");
    });
  };

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
            {!auth.currentUser ? (
              <Link onClick={() => setShowLinks(!showLinks)} className="navlink" to="/login">
                Login
              </Link>
            ) : (
              <button onClick={signOutUser}>Log out</button>
            )}
          </span>
          <span>
            <Link onClick={() => setShowLinks(!showLinks)} className="navlink" to="/create">
              Create
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
