import React from 'react';
import { ChartCard } from '../components/ui/ChartCard';
import { eligibilityFunnel } from '../data/mockData';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export const EligibilityFunnel = () => {
    return (
        <div className="grid grid-cols-1 gap-6">
            <ChartCard title="User Eligibility Funnel" subtitle="Drop-off analysis from initial call to guidance">
                <div className="w-full h-[400px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={eligibilityFunnel} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="step" type="category" width={120} tick={{ fontSize: 12, fill: '#4a5568', fontWeight: 500 }} axisLine={false} tickLine={false} />
                            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px' }} />
                            <Bar dataKey="value" barSize={40} background={{ fill: '#f7fafc', radius: 4 }}>
                                {eligibilityFunnel.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill="#1a365d" fillOpacity={1 - (index * 0.15)} radius={[0, 4, 4, 0]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </ChartCard>

            {/* Insight Text */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-blue-800 font-semibold mb-2">Funnel Insight</h4>
                <p className="text-blue-600">
                    The biggest drop-off occurs between <strong>Provided Age</strong> and <strong>Provided State</strong> (7% drop).
                    Consider simplifying the state selection voice prompt.
                </p>
            </div>
        </div>
    );
};
