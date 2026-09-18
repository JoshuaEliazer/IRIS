import { Link } from 'react-router-dom';

const features = [
    {
        icon: '❤️',
        title: 'Health Monitoring',
        desc: 'Track vitals, medications, and health trends with ease.',
        color: 'from-red-50 to-pink-50 border-red-100',
        iconBg: 'bg-red-100',
    },
    {
        icon: '🤝',
        title: 'Caretaker Connect',
        desc: 'Stay connected with dedicated care professionals.',
        color: 'from-iris-50 to-blue-50 border-iris-100',
        iconBg: 'bg-iris-100',
    },
    {
        icon: '👨‍👩‍👧',
        title: 'Family Updates',
        desc: 'Keep loved ones informed with real-time updates.',
        color: 'from-green-50 to-emerald-50 border-green-100',
        iconBg: 'bg-green-100',
    },
    {
        icon: '🚨',
        title: 'Emergency Alerts',
        desc: 'Instant SOS with one tap, anytime, anywhere.',
        color: 'from-orange-50 to-amber-50 border-orange-100',
        iconBg: 'bg-orange-100',
    },
];

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-iris-50/30 to-teal-50/20">
            {/* Hero */}
            <section className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-iris-200/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-iris-100 text-iris-700 rounded-full text-sm font-semibold mb-8 border border-iris-200">
                        <span className="w-2 h-2 bg-iris-500 rounded-full animate-pulse" />
                        Senior Citizen Care Platform
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                        Care.{' '}
                        <span className="bg-gradient-to-r from-iris-600 to-teal-500 bg-clip-text text-transparent">
                            Connect.
                        </span>
                        {' '}Protect.
                    </h1>

                    <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Iris empowers seniors to live independently while staying connected
                        with caretakers and family — safely, simply, and with dignity.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/register" className="btn-primary text-lg px-8 py-4 shadow-xl shadow-iris-200">
                            Get Started — It&apos;s Free
                        </Link>
                        <Link to="/login" className="btn-secondary text-lg px-8 py-4">
                            Sign In
                        </Link>
                    </div>

                    {/* Social proof */}
                    <p className="mt-8 text-sm text-gray-400">
                        Designed with ❤️ for seniors and their families
                    </p>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Everything you need</h2>
                    <p className="text-gray-500 text-lg">A complete care ecosystem in one place</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className={`rounded-2xl border bg-gradient-to-br ${f.color} p-6 
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
                        >
                            <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm`}>
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                            <div className="mt-4">
                                <span className="text-xs font-semibold text-gray-400 bg-white/60 px-2 py-1 rounded-full">
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-gradient-to-r from-iris-600 to-iris-700 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to bring peace of mind?
                    </h2>
                    <p className="text-iris-100 text-lg mb-8">
                        Join Iris today — free, simple, and built for seniors.
                    </p>
                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-iris-700 font-bold rounded-xl 
                       hover:bg-iris-50 transition text-lg shadow-xl"
                    >
                        Create Your Account →
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
                <p>© 2026 Iris · Built with care for seniors everywhere</p>
            </footer>
        </div>
    );
};

export default LandingPage;
