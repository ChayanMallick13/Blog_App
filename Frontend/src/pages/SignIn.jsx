
import {React,  useEffect,  useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [isVisible , setIsvisible] = useState(false) ; 
    const {signinHandler , isLoggedIn,showSignup} = useContext(AppContext) ; 
    const navigate=  useNavigate() ; 
    
    useEffect(() => {

        if(isLoggedIn){
            navigate("/") ; 
        }
        // eslint-disable-next-line
    }, [] ) ; 
return (
    <div className='flex justify-center items-center h-full mt-48'>


        <form onSubmit={signinHandler} className=" bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm flex flex-col">
            <h2 class="text-2xl font-bold text-white text-center mb-6">Login</h2>


            <div class="mb-4">
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>


            <div class="mb-6">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <div className=' flex relative'>
                    <input type={isVisible ? ("text") : ("password")}  id="password" name="password" placeholder="Enter your password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "/>

                        <div onClick = {() => isVisible ? setIsvisible(false) : setIsvisible(true)} className=' absolute right-2 top-3'>
                        {
                            isVisible ? (<FaRegEye />) : (<FaRegEyeSlash/>) 
                        }
                        </div>
                        

                </div>
            </div>


            <div class="flex items-center justify-between mx-auto " >
            <button class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span class="w-48 h-48 rounded rotate-[-40deg]  bg-slate-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">SignIn</span>
                </button>


            </div>

            {showSignup&&
                <div className='text-lg text-center mt-5 text-red-600'>
                    Not Registered? Register <NavLink to={'/signup'} className={'text-blue-300'}>here</NavLink>
                </div>
            }
        </form>
    </div>
)
}

export default SignIn
