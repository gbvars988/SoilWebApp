import React from "react";

function initSpecials() {
  if (localStorage.getItem("specials") !== null) {
    return;
  }

  const specials = [
    {
      product: "Free-range eggs",
      price: 2.1,
      id: 0,
      img_name: "eggs",
      info: "Fresh organic free-range eggs sourced locally",
    },
    {
      product: "Organic tomato",
      price: 3.3,
      id: 1,
      img_name: "tomato",
      info: "Perfectly ripe and delicious organically grown tomato",
    },
    {
      product: "Asparagus Bunch Organic",
      price: 5.0,
      id: 2,
      img_name: "asparagus",
      info: "Organic wild asparagus loose or bunches direct from the farm. Much more tender and sweet than regular asparagus. It can also be enjoyed raw as a quick snack or quickly pan fried with some butter and garlic.",
    },
    {
      product: "Mushrooms Flat Brown 120g",
      price: 7.7,
      id: 3,
      img_name: "mushroom",
      info: "Prized for their rich, earthy taste, they’re also a good source of potassium, selenium, protein, and antioxidants, while containing no fat or cholesterol.",
    },
    {
      product: "Potatoes Kipfler Organic",
      price: 3.0,
      id: 4,
      img_name: "potato",
      info: "ACO certified organic & Australian grown. Usually boiled, mashed or roasted. Red skin and lovely creamy flesh.",
    },
    {
      product: "Pumpkin Butternut",
      price: 6.35,
      id: 5,
      img_name: "pumpkin",
      info: "Cut and bagged. Best for roasting.",
    },
    {
      product: "Spinach Bunch Organic",
      price: 3.5,
      id: 6,
      img_name: "spinach",
      info: "uper nutritional english spinach direct from the farm.",
    },
    {
      product: "Zucchini Organic",
      price: 4.2,
      id: 7,
      img_name: "zucchini",
      info: "Crunchy and juicy spray free zucchini. Great in a stir fry or as noodles for a gluten free spin on pasta.",
    },
    {
      product: "Honeydew Organic",
      price: 7.0,
      id: 8,
      img_name: "honeydew",
      info: "Super sweet and juicy sourced direct from our local farm.",
    },
    {
      product: "Nashi Pear Organic",
      price: 1.4,
      id: 9,
      img_name: "pear",
      info: "New season nashi pears picked Direct from the orchard.",
    },
  ];

  localStorage.setItem("specials", JSON.stringify(specials));
}

function getSpecials() {
  const specials = localStorage.getItem("specials");
  return JSON.parse(specials);
}

export { initSpecials, getSpecials };
