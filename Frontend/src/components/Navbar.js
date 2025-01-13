import React, { useContext, useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';



const Navbar = () => {

  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const category = ["poetry" , "literature" ,"story" ,"poems" , "others"] ; 



  // const [Name , setName] = useState("") ; 
  const { isLoggedIn, signOutHandler,name } = useContext(AppContext);




  function navClickHandler() {

    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    },9000);



  }

  return (
    <div className=' flex w-full justify-between items-center md:px-12 px-1 py-6 text-white bg-slate-700
    '>

      <div onClick={() => { navigate("/") }} className=' flex gap-4 items-center text-xl font-extrabold'>
        <img className=' w-8 h-8' src='https://imgs.search.brave.com/BRSDRIJdF4__H3JZut1mJTZChuZuBA5w7X_W36MGybI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c2JyYW5kcy5jb20v/aW1nL2xiLnN2Zw' alt='img' />
        <p>Blog</p>

      </div>

      <div className='flex items-center gap-x-2 md:min-w-[350px] sm:min-w-[300px] min-w-[210px] md:pr-0 pr-6'>

        {
          isLoggedIn ?
            (<div className='w-[99%] flex gap-3'><span className=' hidden sm:flex'>welcome! </span><span className='italic font-extrabold md:text-xl'>{name}</span></div>) :
            (<div className=' text-white flex gap-5'>

              <button onClick={() => { navigate("/signin") }} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">SignIn</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>

              <button onClick={() => { navigate("/signup") }} className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">SignUp</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>

              </button>
            </div>)
        }

        {
          clicked ?
            (
              <div className='flex gap-5 w-[20%] flex-col relative items-center '>
                <IoReorderThree onClick={navClickHandler} className="text-2xl"
                 />
                <div className='flex gap-5 absolute z-10 -right-8 top-7 flex-col bg-slate-700 mt-2 text-center pb-6
                shadow-2xl underline font-bold w-[120px]'
                  onMouseLeave={() => {setClicked(false)}}
                >

                  <NavLink to={`category/${category[0]}`}>{category[0]}</NavLink>
                  <NavLink to={`category/${category[1]}`}>{category[1]}</NavLink>
                  <NavLink to={`category/${category[2]}`}>{category[2]}</NavLink>
                  <NavLink to={`category/${category[3]}`}>{category[3]}</NavLink>
                  <NavLink to={`category/${category[4]}`}>{category[4]}</NavLink>


                  {isLoggedIn &&
                    <p
                      onClick={() => {
                        signOutHandler();
                      }}
                      className='cursor-pointer'
                    >Sign Out</p>
                  }
                </div>
              </div>
            ) :
            (<div className='flex w-[20%] flex-col relative items-center'><IoReorderThree onClick={navClickHandler}
            onMouseEnter={() =>{setClicked(true)}}
             className="text-2xl" /></div>)
        }
      </div>

    </div>
  )
}

export default Navbar
