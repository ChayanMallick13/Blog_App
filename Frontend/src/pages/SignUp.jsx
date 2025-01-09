import React, { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [isVisible , setIsvisible] = useState(false) ; 
    const {signUpHandler , isLoggedIn} = useContext(AppContext) ; 
    
    const navigate = useNavigate() ; 

    useEffect(() => {
    
            if(isLoggedIn){
                navigate("/") ; 
            }
        }, [] ) ; 


return (
    <div className='flex justify-center items-center h-full'>


        <form onSubmit={signUpHandler} className=" bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm flex flex-col">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Signup</h2>


            <div className="mb-4">
                <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label for="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>


            <div className="mb-6">
                <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <div className=' flex relative'>
                    <input type={isVisible ? ("text") : ("password")}  id="password" name="password" placeholder="Enter your password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "/>

                        <div onClick = {() => isVisible ? setIsvisible(false) : setIsvisible(true)} className=' absolute right-2 top-3'>
                        {
                            isVisible ? (<FaRegEye />) : (<FaRegEyeSlash/>) 
                        }
                        </div>
                        

                </div>
            </div>



            <div className="flex items-center justify-between mx-auto ">

                <button class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span class="w-48 h-48 rounded rotate-[-40deg]  bg-slate-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">SignUp</span>
                </button>
            </div>



        </form>
</div>
  )
}

export default SignUp
