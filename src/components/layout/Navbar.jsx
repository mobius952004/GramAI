import React, { useState, useEffect } from 'react';
import { Bell, Search, ChevronDown, MapPin } from 'lucide-react';

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
            {/* Left: Page/Context Info (Hidden on mobile usually, but keeping for structure) */}
            <div className="flex items-center text-gray-500 text-sm">
                <MapPin size={16} className="mr-2 text-primary" />
                <span className="font-medium mr-2">Region:</span>
                <select className="bg-transparent border-none focus:ring-0 text-gray-700 font-semibold cursor-pointer outline-none">
                    <option>All India</option>
                    <option>Uttar Pradesh</option>
                    <option>Bihar</option>
                    <option>Madhya Pradesh</option>
                    <option>Rajasthan</option>
                </select>
            </div>

            {/* Right: Actions & Profile */}
            <div className="flex items-center space-x-6">
                {/* Date & Time */}
                <div className="hidden md:flex flex-col items-end mr-4">
                    <span className="text-sm font-semibold text-gray-700">
                        {currentTime.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </span>
                    <span className="text-xs text-gray-500">
                        {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>

                <div className="h-8 w-px bg-gray-200 mx-2"></div>

                <button className="relative text-gray-500 hover:text-primary transition-colors">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold ring-2 ring-transparent group-hover:ring-primary-light transition-all">
                        AD
                    </div>
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">Admin User</p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                    </div>
                    <ChevronDown size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
