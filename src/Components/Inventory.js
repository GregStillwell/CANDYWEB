import React from "react";
import PropTypes from "prop-types";


function Inventory(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCandyClicked(props.id)}>
        <h1>{props.candy}:</h1>
        {/* <h3>Candy you bought cost {props.price}.</h3>
      <p>{props.description}</p> */}
      </div>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  candy: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  whenCandyClicked: PropTypes.func
}

export default Inventory;