import React from "react";
import Product from "./components/Product";
import CartItem from "./components/CartItem";
import OrderItem from "./components/OrderItem";
import PrintData from "./components/PrintData";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={ <Product />} />
        <Route path='/cart' element={ <CartItem />} />
        <Route path='/pay' element={ <OrderItem />} />
        <Route path='/print' element={ <PrintData />} />
    </Routes>
    </Router>

  );
}
export default App;
