
import './App.css';
import { useState } from 'react';
import Link from './components/Link';

function App(){
  return(
    <div>
      <Link/>
      <hr/>
      <Link/>
    </div>
  )
}

// function App() {
//   const [counter, setCounter]=useState(0);
//   const [clickCounter, setClickCounter]=useState(0);
//   // const [clickButton, setClickButton]=useState(false);
//   const myFunc=()=>{
//     setClickCounter(prevCount=>prevCount+1)
    
//   }
//   const myHome=()=>{
//     setCounter(prevCount=>prevCount+1)
//     alert(`your ${counter} clicked home button`);
//   }
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <div className="navbar-nav">
//               <button className='button' onClick={myHome}>Home</button>
//               <button className='button' onClick={myFunc}>click me</button>
//             </div>
//           </div>
//       </nav>
//       <div className='row-container'>
//       <p>Home value:{counter}</p>
//       <p className='name-field'>Click button value:
//       <b>{clickCounter}</b>
//       </p>
//       </div>
//     <div>
// </div>
//     </div>
//   );
// }

export default App;
