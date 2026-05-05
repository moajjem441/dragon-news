import Link from 'next/link';
import React from 'react';

const LogInPage = () => {
    return (
        <div className='container flex justify-center items-center h-[85vh]'>
            <h1>Log in</h1>

            <fieldset className="fieldset">
  <legend className="fieldset-legend">What is your name?</legend>
  <input type="text" className="input" placeholder="Type here" />
  <p className="label">Optional</p>
</fieldset>
            
        </div>
    );
};

export default LogInPage;