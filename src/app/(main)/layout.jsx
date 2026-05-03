'use client'
import BreakingNews from '@/components/BreakingNews';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { Children } from 'react';

const MainLayout = ({children}) => {
    return (
        <>

        <Header></Header>
        <BreakingNews></BreakingNews>
       <Navbar></Navbar>
       
        
        <main>
            {children}
        </main>
        </>
    );
};

export default MainLayout;