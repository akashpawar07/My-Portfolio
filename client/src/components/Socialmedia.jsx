import React from 'react'
// import {Link} from 'react-router-dom'

function Socialmedia() {
    return (
        <>
            <div>
                <p className=''>Connect with me!</p>
            </div>
            <div className='flex gap-3'>
                <a href='https://www.instagram.com/sky7.insta/?next=%2F' className='hover:text-[#e4405f] cursor-pointer text-2xl'><ion-icon name="logo-instagram"></ion-icon></a>

                <a href="https://www.facebook.com/profile.php?id=100024249859890" className='hover:text-[#294fa0] cursor-pointer text-2xl'><ion-icon name="logo-facebook"></ion-icon></a>

                <a href="https://www.aedin.com/in/web-akash-pawar/" className='hover:text-[#0077b5] cursor-pointer text-2xl'><ion-icon name="logo-linkedin"></ion-icon></a>

                <a href="https://github.com/akashpawar07" className='hover:text-[#0077b5] cursor-pointer text-2xl'><ion-icon name="logo-github"></ion-icon></a>
            </div>
        </>
    )
}

export default Socialmedia
