import React from 'react';
import AdminStats from '../../components/admin/AdminStats';
import { useShop } from '../../context/ShopContext';

export default function AdminOverview() {
    const { products, orders, getRevenue } = useShop();
    const totalRevenue = getRevenue();

    return (
        <div>
            <h1 className="text-3xl font-black text-gray-900 mb-8">Dashboard Overview</h1>
            <AdminStats products={products} orders={orders} revenue={totalRevenue} />

            {/* Quick Actions or Recent Activity could go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4">System Status</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Server</span>
                            <span className="text-green-600 font-bold">Online</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Database</span>
                            <span className="text-green-600 font-bold">Connected</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Last Sync</span>
                            <span className="text-gray-900">Just now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
