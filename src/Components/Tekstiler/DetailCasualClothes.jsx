import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const DetailCasualClothes = () => {
  const params = useParams();
  console.log(params.id);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await fetch("data.json");
      const data = await res.json();
      console.log(data);
      const user = data.find((cloth) => cloth.id === params.id);
      setProfile(user);
    }
    getData();
  }, []);

  return (
    <>
      <div className="profiledetails">{profile.Price}</div>
    </>
  );
};
