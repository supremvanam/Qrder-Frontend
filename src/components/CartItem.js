import React, { useEffect, useState } from 'react';
import CartSingleItem from "./CartSingleItem";
import { getAllOrder } from '../Controller/api';
import { NavLink } from 'react-router-dom';

function CartItem() {
  
  const [order, setOrder] = useState([]);
    useEffect(() => {
      getOrders();
    }, [])

    const getOrders = async () =>{
        const response = await getAllOrder();
        //console.log(response.data);
        setOrder(response.data);
    }
  
  return (
    <div className="card">
        <h2 style={{marginBottom:"40px",textAlign:"center"}}>CART</h2>

        {
            order.map((data) => (
              <CartSingleItem key={data.id} itemId={data.id} itemTitle={data.name} itemPrice={data.price} />
            ))
        }
        
        <div className="product-item" style={{marginTop:"50px"}}>
        <span className="item-id"></span>
            <h4 className="item-name" style={{paddingLeft:"40px"}}>Total</h4>
            <h4 className="item-price">$ { order.reduce((a,b) =>  a = a + b.price , 0 ) }</h4>
       </div>
        <div className="item-center" style={{marginTop:"40px"}}>
            <NavLink to="/pay" className="btn text-center"> Pay Now </NavLink>
        </div>

    </div>
    
  );
}

export default CartItem;