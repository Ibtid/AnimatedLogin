import { useState } from "react";

const useForm = (callBack) => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //handling errors
    callBack();
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
