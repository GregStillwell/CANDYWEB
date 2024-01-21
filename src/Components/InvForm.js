import React from "react";
import PropTypes from "prop-types";

function InvForm(props) {
  return (
    <>
    <form>
      <input 
      type="text"
      name="Candy"
      placeholder="Candy"
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
      <input 
      type="number"
      name="quantity"
      min="0"
      max="500"
      defaultValue="130"
      placeholder="QUANTITY"
      required />
      <br />
      <button type="submit"></button>
    </form>
    </>
  )
}