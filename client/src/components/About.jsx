import React from 'react'
import { Link } from 'react-router-dom'
import HiteshChoudhary from '../assets/hitesh choudhary.jpg'
import CSS from "../assets/css2.jpg"
import ExpressJs from "../assets/express.png"
import Html from "../assets/html.jpg"
import Java from "../assets/java.webp"
import Js from "../assets/js2.jpg"
import Nodejs from "../assets/nodejs2.jpg"
import MongoDB from "../assets/mongodb.jpeg"
import Sql from "../assets/sql.jpg"
// import DoneImg from "../assets/done.jpg"
import Oops from "../assets/oops.webp"
import github from '../assets/github.webp'
import comuni from '../assets/camun.webp'


function About() {
  return (
    <>
      {/*  headings section */}
      <div className=' p-4 md:mt-[80px] mt-[80px] flex flex-col gap-10 items-center text-center '>
        <h3 className='md:text-[25px] text-2xl mt-5 dark:text-neutral-100'>A BIT ABOUT ME</h3>
        <h1 className='md:text-7xl text-6xl text-blue-500'>Who Am I?</h1>
        <div className='md:w-[80%] pl-2'>
          <p className='first-letter:text-4xl text-left first-letter:font-bold first-letter:text-blue-500 dark:text-neutral-100'>
            Hello, I'm Akash - Passionate an Computer Science and Engineering Student and Java Programmer/ Frotend Developer / backend developer <br />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-2 text-left">
              <p className="mb-3 dark:text-neutral-100"> Welcome to my portfolio website! I'm a dedicated and enthusiastic computer science student with a strong desire to create innovative solutions. With a solid foundation in programming languages and a keen interest in, Backend Development, Frontend Development , I'm excited to showcase my projects and skills.</p>
              <p className="mb-3 dark:text-neutral-100">As a computer science student, I've developed a solid understanding of programming fundamentals, data structures. I'm proficient in languages like Java, JavaScript, Node js, Express Js, programming languages with strong understanding of databases. ie. MySQl and MongoDB</p>
              <p className="mb-3 dark:text-neutral-100">Apart from coding, I enjoy playing kabaddi, cricket, going gym, watching movies and spend time with familly and friends. These activities help me maintain a healthy work-life balance and foster creativity. Feel free to explore my portfolio.
              </p>
            </div>
          </p>
        </div>
      </div>

      {/* skills section */}
      <h1 className='text-blue-500 font-bold text-center text-3xl my-4'>Skills</h1>
      <div className=' flex flex-col md:flex-row w-screen h-auto p-3 gap-4 md:justify-center'>

        {/* photo section*/}
        <div className='bg-[#003ecb] p-1 w-[99%] md:w-[40%] md:h-[99vh] h-[70vh] flex flex-col text-center items-center overflow-hidden'>
          <img src={HiteshChoudhary} alt="hitesh choudhary" className='h-[280px] w-[280px] mt-2 rounded-full' />
          <div className='mt-4 text-white h-[100px] md:w-[70%] w-[90%] '>
            <p className='md:text-[29px] text-[32px] text-gray-300 dark:text-neutral-100'>I am happy to know you that 2 Projects deployed sucessfully! and more under Development</p>
          </div>
        </div>

        {/* cards section */}
        <div className='md:max-h-[99vh] md:w-[55%] w-[99%] gap-3 h-auto flex md:flex-row justify-evenly md:flex-wrap flex-col md:overflow-y-auto  no-scrollbar scroll-smooth '>

          {/* Java */}
          <div className='w-[99%] h-[48%] md:w-[40%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={Java} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='h-[190px] px-2 flex flex-col items-center justify-evenly w-[99%]'>
              <p className='text-[15px] md:text-[14px]'>Java's compiled code (bytecode) runs on any device supporting Java Virtual Machine (JVM), making it:
                - Write Once, Run Anywhere (WORA)
                - Independent of underlying hardware and OS
                - Highly portable and reusable
              </p>
            </div>
          </div>

          {/* javaScript */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={Js} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='h-[190px] flex flex-col items-center justify-evenly w-[99%]'>
              <p className='text-[15px] md:text-[14px]'> "Versatility"
                JavaScript seamlessly adapts to:
                - Client-side scripting
                - Server-side programming (Node.js)
                - Mobile and desktop app development
                - Game development
                - IoT programming

              </p>
            </div>
          </div>

          {/* OOPS */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={Oops} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
            </div>
            <div className='h-[190px] p-2 flex flex-col items-center justify-evenly w-[99%]'>
              {/* <h1 className='font-bold font-[Gill sans] text-3xl md:text-[20px]'>OOPS</h1> */}
              <p className='text-[15px] md:text-[14px]'> OOPS used for design and develop scalable, and efficient software solutions. By embracing encapsulation, inheritance, and polymorphism, and maintainable code that simplifies complexity and drives innovation."
              </p>

            </div>
          </div>

          {/* Node js */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={Nodejs} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
            </div>
            <div className='h-[190px] flex flex-col items-center justify-evenly w-[99%] '>
              <p className='text-[15px] md:text-[14px]'>I prefer Node Js beacause it proivdes us a powerfull runtime environment that allows to run JavaScript to create more efficient Websites wtth faster backend</p>

            </div>
          </div>

          {/* Express js */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={ExpressJs} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
            </div>
            <div className='h-[190px] px-3 flex flex-col items-center justify-evenly w-[99%] overflow-y-auto  no-scrollbar scroll-smooth'>
              <p className='text-[15px] md:text-[14px]'>
                Express.js is a fast and flexible Node.js framework for building web applications and APIs. It simplifies server-side development with a minimalist approach. Scalable, secure, and easy to maintain.
              </p>
            </div>
          </div>

          {/* SQL */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={Sql} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
            </div>
            <div className='h-[190px] p-2 flex flex-col items-center justify-evenly w-[99%] overflow-y-auto  no-scrollbar scroll-smooth'>
              <p className='text-[15px] md:text-[14px]'>
                "SQL is a standard language for storing, manipulating, and retrieving data in relational databases." <br />"SQL (Structured Query Language) is a standard programming language used for managing, manipulating, and retrieving data stored in relational database management systems (RDBMS). It enables users to perform various operations, including creating, modifying, and querying databases, as well as controlling access and ensuring data integrity."
              </p>
            </div>
          </div>


          {/* HTML */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={Html} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
            </div>
            <div className='h-[190px] p-3 flex flex-col items-center justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
              <p className='text-[15px] md:text-[14px]'>
                "HTML is a markup language for structuring and formatting web page content." <br />HTML is mainly used to develop and create web pages and applications. Combined with CSS and JavaScript, it has become a landmark in web development. Having CSS helps in layout, colors and appearance while JavaScript helps in embedding programs and affecting behavior of the web page contents.
              </p>
            </div>
          </div>

          {/* CSS */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={CSS} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 md:transition-all duration-500 cursor-pointer' />
            </div>
            <div className='h-[190px] px-4 py-2 flex flex-col text-left justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
              <p className='text-[15px] md:text-[14px] overflow-y-auto  no-scrollbar scroll-smooth'>
                CSS stand for Cascading Style Sheets Is used to style html document and it make a application more user interactive and user friendly <br />
                1. Consistency <br />
                2. Flexibility <br />
                3. Customizability <br />
                4. Responsive Design <br />
                5. Improved User Experience:- CSS enhances visual appeal, readability, and overall user experience.
              </p>
            </div>
          </div>

          {/* MongoDBL */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={MongoDB} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 md:transition-all duration-500 cursor-pointer' />
            </div>
            <div className='h-[190px] px-2 py-2 flex flex-col items-center justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
              <p className='text-[15px] md:text-[14px]'>

                I use Mongodb, <br />MongoDB is a document-oriented database that offers a flexible schema, scalable architecture, high performance, and rich query capabilities, making it ideal for big data, content management, and real-time analytics use cases, with features like data replication, and robust security, all managed through a intuitive GUI like MongoDB Compass, providing a powerful solution for modern application development."

              </p>
            </div>
          </div>

          {/* Github */}
          <div className='w-[99%] h-[48%] md:w-[40%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={github} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer' />
            </div>
            <div className='h-[190px] px-2 py-2 flex flex-col items-center justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
              <p className='text-[15px] md:text-[14px]'>
                People use GitHub for many reasons, including: <br />
                Version control: GitHub makes it easy to track changes and navigate revisions to code.
                Open source: GitHub is used by almost every open-source project to manage its code.
                Learning: GitHub is a robust platform for learning and expanding your programming knowledge.

              </p>
            </div>
          </div>

          {/*communication  */}
          <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={comuni} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
            </div>
            <div className='h-[190px] flex flex-col items-center justify-evenly'>
              <p className='text-[15px] md:text-[13px]'>
                Effective communication is the process of exchanging ideas, thoughts, opinions, knowledge, and data so that the message is received and understood with clarity and purpose. When we communicate effectively, both the sender and receiver feel satisfied..
              </p>
            </div>

          </div>

          {/* Done */}
          {/* <div className='md:w-[40%] w-[99%] h-[48%] md:h-[55%] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
              <img src={DoneImg} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-fill md:hover:scale-125 md:transition-all duration-500 cursor-pointer' />
            </div>
            <div className='h-[190px] flex flex-col items-center justify-evenly '>
              <h1 className='font-bold font-[Gill sans] text-2xl md:text-[20px]'> Thank you !</h1>
            </div>
          </div> */}

        </div>
      </div>


      {/* PROJECTS section */}
      <div className=' h-auto w-[99%] flex items-center justify-center flex-col py-2 gap-2 border-t-4 border-t-indigo-700 mt-[50px]'>
        <div className='mt-4'>
          <h1 className='text-blue-500 font-bold text-center text-3xl '>Projects</h1>
        </div>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-950 border-0 rounded md:my-10 dark:bg-gray-200" />

        {/* Campus-connect section */}
        <div className=' w-[95%] md:w-[93%] md:h-[90%] md:mr-4 p-2'>
          <h2 className='font-semibold text-2xl'>ii) CAMPUS-CONNECT </h2>
          <span className='dark:text-gray-400'>Campus-Connect: Revolutionizing Admission Processes with Paperless, Online Solutions</span>
          <div className='mt-2 flex flex-col justify-around'>
            <h2 className='font-semibold mb-1'>Project Overview: </h2>
            <p className='ml-4 text-[15px] md:text-[14px] dark:text-gray-400'>Developed a cutting-edge web application, <u>Campus-Connect</u>, to streamline admission processes, reducing paper waste and enhancing efficiency. Built with HTML, CSS, JS, Node.js, Express.js, and MongoDB, this platform empowers educational institutions to manage admissions online, effortlessly.</p>
          </div>
          <div>
            <h2 className='font-semibold my-1'> Key Achievements:</h2>
            <p className='ml-3 text-[15px] md:text-[14px] dark:text-gray-400'>
              - Designed and developed a user-friendly, scalable online admission system, eliminating paper-based processes.<br />
              - Successfully implemented Node.js and Express.js to handle complex backend operations, ensuring seamless data management.<br />
              - Utilized MongoDB to create a flexible, high-performance database schema for efficient student data storage.
            </p>
          </div>
          <div>
            <h2 className='font-semibold my-1 text-[15px] md:text-[14px]'> Impact and Benefits:</h2>
            <p className='ml-3 text-[15px] md:text-[14px] dark:text-gray-400'>
              - Transformed admission processes, reducing paper waste and minimizing administrative overhead. <br />
              - Enhanced user experience with a streamlined, online application process, accessible from anywhere. <br />
              - Demonstrated expertise in developing innovative, eco-friendly solutions for educational institutions.
            </p>

          </div>
          <div>
            <h2 className='font-semibold my-1 text-[15px] md:text-[14px]'>Project URL</h2>
            <p className='ml-3'>
              <Link to='https://sycet-collegeadmissionform-in.onrender.com/' className='text-blue-400 italic hover:text-blue-600'>https://sycet-collegeadmissionform-in.onrender.com/</Link>
            </p>
          </div>

        </div>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-950 border-0 rounded md:my-10 dark:bg-gray-200" />

         {/* portfolio section */}
         <div className=' w-[95%] md:w-[93%] md:h-[90%] md:mr-4 p-2'>
          <h2 className='font-semibold text-2xl'>i) Personal Portfolio  </h2>
          <span className='dark:text-gray-400'>This portfolio showcases my expertise in the MERN stack, demonstrating my ability to design and develop a comprehensive web application. I'm excited to bring this skillset to a new role and continue growing as a developer.
          </span>
          <div className='mt-2 flex flex-col justify-around'>
            <h2 className='font-semibold mb-1'>Frontend:
            </h2>
            <p className='ml-4 text-[15px] md:text-[14px] dark:text-gray-400'>
              - I used React to create a responsive, component-based UI, showcasing my understanding of modern frontend development. <br />
              - also used TailwindCss for designing the web page, its makes easy to desing our apges. <br />
              - Designed responsive navigation and interactions, allowing users to easily explore my portfolio on any device.

            </p>
          </div>
          <div>
            <h2 className='font-semibold my-1'>Backend:</h2>
            <p className='ml-3 text-[15px] md:text-[14px] dark:text-gray-400'>
              - Designed a RESTful API using Node.js and Express.js, highlighting my knowledge of server-side development and API design. <br />
              - Utilized MongoDB as the database, demonstrating my understanding of NoSQL databases and data modeling.

            </p>
          </div>
          <div>
            <h2 className='font-semibold my-1 text-[15px] md:text-[14px]'>Features and Functionality:</h2>
            <p className='ml-3 text-[15px] md:text-[14px] dark:text-gray-400'>
              - Developed a user-friendly interface for showcasing projects, skills, and experiences, making it easy for viewers to navigate and     understand my portfolio. <br />
              - Included a about section, demonstrating my ability to integrate a CMS-like feature and showcase my writing skills. <br />
              - Implemented a contact form, highlighting my understanding of frontend-backend interaction and API integration.
            </p>
          </div>
          <div>
            <h2 className='font-semibold my-1 text-[15px] md:text-[14px]'>Challenges and Solutions:</h2>
            <p className='ml-3 text-[15px] md:text-[14px] dark:text-gray-400'>
              - Overcame challenges in implementing MongoDB, demonstrating my problem-solving skills and ability to learn new technologies. <br />
              - Optimized application performance, ensuring fast loading times and a smooth user experience.
            </p>
          </div>

        </div>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-950 border-0 rounded md:my-10 dark:bg-gray-200" />

        {/* Calculator section */}
        <div className=' w-[95%] md:w-[93%] md:h-[90%] md:mr-4 p-2'>
          <h2 className='font-semibold text-2xl'>iii) CALCMATE </h2>
          <span className='dark:text-gray-400'>Basic Arithmetic at Your Fingertips: CalcMate Calculator</span>
          <div className='mt-2 flex flex-col justify-around'>
            <h2 className='font-semibold mb-1'>Project Overview: </h2>
            <p className='ml-4 text-[15px] md:text-[14px] dark:text-gray-400'>CalcMate represents my initial foray into frontend development, demonstrating my foundation in HTML, CSS, and JavaScript. Although a simple project, it showcases my ability to design and develop a functional application, laying the groundwork for more complex projects like Campus-Connect and my personal portfolio.</p>
          </div>
          <div>
            <h2 className='font-semibold my-1'>Features:</h2>
            <p className='ml-3 text-[15px] md:text-[14px] dark:text-gray-400'>
              - Basic arithmetic operations (+, -, x, /) <br />
              - Clear and intuitive interface <br />
              - Responsive design for various screen sizes <br />
              - Built using HTML, CSS, and JavaScript

            </p>
          </div>
          <div>
            <h2 className='font-semibold my-1 text-[15px] md:text-[14px]'>Technical Highlights:</h2>
            <p className='ml-3 text-[15px] md:text-[14px] dark:text-gray-400'>
              - Implemented HTML structure for calculator layout <br />
              - Styled with CSS for a visually appealing design <br />
              - Utilized JavaScript for calculator functionality and logic
            </p>
          </div>
          <div>
            <h2 className='font-semibold my-1 text-[15px] md:text-[14px]'>Challenges and Solutions:</h2>
            <p className='ml-3 text-[15px] md:text-[14px] dark:text-gray-400'>
              - Overcame challenges in implementing JavaScript logic for accurate calculations <br />
              - Developed problem-solving skills to debug and refine the application

            </p>
          </div>
          <div>
            <h2 className='font-semibold my-1 text-[15px] md:text-[14px]'>Github Repository:</h2>
            <p className='ml-3'>
              <Link to='https://github.com/akashpawar07/Calculators' className='text-blue-400 italic hover:text-blue-600'>https://github.com/akashpawar07/Calculators</Link>
            </p>
          </div>

        </div>
      </div>


    </>
  )
}

export default About
