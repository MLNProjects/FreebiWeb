import * as React from "react";

const FormInput = ({ label, name, type, placeholder }) => {
  return (
    <div>
      <p>{label}</p>
      <label>
        <input name={name} type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default FormInput;
