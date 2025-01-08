import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';



const Navbar = () => {

  const navigate = useNavigate() ; 
  const [clicked , setClicked] = useState(false) ; 


  function clickHandler(){
    navigate("/") ; 
  }
  function navClickHandler() {
    if(clicked){
      setClicked(false) ; 
    }
    else{
      setClicked(true) ;
    }
  }

  return (
    <div className=' flex justify-between items-center px-3 py-3 text-white bg-slate-700'>

    <div onClick={clickHandler}  className=' flex gap-4 items-center'>
      <img className=' w-8 h-8' src='https://imgs.search.brave.com/BRSDRIJdF4__H3JZut1mJTZChuZuBA5w7X_W36MGybI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c2JyYW5kcy5jb20v/aW1nL2xiLnN2Zw'/>
      <p>Blog</p>
    </div>
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
  )
}

export default Navbar
