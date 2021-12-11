import React from "react";
import CartSingleItem from "./CartSingleItem";
import { NavLink } from 'react-router-dom';

function PrintData() {
  return (
    <div className="card">
        <h2 style={{marginBottom:"10px",textAlign:"center"}}>ORDER OVERVIEW</h2>
        <p style={{marginBottom:"10px",textAlign:"center"}}>TABLE NO 7</p>
      <CartSingleItem itemTitle="Chicken Pizza" itemPrice="55 $" />
      <CartSingleItem itemTitle="Double Cheese Burger" itemPrice="05 $" />
      <CartSingleItem itemTitle="Quesadilla" itemPrice="70 $" />
      <CartSingleItem itemTitle="Chicken Pizza" itemPrice="80 $" />
      <div className="product-item" style={{marginTop:"50px"}}>
          <h4 className="item-name">Total Price</h4>
          <h4 className="item-price">400 $</h4>
       </div>
      <div className="item-center" style={{marginTop:"40px"}}>
          <NavLink to="/" className="btn text-center"> Print Now </NavLink>
        </div>
    </div>
    
  );
}

export default PrintData;