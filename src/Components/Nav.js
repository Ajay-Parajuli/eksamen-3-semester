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
          <Link onClick={() => setShowLinks(!showLinks)} to="/catalog" className="navlink">
            <span>Se hele Cataloget</span>
          </Link>
          <Link onClick={() => setShowLinks(!showLinks)} to="/omos" className="navlink">
            <span>Om os</span>
          </Link>

          <Link onClick={() => setShowLinks(!showLinks)} to="/findos" className="navlink">
            <span>Find os</span>
          </Link>

          <Link onClick={() => setShowLinks(!showLinks)} to="/about" className="navlink">
            <span>Blog</span>
          </Link>

          {!auth.currentUser ? (
            <Link onClick={() => setShowLinks(!showLinks)} className="navlink" to="/login">
              <span>Login</span>
            </Link>
          ) : (
            <>
              <Link onClick={() => setShowLinks(!showLinks)} className="navlink" to="/create">
                <span>Create</span>
              </Link>
              <p className="buttoncol" onClick={signOutUser}>
                <span>Log out</span>
              </p>
            </>
          )}
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
