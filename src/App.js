import './App.css';

//new functional Component
const Person = () => {
  return(
  <>
   <h1>First Name : John</h1>
   <h2>Last Name : Doe</h2>
   <h2>Age : 30</h2>
  </>
)}

const App = () => {
  return (
    <div className="App">
      < Person />
      < Person />
      < Person />
      < Person />
      < Person />
    </div>
  );
}

export default App;
