import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GetStarted from "./components/GetStarted"
import UserManagement from "./components/UserManagement";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";


function Page({ title }) {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p>Page content for {title}...</p>
    </div>
  );
}        

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <GetStarted />
                <UserManagement />
                {/* <Page title="Home" />  */}
              </>
            }
          />
          <Route path="/about" element={<About /> } />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Page title="Get Started" />} />
        </Routes>
      </main>
    </>
    

    

  );


  
}

export default App
