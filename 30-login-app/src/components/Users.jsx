import { useSelector } from 'react-redux';

const Users = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <div className='w-[90vw] max-w-screen-xl mx-auto relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
        <thead className='text-md text-gray-700 uppercase bg-gray-100  '>
          <tr>
            <th className='bg-gray-900 text-white border-r px-6 py-5 text-center'>
              id
            </th>
            <th className='bg-gray-900 text-white border-r px-6 py-5'>Users</th>
            <th className='bg-gray-900 text-white border-r px-6 py-5'>
              Username
            </th>
            <th className='bg-gray-900 text-white border-r px-6 py-5'>
              Gender
            </th>
            <th className='bg-gray-900 text-white border-r px-6 py-5'>City</th>
            <th className='bg-gray-900 text-white border-r px-6 py-5'>State</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

const UserRow = ({ user }) => {
  const {
    id,
    image,
    username,
    firstName,
    lastName,
    email,
    gender,
    address: { city, state },
  } = user;

  return (
    <tr
      key={id}
      className='bg-white border-b  hover:bg-gray-100 cursor-pointer'
    >
      <th className='border-r text-center w-auto px-6 py-4'>{id}</th>
      <td className='border-r flex items-center px-6 py-4 text-gray-900 whitespace-nowrap '>
        <img className='w-10 h-10 rounded-full' src={image} alt={username} />
        <div className='ps-3'>
          <div className='text-base font-semibold'>
            {firstName} {lastName}
          </div>
          <div className='font-normal text-gray-500 hover:text-blue-500 duration-300'>
            {email}
          </div>
        </div>
      </td>
      <td className='border-r px-6 py-4'>{username}</td>
      <td className='capitalize border-r px-6 py-4'>{gender}</td>
      <td className='border-r px-6 py-4'>{city}</td>
      <td className='border-r px-6 py-4'>{state}</td>
    </tr>
  );
};
