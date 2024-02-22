import React from "react";
import PropTypes from "prop-types";

function CandyDetail(props) {
  const { selectedCandy, onClickingEdit, onClickingSale } = props;

  return (
    <React.Fragment>
      <h1>Candy Name: {selectedCandy.candy}</h1>
      <p>Candy Price: {selectedCandy.price}</p>
      <p>Candy Description: {selectedCandy.description}</p>
      <p>Quantity Remaining: {selectedCandy.quantity}</p>
      <button onClick={() => onClickingEdit()}>Edit Candy</button>
      <button onClick={() => onClickingSale(selectedCandy.id)}>Sell Candy</button>
    </React.Fragment>
  );
}

CandyDetail.propTypes = {
  selectedCandy: PropTypes.object.isRequired,
  onClickingEdit: PropTypes.func,
  onClickingSale: PropTypes.func
};

export default CandyDetail;