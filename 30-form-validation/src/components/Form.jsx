import { useState } from 'react';
import FormInput from './FormInput';

const Form = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => e.preventDefault();
  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={handleSubmit}
      className='w-[90vw] max-w-[472px] bg-white px-8 rounded-xl'
    >
      <h1 className='text-4xl uppercase mt-12 text-purple-500 font-bold mb-6 text-center'>
        Register
      </h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          value={values[input.name]}
          onChange={onChange}
          confirmPassword={values.password}
          {...input}
        />
      ))}
      <button className='w-full h-12 p-3 bg-purple-500 rounded-md font-semibold text-white text-xl cursor-pointer mt-4 mb-8'>
        Submit
      </button>
    </form>
  );
};

export default Form;
