import React, { useContext, useRef, useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';



const Navbar = () => {

  const navigate = useNavigate() ; 
  const [clicked , setClicked] = useState(false) ; 
  
  // const [Name , setName] = useState("") ; 
  const {isLoggedIn , currentUser , users} = useContext(AppContext);

let Name = "" ; 
  const Nameobj = users.filter(user => user.username === currentUser ) ; 
  if(Nameobj.length > 0 )
    Name = Nameobj[0].name ; 



  function navClickHandler() {

    setClicked(prev => !prev);
    

  }

  return (
    <div className=' flex w-full justify-between items-center px-3 py-3 text-white bg-slate-700'>

      <div onClick={() => {navigate("/")}}  className=' flex gap-4 items-center'>
        <img className=' w-8 h-8' src='https://imgs.search.brave.com/BRSDRIJdF4__H3JZut1mJTZChuZuBA5w7X_W36MGybI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c2JyYW5kcy5jb20v/aW1nL2xiLnN2Zw' alt='img'/>
        <p>Blog</p>

      </div>

        <div className='flex justify-between items-center w-[300px] px-5'>

          {
            isLoggedIn ? 
            (<div>welcome! <span>{Name}</span></div>) : 
            (<div className=' text-white flex gap-5'>
              <button onClick={() => {navigate("/signin")}} class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">SignIn</span>
                  <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>
              <button onClick={() => {navigate("/signup")}} class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">SignUp</span>
                  <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>
            </div>)  
          }

          {
            clicked ? 
            (
              <div className='flex gap-5 w-[20%] flex-col relative items-center '>
              <IoReorderThree onClick={navClickHandler} className="text-2xl" />
                <div className='flex gap-5 absolute z-10 -right-8 top-7 flex-col bg-slate-700 mt-2 text-center pb-6
                shadow-2xl underline font-bold w-[120px]'
                onClick={() => {
                  setClicked(false);
                }}
                >
                  <NavLink to="/poetry">poetry</NavLink>
                  <NavLink to="/literature">literature</NavLink>
                  <NavLink to="/story">story</NavLink>
                  <NavLink to="/poems">poems</NavLink>
                  <NavLink to="/others">Others</NavLink>
                </div>
            </div>
            ) :
            (<div className='flex w-[20%] flex-col relative items-center'><IoReorderThree onClick={navClickHandler} className="text-2xl" /></div>) 
          }
        </div>
      
    </div>
  )
}

export default Navbar
