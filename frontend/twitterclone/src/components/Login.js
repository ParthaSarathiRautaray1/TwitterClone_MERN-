import React, { useState } from 'react'
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/userSlice';

function Login() {

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) =>{
    e.preventDefault();
    if(isLogin){
      //login
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`,{ email , password});
        //console.log(res);

        dispatch(getUser(res?.data?.user));
        
        if(res.data.success){
          navigate("/")
          toast.success(res.data.message)
        }
      } catch (error) {
        toast.success(error.response.data.message)
        console.log(error)
      }
    }
    else{
      //signup
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`,{name , username, email , password});
        
        //console.log(res);
        if(res.data.success){
          setIsLogin(true)
          toast.success(res.data.message)
        }

      } catch (error) {
        toast.success(error.response.data.message)
        console.log(error);  
      }
    }
  }

  const loginSignupHandler = () =>{
    setIsLogin(!isLogin)
  }




  return (



    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>


        {/* left */}
        <div>
          <img className='ml-5' width={"300px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s' alt='logogoeshere'/>

        </div>

        {/* right */}
        <div>
          <div className='my-5'>
            <h1 className='font-bold text-8xl font-[Poppins] '>Happening now.</h1>
          </div>
          <h1 className='my-4 text-lg font-bold font-[Helvetica]'>{ isLogin ? "Login" : "Signup"}</h1>
          <form onSubmit={submitHandler} className='flex flex-col w-[55%]'>
            {
              !isLogin && (<>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1'/>
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1'/>
              
              </>)

            }
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1'/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1'/>
            <button className='bg-[#1D9BF0] rounded-full mt-3 hover:bg-blue-500 text-white py-3 border-none text-lg font-bold' >{isLogin ? "Login" : "Create Account"}</button>
            <h1 className='mt-2'>{isLogin ? "Do Not Have An Account ?" : "Already Have An Account ?"}<span className='font-bold text-blue-500 cursor-pointer font-[Poppins]' onClick={loginSignupHandler}>{isLogin ? " Signup" : " Login"}</span></h1>
          </form>


        </div>
      </div>
      
    </div>
  )
}

export default Login
