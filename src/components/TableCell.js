import React from "react";
import { NavLink } from "react-router-dom";

const TableCell = ({ tableNumber }) => {
  return (
    <div className="card">
      <h2>{tableNumber}</h2>
    </div>
  );
};

TableCell.defaultProps = {
  tableNumber: "Table 1",
};

export default TableCell;
