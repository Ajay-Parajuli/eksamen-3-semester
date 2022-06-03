import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { productsRef } from "../../firebase-config";
import { getDocs } from "firebase/firestore";
import "./tekstiler.css";
import { Link } from "react-router-dom";

export const DetailCasualClothes = () => {
   /* getting the clicked object and displaying in another throght id using useParams*/ 
  const params = useParams();
  console.log(params.id);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function getCasClothes() {
      const data = await getDocs(productsRef);

      const products = data.docs.map((doc) => {
        // map through all docs (object) from post collection
        return { ...doc.data(), id: doc.id }; // changing the data structure so it's all gathered in one object
      });

      const results = products.find((cloth) => cloth.id === params.id);
      console.log(results);
      setProfile(results);
    }
    getCasClothes();
  }, []);


   /* Sending items to localstorage for cartItems*/ 
  function storeCart() {
    const arrayCart = JSON.parse(localStorage.getItem("cartitems") || "[]");
    let cart = profile;
    arrayCart.push(cart);
    localStorage.setItem("cartitems", JSON.stringify(arrayCart));
    alert("Added to cart");
  }


  return (
    <>
      <Link
        className="linksss"
        to={{
          pathname: `/listofcasclothes`,
        }}
      >
        <p className="backr">- Tilbage</p>
      </Link>
      <div className="profiledetails">
        <div className="detailbox">
          <div className="pictures">
            <div className="imgbox">
              <img className="mobile" src={profile.img1} alt={profile.category} />
            </div>
          </div>
          <h2>{profile.brand}</h2>
          <p>Materiale:&nbsp;{profile.Materiale}</p>
          <p>Størrelse:&nbsp;{profile.Size}</p>
          <p>Farve:&nbsp; {profile.color}</p>
          <p>Antal stk. på lager:&nbsp; {profile.stock}</p>

          <p>Stand:&nbsp; {profile.stand}</p>
          <br></br>
          <p>Leveringstid:&nbsp; 1-3 dage</p>

          <p>Alle vores tøj bliver kvalitet tjekket. </p>
          <br></br>
          <p className="bold">DKK &nbsp;{profile.Price}</p>
          <div className="tilbtndetail">
            <button onClick={storeCart}>Tilføj i kurv</button>
          </div>
        </div>
      </div>
    </>
  );
};
