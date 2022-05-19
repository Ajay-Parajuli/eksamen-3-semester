import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailCasualClothes = () => {
  const params = useParams();
  console.log(params.id);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function getDataa() {
      const ress = await fetch("data.json");
      const dataa = await ress.json();
      console.log("dataa");
      const cloth = dataa.find((cloth) => cloth.id === params.id);
      setProfile(cloth);
    }

    getDataa();
  }, []);

  return (
    <div>
      <pre></pre>
      {profile.Price}
    </div>
  );
};
