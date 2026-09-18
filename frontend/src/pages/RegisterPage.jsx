import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { registerUser } from '../services/auth';

const ROLES = [
    { value: 'senior', label: 'Senior', icon: '🧓', desc: 'I need care assistance' },
    { value: 'caretaker', label: 'Caretaker', icon: '🤝', desc: 'I provide care to seniors' },
];

const RegisterPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '', email: '', password: '', confirmPassword: '', phone: '', role: 'senior',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const validate = () => {
        if (!form.name.trim()) return 'Full name is required';
        if (!form.email.trim()) return 'Email is required';
        if (form.password.length < 6) return 'Password must be at least 6 characters';
        if (form.password !== form.confirmPassword) return 'Passwords do not match';
        if (!form.role) return 'Please select a role';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const validationError = validate();
        if (validationError) { setError(validationError); return; }
        setLoading(true);
        try {
            const { name, email, password, phone, role } = form;
            const res = await registerUser({ name, email, password, phone, role });
            const { token, user } = res.data;
            login(user, token);
            navigate(`/${user.role}/dashboard`);
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex">
            {/* Left decorative panel */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-600 via-teal-700 to-iris-700 items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-16 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-16 right-10 w-56 h-56 bg-iris-300/20 rounded-full blur-2xl" />
                </div>
                <div className="relative text-center text-white">
                    <div className="text-6xl mb-6">🌟</div>
                    <h2 className="text-4xl font-extrabold mb-4">Join Iris today</h2>
                    <p className="text-teal-100 text-lg max-w-xs leading-relaxed">
                        Create your free account and start your journey toward safer, more connected care.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 text-left">
                        {['Free to join, forever', 'Role-based access', 'Secure & private'].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-sm text-teal-100">
                                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form panel */}
            <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="card shadow-xl border-0">
                        {/* Mobile logo */}
                        <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-iris-500 to-teal-500 rounded-xl flex items-center justify-center">
                                <span className="text-white font-black text-base">I</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">Iris</span>
                        </div>

                        <h1 className="text-2xl font-bold text-gray-900 mb-1">Create account</h1>
                        <p className="text-gray-500 mb-6 text-sm">Get started with Iris for free</p>

                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Role Picker */}
                            <div>
                                <label className="label">I am a...</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {ROLES.map((r) => (
                                        <button
                                            key={r.value}
                                            type="button"
                                            onClick={() => setForm({ ...form, role: r.value })}
                                            className={`p-3 rounded-xl border-2 text-left transition-all duration-200
                        ${form.role === r.value
                                                    ? 'border-iris-500 bg-iris-50 shadow-sm'
                                                    : 'border-gray-200 bg-white hover:border-gray-300'}`}
                                        >
                                            <span className="text-2xl">{r.icon}</span>
                                            <p className="font-semibold text-sm text-gray-900 mt-1">{r.label}</p>
                                            <p className="text-xs text-gray-500">{r.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="label" htmlFor="name">Full name</label>
                                <input
                                    id="name" name="name" type="text" autoComplete="name" required
                                    className="input-field" placeholder="John Smith"
                                    value={form.name} onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="label" htmlFor="reg-email">Email address</label>
                                <input
                                    id="reg-email" name="email" type="email" autoComplete="email" required
                                    className="input-field" placeholder="you@example.com"
                                    value={form.email} onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="label" htmlFor="phone">Phone number</label>
                                <input
                                    id="phone" name="phone" type="tel"
                                    className="input-field" placeholder="+1 (555) 000-0000"
                                    value={form.phone} onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="label" htmlFor="reg-password">Password</label>
                                    <input
                                        id="reg-password" name="password" type="password" required
                                        className="input-field" placeholder="Min. 6 chars"
                                        value={form.password} onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="label" htmlFor="confirmPassword">Confirm</label>
                                    <input
                                        id="confirmPassword" name="confirmPassword" type="password" required
                                        className="input-field" placeholder="Repeat"
                                        value={form.confirmPassword} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary w-full text-base mt-1"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                        Creating account...
                                    </span>
                                ) : 'Create Account'}
                            </button>
                        </form>

                        <p className="mt-5 text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="text-iris-600 font-semibold hover:text-iris-800 transition">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
