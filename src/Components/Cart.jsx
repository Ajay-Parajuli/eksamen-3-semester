import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Cart = () => {
  const [items, setItems] = useState([]);

   /*  getting items from localstorage */ 

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartitems"));
    if (items) {
      setItems(items);
    }
  }, []);

   /* removing cartitems on click*/ 

  const removeFromCart = (productToRemove) => {
    const filtered = items.filter((item) => item.id !== productToRemove);
    setItems(filtered);
    localStorage.setItem("cartitems", JSON.stringify(filtered));
  };

   /* getting total prices of cartitem products*/ 
  const getTotalSum = () => {
    let sum = 0;
    for (const item of items) {
      console.log(item);
      sum = sum + parseFloat(item.Price);
    }
    return sum;
  };

  return (
    <>
      <div className="h11">
        <h1>Din Kurv</h1>
        {items.map((stats) => (
          <article className="cartitemscontainer" key={stats.id}>
            <div className="cartitems">
              <div className="cartimgbox">
                <img className="cartimg" src={stats.img1} alt={stats.category} />
              </div>
              <div className="cartinfo">
                <p>Brand:&nbsp;{stats.brand}</p>
                <p>Størrelse:&nbsp;{stats.Size}</p>
                <b>Pris:&nbsp;{stats.Price}</b>
              </div>
              <div className="deletebtn">
                <button onClick={() => removeFromCart(stats.id)} className="cartdelete">
                  <RiDeleteBin6Line className="iconcart" />
                </button>
              </div>
            </div>
          </article>
        ))}

        <div className="totalprice">
          <p>
            Total pris: <span>{getTotalSum()} DKK</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};
