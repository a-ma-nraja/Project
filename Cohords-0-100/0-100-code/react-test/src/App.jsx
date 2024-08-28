import { useState, useMemo, useCallback,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// use of useEffect
// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   fetch("https://google.com", async (res) => {
//     const json = await res.json();
//     setBankData(json);
//     // Assume it is { income: 100 }
//   });

//   setTimeout(() => {
//     setExchangeData({
//       returns: 100
//     });
//   }, 1000);

//   const incomeTax = (bankData.income + exchangeData) * 0.3;

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }


// use of useMemo
// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     })
//   }, [])

//   const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
  
//   const incomeTax = (cryptoReturns + bankData.income) * 0.3

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// use useRef
// function App() {
//   const divRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       divRef.current.innerHTML = "10"
//     }, 5000);
//   }, [])

//   const incomeTax = 20000;

//   return (
//     <div>
//         hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
//     </div>
//   )
// }

export default App
