import React from "react";

const Input = ({ id, label, value, errors, onChange }) => {
  return (
    <div>
      <label htmlFor="{id}">{label}</label>
      <input
        type="text"
        className="form-control mb-3"
        name={label}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onChange}
      />
      {errors.map((error) =>
        error.id === id ? (
          <div className="alert alert-danger">{error.message}</div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Input;
