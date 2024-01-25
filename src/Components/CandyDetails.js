import React from "react";
import PropTypes from "prop-types";

function CandyDetail(props) {
  console.log(props)
  return (
    <React.Fragment>
      <h1>Candy Name: {props.selectedCandy.candy}</h1>
      <p>Candy Price: {props.selectedCandy.price}</p>
      <p>Candy Description: {props.selectedCandy.description}</p>
      <p>Quantity Remaining: {props.selectedCandy.quantity}</p>
      <button>Edit Candy Details</button>
      {/* users should be able to "sell" a candy and see quantity decrease but not go below 0 */}
      <button>Sell Candy </button> 
    </React.Fragment>
  );
}

CandyDetail.propTypes = {
  selectedCandy: PropTypes.object.isRequired,
}

export default CandyDetail;