import React from 'react';
import { TrendingUp, Package, Users, DollarSign } from 'lucide-react';

export default function AdminStats({ products, orders, revenue }) {
    // Analytics Calculations
    const totalReviews = products.reduce((acc, p) => acc + (p.reviewCount || 0), 0);
    const positiveReviews = products.reduce((acc, p) => acc + (p.reviews?.filter(r => r.rating >= 4).length || 0), 0);
    const negativeReviews = totalReviews - positiveReviews;
    const sentiment = totalReviews > 0 ? Math.round((positiveReviews / totalReviews) * 100) : 0;

    const lowStockCount = products.filter(p => p.stock < 10).length;

    // Calculate total units sold (approximate from orders if not tracked separately)
    const unitsSold = orders.reduce((acc, order) => acc + order.items.reduce((sum, item) => sum + item.quantity, 0), 0);

    const stats = [
        {
            title: "Total Revenue",
            value: `₹${revenue.toLocaleString()}`,
            icon: DollarSign,
            color: "bg-green-500",
            subtext: "+12% from last month"
        },
        {
            title: "Units Sold",
            value: unitsSold,
            icon: Package,
            color: "bg-blue-500",
            subtext: `${orders.length} total orders`
        },
        {
            title: "Inventory Alert",
            value: lowStockCount,
            icon: TrendingUp,
            color: lowStockCount > 0 ? "bg-red-500" : "bg-orange-500",
            subtext: "Products with < 10 stock"
        },
        {
            title: "Review Sentiment",
            value: `${sentiment}%`,
            icon: Users,
            color: sentiment > 80 ? "bg-emerald-500" : "bg-yellow-500",
            subtext: `${positiveReviews} Positive / ${negativeReviews} Negative`
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                            <h3 className="text-2xl font-black text-gray-900 mt-1">{stat.value}</h3>
                        </div>
                        <div className={`${stat.color} p-3 rounded-lg text-white`}>
                            <stat.icon size={24} />
                        </div>
                    </div>
                    <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">
                        {stat.subtext}
                    </span>
                </div>
            ))}
        </div>
    );
}
