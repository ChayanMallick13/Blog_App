import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';



const Navbar = () => {

  const navigate = useNavigate() ; 
  const [clicked , setClicked] = useState(false) ; 
  const [isLoggedIn , setIsLoggedIn] = useState(false) ; 


  function clickHandler(){
    navigate("/") ; 
  }
  function navClickHandler() {

    clicked ? (setClicked(false)) : setClicked(true) ; 

  }

  return (
    <div className=' flex justify-between items-center px-3 py-3 text-white bg-slate-700'>

      <div onClick={() => {navigate("/")}}  className=' flex gap-4 items-center'>
        <img className=' w-8 h-8' src='https://imgs.search.brave.com/BRSDRIJdF4__H3JZut1mJTZChuZuBA5w7X_W36MGybI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c2JyYW5kcy5jb20v/aW1nL2xiLnN2Zw'/>
        <p>Blog</p>

      </div>

        <div className=' flex gap-5 items-center'>

          {
            isLoggedIn ? 
            (<div>welcome!</div>) : 
            (<div className=' text-white flex gap-5'>
              <button onClick={() => {navigate("/signin")}} className=' outline p-2'>Sign in</button>
              <button onClick={() => {navigate("/signup")}} className=' outline p-2'>Sign up</button>
            </div>)  
          }

          {
            clicked ? 
            (
              <div className='flex gap-5'>
                <div className='flex gap-5'>
                  <NavLink to="/poetry">poetry</NavLink>
                  <NavLink to="/literature">literature</NavLink>
                  <NavLink to="/story">story</NavLink>
                  <NavLink to="/poems">poems</NavLink>
                </div>
                <IoReorderThree onClick={navClickHandler} className="text-2xl" />
            </div>
            ) :
            (<IoReorderThree onClick={navClickHandler} className="text-2xl" />) 
          }
        </div>
      
    </div>
  )
}

export default Navbar
