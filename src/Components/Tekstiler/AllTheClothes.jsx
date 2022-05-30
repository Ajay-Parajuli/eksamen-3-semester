import React from "react";
import { productsRef } from "../../firebase-config";
import { getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const AllTheClothes = () => {
  const [allclothes, setAllClothes] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");

  useEffect(() => {
    async function getAllClothes() {
      const data = await getDocs(productsRef);

      const products = data.docs.map((doc) => {
        // map through all docs (object) from post collection
        return { ...doc.data(), id: doc.id }; // changing the data structure so it's all gathered in one object
      });

      console.log(products);

      setAllClothes(products);
    }
    getAllClothes();
  }, []);

  return (
    <>
      <div className="heading">
        <h2>Kig i vores katalog</h2>
      </div>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Søg efter tøj og tilbehør"
          onChange={(event) => {
            SetSearchTerm(event.target.value);
          }}
        />
      </div>

      <section className="grid-container">
        {allclothes
          .filter((cloth) => {
            if (searchTerm === "") {
              return cloth;
            } else if (cloth.subcategory.toLowerCase().includes(searchTerm.toLowerCase())) {
              return cloth;
            }
          })
          .map((cloth) => (
            <article key={cloth.id}>
              <div className="desktop">
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
