import React from 'react'
import Socialmedia from './Socialmedia'


function Footer() {

    return (
        <>
            <div className=' items-center p-[10px] flex justify-center flex-col w-screen h-[100px] mt-[30px] gap-1 text-gray-500 bg-[#020205cf] dark:bg-[#222222cf] dark:text-gray-500'>
                <Socialmedia />
                <div>
                    <p className=' text-[14px]'> copyright&copy;2024 Owner | Developer - akash pawar</p>
                </div>
            </div>
        </>
    )
}

export default Footer
