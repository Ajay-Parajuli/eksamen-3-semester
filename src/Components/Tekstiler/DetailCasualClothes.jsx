import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { productsRef } from "../../firebase-config";
import { getDocs } from "firebase/firestore";

export const DetailCasualClothes = () => {
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

  return (
    <>
      <div className="profiledetails">
        <div>
          <div>
            <img className="mobile" src={profile.img} alt={profile.category} />
            <img className="mobile" src={profile.img1} alt={profile.category} />
            <img className="mobile" src={profile.img2} alt={profile.category} />
            <img className="mobile" src={profile.img3} alt={profile.category} />
          </div>

          <b>{profile.Price}</b>
          <b>{profile.Materiale}</b>
          <p>{profile.Size}</p>
          <p>{profile.brand}</p>
          <p>{profile.color}</p>
          <p>{profile.Stock}</p>
        </div>
      </div>
    </>
  );
};
