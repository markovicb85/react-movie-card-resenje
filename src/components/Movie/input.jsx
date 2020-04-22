import React from "react";

const Input = ({ inputId, label, value, errors, onChange }) => {
  return (
    <div>
      <label htmlFor="{inputId}">{label}</label>
      <input
        type="text"
        className="form-control mb-3"
        name={label}
        id={inputId}
        value={value}
        onChange={onChange}
        onBlur={onChange}
      />
      {errors.map((error) =>
        error.id === inputId ? (
          <div className="alert alert-danger">{error.message}</div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Input;
