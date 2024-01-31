import './App.css';

const App = () => {
  const name = null;
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello {2 + 2}</h1>
      {name ? (
      <>
        test
      </>
      ) : (
        <>
          <h1>test</h1>
          <h2>There is no name.</h2>
        </>
      )}

    </div>
  );
}

export default App;
