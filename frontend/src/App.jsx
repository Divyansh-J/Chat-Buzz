import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      
    </div>
  );
};
export default App;
