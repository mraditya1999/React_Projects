import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    // TASKS
    createTask: (state, action) => {
      if (
        state.tasks.some((taskItem) => taskItem.task === action.payload.task)
      ) {
        toast.error('Task already exists!');
        return;
      }

      state.tasks.push({
        id: nanoid(),
        task: action.payload.task,
        isCompleted: false,
      });
      toast.success('Task added successfully!');
    },

    updateTask: (state, action) => {
      if (!action.payload) {
        toast.error('Payload is required for updateTask action');
        return;
      }

      const { id, task, isCompleted } = action.payload;
      const trimmedTask = task.trim();

      if (!trimmedTask) {
        toast.error('Task cannot be empty');
        return;
      }

      if (state.tasks.some((t) => t.task === trimmedTask && t.id !== id)) {
        toast.error('Task already exists');
        return;
      }

      if (trimmedTask.length > 50) {
        toast.error('Task is too long');
        return;
      }

      const taskItem = state.tasks.find((task) => task.id === id);

      if (taskItem) {
        taskItem.task = trimmedTask;
        taskItem.isCompleted = isCompleted;
        toast.success('Task updated successfully!');
      } else {
        toast.error(`Task with id ${id} not found`);
      }
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      toast.success('Task Deleted Successfully!');
    },

    toggleIsCompleted: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },

    // STORAGE
    setStorageItem: (state) => {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    getStorageItem: (state) => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) {
        state.tasks = storedTasks;
      }
    },
  },
});

export const {
  createTask,
  updateTask,
  deleteTask,
  toggleIsCompleted,
  setStorageItem,
  getStorageItem,
} = taskSlice.actions;

export default taskSlice.reducer;
