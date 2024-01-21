import React from "react";
import PropTypes from "prop-types";


function Inventory(props) {
  return (
    <React.Fragment>
      <h1>{props.candy}:</h1>
      <h3>Candy you bought cost {props.price}.</h3>
      <p>{props.description}</p>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  candy: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

export default Inventory;