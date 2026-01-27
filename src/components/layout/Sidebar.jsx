import React from 'react';
import {
    LayoutDashboard,
    PhoneIncoming,
    FileText,
    Filter,
    Languages,
    Users,
    Cpu,
    List,
    Settings
} from 'lucide-react';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard Overview', id: 'dashboard' },
    { icon: PhoneIncoming, label: 'Call Analytics', id: 'calls' },
    { icon: FileText, label: 'Scheme Insights', id: 'schemes' },
    { icon: Filter, label: 'Eligibility Funnel', id: 'funnel' },
    { icon: Languages, label: 'Language & Dialect', id: 'language' },
    { icon: Users, label: 'User Demographics', id: 'demographics' },
    { icon: Cpu, label: 'AI Performance', id: 'ai' },
    { icon: List, label: 'Logs & Sessions', id: 'logs' },
    { icon: Settings, label: 'Admin Settings', id: 'settings' },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <div className="w-64 bg-primary-dark text-white h-screen flex flex-col fixed left-0 top-0 shadow-xl z-20">
            <div className="p-6 border-b border-primary-light flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">G</span>
                </div>
                <div>
                    <h1 className="text-xl font-bold tracking-wide">GramAI</h1>
                    <p className="text-xs text-secondary-light">Rural Finance Assistant</p>
                </div>
            </div>

            <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center px-6 py-3 transition-all duration-200 group ${isActive
                                    ? 'bg-primary border-r-4 border-secondary text-white'
                                    : 'text-gray-400 hover:bg-primary-light hover:text-white'
                                }`}
                        >
                            <Icon
                                size={20}
                                className={`mr-3 ${isActive ? 'text-secondary' : 'text-gray-400 group-hover:text-white'}`}
                            />
                            <span className="text-sm font-medium">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-primary-light">
                <div className="bg-primary px-4 py-3 rounded-lg">
                    <p className="text-xs text-gray-400 uppercase mb-1">System Status</p>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-medium text-green-400">Online</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
