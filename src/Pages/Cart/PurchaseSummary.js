import { React, useState, useEffect } from "react";
import { getSpecials } from "../../Data/specialsrepository.js";
import { useLocation } from "react-router-dom";

function PurchaseSummary() {
  const location = useLocation();
  const { cartItems } = location.state;
  const [specials, setSpecials] = useState(getSpecials());
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate subtotal
  useEffect(() => {
    const updateSubtotal = () => {
      let newTotal = 0;
      for (const id in cartItems) {
        let item = specials.find((special) => special.id === Number(id));
        newTotal += cartItems[id] * item.price;
      }
      return newTotal;
    };
    setTotalAmount(updateSubtotal);
  }, []);

  return (
    <div className="purchase-summary-container">
      <h3>Purchase Summary</h3>
      <div className="purchase-summary-items">
        {specials.map((special) => {
          if (cartItems[special.id] !== 0) {
            return (
              <div className="summary-item">
                {special.product}, price: ${special.price}, qty:
                {cartItems[special.id]}
              </div>
            );
          }
        })}
      </div>
      <>Total purchase price: ${totalAmount.toFixed(2)}</>
    </div>
  );
}

export default PurchaseSummary;
