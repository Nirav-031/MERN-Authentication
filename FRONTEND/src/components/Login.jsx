import React from 'react'
import image from '../assets/Group 3.png'
import logo from '../assets/logo.png'

import {Link} from 'react-router-dom'

import {useFormik} from 'formik'

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaMicrosoft } from "react-icons/fa";
import loginSchema from '../../validationSchema/loginSchema'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import {useCookies} from 'react-cookie'

export default function Login() {

const [cookies,setJWT] =useCookies(["jwt"])
const initialValues = {
    email: "",
    password:""
  }



const notify = (msg) => {
       
        toast.success(msg, {
          position: "top-right"
        });
  
       
  };
   const errorNotification = (msg,data="") => {
       
        toast.error(`${msg} :: ${data}`, {
          position: "top-right"
        });
  
       
      };

  const {handleChange,handleSubmit,values,errors,touched } = useFormik({
    initialValues: initialValues,
    validationSchema:loginSchema,
    onSubmit: (values)=>{
      axios.post('http://localhost:3000/login',
        {
          email: values.email,
          password:values.password
        }
      )
        .then((result) => {
          console.log('hello');
          console.log(result.data.tocken);
          setJWT("jwt", result.data.tocken, { path: "/" });
          // console.log(cookies.jwt);
          notify("Login SuccessFully")
          setTimeout(() => {
            
            window.location.href = 'http://localhost:5173/dashboard';
          },3000)
        })
        .catch((error) => {
          console.log(error.response.data.msg);
          errorNotification(error.response.data.msg)
      })
    }
   })
  
  console.log(errors)

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
                              <li className='font-dem w-full text-center  text-[#9C9AA5] '>
                                  <button >
                                      <Link to="/register">Sign Up</Link> 
                                  </button>
                              </li>
                              <li className=' font-dem w-full text-center bg-[#465FF1] text-white p-1 rounded-lg'>
                                  <button>
                                      <Link to="/login">Sign In</Link>
                                  </button>
                              </li>
              </ul>
                
            </div>


            {/*---------Form-------  */}

            <form onSubmit={handleSubmit}>

              

              <div className='mb-3 '>
                
              <p className='mb-1 font-dem'>
                Email
              </p>
                <input type="email"
                  name='email'
                   onChange={handleChange}
                  value={values.email}
                  className='w-full h-10 rounded-lg border-[1px] border-[#96BFFF]' />
                  {errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p>:null}
               
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
                  {errors.password && touched.password ? <p className='text-red-500'>{errors.password}</p>:null}
                
            </div>
           
            

            
           <p className='flex items-center text-gray-500 font-dem text-[14px] hover:cursor-pointer'><Link to='/recoveryPassword'>Forgot Password ? </Link></p>
           <p className='flex items-center font-dem text-[14px] '>Not Have Account ?<span className='text-blue-500 hover:cursor-pointer pl-2'><Link to='/register'>sign up</Link> </span>   </p>


          { /*--------button------------*/}
          <div className='w-full h-10'>
            <button type='submit' className='w-full h-full bg-[#465FF1] font-dem text-white rounded-lg'>Login Account</button>
            </div>
           </form>  

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
              
          </div>


        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

