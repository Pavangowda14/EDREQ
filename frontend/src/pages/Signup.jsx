import React, { useState } from 'react'
import axios from 'axios';

const Signup = () => {
    const [input,setInput]=useState({
        email:"",
        password:"",
        fullName:"",
        classNo:"",

    })
    const [isFocused, setIsFocused] = useState(false);

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', input);
            console.log(response);
          } catch (err) {
            // Handle errors
            console.log(err);
            
            console.log(err.response?.data?.message || 'An error occurred');
          }
    }

  return (
    <div className='container mt-7'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='h-[12rem] md:h-[25rem] lg:h-[30rem]'>
                <img src="https://www.arnesoncommunicates.com/uploads/1/0/5/0/10503253/learning_orig.jpg" alt="img" className='w-full h-full object-fit'/>
            </div>
            <div className='p-5 space-y-5'>
            <p className='text-3xl font-semibold'>Login to your Edreq Account</p>
            <form className='space-y-5' onSubmit={handleSubmit}>
            <div
                    className={`flex flex-col justify-center relative px-3 py-2 transition-all duration-300 border-2 border-n-1`}
        onClick={() => setIsFocused(true)}
        >
      {/* <label
        className={`absolute text-gray-500 transition-all duration-300 
          ${isFocused || email ? "text-xs bg-white text-blue-500" : "text-lg"}`}
      >
        Email
      </label> */}
      <input
        type="text"
        value={input.fullName}
        name="fullName"
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full border-none focus:outline-none p-0 mt-2 bg-transparent`}
        required
        placeholder='Full name'
      />
    </div>
    
                <div
                    className={`flex flex-col justify-center relative px-3 py-2 transition-all duration-300 border-2 border-n-1`}
        onClick={() => setIsFocused(true)}
        >
      {/* <label
        className={`absolute text-gray-500 transition-all duration-300 
          ${isFocused || email ? "text-xs bg-white text-blue-500" : "text-lg"}`}
      >
        Email
      </label> */}
      <input
        type="email"
        value={input.email}
        name="email"
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full border-none focus:outline-none p-0 mt-2 bg-transparent`}
        required
        placeholder='Email'
      />
    </div>
    <div
                    className={`flex flex-col justify-center relative px-3 py-2 transition-all duration-300 border-2 border-n-1`}
        onClick={() => setIsFocused(true)}
        >
      {/* <label
        className={`absolute text-gray-500 transition-all duration-300 
          ${isFocused || email ? "text-xs bg-white text-blue-500" : "text-lg"}`}
      >
        Email
      </label> */}
      <input
        type="text"
        value={input.classNo}
        name="classNo"
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full border-none focus:outline-none p-0 mt-2 bg-transparent`}
        required
        placeholder='class'
      />
    </div>
    <div
                    className={`flex flex-col justify-center relative px-3 py-2 transition-all duration-300 border-2 border-n-1`}
        onClick={() => setIsFocused(true)}
        >
      {/* <label
        className={`absolute text-gray-500 transition-all duration-300 
          ${isFocused || email ? "text-xs bg-white text-blue-500" : "text-lg"}`}
      >
        Email
      </label> */}
      <input
        type="password"
        value={input.password}
        name="password"
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full border-none focus:outline-none p-0 mt-2 bg-transparent`}
        required
        placeholder='Password'
      />
    </div>
            <button className="w-full bg-n-14 p-5" type="submit">Login</button>
      </form>
      <p className='text-center'>Already have an account?  <a href='/login' className='text-n-15'>Log in</a></p>
            </div>
        </div>
    </div>
  )
}

export default Signup