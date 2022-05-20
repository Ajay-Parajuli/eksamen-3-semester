import React from "react";
import { useState, useEffect } from "react";
import "./tekstiler.css";
import { Link } from "react-router-dom";

export const ListOfCasualClothes = () => {
  const [casclothes, setCasClothes] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");

  useEffect(() => {
    function getFilters() {
      const filters = [];
      if (localStorage.getItem("Jeans og Bukser")) {
        filters.push("Jeans og Bukser");
      }

      if (localStorage.getItem("Skjorter")) {
        filters.push("Skjorter");
      }
      if (localStorage.getItem("Sweatshirts og Hoodies")) {
        filters.push("Sweatshirts og Hoodies");
      }
      if (localStorage.getItem("Sweatre")) {
        filters.push("Sweatre");
      }
      if (localStorage.getItem("Shorts")) {
        filters.push("Shorts");
      }
      if (localStorage.getItem("Jakker")) {
        filters.push("Jakker");
      }
      if (localStorage.getItem("Tshirt og Poloer")) {
        filters.push("Tshirt og Poloer");
      }
      if (localStorage.getItem("Sko")) {
        filters.push("Sko");
      }
      return filters;
    }

    async function getCasClothes() {
      const response = await fetch("data.json");
      const list = await response.json();
      console.log(list);

      const filters = getFilters();
      console.log(filters);
      const results = list.filter((item) => filters.includes(item.subcategory));
      console.log(results);
      setCasClothes(results);
    }
    getCasClothes();
  }, []);

  return (
    <>
      <div className="heading">
        <b></b>
        <h2>Filter</h2>
      </div>

      <div className="searchbox">
        <input
          type="text"
          placeholder="Søg efter brand"
          onChange={(event) => {
            SetSearchTerm(event.target.value);
          }}
        />
      </div>

      <div className="fiteroptions">
        <select className="value" name="" id="">
          <option value="Default">Sorter efter Pris</option>
          <option value="LowToHigh">Lav til Høj</option>
          <option value="HighToLow">Høj til Lav</option>
        </select>

        <select className="value" name="" id="">
          <option value="Default">Sorter efter stand</option>
          <option value="Ny">Ny</option>
          <option value="Næsten Ny">Næsten Ny</option>
          <option value="Gammel">Gammel</option>
        </select>
      </div>
      <section className="grid-container">
        {casclothes
          .filter((cloth) => {
            if (searchTerm === "") {
              return cloth;
            } else if (cloth.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
              return cloth;
            }
          })
          .map((cloth) => (
            <article key={cloth.id}>
              <div className="desktop">
                <Link
                  className="link"
                  to={{
                    pathname: `/detailpage/${cloth.id}`,
                  }}
                >
                  <div className="images">
                    <img className="mobile" src={cloth.img1} alt={cloth.category} />
                  </div>
                </Link>
                <div className="extrainfo">
                  <div>
                    <span>Størrelse:&nbsp;{cloth.Size}</span>
                    <br></br>
                    <span className="brand">Brand:&nbsp;{cloth.brand}</span> <br></br>
                    <span className="brand">Farve:&nbsp;{cloth.color}</span> <br></br>
                    <b>DKK:&nbsp;{cloth.Price}</b>
                  </div>
                  <div className="tilbtn">
                    <button>Tilføj i kurv</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
      </section>
    </>
  );
};
