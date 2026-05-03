import Image from 'next/image';
import React from 'react';
 import logo from '@/assets/logo.png'
 import {format} from 'date-fns'


const Header = () => {
    //  const { format } = require("date-fns");
    return (
        <div className='text-center my-8 space-y-2'>
            <Image className='mx-auto' src={logo} width={300} height={200} alt='logo'></Image>
            <p>Journal Without  Fear or Favour</p>
            <p>{format(new Date(),"EEEE , MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;