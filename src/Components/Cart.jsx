import React, { useState, useEffect } from "react";

export const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartitems"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      <div>
        {items.map((stat) => (
          <article className="filtercats" key={stat.id}>
            <div>
              <div className="hell">
                <p>{stat.brand}</p>
                <p>{stat.Price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
