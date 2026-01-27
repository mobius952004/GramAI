import React from 'react';
import { ChartCard } from '../components/ui/ChartCard';
import { languageData } from '../data/mockData';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const dialectData = [
    { name: 'Bhojpuri', value: 35 },
    { name: 'Maithili', value: 25 },
    { name: 'Awadhi', value: 20 },
    { name: 'Khari Boli', value: 15 },
    { name: 'Others', value: 5 },
];

export const LanguageAnalysis = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartCard title="Language Distribution" subtitle="Primary languages used in calls">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={languageData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {languageData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Dialect Usage (Hindi Region)" subtitle="Breakdown of Hindi dialects">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dialectData} layout="vertical" margin={{ left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                            <Tooltip cursor={{ fill: '#f7fafc' }} />
                            <Bar dataKey="value" fill="#805ad5" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Linguistic Insight</h3>
                <p className="text-gray-600">
                    <strong>Hindi + Hinglish</strong> dominates <strong>78%</strong> of all calls.
                    There is a rising trend in <strong>Bhojpuri</strong> dialect usage in Eastern UP/Bihar region (+12% this month).
                    Recommendation: Prioritize training the ASR model for Bhojpuri sentence structures.
                </p>
            </div>
        </div>
    );
};
