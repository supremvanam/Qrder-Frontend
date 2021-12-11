import React from "react";
import CartSingleItem from "./CartSingleItem";
import { NavLink } from 'react-router-dom';

function OrderItem() {
  return (
    <div className="card">
        <h2 style={{marginBottom:"40px",textAlign:"center"}}>ORDER SUCCESSFUL</h2>
      <CartSingleItem itemTitle="Chicken Pizza" itemPrice="55 $" />
      <CartSingleItem itemTitle="Double Cheese Burger" itemPrice="05 $" />
      <CartSingleItem itemTitle="Quesadilla" itemPrice="70 $" />
      <CartSingleItem itemTitle="Chicken Pizza" itemPrice="80 $" />
      <div className="product-item" style={{marginTop:"50px"}}>
          <h4 className="item-name">Total</h4>
          <h4 className="item-price">400 $</h4>
       </div>
      <div className="item-center" style={{marginTop:"40px"}}>
          <NavLink to="/print" className="btn text-center"> Print Now </NavLink>
        </div>
    </div>
    
  );
}

export default OrderItem;