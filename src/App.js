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
        <h1>test</h1>
      )}

    </div>
  );
}

export default App;
