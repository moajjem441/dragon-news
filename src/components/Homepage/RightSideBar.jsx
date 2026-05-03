import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h1 className='font-bold'>Login with</h1>
            
                <button>
                   <div className='my-4 border-2 p-3 px-4 text-blue-400 flex gap-2 justify-center items-center'>
                    <div> <FaGoogle /></div>
                    <div>Login With Google</div>
                   </div>
                </button>


                <button>

                   <div className='my-4 border-2 p-3 px-4  flex gap-2 justify-center items-center'>
                    <div> <FaGithub /></div>
                    <div>Login With Github</div>
                   </div>
                </button>

        </div>
    );
};

export default RightSideBar;