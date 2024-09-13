import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Img from '../assets/A3.jpg'
import Logo from '../assets/logo/abcd.png'


function Navbar() {

  const [activeItem, setActiveItem] = useState(null);
  const navItems = ['Home', 'About', 'Contact'];


  // useState for navbar open and close
  let [open, setOpen] = useState(false);

  // useSate for theme change
  let [darkMode, setDarkMode] = useState(null)

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode]);

  const changeTheme = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark")
    // setDarkMode(!darkMode)
  }

  return (
    <>
      {/* Navbar starts here */}
      <nav className='md:p-4 md:h-[80px] h-[82px] p-1 w-screen fixed top-0 z-2 items-center flex justify-between text-neutral-100 bg-gray-700 dark:bg-slate-950'>
        <div className='flex items-center md:h-[75px]'>
          <img src={Logo} alt="Heading Logo" className='w-[40px] h-[50px] md:w-[50px] md:h-[60px] md:object-fill ml-2 md:ml-8 rounded-lg' />
          <h3 className='bg-transparent mx-1 font-bold dark:text-neutral-100  hover:text-red-500 '><Link to='/' onClick={() => setOpen(!open)}>PORTFOLIO</Link></h3>
        </div>
        <ul className=' hidden md:flex font-semibold dark:text-neutral-100'>
          <li
            className={`mx-[20px] cursor-pointer hover:bg-[#17171790] hover:text-red-500 dark:hover:bg-[#4242427e] transition-all duration-500 p-2 rounded-md md:hover:scale-125 `}>
            <Link to="/">Home</Link>
          </li>

          <li
            className='mx-[20px] cursor-pointer hover:bg-[#17171790] hover:text-red-500 dark:hover:bg-[#4242427e] transition-all duration-500 rounded-md p-2  md:hover:scale-125'>
            <Link to="/about">About</Link>
          </li>

          <li
            className='mx-[20px] cursor-pointer hover:bg-[#17171790] hover:text-red-500 dark:hover:bg-[#4242427e] transition-all duration-500 rounded-md p-2  md:hover:scale-125'>
            <Link to="/contact">Contact</Link>
          </li>

          <div className=' items-center mr-7 px-4'>
            <button
              className='mt-2 text-[20px] rounded-full cursor-pointer hover:text-blue-500 text-blue-300'
              onClick={changeTheme}
            >
              <ion-icon
                name={darkMode === 'dark' ? 'sunny-outline' : 'moon-outline'}
              ></ion-icon>
            </button>
          </div>
        </ul>
        <div className='md:hidden p-1 mt-2' onClick={() => setOpen(!open)}>
          <span className='text-3xl cursor-pointer text-white hover:text-gray-500'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </span>
        </div>
      </nav>

      {/* Navbar Dialog section starts here */}
      <div className={`inset-0 z-[100] mt-[3px] fixed  w-screen h-screen md:hidden text-neutral-100 bg-gray-800 ${open ? 'top-[76px] duration-1000 ' : 'hidden'} transition-all duration-75`}>
        <ul className='md:flex font-semibold pt-4 w-full'>

          <Link to="/"><li className='mx-[20px] cursor-pointer hover:text-white p-2 hover:bg-slate-600 rounded-sm mb-2' onClick={() => setOpen(!open)}>Home</li></Link>

          <Link to="/about"><li className='mx-[20px] cursor-pointer hover:text-white p-2 hover:bg-slate-600 rounded-sm mb-2 ' onClick={() => setOpen(!open)}>About</li></Link>

          <Link to="/contact"><li className='mx-[20px] cursor-pointer hover:text-white p-2 hover:bg-slate-600 rounded-sm mb-2 ' onClick={() => setOpen(!open)}>Contact</li></Link>
          <button className='mt-1 ml-8 text-3xl rounded-full cursor-pointer text-blue-300' onClick={changeTheme}>
            <ion-icon name={darkMode === "dark" ? 'sunny-outline' : "moon-outline"}></ion-icon>
          </button>
        </ul>

        <div className='flex gap-4 pl-5 mt-10 items-center outline-white border-t-gray-600 border-t-[1px] pt-4 bg--600 '>
          <Link to="https://www.instagram.com/sky7.insta/?next=%2F" className='text-3xl text-[#e4405f] cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></Link>

          <Link to="https://www.facebook.com/profile.php?id=100024249859890" className='text-3xl text-[#3b5999]  cursor-pointer'><ion-icon name="logo-facebook"></ion-icon></Link>

          <Link to="https://github.com/akashpawar07" className='text-3xl text-[#0077b5] cursor-pointer'><ion-icon name="logo-github"></ion-icon></Link>

          <Link to="https://www.linkedin.com/in/web-akash-pawar/" className='text-3xl text-[#0077b5] cursor-pointer'><ion-icon name="logo-linkedin"></ion-icon></Link>
          <i className=''>Connect with me !</i>
        </div>
      </div>
      {/* Navbar Dialog section ends here */}
    </>
  )
}

export default Navbar
