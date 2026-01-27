import React from 'react';
import { Card } from './Card';
import { ArrowUpRight, ArrowDownRight, Phone, MessageCircle, FileText, CheckCircle, Clock } from 'lucide-react';

const iconMap = {
    Phone,
    MessageCircle,
    FileText,
    CheckCircle,
    Clock
};

export const StatCard = ({ label, value, trend, isPositive, icon }) => {
    const IconComponent = iconMap[icon] || Phone;

    return (
        <Card className="hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
                    <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
                </div>
                <div className="p-3 bg-primary-light/10 rounded-lg">
                    <IconComponent className="text-primary" size={24} />
                </div>
            </div>

            <div className="mt-4 flex items-center">
                <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-secondary' : 'text-red-500'}`}>
                    {isPositive ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
                    {trend}
                </span>
                <span className="text-xs text-gray-400 ml-2">vs last month</span>
            </div>
        </Card>
    );
};
