import React from "react";
import logoPNG from "../images/qrder-logo.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <a className="restaurant-btn">Restaurant Staff</a>
      </div>
      &nbsp;
      <img className="logo" src={logoPNG} />
      <h1 className="tagline-heading">Qrder</h1>
      <p className="tagline-paragraph">
        Qrder, pronounced as “Qorder” is a web application that provides digital
        menus and online food ordering services to the local restaurants.
      </p>
      <p className="tagline-props" style={{ marginTop: "140px" }}>
        Ready to order?
      </p>
      <div className="item-center">
        <NavLink to="/scan" className="btn text-center">
          {" "}
          Scan a QR Code{" "}
        </NavLink>
      </div>
      <footer className="footer">
        Copyright © 2021 Qrder. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
