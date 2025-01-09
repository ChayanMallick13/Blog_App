
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Form = () => {

    const {submitHandler} = useContext(AppContext) ;
    return (
        <div className=''>

        <div className="max-w-lg  mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col justify-center">
          <h1 className="text-xl font-bold mb-4">Create a New Post</h1>
          <form onSubmit={submitHandler}  className="space-y-4 h-[50%]">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter title"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
    

            <div>
              <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="body"
                name="body"
                placeholder="Enter description"
                rows="4"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            </div>
    

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"

                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select category</option>
                <option value="poetry">poetry</option>
                <option value="literature">literature</option>
                <option value="story">story </option>
                <option value="poems">poems </option>
                <option value="others">others</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
        </div>
      );
}

export default Form
