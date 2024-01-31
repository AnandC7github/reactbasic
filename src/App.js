import './App.css';

//new functional Component
const Person = () => {
  return(
  <>
   <h1>First Name : John</h1>
   <h2>Last Name : Doe</h2>
   <h3>Age : 30</h3>
  </>
)}

const App = () => {
  return (
    <div className="App">
      <h1>Hello {2 + 2}</h1>
    </div>
  );
}

export default App;
