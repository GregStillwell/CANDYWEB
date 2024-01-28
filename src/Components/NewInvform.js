import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewInvForm(props) {

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewInvCreation({
      candy: event.target.candy.value,
      price: parseInt(event.target.price.value),
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewFormSubmission}>
        <input
          type="text"
          name="candy"
          placeholder="CANDY"
          required />
        <br />
        <input
          type="numbers"
          name="price"
          placeholder="PRICE"
          required />
        <br />
        <input
          type="text"
          name="description"
          placeholder="DESCRIPTION"
          required />
        <br />
        <label htmlFor="quantity">QUANTITY: </label>
        <input
          type="number"
          name="quantity"
          min="0"
          max="130"
          defaultValue="130"
          placeholder="QUANTITY"
          required />
        <br />
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
}

NewInvForm.propTypes = {
  onNewInvCreation: PropTypes.func
};

export default NewInvForm;