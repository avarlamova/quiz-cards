import React from "react";

const Reset = ({ clearList }) => {
  return (
    <button className="btn btn-secondary m-3" onClick={clearList}>
      Clear the list
    </button>
  );
};

export default Reset;
