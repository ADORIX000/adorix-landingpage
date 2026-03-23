import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import {
    TrendingUp, TrendingDown, Users, Eye, Target,
    Calendar, Download, Filter, RefreshCw
} from 'lucide-react';

// --- Sample Data ---
const DATA_MAIN = [
    { day: 'Mon', reach: 4500, engagement: 2400, conversion: 1200 },
    { day: 'Tue', reach: 5200, engagement: 2800, conversion: 1400 },
    { day: 'Wed', reach: 4800, engagement: 2600, conversion: 1300 },
    { day: 'Thu', reach: 6100, engagement: 3100, conversion: 1600 },
    { day: 'Fri', reach: 5800, engagement: 2900, conversion: 1500 },
    { day: 'Sat', reach: 7200, engagement: 3800, conversion: 2100 },
    { day: 'Sun', reach: 6800, engagement: 3400, conversion: 1900 },
];

const DEVICES_DATA = [
    { name: 'Kiosk A', value: 45, color: '#12B2C1' },
    { name: 'Kiosk B', value: 30, color: '#0D8A9E' },
    { name: 'Kiosk C', value: 15, color: '#8B5CF6' },
    { name: 'Others', value: 10, color: '#F59E0B' },
];

const Analytics = () => {
    const [timeframe, setTimeframe] = useState('Last 7 Days');

    const STATS = [
        { label: 'Total Reach', val: '46.8k', trend: '+14%', icon: Eye, positive: true },
        { label: 'Active Users', val: '12.4k', trend: '+8.2%', icon: Users, positive: true },
        { label: 'Avg. CTR', val: '4.2%', trend: '-1.5%', icon: Target, positive: false },
        { label: 'Conversion', val: '2.8k', trend: '+12.5%', icon: TrendingUp, positive: true },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-adorix-dark">Performance Analytics</h1>
                        <p className="text-gray-500 mt-1 text-sm md:text-base">Deep dive into your campaign results and audience engagement.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-white border border-gray-100 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm">
                            <Calendar className="w-4 h-4 text-adorix-primary" />
                            <select
                                className="bg-transparent text-sm font-medium text-adorix-dark focus:outline-none cursor-pointer"
                                value={timeframe}
                                onChange={(e) => setTimeframe(e.target.value)}
                            >
                                <option>Last 24 Hours</option>
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>Year to Date</option>
                            </select>
                        </div>
                        <button className="bg-adorix-dark text-white rounded-xl px-5 py-2.5 text-sm font-bold flex items-center gap-2 hover:bg-adorix-primary transition-colors shadow-md shadow-adorix-dark/10">
                            <Download className="w-4 h-4" />
                            Export Report
                        </button>
                    </div>
                </div>

                {/* Stat Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {STATS.map((s, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group hover:border-adorix-primary/30 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-adorix-light transition-colors">
                                    <s.icon className="w-5 h-5 text-adorix-primary" />
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${s.positive ? 'text-emerald-500 bg-emerald-50' : 'text-rose-500 bg-rose-50'}`}>
                                    {s.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                    {s.trend}
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 font-medium">{s.label}</p>
                            <h3 className="text-2xl font-bold text-adorix-dark mt-1">{s.val}</h3>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Area Chart */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-lg font-bold text-adorix-dark">Engagement Growth</h3>
                                <p className="text-xs text-gray-400 mt-0.5">Reach vs. Interactions over time</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="flex items-center gap-2 text-xs font-bold text-adorix-dark">
                                    <span className="w-2.5 h-2.5 rounded-full bg-adorix-primary" /> Reach
                                </span>
                                <span className="flex items-center gap-2 text-xs font-bold text-adorix-dark">
                                    <span className="w-2.5 h-2.5 rounded-full bg-adorix-accent" /> Engagement
                                </span>
                            </div>
                        </div>
                        <div className="h-[350px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={DATA_MAIN} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#12B2C1" stopOpacity={0.15} />
                                            <stop offset="95%" stopColor="#12B2C1" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#0D8A9E" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#0D8A9E" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="reach" stroke="#12B2C1" strokeWidth={3} fillOpacity={1} fill="url(#colorReach)" />
                                    <Area type="monotone" dataKey="engagement" stroke="#0D8A9E" strokeWidth={3} fillOpacity={1} fill="url(#colorEngage)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Secondary Charts */}
                    <div className="space-y-8">
                        {/* Device Breakdown */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold text-adorix-dark mb-6">Device Distribution</h3>
                            <div className="h-[200px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={DEVICES_DATA}
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={8}
                                            dataKey="value"
                                        >
                                            {DEVICES_DATA.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                {DEVICES_DATA.map((d, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                                        <span className="text-xs text-gray-500 font-medium">{d.name}</span>
                                        <span className="text-xs font-bold text-adorix-dark ml-auto">{d.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Performance Alert */}
                        <div className="bg-adorix-dark p-8 rounded-2xl shadow-xl shadow-adorix-dark/20 text-white flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-adorix-primary animate-pulse" />
                                    <span className="text-xs font-bold text-adorix-primary tracking-widest uppercase">Live Insights</span>
                                </div>
                                <h3 className="text-xl font-bold leading-tight">Weekend surge detected in Retail kiosks.</h3>
                                <p className="text-gray-400 text-sm mt-3">Interactions are up by 24% compared to last Sunday. Optimized ad placement is recommended.</p>
                            </div>
                            <button className="mt-8 w-full py-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                                <RefreshCw className="w-4 h-4" />
                                Optimize Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Analytics;
