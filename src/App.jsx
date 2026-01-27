import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { CallAnalytics } from './pages/CallAnalytics';
import { SchemeInsights } from './pages/SchemeInsights';
import { EligibilityFunnel } from './pages/EligibilityFunnel';
import { LanguageAnalysis } from './pages/LanguageAnalysis';
import { UserDemographics } from './pages/UserDemographics';
import { AIPerformance } from './pages/AIPerformance';
import { Logs } from './pages/Logs';
import { Settings } from './pages/Settings';

const App = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <Dashboard />;
            case 'calls':
                return <CallAnalytics />;
            case 'schemes':
                return <SchemeInsights />;
            case 'funnel':
                return <EligibilityFunnel />;
            case 'language':
                return <LanguageAnalysis />;
            case 'demographics':
                return <UserDemographics />;
            case 'ai':
                return <AIPerformance />;
            case 'logs':
                return <Logs />;
            case 'settings':
                return <Settings />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 capitalize">
                    {activeTab === 'ai' ? 'AI Performance' :
                        activeTab === 'funnel' ? 'Eligibility Funnel' :
                            activeTab.replace(/([A-Z])/g, ' $1').trim().replace('-', ' ')}
                </h2>
                <p className="text-gray-500 text-sm">
                    {activeTab === 'dashboard' ? 'Overview of system performance and key metrics.' :
                        activeTab === 'calls' ? 'Detailed analysis of call volumes, outcomes, and geographic trends.' :
                            activeTab === 'schemes' ? 'Insights on scheme recommendations and eligibility rates.' :
                                activeTab === 'funnel' ? 'Step-by-step user journey and drop-off analysis.' :
                                    activeTab === 'language' ? 'Distribution of languages and dialects across calls.' :
                                        activeTab === 'demographics' ? 'User age groups and gender distribution.' :
                                            activeTab === 'ai' ? 'Monitoring AI intent detection accuracy and automated decisions.' :
                                                activeTab === 'logs' ? 'Searchable history of call sessions and outcomes.' :
                                                    'System configuration and admin preferences.'}
                </p>
            </div>
            {renderContent()}
        </MainLayout>
    );
};

export default App;
