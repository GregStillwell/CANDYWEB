import React from 'react';
import PropTypes from 'prop-types';

function EditCandyForm (props) {
  const { candy } = props;

  function handleEditCandyFormSubmission(event) {
    event.preventDefault();
    props.onEditCandy({
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      id: candy.id
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditCandyFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input 
          type='text'
          name='description '
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
  tea: PropTypes.object
};

export default EditCandyForm;