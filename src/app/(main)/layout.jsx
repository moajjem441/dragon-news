'use client'
import BreakingNews from '@/components/BreakingNews';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { Children } from 'react';

const MainLayout = ({Children}) => {
    return (
        <>

        <Header></Header>
        <BreakingNews></BreakingNews>
       <Navbar></Navbar>
        <h1>Home Page</h1>
        <main>
            {Children}
        </main>
        </>
    );
};

export default MainLayout;