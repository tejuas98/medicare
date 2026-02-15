import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, LogOut, Settings, FileText } from 'lucide-react';

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-50">
            <div className="p-6 border-b border-gray-800">
                <h2 className="text-2xl font-black tracking-tight">
                    Admin<span className="text-orange-500">Panel</span>
                </h2>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-orange-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`
                    }
                >
                    <LayoutDashboard size={20} />
                    <span className="font-medium">Dashboard</span>
                </NavLink>

                <NavLink
                    to="/admin/products"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-orange-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`
                    }
                >
                    <Package size={20} />
                    <span className="font-medium">Products</span>
                </NavLink>

                <NavLink
                    to="/admin/orders"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-orange-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`
                    }
                >
                    <ShoppingCart size={20} />
                    <span className="font-medium">Orders</span>
                </NavLink>

                <NavLink
                    to="/admin/prescriptions"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-orange-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`
                    }
                >
                    <FileText size={20} />
                    <span className="font-medium">Prescriptions</span>
                </NavLink>

                <NavLink
                    to="/admin/settings"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-orange-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`
                    }
                >
                    <Settings size={20} />
                    <span className="font-medium">Settings</span>
                </NavLink>
            </nav>

            <div className="p-4 border-t border-gray-800">
                <NavLink
                    to="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-gray-800 hover:text-red-300 transition-colors"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Exit Admin</span>
                </NavLink>
            </div>
        </aside>
    );
}
