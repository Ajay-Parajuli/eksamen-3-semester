import React from "react";
import { useState, useEffect } from "react";
import "./tekstiler.css";
import { Link } from "react-router-dom";
import { productsRef } from "../../firebase-config";
import { getDocs } from "firebase/firestore";
import Aos from "aos";
import "aos/dist/aos.css";

export const ListOfCasualClothes = () => {
  const [casclothes, setCasClothes] = useState([]);
  const [filterClothes, setFilterClothes] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");

  const Ny = "Ny";
  const Gammel = "Gammel";

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
      const data = await getDocs(productsRef);

      const products = data.docs.map((doc) => {
        // map through all docs (object) from post collection
        return { ...doc.data(), id: doc.id }; // changing the data structure so it's all gathered in one object
      });

      console.log(products);
      const filters = getFilters();
      console.log(filters);
      const results = products.filter((item) => filters.includes(item.subcategory));
      console.log(results);
      setCasClothes(results);
      setFilterClothes(results);
    }
    getCasClothes();
  }, []);

  const [category, setCategory] = useState("");
  const [prices, setPrices] = useState("");

  const filterByCat = (category) => {
    if (category === "") {
      setFilterClothes(casclothes);
    } else setFilterClothes(casclothes.filter((product) => product.stand === category));
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const orderByPrice = (value) => {
    let sort = [];
    console.log(value);
    if (value === "1") {
      sort = casclothes.sort((product1, product2) => {
        return product1.Price - product2.Price;
      });
      console.log(sort);
    }
    setFilterClothes(sort);
  };

  return (
    <>
      <Link
        className="linkss"
        to={{
          pathname: `/clothing`,
        }}
      >
        <p className="backr">- Tilbage</p>
      </Link>
      <div className="heading">
        <h2>Filtrere</h2>
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
        <div className="option">
          <div>
            <b className="sortstand">Sorter efter tøjstand:</b>

            <select onChange={(e) => filterByCat(e.target.value)} className="value">
              <option value="">Alle</option>
              <option value={Ny}>{Ny}</option>
              <option value={Gammel}>{Gammel}</option>
            </select>
          </div>

          <div>
            <b className="sortpris">Sorter efter pris:</b>

            <select onChange={(e) => orderByPrice(e.target.value)} className="value">
              <option value="">Vælg</option>
              <option value="1">Lav til høj</option>
              <option value="2">Høj til lav</option>
            </select>
          </div>
        </div>
      </div>

      <section className="grid-container">
        {filterClothes
          .filter((cloth) => {
            if (searchTerm === "") {
              return cloth;
            } else if (cloth.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
              return cloth;
            }
          })
          .map((cloth) => (
            <article key={cloth.id}>
              <div data-aos="fade-up" className="desktop">
                <Link
                  className="linkdetail"
                  to={{
                    pathname: `/detailpage/${cloth.id}`,
                  }}
                >
                  <div className="images">
                    <img className="mobile" src={cloth.img1} alt={cloth.category} />
                  </div>

                  <div className="extrainfo">
                    <div>
                      <b className="gory">{cloth.subcategory}</b> <br></br>
                      <span>Størrelse:&nbsp;{cloth.Size}</span>
                      <br></br>
                      <span className="brand">Brand:&nbsp;{cloth.brand}</span> <br></br>
                      <span className="brand">Stand:&nbsp;{cloth.stand}</span> <br></br>
                      <b>DKK:&nbsp;{cloth.Price}</b>
                    </div>

                    <div className="tilbtn">
                      <button>Se mere</button>
                    </div>
                  </div>
                </Link>
              </div>
            </article>
          ))}
      </section>
    </>
  );
};
