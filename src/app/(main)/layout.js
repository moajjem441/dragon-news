import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { Children } from 'react';

const MainLayout = ({Children}) => {
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        {Children}
        </>
    );
};

export default MainLayout;