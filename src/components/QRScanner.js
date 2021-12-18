import React, { Component } from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin.jsx";
import logoPNG from "../images/qrder-logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const QRScanner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (onNewScanResult.decodedText != "") {
      navigate("/product");
    }
  }, []);

  return (
    <div className="App">
      <img alt="Qrder Logo" className="logo" src={logoPNG} />
      &nbsp;&nbsp;
      <section className="App-section">
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </section>
      &nbsp;
      <div className="item-center">
        <NavLink to="/product" className="btn text-center">
          {" "}
          View Menu{" "}
        </NavLink>
      </div>
    </div>
  );
};

const onNewScanResult = (decodedText, decodedResult) => {
  console.log("App [result]", decodedResult.decodedText);
  console.log("Decoded Text is", decodedText);

  // let decodedResults = this.state.decodedResults;
  // decodedResults.push(decodedResult);
  this.setState((state, props) => {
    state.decodedResults.push(decodedResult);
    // navigate("/home");
    return state;
  });
};

export default QRScanner;
