import React from "react";

import { Products } from "../Components/homepage/Products";
import { NewsLetter } from "../Components/homepage/NewsLetter";

export const Homepage = () => {
  return (
    <div className="wrapper">
      <Products />
      <NewsLetter />
    </div>
  );
};
