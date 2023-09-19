import { useRef } from 'react';
import sublinks from '../data';
import { useGlobalContext } from '../context/context';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);

  const handleOnMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1)
      setPageId(null);
  };

  return (
    <div
      className={`submenu ${currentPage ? 'show-submenu' : ''}`}
      onMouseLeave={handleOnMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links.map(({ id, label, icon, url }) => {
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
