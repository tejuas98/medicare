import React, { createContext, useState, useContext, useEffect } from 'react';
import { MOCK_USERS } from '../data/mockData';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for persisted session
        const storedUser = localStorage.getItem('mediCareUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
        if (foundUser) {
            // Don't store password in state/localstorage
            const { password, ...safeUser } = foundUser;
            setUser(safeUser);
            localStorage.setItem('mediCareUser', JSON.stringify(safeUser));
            return { success: true };
        }
        return { success: false, message: "Invalid credentials" };
    };

    const register = (userData) => {
        const newUser = { ...userData, id: Date.now(), role: 'customer' };
        const { password, ...safeUser } = newUser;
        setUser(safeUser);
        localStorage.setItem('mediCareUser', JSON.stringify(safeUser));
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('mediCareUser');
    };

    const updateUserProfile = (updatedData) => {
        setUser(prev => {
            const newState = { ...prev, ...updatedData };
            localStorage.setItem('mediCareUser', JSON.stringify(newState));
            return newState;
        });
    };

    const value = {
        user,
        login,
        register,
        logout,
        updateUserProfile,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin'
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
