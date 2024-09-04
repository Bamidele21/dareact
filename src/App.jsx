import Header from "./header"
import Footer from "./footer"
import Home from "./home"
import Contact from "./contact"
import Pricing from "./pricing"
import About from "./about"

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
    <div>
    
      <div className="page-container">
        <div className="content-wrap">

       
        
       <Router>
        <Header/>
        
        <div>
       
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/pricing" element={<Pricing/>}/>
          <Route  path="/about" element={<About/>}/>
          </Routes>

       
       </div>
          </Router>
         </div>
          <Footer/>
         </div>
      
      </div>
    </>
  )
}

export default App
