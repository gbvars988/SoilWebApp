import React from 'react';


function initSpecials() {
  if (localStorage.getItem("specials") !== null) {
      return
  }

  const specials = [
    {
      product: "Free-range eggs", 
      price: "$2",
      id: 0,
      img_name: "eggs"
    },
    {
      product: "Organic tomato", 
      price: "$1",
      id: 1,
      img_name: "tomato"
      }
  ];

  localStorage.setItem("specials", JSON.stringify(specials));
}

function getSpecials() {
  const specials = localStorage.getItem("specials");
  return JSON.parse(specials);
}

export {
  initSpecials,
  getSpecials
}