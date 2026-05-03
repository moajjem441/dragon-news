import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className=' h-[80vh] flex flex-col gap-7 justify-center items-center '>
        <h1 className='text-6xl font-bold text-green-300'>THis page not Found</h1>
       <Link href='/'> <button  className='text-2xl btn btn-primary'>Back HomePage</button></Link>
        </div>
    );
};

export default NotFoundPage;