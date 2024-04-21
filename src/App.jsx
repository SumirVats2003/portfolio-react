import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import sumir from "./assets/img/sumir.png";
import "./App.css";

function App() {
  return (
    <>
      <img
        src={sumir}
        alt='Sumir'
        style={{
          height: "10rem",
          borderRadius: "300px",
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
      <hr style={{ color: "#9c9c9c" }} />
      <div className='foot'>&copy;Sumir Vats, 2023</div>
    </>
  );
}

export default App;
