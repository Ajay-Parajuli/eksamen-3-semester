import React from "react";
import "./homepage.css";
import Accesories from "../../assets/images/accesories.jpg";
import Casual from "../../assets/images/casual.jpg";
import Special from "../../assets/images/specialtoej.jpg";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div className="categories">
        <div className="udvalg">
          <div className="catindhold">
            <div className="catimg">
              <img className="image" src={Casual} alt="casualtoej" />
              <div className="cattekst">
                <h2>Casual Tøj</h2>
                <Link
                  className="link"
                  to={{
                    pathname: `/clothing`,
                  }}
                >
                  <button className="btn">Shop now</button>
                </Link>
              </div>
            </div>

            <div className="catimg">
              <img className="image" src={Special} alt="Specialtoej" />
              <div className="cattekst">
                <h2>Special Tøj</h2>

                <button className="btn">Shop now</button>
              </div>
            </div>

            <div className="catimg">
              <img className="image" src={Accesories} alt="Accesories" />
              <div className="cattekst">
                <h2>Accesories</h2>

                <button className="btn">Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
