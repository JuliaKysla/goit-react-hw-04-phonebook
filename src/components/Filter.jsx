import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, filteredContacts }) => {
  return (
    <input
    value={value}
      name="filter"
      onChange={filteredContacts}
      placeholder="Find contact by name"
    />
  );
};

Filter.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
};

export default Filter;