/* eslint-disable react/jsx-key */
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    fetch("https://api.agify.io/?name=" + name)
      .then((res) => res.json())
      .then((data) => {
        setPredictedAge(data);
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <input placeholder="Ex. Pedro..." onChange={handleNameChange} />
      <button onClick={fetchData}> Predict Age</button>

      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;

// Things that I've removed from the return in App Function from past lessons

// const [catFact, setCatFact] = useState("");

// const fetchCatFact = () => {
//   fetch("https://catfact.ninja/fact")
// 	.then((res) => res.json())
// 	.then((data) => {
// 	  setCatFact(data.fact);
// 	});
// };

// useEffect(() => {
//   fetchCatFact();
// }, []);

// return (
//   <div className="App">
// 	<button onClick={fetchCatFact}> Generate Cat Fact </button>
// 	<p>{catFact}</p>
//   </div>
// );

// const [todoList, setTodoList] = useState([]);
// const [newTask, setNewTask] = useState("");

// const handleChange = (event) => {
// 	setNewTask(event.target.value);
// };

// const addTask = () => {
// 	const Task = {
// 		id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
// 		taskName: newTask,
// 		completed: false
// 	};

// 	setTodoList([...todoList, Task]);
// };

// const deleteTask = (id) => {
// 	setTodoList(todoList.filter((task) => task.id !== id));
// };

// const completeTask = (id) => {
// 	setTodoList(
// 		todoList.map((task) => {
// 			if (task.id === id) {
// 				return { ...task, completed: true };
// 			} else {
// 				return task;
// 			}
// 		})
// 	);
// };

// return (
// 	<div className="App">
// 		<div className="addTask">
// 			<input type="text" onChange={handleChange} />
// 			<button onClick={addTask}>Add Task</button>
// 		</div>

// 		<div className="list">
// 			{todoList.map((task) => {
// 				return (
// 					<Task
// 						id={task.id}
// 						taskName={task.taskName}
// 						completed={task.completed}
// 						deleteTask={deleteTask}
// 						completeTask={completeTask}
// 					/>
// 				);
// 			})}
// 		</div>
// 	</div>
// );

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
