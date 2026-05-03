import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from'@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-10  py-2'>
          
           <div></div>

           <div>
            <ul className='flex justify-center gap-4 py-2'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href='/about-us'>About</NavLink></li>
                <li><NavLink href='/career'>Career</NavLink></li>
         
           </ul>
           </div>

           <div className='flex justify-center gap-4 py-2'>
            <Image  src={user} alt='userImage'></Image>
            <Link href='/login'><button className='btn  px-2'>Login</button></Link>
           </div>
        </div>
    );
};

export default Navbar;