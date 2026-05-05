import Link from 'next/link';
import React from 'react';

const LogInPage = () => {
    return (
        <div className='container flex justify-center items-center h-[85vh]'>
            <h1>Log in</h1>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Write your email</legend>
                <input type="email" className="input" name='email' placeholder="Type here" />
                <p className="label">Optional</p>
            </fieldset>
            
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Write your email</legend>
                <input type="email" className="input" name='email' placeholder="Type here" />
                <p className="label">Optional</p>
            </fieldset>



<div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Medium Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            

        </div>
    );
};

export default LogInPage;