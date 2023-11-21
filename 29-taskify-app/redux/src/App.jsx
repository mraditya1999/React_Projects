import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { TaskForm, TaskItem } from './components';

function App() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className='bg-[#172842] min-h-screen py-8'>
      <ToastContainer
        position='top-center'
        autoClose={500}
        draggable={false}
        pauseOnHover={false}
      />
      <h1 className='text-4xl font-bold text-center my-6 uppercase text-white'>
        Taskify
      </h1>
      <div className='w-[90vw] max-w-[600px] mt-12 mx-auto shadow-md rounded-lg p-6 border border-gray-100 text-white'>
        <h2 className='text-center mb-6 text-2xl '>Manage Your Tasks</h2>
        <div className='mb-4'>
          <TaskForm />
        </div>
        <div className='flex flex-wrap gap-y-3'>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className='w-full'>
                <TaskItem {...task} />
              </div>
            ))
          ) : (
            <p className='text-center w-full capitalize mt-8'>
              No tasks to display
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
