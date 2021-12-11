import React from "react";
import Todo from "./MenuItem";
import { NavLink } from 'react-router-dom';

function Product() {
  return (
    <div>
        <h1>Commune Restaurant</h1>
        <Todo
        dishTitle="Chicken Pizza"
        dishDescription="BBQ Chicken Pizza with Fresh Mozzarella and Pickled Jalapeños Recipe"
        />
        <Todo
        dishTitle="Double Cheese Burger - Test"
        dishDescription="Juicy, big, loaded with toppings of your choice"
        />
        <Todo
        dishTitle="Quesadilla"
        dishDescription="Flour tortillas filled with Chihuahua cheese and pico de gallo"
        />
        <div className="item-center">
          <NavLink to="/cart" className="btn text-center"> View Cart </NavLink>
        </div>
        
    </div>
  );
}

export default Product;