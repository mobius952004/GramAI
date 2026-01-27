import React from 'react';
import { Card } from './Card';

export const ChartCard = ({ title, subtitle, children, action }) => {
    return (
        <Card className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                </div>
                {action}
            </div>
            <div className="flex-1 w-full min-h-[300px]">
                {children}
            </div>
        </Card>
    );
};
