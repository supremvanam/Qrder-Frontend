import React, { useEffect, useState } from 'react';
import Todo from "./MenuItem";
import { getAllMenu } from '../Controller/api';
import { NavLink } from 'react-router-dom';

function Product() {

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getMenus();
  }, [])

  const getMenus = async () =>{
      const response = await getAllMenu();
      //console.log(response.data[0].menus);
      setMenu(response.data[0].menus);
  }

  return (
    <div>
        <h1>Commune Restaurant</h1>

        {
            menu.map((data) => (
              <Todo key={data.name} dishTitle={data.name} dishDescription={data.price} />
            ))
        }

        <div className="item-center">
          <NavLink to="/cart" className="btn text-center"> View Cart </NavLink>
        </div>
        
    </div>
  );
}

export default Product;