import { useState } from 'react';
import { FaPencilAlt, FaFolderOpen, FaTrashAlt } from 'react-icons/fa';
import { useTaskContext } from '../contexts';

const TaskItem = ({ id, task, isCompleted }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [taskMsg, setTaskMsg] = useState(task);
  const { updateTask, deleteTask, toggleIsCompleted } = useTaskContext();

  const editTask = () => {
    updateTask(id, { id, isCompleted, task: taskMsg });
    setIsEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-md px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        isCompleted ? 'bg-blue-100' : 'bg-slate-100'
      }`}
    >
      <input
        type='checkbox'
        className='cursor-pointer'
        checked={isCompleted}
        onChange={() => toggleIsCompleted(id)}
      />
      <input
        type='text'
        value={taskMsg}
        onChange={(e) => setTaskMsg(e.target.value)}
        readOnly={!isEditable}
        className={`border outline-none w-full bg-transparent rounded-md capitalize ${
          isEditable ? 'border-gray-300 px-2 py-2' : 'border-transparent'
        } ${isCompleted ? 'line-through' : ''}`}
      />

      {/* Edit, Save Button */}
      <button
        className='inline-flex w-8 h-8 rounded-md text-sm border border-gray-300 justify-center items-center bg-white hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
          if (isCompleted) return;
          if (isEditable) editTask();
          else setIsEditable((prev) => !prev);
        }}
        disabled={isCompleted}
      >
        {isEditable ? <FaFolderOpen /> : <FaPencilAlt />}
      </button>

      {/* Delete Todo Button */}
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-white hover:bg-gray-100  shrink-0'
        onClick={() => deleteTask(id)}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default TaskItem;
