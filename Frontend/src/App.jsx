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
import Poems from "./pages/Poems";
import Others from "./pages/Others";
import UserPost from "./pages/UserPost";

const App = () => {
  const {fetchblogs , fetchUser,ApiValueChangeTracker,userschangeTracker} = useContext(AppContext) ; 
  
  useEffect (() => {
    fetchblogs() ; 
    fetchUser() ; 
    // eslint-disable-next-line
  } , [ApiValueChangeTracker,userschangeTracker] ) ; 

  return (
    <div className="bg-slate-300 h-[100vh] w-[100vw] overflow-x-hidden">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/poetry" element={<Poetry/>} />
        <Route path="/literature" element={<Literature/>} />
        <Route path="/story" element={<Story/>} />
        <Route path="/poems" element={<Poems/>} />
        <Route path="/others" element={<Others/>} />
        <Route path="/userPost/:username" element={<UserPost/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/createBlog" element={<Form/>} />
        
      </Routes>
    </div>
  );
};

export default App;
