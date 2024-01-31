import './App.css';

//new functional Component
const Person = (props) => {
  return(
  <>
   <h1>First Name : {props.name}</h1>
   <h2>Last Name : {props.lastName}</h2>
   <h2>Age : {props.Age}</h2>
  </>
)}

const App = () => {
  return (
    <div className="App">
      < Person name = {'John'} lastName = {'Doe'} Age = {30}/>
      < Person name = {'Kyle'} lastName = {'Mayers'} Age = {32}/>
      < Person name = {'Manpreet'} lastName = {'Singh'} Age = {40}/>
      < Person name = {'Jaden'} lastName = {'Dernbach'} Age = {32}/>
      < Person name = {'Rahul'} lastName = {'Sharma'} Age = {45}/>
    </div>
  );
}

export default App;
