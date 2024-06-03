import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';

const Profile = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location)
      return toast.error('please fill out all fields');
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
