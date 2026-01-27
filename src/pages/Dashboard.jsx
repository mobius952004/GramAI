import React from 'react';
import { StatCard } from '../components/ui/StatCard';
import { ChartCard } from '../components/ui/ChartCard';
import { stats, callAnalytics } from '../data/mockData';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend
} from 'recharts';

export const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Main Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartCard title="Call Volume Trends" subtitle="Daily calls over the last week">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={callAnalytics.callsPerDay}>
                            <defs>
                                <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#1a365d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#1a365d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#718096' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718096' }} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            />
                            <Area type="monotone" dataKey="calls" stroke="#1a365d" strokeWidth={3} fillOpacity={1} fill="url(#colorCalls)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Calls by State" subtitle="Top 5 states by volume">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={callAnalytics.callsPerState} layout="vertical" margin={{ left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                            <XAxis type="number" axisLine={false} tickLine={false} />
                            <YAxis dataKey="state" type="category" axisLine={false} tickLine={false} width={80} />
                            <Tooltip cursor={{ fill: '#f7fafc' }} />
                            <Bar dataKey="calls" fill="#38a169" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>
        </div>
    );
};
