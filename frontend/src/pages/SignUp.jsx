import React from 'react'
import { Link } from 'react-router-dom'
import GenderCheckBoxes from '../component/GenderCheckBoxes'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className=' w-full p-6 rounded-lg shadow-md bg-gray-200'>
        <h1 className='text-3xl font-semibold text-center text-slate-700'>
          Sign Up
          <span className='text-blue-700'> ChatBuzz</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              className='input input-bordered w-full h-10'
            />      
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Enter Email'
              className='input input-bordered w-full h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='input input-bordered w-full h-10'
            />
          </div>

          {/* <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Gender</span>
            </label>
            <select
              className='select select-bordered w-full h-10'
              name='gender'
              id='gender'
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div> */}

          <GenderCheckBoxes />


          <Link 
            to={"/login"}
            className="text-sm inline-block p-1"
          >
            {"Already"} have an account?{" "}
            <span className="text-blue-600">Login</span>
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2 bg-blue-700 text-white'>
              Sign Up
            </button>
          </div>
        </form>
      </div>  

    </div>
  )
}

export default SignUp
