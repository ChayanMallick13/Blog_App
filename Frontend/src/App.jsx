import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Form from "./components/Form";
import Poetry from "./pages/Poetry";
import Literature from "./pages/Literature";
import Story from "./pages/Story";

const App = () => {
  const {fetchblogs , fetchUser,ApiValueChangeTracker} = useContext(AppContext) ; 
  
  useEffect (() => {
    fetchblogs() ; 
    fetchUser() ; 
    // eslint-disable-next-line
  } , [ApiValueChangeTracker] ) ; 

  return (
    <div className="bg-slate-300 h-[100vh] w-[100vw] overflow-x-hidden">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/poetry" element={<Poetry/>} />
        <Route path="/literature" element={<Literature/>} />
        <Route path="/story" element={<Story/>} />
        <Route path="/poems" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/createBlog" element={<Form/>} />
        
      </Routes>
    </div>
  );
};

export default App;
