import React from "react";

const TableData = ({ datas }) => (
  <div>
    <p>Loops :)</p>
    <ul>
      {datas.map((value, index) => {
          return <li key={index}>{value}</li>;
      })}
    </ul>
  </div>
);

export default TableData;
