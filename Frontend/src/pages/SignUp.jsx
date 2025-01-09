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
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    SignUp
                </button>
            </div>



        </form>
</div>
  )
}

export default SignUp
