import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const featureCards = [
    { icon: '👥', title: 'Assigned Seniors', desc: 'View and manage the seniors under your care', color: 'from-iris-50 to-blue-50 border-iris-100' },
    { icon: '📋', title: "Today's Visits", desc: 'Scheduled visits and check-ins for today', color: 'from-teal-50 to-green-50 border-teal-100' },
    { icon: '🚨', title: 'Emergency Alerts', desc: 'Active SOS alerts needing attention', color: 'from-red-50 to-orange-50 border-red-100' },
    { icon: '📅', title: 'Appointments', desc: 'Upcoming appointments and schedules', color: 'from-purple-50 to-violet-50 border-purple-100' },
];

const CaretakerDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const timeOfDay = () => {
        const h = new Date().getHours();
        if (h < 12) return 'Good morning';
        if (h < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-50 via-teal-50/20 to-white">
            {/* Header banner */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-10 px-4">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <p className="text-teal-200 text-sm font-medium uppercase tracking-wide mb-1">Caretaker Dashboard</p>
                        <h1 className="text-3xl sm:text-4xl font-extrabold">
                            {timeOfDay()}, {user?.name?.split(' ')[0]}! 👋
                        </h1>
                        <p className="text-teal-100 mt-1 text-base">Your care assignments and alerts for today.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-xl border border-white/20 text-sm font-medium">
                            🟢 On duty
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* User info strip */}
                <div className="card mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                        🤝
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-gray-900 text-lg">{user?.name}</p>
                        <p className="text-gray-500 text-sm">{user?.email}</p>
                        {user?.phone && <p className="text-gray-400 text-sm">{user.phone}</p>}
                    </div>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-wide">
                            Caretaker
                        </span>
                    </div>
                </div>

                {/* Feature cards */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Care Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                    {featureCards.map((card) => (
                        <div
                            key={card.title}
                            className={`rounded-2xl border bg-gradient-to-br ${card.color} p-5 
                         hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
                        >
                            <div className="text-3xl mb-3">{card.icon}</div>
                            <h3 className="font-bold text-gray-900 text-base mb-1">{card.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">{card.desc}</p>
                            <span className="text-xs font-semibold text-gray-400 bg-white/70 px-2 py-1 rounded-full">
                                Coming Soon
                            </span>
                        </div>
                    ))}
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <button
                        onClick={() => navigate('/settings')}
                        className="p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-teal-200 transition text-left"
                    >
                        <span className="text-2xl">⚙️</span>
                        <p className="font-semibold text-gray-900 text-sm mt-1">Settings</p>
                        <p className="text-xs text-gray-400">Account & preferences</p>
                    </button>
                    <button
                        onClick={handleLogout}
                        className="p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-red-200 transition text-left"
                    >
                        <span className="text-2xl">🚪</span>
                        <p className="font-semibold text-gray-900 text-sm mt-1">Logout</p>
                        <p className="text-xs text-gray-400">Sign out of Iris</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaretakerDashboard;
