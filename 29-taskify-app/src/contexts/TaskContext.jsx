import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskContext = createContext();
export const useTaskContext = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getStorageItem());
  }, []);

  useEffect(() => {
    setStorageItem();
  }, [tasks]);

  // STORAGE
  const setStorageItem = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const getStorageItem = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };

  // TASKS
  const createTask = (task) => {
    if (tasks.some((taskItem) => taskItem.task === task.task)) {
      toast.error('Task already exists!');
      return;
    }
    setTasks((prev) => [{ id: Date.now(), ...task }, ...prev]);
    toast.success('Task added successfully!');
  };

  const updateTask = (id, updatedTask) => {
    setTasks((prev) => {
      return prev.map((taskItem) => {
        if (taskItem.id === id) {
          if (
            taskItem.task === updatedTask.task &&
            taskItem.isCompleted === updatedTask.isCompleted
          ) {
            toast.info('No changes to update!');
            return taskItem;
          }
          toast.success('Task Updated Successfully!');
          return updatedTask;
        }
        return taskItem;
      });
    });
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast.success('Task Deleted Successfully!');
  };

  const toggleIsCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => {
        if (prevTask.id === id) {
          const updatedTask = {
            ...prevTask,
            isCompleted: !prevTask.isCompleted,
          };
          toast.info(
            updatedTask.isCompleted ? 'Task Completed!' : 'Task Incomplete!'
          );
          return updatedTask;
        }
        return prevTask;
      })
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
        toggleIsCompleted,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
