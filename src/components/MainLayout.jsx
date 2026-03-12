import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GradientWrapper from './GradientWrapper';

const MainLayout = ({ children }) => {
    return (
        <GradientWrapper>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </GradientWrapper>
    );
};

export default MainLayout;
