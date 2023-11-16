import { useTaskContext } from './contexts';
import { TaskForm, TaskItem } from './components';

const App = () => {
  const { tasks } = useTaskContext();
  return (
    <div className='bg-[#172842] min-h-screen py-8'>
      <h1 className='text-4xl font-bold text-center my-6 uppercase text-white'>
        Taskify
      </h1>
      <div className='w-[90vw] max-w-[600px] mt-12 mx-auto shadow-md rounded-lg p-6 border border-gray-100 text-white'>
        <h2 className='text-center mb-6 text-2xl '>Manage Your Tasks</h2>
        <div className='mb-4'>
          <TaskForm />
        </div>
        <div className='flex flex-wrap gap-y-3'>
          {tasks.map((task) => {
            return (
              <div key={task.id} className='w-full'>
                <TaskItem {...task} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
