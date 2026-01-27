import React from 'react';
import { Card } from '../components/ui/Card';
import { Table, TableRow, TableCell } from '../components/ui/Table';
import { schemeInsights } from '../data/mockData';

export const SchemeInsights = () => {
    return (
        <Card className="min-h-[500px]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Scheme Effectiveness</h3>
                <div className="flex space-x-2">
                    <button className="px-3 py-1.5 text-sm bg-gray-100 rounded hover:bg-gray-200 text-gray-700">Filter</button>
                    <button className="px-3 py-1.5 text-sm bg-primary text-white rounded hover:bg-primary-light">Export</button>
                </div>
            </div>

            <Table headers={['Scheme Name', 'Type', 'Coverage', 'Recommended', 'Success Rate']}>
                {schemeInsights.map((scheme) => (
                    <TableRow key={scheme.id}>
                        <TableCell className="font-medium text-primary-dark">{scheme.name}</TableCell>
                        <TableCell>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {scheme.type}
                            </span>
                        </TableCell>
                        <TableCell>{scheme.coverage}</TableCell>
                        <TableCell>{scheme.recommended.toLocaleString()}</TableCell>
                        <TableCell>
                            <div className="flex items-center">
                                <span className="text-gray-700 mr-2">{scheme.successRate}%</span>
                                <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${scheme.successRate > 75 ? 'bg-green-500' : scheme.successRate > 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                        style={{ width: `${scheme.successRate}%` }}
                                    ></div>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </Table>
        </Card>
    );
};
