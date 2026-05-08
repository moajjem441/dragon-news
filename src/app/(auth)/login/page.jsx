"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form" //react-hook-form install korte hobe

const LogInPage = () => {

    // const formHandler=(e)=>{
    //     e.preventDefault();
    //     const email=e.target.email.value;
    //     const password=e.target.password.value;
    //     console.log(email,password)
    // }


    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        console.log(data)

        const { email, password } = data;


        const { data:res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",

        });

        console.log(res,error)
    }



    return (

        <div className='container mx-auto flex justify-center items-center h-[85vh]'>

            <div className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h1>Log in</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Write your email</legend>
                            <input type="email" className="input" placeholder="Type here your email"
                                {...register("email", { required: "Must fill email field" })} />
                                
                            {errors.email && (<span className='text-red-600'>{errors.email.message}</span>)}

                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Write your passsword</legend>
                            <input type="password" className="input" placeholder="Type here your password"
                                {...register("password", { required: "Password field must fill it" })}
                            />
                            {errors.password && (<span className='text-red-600'>{errors.email.message}</span>)}

                        </fieldset>

                        <div className='flex justify-center'>
                            <button className='btn btn-primary' type='sumint'>Login</button>
                        </div>
                    </form>

                    <p>Don't have an accunt ? <Link className='text-blue-500' href={'/register'}>register</Link></p>

                </div>
            </div>


        </div>
    );
};

export default LogInPage;