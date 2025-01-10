import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const CreateNew = () => {

    const {isLoggedIn} = useContext(AppContext) ; 
    const navigate = useNavigate() ; 

    function clickHandler() {

      isLoggedIn ? (navigate("/createBlog")) : (navigate("/signin")) ; 
    }


  return (

    <div>


      <button onClick={clickHandler} className="flex items-center justify-center w-14 h-14 bg-slate-600 text-white rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 ">
          <span className="text-xl font-bold">+</span>
        </button>
      
      
    </div>
  )
}

export default CreateNew
