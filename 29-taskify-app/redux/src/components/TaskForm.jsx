import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTask,
  setStorageItem,
  getStorageItem,
} from '../features/taskify/taskifySlice';
import { toast } from 'react-toastify';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getStorageItem());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setStorageItem(tasks));
  }, [tasks, dispatch]);

  const addTask = (e) => {
    e.preventDefault();
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      toast.error('Input field is required!');
      return;
    }
    if (trimmedTask.length > 50) {
      toast.error('Task is too long!');
      return;
    }
    dispatch(createTask({ task: task, isCompleted: false }));
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
        maxLength={50}
      />
      <button
        type='submit'
        className='flex items-center gap-2 rounded-r-lg px-6 py-1 bg-sky-400 duration-300 hover:bg-sky-600 text-white shrink-0'
      >
        Add
      </button>
    </form>
  );
};
export default TaskForm;
