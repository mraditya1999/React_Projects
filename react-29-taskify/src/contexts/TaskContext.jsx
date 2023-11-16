import { createContext, useContext, useEffect, useState } from 'react';

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
    setTasks((prev) => [{ id: Date.now(), ...task }, ...prev]);
  };

  const updateTask = (id, task) => {
    setTasks((prev) =>
      prev.map((taskItem) => (taskItem.id === id ? task : taskItem))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleIsCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, isCompleted: !prevTask.isCompleted }
          : prevTask
      )
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
