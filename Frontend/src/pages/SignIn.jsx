
import {React,  useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignIn = () => {
    const [isVisible , setIsvisible] = useState(false) ; 
  return (
    <div className='flex justify-center items-center h-full '>


        <form class=" bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm flex flex-col">
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


            <div class="flex items-center justify-between mx-auto ">
                <button type="submit "
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                </button>
            </div>
        </form>
    </div>
)
}

export default SignIn
