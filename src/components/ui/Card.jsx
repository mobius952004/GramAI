import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Card = ({ children, className }) => {
    return (
        <div className={twMerge(clsx("bg-white rounded-xl shadow-sm border border-gray-100 p-6", className))}>
            {children}
        </div>
    );
};
