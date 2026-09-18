import { createContext, useContext, useEffect, useState } from 'react';
import { getMe } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('iris_token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const hydrate = async () => {
            if (token) {
                try {
                    const res = await getMe();
                    setUser(res.data.user);
                } catch {
                    // Token invalid or expired
                    localStorage.removeItem('iris_token');
                    setToken(null);
                    setUser(null);
                }
            }
            setLoading(false);
        };
        hydrate();
    }, [token]);

    const login = (userData, jwt) => {
        localStorage.setItem('iris_token', jwt);
        setToken(jwt);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('iris_token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!user,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
