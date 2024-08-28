import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// todo app
function App() {
  const [todo, setTodos] = useState([
    {
      title: "go to gym",
      description: "go to gym from 7 to 9",
      completed: false,
    },
    {
      title: " study DSA",
      description: "study DSA from 9 to 100",
      completed: true,
    },
    {
      title: " study DSA",
      description: "study DSA from 9 to 100",
      completed: true,
    },
  ]);
  function addTodo() {
    setTodos([
      ...todo,
      {
        title: "new todo",
        description: " desc to new todo",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>add todo</button>
      {/* <Todo title ={todo[0].title} description= {todo[0].description}></Todo>
    <Todo title ={todo[1].title} description= {todo[1].description}></Todo> */}
      {todo.map(function (tdo) {
        return <Todo title={todo[0].title} description={todo[0].description} />;
      })}
    </div>
  );
}
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

// counter app
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//       <CustomButton count={count +1} setCount={setCount}></CustomButton>
//       <CustomButton count={count -1} setCount={setCount}></CustomButton>
//       <CustomButton count={count *10} setCount={setCount}></CustomButton>
//     </div>
//   );

//   function CustomButton(props) {

//     function onClickHandler() {
//       props.setCount(count + 1);
//     }
//     return <button onClick={onClickHandler}>
//       Counter {props.count}
//     </button>
//   }
// }

export default App;
