import { avatar, quotationMark } from '../../assets';

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow:sm hover:shadow-md duration-300 my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img src={avatar} />
          <div>
            <h1>Jenny Wilson</h1>
            <p>UI-UX Designer</p>
          </div>
        </div>
        <img className='h-8' src={quotationMark} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nihil
          nemo optio in blanditiis sequi cupiditate. Accusantium distinctio
          consequatur eveniet commodi aliquam animi harum nisi nesciunt!
          Distinctio sunt cum modi?
        </h3>
      </div>
    </div>
  );
};

export default FeedbackCard;
