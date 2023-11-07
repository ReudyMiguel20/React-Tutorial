import './App.css';
import Job from './Job.jsx'
import User from './User.jsx'

function App() {
  // const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Reudy"];
  const users = [
    { name: "Pedro", age: 21},
    { name: "Jake", age: 25},
    { name: "Jessica", age: 34}
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <User name={user.name} age={user.age} />
      );
      })}
    </div>
  );
}

// Things that I've removed from the return in App Function from past lessons



    // <div className="App">
    //   <Job salary={90000} position="Senior SDE" company="Amazon" />
    //   <Job salary={12000} position="Junior SDE" company="Google" />
    //   <Job salary={10000} position="Project Manager" company="Netflix" />
    // </div>




    // const age = 17;
    // const isGreen = true;

    // <div className="App">
    //   {age >= 18 ? <h1>Over age</h1> : <h1>Under Age</h1>}
    //   <h1 style={{ color: isGreen ? "green" : "red" }}> THIS HAS COLOR </h1>
    // </div>


// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.email}</h2>
//     </div>
//   );
// }

export default App;
