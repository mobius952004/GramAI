import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = ({ children, activeTab, setActiveTab }) => {
    return (
        <div className="flex h-screen bg-neutral-bg overflow-hidden font-sans">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 flex flex-col ml-64 transition-all duration-300">
                <Navbar />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-neutral-bg p-6 relative">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
