export const stats = [
    { label: 'Total Calls Received', value: '12,450', trend: '+12%', isPositive: true, icon: 'Phone' },
    { label: 'Successful Conversations', value: '9,820', trend: '+8.5%', isPositive: true, icon: 'MessageCircle' },
    { label: 'Schemes Recommended', value: '15,200', trend: '+24%', isPositive: true, icon: 'FileText' },
    { label: 'Eligibility Matches', value: '7,340', trend: '+18%', isPositive: true, icon: 'CheckCircle' },
    { label: 'Avg. Call Duration', value: '4m 12s', trend: '-5%', isPositive: true, icon: 'Clock' },
];

export const callAnalytics = {
    callsPerDay: [
        { day: 'Mon', calls: 1200 },
        { day: 'Tue', calls: 1350 },
        { day: 'Wed', calls: 1280 },
        { day: 'Thu', calls: 1420 },
        { day: 'Fri', calls: 1500 },
        { day: 'Sat', calls: 900 },
        { day: 'Sun', calls: 800 },
    ],
    callsPerState: [
        { state: 'UP', calls: 4500 },
        { state: 'Bihar', calls: 3200 },
        { state: 'MP', calls: 2100 },
        { state: 'Rajasthan', calls: 1800 },
        { state: 'Others', calls: 850 },
    ],
    outcomes: [
        { name: 'Completed', value: 65, color: '#38a169' },
        { name: 'Dropped', value: 20, color: '#ed8936' },
        { name: 'Follow-up', value: 15, color: '#2a4365' },
    ]
};

export const schemeInsights = [
    { id: 1, name: 'Pradhan Mantri Awas Yojana', type: 'Housing', coverage: 'All India', recommended: 4500, successRate: 78 },
    { id: 2, name: 'Ayushman Bharat', type: 'Health', coverage: 'All India', recommended: 3200, successRate: 85 },
    { id: 3, name: 'Kisan Samman Nidhi', type: 'Pension', coverage: 'All India', recommended: 2800, successRate: 92 },
    { id: 4, name: 'Mudra Loan', type: 'Loan', coverage: 'All India', recommended: 1500, successRate: 45 },
    { id: 5, name: 'Atal Pension Yojana', type: 'Pension', coverage: 'All India', recommended: 1200, successRate: 60 },
];

export const eligibilityFunnel = [
    { step: 'Total Callers', value: 12450 },
    { step: 'Provided Age', value: 10200 },
    { step: 'Provided State', value: 9500 },
    { step: 'Provided Income', value: 8800 },
    { step: 'Eligible', value: 7340 },
    { step: 'Guided', value: 6800 },
];

export const languageData = [
    { name: 'Hindi', value: 45, color: '#2a4365' },
    { name: 'Hinglish', value: 33, color: '#38a169' },
    { name: 'Bengali', value: 12, color: '#ed8936' },
    { name: 'Marathi', value: 10, color: '#718096' },
];

export const demographics = {
    ageGroups: [
        { range: '18-25', count: 20 },
        { range: '26-40', count: 45 },
        { range: '41-60', count: 25 },
        { range: '60+', count: 10 },
    ],
    gender: [
        { name: 'Male', value: 55, color: '#2b6cb0' },
        { name: 'Female', value: 45, color: '#d53f8c' },
    ]
};

export const recentLogs = [
    { id: 'S-1001', time: '10:23 AM', lang: 'Hindi', intent: 'Check Pension Eligibility', outcome: 'Eligible' },
    { id: 'S-1002', time: '10:25 AM', lang: 'Hinglish', intent: 'Loan Application', outcome: 'Incomplete' },
    { id: 'S-1003', time: '10:28 AM', lang: 'Bengali', intent: 'Health Insurance Info', outcome: 'Provided Info' },
    { id: 'S-1004', time: '10:30 AM', lang: 'Marathi', intent: 'Crop Insurance', outcome: 'Eligible' },
    { id: 'S-1005', time: '10:32 AM', lang: 'Hindi', intent: 'General Inquiry', outcome: 'Resolved' },
];

export const aiPerformance = {
    accuracy: 94.5,
    avgTurns: 4.2,
    fallbackRate: 2.1,
    decisions: [
        { time: '10:30:05', intent: 'Pension_Check', confidence: 0.98, action: 'Ask_Age' },
        { time: '10:30:15', intent: 'Loan_Apply', confidence: 0.85, action: 'Clarify_Income' },
        { time: '10:30:25', intent: 'Unknown', confidence: 0.45, action: 'Fallback_Human' },
    ]
};
