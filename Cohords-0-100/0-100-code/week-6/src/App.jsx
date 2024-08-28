import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// function App() {
//   const [title, setTitle]= useState("my name is aman");

//   function updateTitle(){
//     setTitle("my name is"+ Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}> Update the Title</button>
//       <Header title={title}></Header>
//       <Header title="aman1"></Header>
//     </div>
//   );
// }
// function Header({ title }) {
// return <div>{title}</div>;
// }

// function App(){
//   // const [name,set]=useState("");
//   const [selectedId,setSelectedId] = useState(1);

//   return <div>
//     <button onClick={()=>setSelectedId("1")}>1</button>
//     <button onClick={()=>setSelectedId("2")}>2</button>
//     <button onClick={()=>setSelectedId("3")}>3</button>
//     <button onClick={()=>setSelectedId("4")}>4</button>
//     <Todo selectedId={selectedId}/>
//   </div>

// }
// function Todo({selectedId}){
//   // useEffect(()=>{
//   //   axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//   //   .then(response =>{
//   //     setTodo(response.data.todo)
//   //   })
//   // })

//   return <div>
//     <h1>haii {selectedId}</h1>
//     </div>

// }
// export default App;

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  // const [finalValue, setfinalValue] = useState(1);
  const [count, setCount]=useState(0); 

  // let count = 0;
  // for (let i = 1; i <= inputValue; i++) {
  //   count = count + i;

  // use useEffect
 useEffect(() => {
    console.log("memo got called");

    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  // use useMemo
  // let count = useMemo(() => {
  //   console.log("memo got called");

  //   let finalCount = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //     finalCount = finalCount + i;
  //   }
  //   return finalCount;
  // }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          // console.log(e.target.value);
          setInputValue(e.target.value);
        }}
        placeholder={"find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter({counter})
      </button>
    </div>
  );
}

export default App;
