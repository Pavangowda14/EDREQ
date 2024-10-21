import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [currentState, setCurrentState] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [classNo, setClassNo] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); 
  const { user, isAuth,loginUser } = useUser();
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); 
    try {
      if(currentState==="login"){
        
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password },
          {
            withCredentials: true,
          }
        );
        if (response.data.success) {
          await loginUser(response.data.user);
          toast.success(response.data.message);
          navigate("/mycourses")
        }
        else{
          setError(response.data.message);
        }
      }
      else{
        const response = await axios.post('http://localhost:5000/api/auth/register', { fullName,classNo,email, password }, {
          withCredentials: true,
        });

        if (response.data.success) {
          console.log(response.data)
          await loginUser(response.data.user);
          toast.success(response.data.message);
          navigate("/mycourses")
        }
        else{
          setError(response.data.message);
        }
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setEmail("");
      setFullName("");
      setPassword("");
      setClassNo("");
      setIsEmailFocused(false);
      setIsFullNameFocused(false);
      setIsPasswordFocused(false);
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    if(error){
      toast.error(error)
    }
  },[error])

  useEffect(()=>{
    if(isAuth){
      navigate("/mycourses")
    }
  },[isAuth])

  const handleClassNoChange=(e)=>{
    setClassNo(e.target.value)
  }

  return (
    <div className={`container mt-7 ${isLoading ? 'cursor-wait' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-15">
        <div className="h-[12rem] md:h-full lg:h-full">
          <img
            src="https://www.arnesoncommunicates.com/uploads/1/0/5/0/10503253/learning_orig.jpg"
            alt="img"
            className="w-full h-full object-fit"
          />
        </div>
        <div className="px-5 py-5 lg:px-10 lg:py-5 space-y-5">
          <p className="text-3xl font-semibold text-center">{currentState==="login" ? "Login to your Edreq Account" : "Sign up and start learning"}</p>
          <form className="space-y-5 transition-all duration-300 " onSubmit={handleSubmit}>
            {currentState==="signup" && (<div
              className={`flex flex-col justify-center relative transition-all duration-300 border-2 border-n-1`}
              onClick={() => setIsFullNameFocused(true)}
            >
              <label
              htmlFor="fullName"
                className={`absolute px-3 text-n-1 font-semibold transition-all duration-300 
          ${isFullNameFocused || fullName ? "text-xs top-1" : "text-lg"}`}
              >
                Full Name
              </label>
              <input
              id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setIsFullNameFocused(true)}
                onBlur={() => setIsFullNameFocused(false)}
                className={`w-full border-none focus:outline-none px-4 pt-4 pb-2 text-xl ${
                  isFullNameFocused || fullName ? "mt-1" : ""
                } bg-transparent`}
                required
              />
            </div>)}
            <div
              className={`flex flex-col justify-center relative transition-all duration-300 border-2 border-n-1`}
              onClick={() => setIsEmailFocused(true)}
            >
              <label
              htmlFor="email"
                className={`absolute px-3 text-n-1 font-semibold transition-all duration-300 
          ${isEmailFocused || email ? "text-xs top-1" : "text-lg"}`}
              >
                Email
              </label>
              <input
              id="email" 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                className={`w-full border-none focus:outline-none px-4 pt-4 pb-2 text-xl ${
                  isEmailFocused || email ? "mt-1" : ""
                } bg-transparent`}
                required
              />
            </div>
            <div
              className={`flex flex-col justify-center relative transition-all duration-300 border-2 border-n-1 rounded-md`}
              onClick={() => setIsPasswordFocused(true)}
            >
              <label
              htmlFor="password"
                className={`absolute px-3 text-n-1 font-semibold transition-all duration-300 
          ${isPasswordFocused || password ? "text-xs top-1" : "text-lg"}`}
          onClick={() => setIsPasswordFocused(true)}
              >
                Password
              </label>
              <input
              id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                className={`w-full border-none focus:outline-none px-4 pt-4 pb-2 text-xl ${
                  isPasswordFocused || password ? "mt-1" : ""
                } bg-transparent`}
                required
              />
            </div>
            {currentState==="signup" && ( 
              <select id="options" className="block w-full px-2 text-lg  py-3 border-2 border-n-1 rounded-md shadow-sm focus:outline-none focus:none" value={classNo} onChange={handleClassNoChange}>
        <option value="" disabled>
          Select Class
        </option>
        <option value="6">Class 6</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
        <option value="11">Class 11</option>
        <option value="12">Class 12</option>
      </select>
     )}
            <button className="w-full font-semibold text-n-8 text-lg bg-n-15 p-3" type="submit" disabled={isLoading}>
              {currentState==="login" ?"Log in":"Sign up"}
            </button>
          </form>
         {currentState==="login" ? (<div className="flex justify-center space-x-2">
            <p className="text-center">Don't have an account? </p>
            <p onClick={() => setCurrentState("signup")} className="text-blue-700 font-semibold cursor-pointer">
              Sign up
            </p>
          </div>) : (<div className="flex justify-center space-x-2">
            <p className="text-center">Already have an account? </p>
            <p onClick={() => setCurrentState("login")} className="text-blue-700 font-semibold cursor-pointer">
              Log in
            </p>
          </div>)} 
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={1500} closeOnClick/>
    </div>

  );
};

export default Login;
