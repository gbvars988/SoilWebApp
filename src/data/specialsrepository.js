import React from 'react';


function initSpecials() {
    if (localStorage.getItem("specials") !== null) {
        return
    }

    const specials = [
        {
            product: "Free-range eggs", 
            price: "$2"
        },
        {
            product: "Organic tomato", 
            price: "$1"
        }
    ];

    localStorage.setItem("specials", JSON.stringify(specials));
}



export {
    initSpecials
}