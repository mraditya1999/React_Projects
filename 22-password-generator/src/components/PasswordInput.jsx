const PasswordInput = ({ generatedPassword, onGeneratePassword }) => {
  return (
    <input
      type='text'
      value={generatedPassword}
      onChange={onGeneratePassword}
    />
  );
};

export default PasswordInput;
