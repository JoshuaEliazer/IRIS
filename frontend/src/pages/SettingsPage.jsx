import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SettingsPage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const roleColor = user?.role === 'senior' ? 'iris' : 'teal';

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
            {/* Page header */}
            <div className="bg-white border-b border-gray-100 px-4 py-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your account and preferences</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
                {/* Account Section */}
                <div className="card">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 bg-iris-100 rounded-lg flex items-center justify-center text-sm">👤</div>
                        <h2 className="text-lg font-bold text-gray-900">Account</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="label">Full Name</label>
                                <div className="input-field bg-gray-50 text-gray-700 cursor-not-allowed">
                                    {user?.name || '—'}
                                </div>
                            </div>
                            <div>
                                <label className="label">Email Address</label>
                                <div className="input-field bg-gray-50 text-gray-700 cursor-not-allowed">
                                    {user?.email || '—'}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="label">Phone</label>
                                <div className="input-field bg-gray-50 text-gray-500 cursor-not-allowed">
                                    {user?.phone || 'Not provided'}
                                </div>
                            </div>
                            <div>
                                <label className="label">Role</label>
                                <div className={`input-field bg-gray-50 cursor-not-allowed capitalize font-semibold 
                  ${user?.role === 'senior' ? 'text-iris-700' : 'text-teal-700'}`}>
                                    {user?.role || '—'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-gray-400">
                        ℹ️ Profile editing will be available in a future update.
                    </p>
                </div>

                {/* Preferences Section */}
                <div className="card">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-sm">🎛️</div>
                        <h2 className="text-lg font-bold text-gray-900">Preferences</h2>
                    </div>
                    <div className="space-y-4">
                        {/* Language */}
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">Language</p>
                                <p className="text-xs text-gray-400 mt-0.5">Display language for the app</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1.5 rounded-lg">
                                🌐 English
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">Notifications</p>
                                <p className="text-xs text-gray-400 mt-0.5">Receive app notifications and alerts</p>
                            </div>
                            <button
                                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-iris-500 focus:ring-offset-2
                  ${notificationsEnabled ? 'bg-iris-600' : 'bg-gray-300'}`}
                                aria-label="Toggle notifications"
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200
                    ${notificationsEnabled ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-400">
                        ℹ️ Translation and push notification integrations are planned for a future release.
                    </p>
                </div>

                {/* Security Section */}
                <div className="card">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-sm">🔒</div>
                        <h2 className="text-lg font-bold text-gray-900">Security</h2>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Session</p>
                            <p className="text-xs text-gray-400 mt-0.5">You are currently signed in as <strong>{user?.name}</strong></p>
                        </div>
                        <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full border border-green-200">
                            Active
                        </span>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-700 font-semibold rounded-xl
                         border border-red-200 hover:bg-red-100 hover:border-red-300 transition-all duration-200 text-sm"
                        >
                            🚪 Sign out of Iris
                        </button>
                        <p className="text-xs text-gray-400 mt-2">
                            Signing out will clear your session and return you to the home page.
                        </p>
                    </div>
                </div>

                {/* App info */}
                <div className="text-center text-xs text-gray-400 py-4">
                    Iris v1.0.0 · Senior Citizen Care Platform · Built with ❤️
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
