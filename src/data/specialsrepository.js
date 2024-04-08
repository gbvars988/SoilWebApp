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
    },
    {
      product: "Asparagus Bunch Organic",
      price: "$5",
      id: 2,
      img_name: "asparagus"
    },
    {
      product: "Mushrooms Flat Brown 120g",
      price: "$8",
      id: 3,
      img_name: "mushroom"
    },
    {
      product: "Potatoes Kipfler Organic",
      price: "$3",
      id: 4,
      img_name: "potato"
    },
    {
      product: "Pumpkin Butternut",
      price: "$5",
      id: 5,
      img_name: "pumpkin"
    },
    {
      product: "Spinach Bunch Organic",
      price: "$3.50",
      id: 6,
      img_name: "spinach"
    },
    {
      product: "Zucchini Organic",
      price: "$4",
      id: 7,
      img_name: "zucchini"
    },
    {
      product: "Honeydew Organic",
      price: "$7",
      id: 8,
      img_name: "honeydew"
    },
    {
      product: "Nashi Pear Organic",
      price: "$1.40",
      id: 9,
      img_name: "pear"
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