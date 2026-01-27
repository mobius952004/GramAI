import React from 'react';
import { ChartCard } from '../components/ui/ChartCard';
import { demographics } from '../data/mockData';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, CartesianGrid } from 'recharts';

export const UserDemographics = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartCard title="Age Distribution" subtitle="Caller age groups">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={demographics.ageGroups}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="range" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Bar dataKey="count" fill="#319795" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Gender Ratio" subtitle="Self-reported or inferred gender">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={demographics.gender}
                                cx="50%"
                                cy="50%"
                                innerRadius={0}
                                outerRadius={100}
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {demographics.gender.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Regional Heatmap</h3>
                <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Mock Map Placeholder */}
                    <div className="text-center">
                        <p className="text-slate-400 font-medium">Interactive India Map</p>
                        <p className="text-slate-400 text-sm">(Google Maps / Leaflet Integration Placeholder)</p>
                    </div>
                    {/* Simple CSS Heatmap Mock Effect */}
                    <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>
        </div>
    );
};
