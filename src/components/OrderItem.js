import React, { useEffect, useState } from 'react';
import CartSingleItem from "./CartSingleItem";
import { getAllOrder } from '../Controller/api';
import { NavLink } from 'react-router-dom';

function OrderItem() {
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
        <div className='printme' style={{padding:"40px", border:"1px solid black"}}>
            <h2 style={{marginBottom:"10px",textAlign:"center"}}>ORDER SUCCESSFUL</h2>
            <h4 style={{marginBottom:"10px",textAlign:"center"}}>ORDER OVERVIEW</h4>
            {
                order.map((data) => (
                  <CartSingleItem key={data.id} itemId={data.id} itemTitle={data.name} itemPrice={data.price} />
                ))
            }
            
            <div className="product-item" style={{marginTop:"20px"}}>
                <span className="item-id"></span>
                <h4 className="item-name" style={{paddingLeft:"40px"}}>Total</h4>
                <h4 className="item-price" >$ { order.reduce((a,b) =>  a = a + b.price , 0 ) }</h4>
            </div>
       </div>
       <div className="item-center no-printme" style={{marginTop:"40px",marginBottom:"40px"}}>
          <NavLink to="/" className="btn text-center"> Product Page </NavLink>
          <p onClick={() => window.print()} className="btn text-center"> Print Now </p>
       </div>
    </div>
    
  );
}

export default OrderItem;