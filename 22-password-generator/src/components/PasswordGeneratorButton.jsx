const PasswordGeneratorButton = ({ onGeneratePassword }) => {
  return (
    <button className='btn generate' id='generate' onClick={onGeneratePassword}>
      Generate Password
    </button>
  );
};

export default PasswordGeneratorButton;
