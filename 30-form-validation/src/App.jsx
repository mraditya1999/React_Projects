import Form from './components/Form';

function App() {
  const backgroundStyles = {
    backgroundColor: `linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    )`,
    backgroundImage: `url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center py-8'
      style={backgroundStyles}
    >
      <Form />
    </div>
  );
}

export default App;
