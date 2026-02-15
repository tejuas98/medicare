import React, { useState, useEffect } from 'react';
import { Package, User, Heart, Settings, LogOut, Edit2, Save, X, Camera, MapPin, Mail, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Dashboard = () => {
    const { user, logout, updateUserProfile } = useAuth();
    const { orders, wishlist } = useShop();
    const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'wishlist', 'settings'
    const [isEditing, setIsEditing] = useState(false);

    // Initial State Logic
    const [editForm, setEditForm] = useState({
        username: '',
        email: '',
        phone: '',
        addressLine: '',
        city: '',
        state: '',
        pincode: '',
        profileImage: null
    });

    useEffect(() => {
        if (user) {
            setEditForm({
                username: user.username || '',
                email: user.email || '',
                phone: user.phone || '',
                addressLine: user.addressLine || '',
                city: user.city || '',
                state: user.state || '',
                pincode: user.pincode || '',
                profileImage: user.profileImage || null
            });
        }
    }, [user, isEditing]);

    const myOrders = orders.filter(order => order.userId === user?.id).sort((a, b) => new Date(b.date) - new Date(a.date));

    const colors = {
        'Pending': 'bg-yellow-100 text-yellow-700',
        'Delivered': 'bg-green-100 text-green-700',
        'Shipped': 'bg-blue-100 text-blue-700',
        'Cancelled': 'bg-red-100 text-red-700'
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditForm(prev => ({ ...prev, profileImage: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProfile = () => {
        if (updateUserProfile) updateUserProfile(editForm);
        setIsEditing(false);
    };

    const menuItems = [
        { id: 'orders', label: 'My Orders', icon: Package },
        { id: 'wishlist', label: 'My Wishlist', icon: Heart },
        { id: 'settings', label: 'Profile Settings', icon: Settings },
    ];

    const [isLocating, setIsLocating] = useState(false);

    const handleDetectAddress = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLocating(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();

                    if (data && data.address) {
                        const addr = data.address;
                        const city = addr.city || addr.town || addr.village || addr.suburb || "";
                        const state = addr.state || "";
                        const pincode = addr.postcode || "";
                        // Construct a rough address line
                        const addressLine = [addr.house_number, addr.road, addr.suburb, addr.neighbourhood].filter(Boolean).join(", ");

                        setEditForm(prev => ({
                            ...prev,
                            city,
                            state,
                            pincode,
                            addressLine
                        }));
                    }
                } catch (error) {
                    console.error("Error fetching address:", error);
                    alert("Failed to fetch address details.");
                } finally {
                    setIsLocating(false);
                }
            },
            (error) => {
                console.error("Error detecting location:", error);
                alert("Unable to retrieve your location. Please allow location access.");
                setIsLocating(false);
            }
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <div className="lg:w-1/4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                        <div className="p-6 bg-orange-50 border-b border-orange-100 flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-md text-3xl font-bold border-4 border-white overflow-hidden">
                                    {user?.profileImage ? (
                                        <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        user?.username?.charAt(0)
                                    )}
                                </div>
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className="absolute bottom-0 right-0 bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-700 transition-colors"
                                >
                                    <Settings size={14} />
                                </button>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">{user?.username}</h3>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                            {user?.city && <p className="text-xs text-gray-400 mt-1 flex items-center justify-center gap-1"><MapPin size={10} /> {user.city}, {user.state}</p>}
                        </div>

                        <nav className="p-2">
                            {menuItems.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-3 w-full p-4 rounded-lg text-left transition-all font-medium ${activeTab === tab.id ? 'bg-orange-50 text-orange-700' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <tab.icon size={20} />
                                    {tab.label}
                                </button>
                            ))}
                            <button
                                onClick={() => { logout(); }}
                                className="flex items-center gap-3 w-full p-4 rounded-lg text-left text-red-600 hover:bg-red-50 transition-all font-medium mt-2"
                            >
                                <LogOut size={20} />
                                Logout
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/4">

                    {/* ORDERS TAB */}
                    {activeTab === 'orders' && (
                        <div className="space-y-6 animate-in fade-in duration-300">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Order History</h2>
                            {myOrders.length === 0 ? (
                                <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                                    <Package size={48} className="mx-auto text-gray-300 mb-4" />
                                    <p className="text-gray-500">No orders yet.</p>
                                </div>
                            ) : (
                                myOrders.map(order => (
                                    <div key={order.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                        <div className="p-4 bg-gray-50 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
                                            <div className="flex gap-6">
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase">Order ID</p>
                                                    <p className="font-medium text-gray-900 text-sm">#{order.id.slice(-6)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase">Date</p>
                                                    <p className="font-medium text-gray-900 text-sm">{new Date(order.date).toLocaleDateString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase">Total</p>
                                                    <p className="font-medium text-gray-900 text-sm">₹{order.total}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${colors[order.status] || 'bg-gray-100'}`}>
                                                    {order.status === 'Pending' && <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>}
                                                    {order.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            {order.items.map((item, i) => (
                                                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0 border-gray-50">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                                            <img src={item.image} className="w-full h-full object-cover mix-blend-multiply" alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                                                            <p className="text-xs text-gray-500">Qty: {item.quantity} × ₹{item.price}</p>
                                                        </div>
                                                    </div>
                                                    <p className="font-bold text-gray-700 text-sm">₹{item.price * item.quantity}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* WISHLIST TAB */}
                    {activeTab === 'wishlist' && (
                        <div className="animate-in fade-in duration-300">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">My Wishlist</h2>
                            {wishlist.length === 0 ? (
                                <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                                    <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                                    <p className="text-gray-500">Your wishlist is empty.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {wishlist.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* SETTINGS TAB */}
                    {activeTab === 'settings' && (
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 animate-in fade-in duration-300">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Profile Details</h2>
                                <button onClick={() => setIsEditing(true)} className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-2">
                                    <Edit2 size={16} /> Edit Profile
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left Col */}
                                <div className="space-y-6">
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Full Name</label>
                                        <div className="text-lg font-medium text-gray-900 flex items-center gap-2">
                                            <User size={18} className="text-gray-400" /> {user?.username}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Email Address</label>
                                        <div className="text-lg font-medium text-gray-900 flex items-center gap-2">
                                            <Mail size={18} className="text-gray-400" /> {user?.email}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Phone Number</label>
                                        <div className="text-lg font-medium text-gray-900 flex items-center gap-2">
                                            <Phone size={18} className="text-gray-400" /> {user?.phone || <span className="text-gray-400 italic">Not set</span>}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Col - Address */}
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><MapPin size={18} /> Delivery Address</h3>
                                    {user?.addressLine ? (
                                        <div className="text-gray-700 space-y-1">
                                            <p className="font-medium">{user.username}</p>
                                            <p>{user.addressLine}</p>
                                            <p>{user.city}, {user.state} - {user.pincode}</p>
                                            <p className="text-sm text-gray-500 mt-2">Phone: {user.phone}</p>
                                        </div>
                                    ) : (
                                        <p className="text-gray-400 italic">No address details saved yet.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* EDIT PROFILE MODAL */}
            {isEditing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsEditing(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold text-gray-900">Edit Profile</h2>
                            <button onClick={() => setIsEditing(false)}><X size={24} className="text-gray-400 hover:text-gray-600" /></button>
                        </div>

                        <div className="p-6 md:p-8 space-y-6">
                            {/* Image Upload */}
                            <div className="flex flex-col items-center">
                                <div className="relative group cursor-pointer">
                                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-orange-100 shadow-sm">
                                        {editForm.profileImage ? (
                                            <img src={editForm.profileImage} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                <User size={40} />
                                            </div>
                                        )}
                                    </div>
                                    <label className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-full cursor-pointer">
                                        <Camera className="text-white" size={24} />
                                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Click to upload new photo</p>
                            </div>

                            {/* Form Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={editForm.username}
                                        onChange={e => setEditForm({ ...editForm, username: e.target.value })}
                                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={editForm.phone}
                                        onChange={e => setEditForm({ ...editForm, phone: e.target.value })}
                                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <label className="block text-sm font-medium text-gray-500">Address Line</label>
                                        <button
                                            type="button"
                                            onClick={handleDetectAddress}
                                            disabled={isLocating}
                                            className="text-xs text-orange-600 font-bold hover:underline flex items-center gap-1 disabled:opacity-50"
                                        >
                                            <MapPin size={12} /> {isLocating ? 'Detecting...' : 'Detect Location'}
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        value={editForm.addressLine}
                                        onChange={e => setEditForm({ ...editForm, addressLine: e.target.value })}
                                        placeholder="House No, Street, Area"
                                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">City</label>
                                    <input
                                        type="text"
                                        value={editForm.city}
                                        onChange={e => setEditForm({ ...editForm, city: e.target.value })}
                                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">State</label>
                                    <input
                                        type="text"
                                        value={editForm.state}
                                        onChange={e => setEditForm({ ...editForm, state: e.target.value })}
                                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Pincode</label>
                                    <input
                                        type="text"
                                        value={editForm.pincode}
                                        onChange={e => setEditForm({ ...editForm, pincode: e.target.value })}
                                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50 rounded-b-2xl">
                            <button onClick={() => setIsEditing(false)} className="px-6 py-2.5 rounded-lg text-gray-600 font-medium hover:bg-gray-200 transition-colors">
                                Cancel
                            </button>
                            <button onClick={handleSaveProfile} className="px-6 py-2.5 rounded-lg bg-orange-600 text-white font-bold hover:bg-orange-700 shadow-lg shadow-orange-200 transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
