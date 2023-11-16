import { useTaskContext } from '../contexts';
import { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const { createTask } = useTaskContext();

  const addTask = (e) => {
    e.preventDefault();
    if (!task) return;
    createTask({ task: task, isCompleted: false });
    setTask('');
  };

  return (
    <form onSubmit={addTask} className='flex'>
      <input
        type='text'
        placeholder='Enter Your Task...'
        className='w-full border text-gray-900 capitalize rounded-l-md px-3 outline-none duration-300 bg-gray-100 py-1.5'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type='submit'
        className='flex items-center gap-2 rounded-r-lg px-6 py-1 bg-sky-400 duration-300 hover:bg-sky-600 text-white shrink-0'
      >
        Create
      </button>
    </form>
  );
};

export default TaskForm;
