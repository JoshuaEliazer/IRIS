import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const getDashboardLink = () => {
        if (!user) return '/';
        return `/${user.role}/dashboard`;
    };

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-iris-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                            <span className="text-white font-black text-sm">I</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">
                            Iris
                        </span>
                    </Link>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        {isAuthenticated ? (
                            <>
                                <span className="hidden sm:inline text-sm text-gray-500 font-medium">
                                    Hi, <span className="text-gray-900 font-semibold">{user?.name?.split(' ')[0]}</span>
                                    {' '}·{' '}
                                    <span className="capitalize text-iris-600">{user?.role}</span>
                                </span>
                                <Link
                                    to={getDashboardLink()}
                                    className="px-4 py-2 text-sm font-semibold text-iris-700 hover:bg-iris-50 rounded-lg transition"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/settings"
                                    className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                >
                                    Settings
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-iris-600 hover:bg-iris-700 rounded-lg transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-sm font-semibold text-iris-700 hover:bg-iris-50 rounded-lg transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-4 py-2 text-sm font-semibold text-white bg-iris-600 hover:bg-iris-700 rounded-lg transition shadow-sm"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
