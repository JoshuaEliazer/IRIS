import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * RoleRoute: Only accessible to users with the specified role.
 * If wrong role, redirect to their own dashboard.
 */
const RoleRoute = ({ children, role }) => {
    const { user, isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-iris-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    if (user?.role !== role) {
        return <Navigate to={`/${user?.role}/dashboard`} replace />;
    }

    return children;
};

export default RoleRoute;
