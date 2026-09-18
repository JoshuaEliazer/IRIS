import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/auth';

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await loginUser(form);
            const { token, user } = res.data;
            login(user, token);
            navigate(`/${user.role}/dashboard`);
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex">
            {/* Left decorative panel */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-iris-600 via-iris-700 to-teal-600 items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-20 left-10 w-48 h-48 bg-teal-300/20 rounded-full blur-2xl" />
                </div>
                <div className="relative text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <span className="text-white font-black text-4xl">I</span>
                    </div>
                    <h2 className="text-4xl font-extrabold mb-4">Welcome back</h2>
                    <p className="text-iris-100 text-lg max-w-xs leading-relaxed">
                        Your health journey continues here. Sign in to access your personalized care dashboard.
                    </p>
                </div>
            </div>

            {/* Right form panel */}
            <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="card shadow-xl border-0">
                        {/* Mobile logo */}
                        <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-iris-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                                <span className="text-white font-black text-base">I</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">Iris</span>
                        </div>

                        <h1 className="text-2xl font-bold text-gray-900 mb-1">Sign in</h1>
                        <p className="text-gray-500 mb-6 text-sm">Access your Iris account</p>

                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="label" htmlFor="email">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="input-field"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="label" htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="input-field"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary w-full text-base mt-2"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                        Signing in...
                                    </span>
                                ) : 'Sign In'}
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-500">
                            Don&apos;t have an account?{' '}
                            <Link to="/register" className="text-iris-600 font-semibold hover:text-iris-800 transition">
                                Create one
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
