import './App.css';
import Job from './Job.jsx'
import User from './User.jsx'
import Planet from './Planet.jsx'
import { useState } from "react";

function App() {
  const [count, setCount] = useState (0);

  return (
    <div className="App">
      <button onClick={ () => {
        setCount(count + 1);
      }}
      >Increase</button>

      <button onClick={ () => {
        setCount(count - 1);
      }}
      >Decrease</button>

      <button onClick={ () => {
        setCount(0);
      }}
      >Reset to Zero</button>

      {count}
    </div>
  );
}







  // Things that I've removed from the return in App Function from past lessons

  // const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Reudy"];
  // const planets = [
  //   { name: "Mars", isGasPlanet: false },
  //   { name: "Earth", isGasPlanet: false },
  //   { name: "Jupiter", isGasPlanet: true },
  //   { name: "Venus", isGasPlanet: false },
  //   { name: "Neptune", isGasPlanet: true },
  //   { name: "Uranus", isGasPlanet: true }
  // ];

  // return (
  //   <div className="App">
  //     {planets.map((planet, key) => {
  //       return (
  //         planet.isGasPlanet && <Planet name={planet.name} />
  //       );
  //     })}
  //   </div>
  // );





  // const users = [
  //   { name: "Pedro", age: 21},
  //   { name: "Jake", age: 25},
  //   { name: "Jessica", age: 34}
  // ];

  // return (
  //   <div className="App">
  //     {users.map((user, key) => {
  //       return (
  //         <User name={user.name} {user.age}/>
  //     );
  //     })}
  //   </div>
  // );




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
