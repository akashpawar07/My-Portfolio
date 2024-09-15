import React, { useState } from 'react'
import { useEffect } from 'react'
import * as Yup from 'yup'
import checkBtn from '../assets/checkBtn.png'
import { useFormik } from 'formik';
import { formValidationSchema } from '../Schemas/validation'

const initialValues = {
  username: "",
  useremail: "",
  usermessage: ""
}

function Contact() {

  const [showModal, setShowModal] = useState(false) // this for showModal that will open modal after the form submission.

  // this is for handling the form
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: formValidationSchema,

    onSubmit: async (values, action) => {

      console.log(values); // when form is submiting then our onsubmit getting all values
      action.resetForm(); // this will reset the our form after the submition of form
      setShowModal(true) // this will open popup modal 

      const response = await fetch('https://akash-portfolio-k1np.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      console.log(values);
      try {
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  })
  console.log(errors)

  
  // const child Modal
  const PopupModal = () => {
    const closeModal = () => setShowModal(false);

    useEffect(() => {
      document.body.style.overflowY = "hidden"
      // document.documentElement.style = "background-color: white"
      return () => {
        document.body.style.overflowY = "scroll"
      };
    }, [])


    return (
      <>
        <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center bg-indigo-700 z-[50]'>
          <div className='md:mt-10 flex flex-col gap-2 items-center text-slate-800 shadow-4xl bg-neutral-50 w-[95%] md:w-[33vw] md:h-[55vh] mx-h-[40vh] rounded-md'>
            <div className='flex flex-col items-center justify-between gap-4 px-4 py-2 '>
              <img src={checkBtn} alt="chech-button" className='w-[60px] h-[60px] relative mt-[-30px]' />
              <h1 className='font-bold text-2xl '>Thank You !</h1>
              <div className='flex flex-col justify-between items-center gap-7 md:mt-2'>
                <p className='text-center text-[16px]'>Thank you for reaching out, I appreciate your comment"</p>
                <button className='p-2 mb-2 w-[50%] bg-[#2db02d] font-bold text-neutral-50 hover:bg-[#37c137] rounded-md ' onClick={closeModal}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  // popup model ends here 


  return (
    <>
      <section className=" mt-[80px] mb-[160px]">

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-700 dark:text-gray-400">Contact me</h2>
          <p className='mb-3 italic '>Feel free to contact me with any questions.</p>
          <form action="#" className="space-y-8"
            onSubmit={handleSubmit}>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                name='username'
                id="text"
                autoFocus
                placeholder="Your name"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}

                className="shadow-sm border text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-400 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
              {errors.username && touched.username ? <p className='text-red-500 text-[14px] ml-1'>{errors.username}</p> : null}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your Email</label>
              <input
                type="email"
                name='useremail'
                id="email"
                placeholder="e.g. akashpawar@gmail.com"
                value={values.useremail}
                onChange={handleChange}
                onBlur={handleBlur}

                className="block p-3 w-full text-sm text-gray-900 bg-gray-400 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 bor dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-700 dark:focus:border-primary-500 dark:shadow-sm-light" />
              {errors.useremail && touched.useremail ? <p className='text-red-500 text-[14px] ml-1'>{errors.useremail}</p> : null}

            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your message</label>
              <textarea
                id="message"
                name='usermessage'
                rows="6"
                placeholder="Leave a comment..."
                value={values.usermessage}
                onChange={handleChange}
                onBlur={handleBlur}

                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-400 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 placeholder-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
              {errors.usermessage && touched.usermessage ? <p className='text-red-500 text-[14px] ml-1'>{errors.usermessage}</p> : null}

            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-[99%] bg-blue-700 text-neutral-100 "
            >Send message
            </button>

          </form>
        </div>

      </section>
      {showModal && <PopupModal />}

    </>
  )
}

export default Contact