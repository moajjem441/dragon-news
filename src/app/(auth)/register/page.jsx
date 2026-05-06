"use client";

import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form" //react-hook-form install korte hobe

const RegisterPage = () => {
    
// const formHandler=(e)=>{
//     e.preventDefault();
//     const email=e.target.email.value;
//     const password=e.target.password.value;
//     console.log(email,password)
// }


    const {register,handleSubmit,formState: { errors },}=useForm();
    const onSubmit=(data)=>console.log(data)



    return (
        <div className='container mx-auto flex justify-center items-center h-[85vh]'>

            <div className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                      <h1 className='text-2xl font-bold'> Register</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        
                         <fieldset className="fieldset">
                <legend className="fieldset-legend"> Your name</legend>
                <input type="text" className="input"  placeholder="Type here your name" 
                 {...register("name",{required:"Must fill name field"})}/>
                {errors.name && (<span className='text-red-600'>{errors.name.message}</span>)}

            </fieldset>


            
                         <fieldset className="fieldset">
                <legend className="fieldset-legend"> Photo URL</legend>
                <input type="tel" className="input"  placeholder="Type here your Photo URL" 
                 {...register("photo",{required:"Must fill email field"})}/>
                {errors.photo && (<span className='text-red-600'>{errors.photo.message}</span>)}

            </fieldset>

                         <fieldset className="fieldset">
                <legend className="fieldset-legend"> Email</legend>
                <input type="email" className="input"  placeholder="Type here your email" 
                 {...register("email",{required:"Must fill email field"})}/>
                {errors.email && (<span className='text-red-600'>{errors.email.message}</span>)}

            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend"> Passsword</legend>
                <input type="password" className="input"  placeholder="Type here your password"
                {...register("password",{required:"Password field must fill it"})}
                 />
                 {errors.password && (<span className='text-red-600'>{errors.password.message}</span>)}
               
            </fieldset>

                    <div className='flex justify-center'>
                        <button className='btn btn-primary' type='sumint'>Register</button>
                    </div>
                    </form>

                    

                </div>
            </div>


        </div>
    );
};

export default RegisterPage;