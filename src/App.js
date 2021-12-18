import React from "react";
import Home from "./components/Home";
import QRCode from "./components/QRCode";
import Product from "./components/Product";
import CartItem from "./components/CartItem";
import OrderItem from "./components/OrderItem";
import TableSelection from "./components/TableSelection";
import WaitStaff from "./components/WaitStaff";
import QRScanner from "./components/QRScanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<QRScanner />} />

        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/pay" element={<OrderItem />} />

        <Route path="/staff" element={<WaitStaff />} />
        <Route path="/selecttable" element={<TableSelection />} />

        {/* <Route path='/print' element={ <PrintData />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
