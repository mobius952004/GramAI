import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Table, TableRow, TableCell } from '../components/ui/Table';
import { recentLogs } from '../data/mockData';
import { Search, Filter, Download } from 'lucide-react';

export const Logs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="space-y-6">
            <Card>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h3 className="text-lg font-bold text-gray-800">Call Session Logs</h3>

                    <div className="flex w-full md:w-auto space-x-2">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search Session ID or Intent..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700">
                            <Filter size={18} className="mr-2" />
                            Filter
                        </button>

                        <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light">
                            <Download size={18} className="mr-2" />
                            Export
                        </button>
                    </div>
                </div>

                <Table headers={['Session ID', 'Timestamp', 'Language', 'Detected Intent', 'Outcome']}>
                    {recentLogs.map((log) => (
                        <TableRow key={log.id}>
                            <TableCell className="font-mono text-primary font-medium">{log.id}</TableCell>
                            <TableCell>{log.time}</TableCell>
                            <TableCell>
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                    {log.lang}
                                </span>
                            </TableCell>
                            <TableCell>{log.intent}</TableCell>
                            <TableCell>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${log.outcome === 'Eligible' || log.outcome === 'Resolved' ? 'bg-green-100 text-green-800' :
                                        log.outcome === 'Incomplete' ? 'bg-red-100 text-red-800' :
                                            'bg-blue-100 text-blue-800'
                                    }`}>
                                    {log.outcome}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>

                {/* Pagination Mock */}
                <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500">Showing 1 to 5 of 1,240 entries</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </Card>
        </div>
    );
};
