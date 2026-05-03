import Navbar from '@/components/Navbar';
import React, { Children } from 'react';
import { montserrat } from '../layout';

const AuthLayoutPage = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
        <Navbar></Navbar>
        {children}
        </div>
      
    
    );
};

export default AuthLayoutPage;