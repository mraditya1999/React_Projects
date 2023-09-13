import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidV4 } from 'uuid';

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidV4();
        return (
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
