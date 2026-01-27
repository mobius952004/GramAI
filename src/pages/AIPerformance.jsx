import React from 'react';
import { Card } from '../components/ui/Card';
import { Table, TableRow, TableCell } from '../components/ui/Table';
import { aiPerformance } from '../data/mockData';
import { Activity, MessageSquare, AlertTriangle } from 'lucide-react';

const MetricCard = ({ label, value, subtext, icon: Icon, colorClass }) => (
    <Card className="flex items-center p-6">
        <div className={`p-4 rounded-full mr-4 ${colorClass}`}>
            <Icon size={24} className="text-white" />
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{label}</p>
            <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
            <p className="text-xs text-gray-400">{subtext}</p>
        </div>
    </Card>
);

export const AIPerformance = () => {
    return (
        <div className="space-y-6">
            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MetricCard
                    label="Intent Accuracy"
                    value={`${aiPerformance.accuracy}%`}
                    subtext="Last 24 hours"
                    icon={Activity}
                    colorClass="bg-green-500"
                />
                <MetricCard
                    label="Avg. Turns/Conv"
                    value={aiPerformance.avgTurns}
                    subtext="Optimal range: 3-5"
                    icon={MessageSquare}
                    colorClass="bg-blue-500"
                />
                <MetricCard
                    label="Fallback Rate"
                    value={`${aiPerformance.fallbackRate}%`}
                    subtext="Handed to human agent"
                    icon={AlertTriangle}
                    colorClass="bg-red-500"
                />
            </div>

            {/* Decisions Table */}
            <Card>
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Recent AI Decisions</h3>
                    <p className="text-sm text-gray-500">Real-time log of intent classification and actions</p>
                </div>

                <Table headers={['Timestamp', 'Detected Intent', 'Confidence', 'Action Taken']}>
                    {aiPerformance.decisions.map((decision, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-mono text-gray-500">{decision.time}</TableCell>
                            <TableCell>
                                <span className="font-medium text-gray-700">{decision.intent}</span>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">
                                    <div className="w-16 h-1.5 bg-gray-200 rounded-full mr-2">
                                        <div
                                            className={`h-full rounded-full ${decision.confidence > 0.9 ? 'bg-green-500' : decision.confidence > 0.7 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                            style={{ width: `${decision.confidence * 100}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-gray-500">{(decision.confidence * 100).toFixed(0)}%</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono">
                                    {decision.action}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </Card>
        </div>
    );
};
