import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header />
            <div className='p-2 md:px-[135px]'>
            <Outlet />
            </div>
        </>
    );
};

export default Main;