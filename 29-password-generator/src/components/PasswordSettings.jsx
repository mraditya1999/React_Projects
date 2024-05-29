const PasswordSettings = ({
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
  onToggleSetting,
}) => {
  return (
    <div className='settings'>
      <span className='settings__title field-title'>settings</span>
      {[
        { label: 'Uppercase', state: includeUppercase },
        { label: 'Lowercase', state: includeLowercase },
        { label: 'Numbers', state: includeNumbers },
        { label: 'Symbols', state: includeSymbols },
      ].map(({ label, state }, index) => (
        <div className='setting' key={index}>
          <input
            type='checkbox'
            id={label.toLowerCase()}
            checked={state}
            onChange={() => onToggleSetting(label)}
          />
          <label htmlFor={label.toLowerCase()}>Include {label}</label>
        </div>
      ))}
    </div>
  );
};

export default PasswordSettings;
