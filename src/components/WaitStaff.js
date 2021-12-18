import React from "react";
import { NavLink } from "react-router-dom";
import logoPNG from "../images/qrder-logo.png";
import TableCell from "./TableCell";

const WaitStaff = ({ restaurantName }) => {
  return (
    <div>
      <img alt="Qrder Logo" className="logo" src={logoPNG} />
      <h1>{restaurantName}</h1>
      <TableCell tableNumber="Table No. 7" />
      <TableCell tableNumber="Table No. 1" />
      <TableCell tableNumber="Table No. 3" />
    </div>
  );
};

WaitStaff.defaultProps = {
  restaurantName: "Commune Restaurant",
};

export default WaitStaff;
