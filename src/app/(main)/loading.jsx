import React from 'react';

const MainLoading = () => {
    return (
        /* min-h-screen dile eta pura screen-er majhkhane thakbe */
        <div className='flex min-h-screen justify-center items-center gap-3'>
            <h2 className="text-xl font-semibold text-gray-600">Main Page Loading</h2>
            
            {/* Sudhu ekta ba duita matching color spinner rakha bhalo */}
            <span className="loading loading-spinner loading-lg text-primary"></span>
            
            {/* Ar jodi disco light-i banate chan, tobe className gulo thik kore nin */}
            {/* 
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            */}
        </div>
    );
};

export default MainLoading;