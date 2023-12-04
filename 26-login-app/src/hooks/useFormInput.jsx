import { useState } from 'react';

const useFormInput = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) =>
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  return [values, handleChange];
};
export default useFormInput;
