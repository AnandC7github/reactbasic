import './App.css';

const App = () => {
  const name = 'John';
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello {2 + 2}</h1>
      {name ? (
      <>
        test
      </>
      ) : (
        test
      )}

    </div>
  );
}

export default App;
