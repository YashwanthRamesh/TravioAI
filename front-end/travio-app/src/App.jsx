import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-500 to-indigo-700 text-white">
      <h1 className="text-5xl font-bold mb-4">We have setup a react and tailwind css</h1>
      <p className="text-lg">We will move on to develop front end design in this page</p>
      <button className="mt-6 px-6 py-2 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-100 transition-all">
        Demo  Button
      </button>
    </div>
  );
}

export default App
