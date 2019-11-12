import * as React from "react";

const FormInput = ({ label, name, type, placeholder, labelClass }) => {
  return (
    <div>
      <p id="input-label">{label}</p>
      <label>
        <input name={name} type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default FormInput;
