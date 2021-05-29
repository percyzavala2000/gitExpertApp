import React, { useState } from "react";
import PropTypes from 'prop-types'

const AddCategoria = ({ setCategorias }) => {
  // const { setCategorias } = props;
  const [inputValue, setInputValue] = useState(String);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
       setCategorias((cast) => [inputValue, ...cast]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <input type="submit" value="Agregar" />
    </form>
  );
};

export default AddCategoria;

AddCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
