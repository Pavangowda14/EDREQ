import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Button from "./Button";
import { useUser } from "../context/UserContext";
import logo from "../assets/images/Edreq_logo.png";
import axios from "axios";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, isAuth, logoutUser } = useUser();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleLogout = async () => {
    try {
      const response=await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      if(response.data.success){
        console.log(response.data);
      }
      logoutUser(); 
      navigate('/login');
    } catch (error) {
      console.log('Logout error:', error);
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-2 bg-n-8 max-h-[5.5rem]`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <button
          className="text-3xl py-2 px-4 lg:hidden"
          onClick={handleNavToggle}
        >
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <a
          className={`block w-[13rem] h-[4.5rem] lg:w-[13rem] mx-auto lg:mx-0 lg:h-[5rem]`}
          href="/"
        >
          <img
            src={logo}
            alt="EDREQ"
            className="object-contain w-full h-full max-w-full max-h-full"
          />
        </a>
        <nav
          className={`${
            navOpen ? "flex" : "hidden"
          } fixed top-[5.5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex  lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-between lg:m-auto lg:flex-row w-full">
            <a
              className="block relative font-code transition-colors px-5 py-6 md:py-5 uppercase lg:text-lg lg:font-semibold lg:leading-5 text-n-1 hover:text-n-1/50"
              href="/"
            >
              Home
            </a>
            <a
              className="block relative font-code transition-colors px-5 py-6 md:py-5 uppercase lg:text-lg lg:font-semibold lg:leading-5 text-n-1 hover:text-n-1/50"
              href="/courses"
            >
              Courses
            </a>
            <a
              className="block relative font-code transition-colors px-5 py-6 md:py-5 uppercase lg:text-lg lg:font-semibold lg:leading-5 text-n-1 hover:text-n-1/50"
              href="/study-materials"
            >
              Study Material
            </a>
            <a
              className="block relative font-code transition-colors px-5 py-6 md:py-5 uppercase lg:text-lg lg:font-semibold lg:leading-5 text-n-1 hover:text-n-1/50"
              href="/"
            >
              Test Series
            </a>
            <div className="block relative px-5">
      {isAuth ? (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <span>Welcome, {user?.fullName}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <Link
                to="/mycourses"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                My Courses
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Button className="text-n-1 bg-n-8" href="/login">
          Sign In
        </Button>
      )}
    </div>
          </div>
        </nav>
      </div>
      
    </div>
  );
};

export default Header;
