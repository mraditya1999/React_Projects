const AchievementCard = ({ bgColor, icon, iconColor, number, title }) => {
  return (
    <article className={`py-6 flex px-2 rounded-lg ${bgColor}`}>
      <div className='p-4 rounded-xl'>
        <span style={{ color: iconColor }}>{icon}</span>
      </div>
      <div className='px-3'>
        <h1 className='text-2xl font-semibold'>{number}</h1>
        <p className='text-grey-500'>{title}</p>
      </div>
    </article>
  );
};
export default AchievementCard;
