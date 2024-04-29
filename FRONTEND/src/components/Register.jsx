import React, { useState } from 'react'
import image from '../assets/Group 3.png'
import logo from '../assets/logo.png'

import {Link} from 'react-router-dom'

import {useFormik} from 'formik'

import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaMicrosoft } from "react-icons/fa";
function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const initialValues = {
    name: "",
    email: "",
    password:""
  }
   const {values,handleChange,handleSubmit}=useFormik({
    initialValues: initialValues,
    onSubmit: (value) => {
      console.log(value)
    }
  })
  
  // console.log(values)
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-[95%] md:w-3/4 h-[90%]  flex   '>
        <div className='lg:w-[50%] h-full hidden lg:block ' >
          <div className='w-full h-full flex justify-center'>

            <img src={image} alt="" className='h-full w-[90%] '/>
          </div>
        </div>

        <div className='lg:w-[50%] w-full h-full   flex justify-center items-center'>
          <div className='lg:w-[300px] lg:h-[80%] w-[90%] h-[90%]  md:space-y-3 space-y-5  '>
            <div className='flex  items-center space-x-5'>
              <img src={logo} alt="" className='w-[24px] h-[24px]' />
              <span className='text-black font-dem text-2xl'>E-Store</span>
            </div>
            {/*---------sign up && sign in     */}
            <div className='w-full h-10 bg-[#ECF0FF] rounded-lg p-1'>
              <ul className='flex items-center h-full justify-center w-full'>
                
              <li className='font-dem w-full text-center bg-[#465FF1] text-white p-1 rounded-lg'>
                                  <button >
                                      <Link to="/register">Sign Up</Link> 
                                  </button>
                              </li>
                              <li className='font-dem w-full text-center  text-[#9C9AA5]'>
                                  <button>
                                      <Link to="/login">Sign In</Link>
                                  </button>
                              </li>
              </ul>
                
            </div>


            {/*---------Form-------  */}

            <form  onSubmit={handleSubmit}>

              <div className='mb-3'>

              <p className='mb-1 font-dem'>
                Name
              </p>
                <input type="text"
                  name='name'
                  onChange={handleChange}
                  value={values.name}
                  className='w-full h-10 rounded-lg border-[1px] border-[#96BFFF]' />
              </div>

              <div className='mb-3 '>
                
              <p className='mb-1 font-dem'>
                Email
              </p>
                <input type="email"
                  name='email'
                  
                  onChange={handleChange}
                  value={values.email}
                  className='w-full h-10 rounded-lg border-[1px] border-[#96BFFF]' />
              </div>

              <div className='mb-3'>
                

              <p className='mb-1 font-dem'>
                Password
              </p>
                <input type="password"
                  name='password'
               onChange={handleChange}
                  value={values.password}
                  className='w-full h-10 rounded-lg border-[1px] border-[#96BFFF]' />
            </div>
            
            

            <p className='flex items-center font-dem text-[14px] '>
              

              <span style={{ color: values.password.length < 4 ? 'red' : values.password.length <= 6 ? 'orange' : 'green',fontSize:'16px' }}>
                {values.password.length < 4 ? <RxCross1 /> : values.password.length <= 6 ? <IoCheckmark /> :<IoCheckmarkDoneSharp />}    
                
              </span>
              <span style={{ color: values.password.length < 4 ? 'red' : values.password.length <= 6 ? 'orange' : 'green',fontSize:'13px' }}>
              Password Strength :: {values.password.length < 4 ? 'Weak' : values.password.length <= 6 ? 'Good' : 'Excellent'}
              </span>    
              
            
            </p>
            
            
            <p className='flex items-center font-dem text-[14px]'>
              <span style={{ color: values.password.length < 4 ? 'red' :  'green',fontSize:'16px' }}>
                {values.password.length < 4 ? <RxCross1 /> : <IoCheckmarkDoneSharp />} </span>

              <span style={{ color: values.password.length < 4 ? 'red' :  'green',fontSize:'13px' }}>
                  Password Contain At least 4 character
              </span>  
            </p>
           
           


          { /*--------button------------*/}
          <div className='w-full h-10'>
            <button type='submit' className='w-full h-full bg-[#465FF1] font-dem text-white rounded-lg'>Create Account</button>
            </div>
            

            <div className="flex items-center">
                <hr className="flex-grow border-t border-gray-400"/>
                <p className="px-2 font-dem">OR</p>
                <hr className="flex-grow border-t border-gray-400"/>
            </div>
            

            { /* -------google --------* */}
              <div className='w-full h-10 flex space-x-3'>
              <div className='w-[33%] h-full  flex justify-center items-center border-2 border-[#96BFFF] rounded-lg'>
                <p  className='h-[60%]   text-2xl' ><FcGoogle /></p>
              </div>
              <div className='w-[33%] h-full flex justify-center items-center border-2 border-[#96BFFF] rounded-lg'>
                 <p  className='h-[60%]   text-2xl' ><FaApple /></p>
                </div>
              <div className='w-[33%] h-full flex justify-center items-center border-2 border-[#96BFFF] rounded-lg'>
                 <p  className='h-[60%]   text-xl' ><FaMicrosoft /></p>
                </div>
              </div>
              
      </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Register;

