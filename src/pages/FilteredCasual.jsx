import React from "react";
import { useState, useEffect } from "react";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { productsRef } from "../firebase-config";
import { ListOfCasualClothes } from "../Components/Tekstiler/ListOfCasualClothes";

export const FilteredCasual = ({ showLoader }) => {
  const [cloth, setCloth] = useState({});

  useEffect(() => {
    const q = query(productsRef, orderBy("createdAt", "desc")); // order by: lastest post first
    const unsubscribe = onSnapshot(q, (data) => {
      const postsData = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setCloth(postsData);
      showLoader(false);
    });
    return () => unsubscribe();
  }, [showLoader]);

  return (
    <div>
      <ListOfCasualClothes />
    </div>
  );
};
