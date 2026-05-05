"use client";

import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"

const LogInPage = () => {
    
// const formHandler=(e)=>{
//     e.preventDefault();
//     const email=e.target.email.value;
//     const password=e.target.password.value;
//     console.log(email,password)
// }


    const {register,handleSubmit,errors}=useForm();
    const onSubmit=(data)=>console.log(data)



    return (
        <div className='container flex justify-center items-center h-[85vh]'>

            <div className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                      <h1>Log in</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                         <fieldset className="fieldset">
                <legend className="fieldset-legend">Write your email</legend>
                <input type="email" className="input"  placeholder="Type here your email" 
                 {...register("email",{required:true})}/>
                
                <p className="label">Optional</p>
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Write your passsword</legend>
                <input type="password" className="input"  placeholder="Type here your password"
                {...register("password",{required:true})}
                 />
                 
                <p className="label">Optional</p>
               
            </fieldset>

                    <div className='flex justify-center'>
                        <button className='btn btn-primary' type='sumint'>Login</button>
                    </div>
                    </form>


                </div>
            </div>


        </div>
    );
};

export default LogInPage;