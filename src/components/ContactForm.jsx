import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Button } from 'styles/Styles';

const ContactForm = ({onSubmit}) => {

  const [formData, setFormData] = useState({name:'', number:''});


  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddNewContactOnSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };


    return (
      <form onSubmit={handleAddNewContactOnSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChangeInput}
          />
        </Label>
        <Label>
          Number
          <input
            type="tel"
            name="number"
            value={formData.number}
            required
            onChange={handleChangeInput}
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </form>
    );
  }

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};