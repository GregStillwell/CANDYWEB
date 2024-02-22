import React from 'react';
import PropTypes from 'prop-types';

function EditCandyForm(props) {
  const { candy } = props;

  function handleEditCandyFormSubmission(event) {
    event.preventDefault();
    props.onEditCandy({
      candy: event.target.candy.value,
      price: parseInt(event.target.price.value),
      description: event.target.description.value,
      quantity: candy.quantity,
      id: candy.id
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditCandyFormSubmission}>
        <input
          type='text'
          name='candy'
          placeholder='Name' />
        <input
          type='text'
          name='description'
          placeholder='' />
        <input
          name='price'
          placeholder='Price per candy' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

EditCandyForm.propTypes = {
  onEditCandy: PropTypes.func,
  Candy: PropTypes.object
};

export default EditCandyForm;