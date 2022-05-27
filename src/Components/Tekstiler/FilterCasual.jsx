import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tekstiler.css";
import Blue from "../../assets/images/blue.png";
import Skjorter from "../../assets/images/skjorte.png";
import Hoodies from "../../assets/images/hoddies.png";
import Sweatre from "../../assets/images/swetaer.png";
import Shorts from "../../assets/images/shorts.png";
import Jakker from "../../assets/images/jakke.png";
import Tshirt from "../../assets/images/tshirt.png";
import Sko from "../../assets/images/sko.png";

export const FilterCasual = () => {
  const navigate = useNavigate();
  const [jeansogbukser, setJeansOgBukser] = useState(localStorage.getItem("Jeans og Bukser"));
  const [skjorter, setSkjorter] = useState(localStorage.getItem("Skjorter"));
  const [sweatre, setSweatre] = useState(localStorage.getItem("Sweatre"));
  const [hoodies, setHoodies] = useState(localStorage.getItem("Sweatshirts og Hoodies"));
  const [shorts, setShorts] = useState(localStorage.getItem("Shorts"));
  const [jakker, setJakker] = useState(localStorage.getItem("Jakker"));
  const [tshirtogpoloer, setTshirtOgPoloer] = useState(localStorage.getItem("Tshirt og Poloer"));
  const [sko, setSko] = useState(localStorage.getItem("Sko"));
  const [errormessage, setErrormessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const checked = document.querySelectorAll("input[type=checkbox]:checked").length;
    if (!checked) {
      setErrormessage("You must pick one category");
    } else {
      for (const item of event.target.elements) {
        if (item.checked) {
          localStorage.setItem(item.value, true);
        } else {
          localStorage.removeItem(item.value);
        }
      }
      navigate("/listofcasclothes");
    }
  }

  return (
    <>
      <div className="heading">
        <h2>Casual Tøj</h2>
        <div className="p">
          <p>Hvad leder du efter?</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="checkboxes">
          <div className="rowmanager">
            <label>
              <input type="checkbox" value="Jeans og Bukser" onChange={(e) => setJeansOgBukser(e.target.checked)} checked={jeansogbukser} />
              <div className={"categorypic " + (jeansogbukser ? "catpic" : "")}>
                <span className="span-icon">
                  <img className="image" src={Blue} alt="Jeans" />
                </span>
                <div className="span-text">
                  <span> Jeans og Bukser</span>
                </div>
              </div>
            </label>

            <label>
              <input type="checkbox" value="Skjorter" onChange={(e) => setSkjorter(e.target.checked)} checked={skjorter} />
              <div className={"categorypic " + (skjorter ? "catpic" : "")}>
                <span className="span-icon">
                  <img className="image" src={Skjorter} alt="skjorte" />
                </span>
                <div className="span-text">
                  <span> Skjorter</span>
                </div>
              </div>
            </label>

            <label>
              <input type="checkbox" value="Sweatshirts og Hoodies" onChange={(e) => setHoodies(e.target.checked)} checked={hoodies} />
              <div className={"categorypic " + (hoodies ? "catpic" : "")}>
                <span className="span-icon">
                  <img className="image" src={Hoodies} alt="hoodie" />
                </span>
                <div className="span-text">
                  <span>Hoodies</span>
                </div>
              </div>
            </label>

            <label>
              <input type="checkbox" value="Sweatre" onChange={(e) => setSweatre(e.target.checked)} checked={sweatre} />
              <div className={"categorypic " + (sweatre ? "catpic" : "")}>
                <span className="span-icon">
                  <img className="image" src={Sweatre} alt="sweater" />
                </span>
                <div className="span-text">
                  <span>Sweater</span>
                </div>
              </div>
            </label>

            <label>
              <input type="checkbox" value="Shorts" onChange={(e) => setShorts(e.target.checked)} checked={shorts} />
              <div className={"categorypic " + (shorts ? "catpic" : "")}>
                <span className="span-icon">
                  <img className="image" src={Shorts} alt="skjorte" />
                </span>
                <div className="span-text">
                  <span>Shorts</span>
                </div>
              </div>
            </label>

            <label>
              <input type="checkbox" value="Jakker" onChange={(e) => setJakker(e.target.checked)} checked={jakker} />
              <div className={"categorypic " + (jakker ? "catpic" : "")}>
                <span className="span-icon">
                  <img className="image" src={Jakker} alt="skjorte" />
                </span>
                <div className="span-text">
                  <span>Jakker</span>
                </div>
              </div>
            </label>

            <label>
              <input type="checkbox" value="Tshirt og Poloer" onChange={(e) => setTshirtOgPoloer(e.target.checked)} checked={tshirtogpoloer} />
              <div className={"categorypic " + (tshirtogpoloer ? "catpic" : "")}>
                <span className="span-icon">
                  <img className="image" src={Tshirt} alt="skjorte" />
                </span>
                <div className="span-text">
                  <span>Tshirt og Poloer</span>
                </div>
              </div>
            </label>

            <label>
              <input type="checkbox" value="Sko" onChange={(e) => setSko(e.target.checked)} checked={sko} />
              <div className={"categorypic " + (sko ? "catpic" : "")}>
                <span className="span-icon">
                  <img className="image" src={Sko} alt="skjorte" />
                </span>
                <div className="span-text">
                  <span>Sko</span>
                </div>
              </div>
            </label>
          </div>
          <p className="errormsg">{errormessage}</p>
          <button className="findvalgte">Find valgte</button>
        </div>
      </form>
    </>
  );
};
