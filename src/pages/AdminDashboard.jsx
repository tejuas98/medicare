import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';

export default function AdminDashboard() {
    return (
        <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
            <AdminSidebar />
            <main className="flex-1 ml-64 p-8">
                {/* Header could go here if global */}
                <Outlet />
            </main>
        </div>
    );
}
