import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

const App = () => {
  const {fetchblogs , fetchUser} = useContext(AppContext) ; 
  
  useEffect (() => {
    fetchblogs() ; 
    fetchUser() ; 
  } , [] ) ; 

  return (
    <div className="h-screen bg-slate-500 relative">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/poetry" element={<Home/>} />
        <Route path="/literature" element={<Home/>} />
        <Route path="/story" element={<Home/>} />
        <Route path="/poems" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
};

export default App;
