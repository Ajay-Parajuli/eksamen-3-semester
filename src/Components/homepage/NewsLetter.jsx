import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const NewsLetter = () => {
  return (
    <>
      <div className="newsletter">
        <div className="newstitle">
          <h2>Nyhedsbrev</h2>
        </div>
        <div className="textnews">
          <p>Få besked når der kommer nyt genbrugs tøj</p>
        </div>
        <div className="textnews">
          <p> - Tilmeld dig her</p>
        </div>
        <div>
          <BsFillArrowDownCircleFill className="iconarrow" />
        </div>
        <div className="newsletterregister">
          <form>
            <label for="npt-text"></label>
            <input type="text" value="" placeholder="Navn" />
            <label for="npt-email"></label>
            <input type="email" value="" placeholder="Email" />

            <button className="button" type="submit">
              Tilmeld
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
