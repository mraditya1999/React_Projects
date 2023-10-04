import { useFetchProjects } from './fetchProjects';

const BtnContainer = () => {
  const { projects } = useFetchProjects();

  let categories = [
    'all',
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            key={category}
            type='button'
            className='btn filter-btn'
            // onClick={}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
