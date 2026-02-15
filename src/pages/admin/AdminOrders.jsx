import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle, XCircle, Clock, Truck } from 'lucide-react';

export default function AdminOrders() {
    const { orders, updateOrderStatus } = useShop();
    const [filter, setFilter] = useState('All');

    const filteredOrders = filter === 'All' ? orders : orders.filter(o => o.status === filter);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-700';
            case 'Accepted': return 'bg-blue-100 text-blue-700';
            case 'Delivered': return 'bg-green-100 text-green-700';
            case 'Cancelled': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-black text-gray-900 mb-6">Orders</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
                    <div className="flex gap-2">
                        {['All', 'Pending', 'Accepted', 'Delivered', 'Cancelled'].map(status => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filter === status ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                            <tr>
                                <th className="p-4 font-bold">Order ID</th>
                                <th className="p-4 font-bold">Customer</th>
                                <th className="p-4 font-bold">Items</th>
                                <th className="p-4 font-bold">Total</th>
                                <th className="p-4 font-bold">Status</th>
                                <th className="p-4 font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {filteredOrders.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="p-8 text-center text-gray-500">No orders found.</td>
                                </tr>
                            ) : filteredOrders.map(order => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-medium text-gray-800">{order.id}</td>
                                    <td className="p-4 text-gray-600">{order.userId}</td>
                                    <td className="p-4 text-gray-600">
                                        <div className="flex flex-col gap-1">
                                            {order.items.map((item, i) => (
                                                <span key={i} className="whitespace-nowrap text-xs">
                                                    <span className="font-bold">{item.quantity}x</span> {item.name}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-emerald-600">₹{order.total}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit ${getStatusColor(order.status)}`}>
                                            {order.status === 'Pending' && <Clock size={12} />}
                                            {order.status === 'Accepted' && <Truck size={12} />}
                                            {order.status === 'Delivered' && <CheckCircle size={12} />}
                                            {order.status === 'Cancelled' && <XCircle size={12} />}
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        {/* PENDING: Accept or Reject */}
                                        {order.status === 'Pending' && (
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => updateOrderStatus(order.id, 'Accepted')}
                                                    className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md text-xs font-bold transition-colors"
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    onClick={() => updateOrderStatus(order.id, 'Cancelled')}
                                                    className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-3 py-1 rounded-md text-xs font-bold transition-colors"
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        )}

                                        {/* ACCEPTED: Mark Delivered */}
                                        {order.status === 'Accepted' && (
                                            <button
                                                onClick={() => updateOrderStatus(order.id, 'Delivered')}
                                                className="bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white px-3 py-1 rounded-md text-xs font-bold transition-colors"
                                            >
                                                Mark Delivered
                                            </button>
                                        )}

                                        {/* DELIVERED & CANCELLED: Simple Status */}
                                        {order.status === 'Delivered' && (
                                            <span className="text-green-500 flex items-center justify-end gap-1 font-bold text-xs">
                                                <CheckCircle size={14} /> Delivered
                                            </span>
                                        )}
                                        {order.status === 'Cancelled' && (
                                            <span className="text-red-400 font-bold text-xs">
                                                Rejected
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
