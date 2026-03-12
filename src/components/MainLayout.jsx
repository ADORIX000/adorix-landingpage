import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GradientWrapper from './GradientWrapper';

const MainLayout = () => {
    return (
        <GradientWrapper>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </GradientWrapper>
    );
};

export default MainLayout;
