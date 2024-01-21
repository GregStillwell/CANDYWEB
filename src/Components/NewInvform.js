import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewInvForm(props) {

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewInvCreation({
      candy: event.target.candy.value,
      price: event.target.price.value,
      description: event.target.description.value,
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
      type="text"
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
      <label for="quantity">QUANTITY: </label>
      <input
      type="number"
      name="quantity"
      min="0"
      max="130"
      defaultValue="130"
      placeholder="QUANTITY"
      required />
      <br />
      <button type ="submit">AWW YISS</button>
    </form>
    </React.Fragment>
  );
}

NewInvForm.propTypes = {
  onNewInvCreation: PropTypes.func
};

export default NewInvForm;