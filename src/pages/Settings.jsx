import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Save, RefreshCw, Database } from 'lucide-react';

const Toggle = ({ label, enabled, setEnabled }) => (
    <div className="flex items-center justify-between py-4 border-b last:border-0 border-gray-100">
        <span className="text-gray-700 font-medium">{label}</span>
        <button
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${enabled ? 'bg-secondary' : 'bg-gray-200'}`}
            onClick={() => setEnabled(!enabled)}
        >
            <span className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
    </div>
);

export const Settings = () => {
    const [schemesEnabled, setSchemesEnabled] = useState(true);
    const [stateSchemes, setStateSchemes] = useState(true);
    const [autoUpdate, setAutoUpdate] = useState(false);

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Card>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Scheme Configuration</h3>
                <div className="space-y-1">
                    <Toggle label="Enable Central Government Schemes" enabled={schemesEnabled} setEnabled={setSchemesEnabled} />
                    <Toggle label="Enable State-Specific Schemes" enabled={stateSchemes} setEnabled={setStateSchemes} />
                    <Toggle label="Auto-update Eligibility Criteria" enabled={autoUpdate} setEnabled={setAutoUpdate} />
                </div>
                <div className="mt-6">
                    <button className="flex items-center text-primary-dark hover:text-primary font-medium">
                        <RefreshCw size={16} className="mr-2" />
                        Sync Scheme Database Now
                    </button>
                </div>
            </Card>

            <Card>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Voice Interface Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Default Response Language</label>
                        <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border">
                            <option>Generic Hindi (Standard)</option>
                            <option>Hinglish (Urban)</option>
                            <option>Regional (Auto-detect)</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-1">Fallback language if dialect is unrecognized</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Voice Speed</label>
                        <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border">
                            <option>Slow (0.8x) - Recommended for rural</option>
                            <option>Normal (1.0x)</option>
                            <option>Fast (1.2x)</option>
                        </select>
                    </div>
                </div>
            </Card>

            <Card>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Data Management</h3>
                <div className="flex space-x-4">
                    <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                        <Database size={18} className="mr-2" />
                        Backup Analytics Data
                    </button>
                    <button className="flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary-light">
                        <Save size={18} className="mr-2" />
                        Save System Config
                    </button>
                </div>
            </Card>
        </div>
    );
};
