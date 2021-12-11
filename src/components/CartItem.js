import React from "react";
import CartSingleItem from "./CartSingleItem";
import { NavLink } from 'react-router-dom';

function CartItem() {
  return (
    <div className="card">
        <h2 style={{marginBottom:"40px",textAlign:"center"}}>CART</h2>
        <CartSingleItem itemTitle="Chicken Pizza" itemPrice="55 $" />
        <CartSingleItem itemTitle="Double Cheese Burger" itemPrice="05 $" />
        <CartSingleItem itemTitle="Quesadilla" itemPrice="70 $" />
        <CartSingleItem itemTitle="Chicken Pizza" itemPrice="80 $" />
        <div className="product-item" style={{marginTop:"50px"}}>
            <h4 className="item-name">Total</h4>
            <h4 className="item-price">400 $</h4>
       </div>
        <div className="item-center" style={{marginTop:"40px"}}>
            <NavLink to="/pay" className="btn text-center"> Pay Now </NavLink>
        </div>

    </div>
    
  );
}

export default CartItem;