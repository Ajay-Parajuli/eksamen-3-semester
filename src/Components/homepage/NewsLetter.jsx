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
            <input type="text" placeholder="Navn" />

            <input type="email" placeholder="Email" />

            <button className="button">Tilmeld</button>
          </form>
        </div>
      </div>
    </>
  );
};
