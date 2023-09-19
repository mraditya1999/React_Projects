import sublinks from '../data';
import { useGlobalContext } from '../context/context';

const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className='nav-links'>
      {sublinks.map(({ pageId, page }) => {
        return (
          <button
            type='button'
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Navlinks;
