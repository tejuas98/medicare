import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, Package, Heart, LogOut, ChevronDown, MapPin, Mic, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const { user, logout } = useAuth();
    const { cart } = useShop();
    const [scrolled, setScrolled] = useState(false);
    const [searchCategory, setSearchCategory] = useState('All');
    const [isListening, setIsListening] = useState(false);
    const navigate = useNavigate();
    const routeLocation = useLocation();

    const locations = [
        { city: "Mumbai", pincode: "400001" },
        { city: "Delhi", pincode: "110001" },
        { city: "Bangalore", pincode: "560001" },
        { city: "Hyderabad", pincode: "500001" },
        { city: "Chennai", pincode: "600001" },
        { city: "Kolkata", pincode: "700001" },
        { city: "Pune", pincode: "411001" },
        { city: "Ahmedabad", pincode: "380001" },
        { city: "Jaipur", pincode: "302001" },
        { city: "Lucknow", pincode: "226001" },
    ];

    const [location, setLocation] = useState(locations[0]);
    const [isLocating, setIsLocating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const [showToast, setShowToast] = useState(false);

    const toggleVoiceSearch = () => {
        if (!isListening) {
            setIsListening(true);
            // Simulate voice search activation
            setTimeout(() => {
                setIsListening(false);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            }, 3000);
        } else {
            setIsListening(false);
        }
    };

    const handleDetectLocation = () => {
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
                        const city = data.address.city || data.address.town || data.address.village || data.address.suburb || "Unknown City";
                        const pincode = data.address.postcode || "Unknown Pincode";

                        setLocation({
                            city: city,
                            pincode: pincode
                        });
                    } else {
                        // Fallback even if API succeeds but data is weird
                        setLocation({
                            city: `Lat: ${latitude.toFixed(2)}`,
                            pincode: `Long: ${longitude.toFixed(2)}`
                        });
                    }
                } catch (error) {
                    console.error("Error fetching address:", error);
                    // Fallback on error
                    setLocation({
                        city: "Location Detected",
                        pincode: `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`
                    });
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
        <motion.nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-2 border-b border-gray-100/50' : 'bg-white border-b border-gray-100 py-3'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between gap-4">

                    {/* LEFT: Logo */}
                    <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
                        <motion.div
                            className="bg-orange-100 p-2 rounded-xl"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Heart className="h-6 w-6 text-orange-600 fill-current" />
                        </motion.div>
                        <span className="text-xl font-black text-gray-900 tracking-tight hidden md:block">
                            Bharat<span className="text-orange-600">Meds</span>
                        </span>
                    </Link>

                    {/* LOCATION (Indian Context) - Desktop Only - Hide for Admin */}
                    {user?.role !== 'admin' ? (
                        <div className="hidden lg:flex items-center gap-2 text-xs text-gray-600 hover:bg-gray-100 py-2 px-3 rounded-full cursor-pointer mx-2 relative group transition-colors">
                            <div className="bg-gray-200 p-1.5 rounded-full">
                                <MapPin size={14} className="text-gray-700" />
                            </div>
                            <div className="leading-tight">
                                <p className="text-gray-400 font-medium text-[10px] uppercase tracking-wide">Deliver to</p>
                                <p className="font-bold text-gray-900 truncate max-w-[120px]" title={`${location.city}, ${location.pincode}`}>
                                    {location.city}, {location.pincode}
                                </p>
                            </div>

                            {/* Location Dropdown */}
                            <div className="hidden group-hover:block absolute left-0 top-full pt-2 w-72 z-50">
                                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100/50 py-3 animate-in fade-in slide-in-from-top-2 overflow-hidden ring-1 ring-black/5">
                                    <div className="px-5 py-3 border-b border-gray-100">
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Choose Location</p>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto px-2">
                                        {locations.map((loc) => (
                                            <button
                                                key={loc.city}
                                                onClick={() => setLocation(loc)}
                                                className={`w-full text-left px-4 py-2.5 my-1 text-sm rounded-xl transition-all flex items-center justify-between group/item ${location.city === loc.city ? 'bg-orange-50 text-orange-600 font-bold shadow-sm' : 'text-gray-700 hover:bg-gray-50'}`}
                                            >
                                                <span>{loc.city}</span>
                                                <span className={`text-xs ${location.city === loc.city ? 'text-orange-400' : 'text-gray-400'} group-hover/item:text-orange-400`}>{loc.pincode}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="border-t border-gray-100 mt-2 pt-2 px-4 pb-2">
                                        <button
                                            onClick={handleDetectLocation}
                                            disabled={isLocating}
                                            className="w-full text-center py-2.5 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <MapPin size={16} className={isLocating ? "animate-bounce" : ""} />
                                            {isLocating ? "Detecting..." : "Detect my location"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Home Button for Admin
                        routeLocation.pathname !== '/' && (
                            <Link to="/" className="hidden lg:flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition-colors text-sm font-bold mx-2">
                                Go to Website
                            </Link>
                        )
                    )}

                    {/* MIDDLE: Advanced Search Bar with Voice */}
                    <div className="flex-1 max-w-2xl flex h-11 rounded-full shadow-sm ring-1 ring-gray-200 hover:ring-gray-300 focus-within:ring-2 focus-within:ring-orange-500/50 bg-gray-50 transition-all relative">
                        {/* Category Dropdown */}
                        <div className="hidden md:flex items-center pl-4 pr-3 cursor-pointer border-r border-gray-200 hover:bg-gray-100 rounded-l-full text-xs font-bold text-gray-600 transition-colors">
                            <span>{searchCategory}</span>
                            <ChevronDown size={12} className="ml-1" />
                        </div>

                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search for medicines, ayurveda, doctors..."
                            className="flex-1 px-4 bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
                        />

                        {/* Voice Search Icon */}
                        <div
                            className={`flex items-center justify-center px-3 cursor-pointer ${isListening ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-orange-500'}`}
                            onClick={toggleVoiceSearch}
                        >
                            <Mic size={20} />
                        </div>

                        {/* Search Button */}
                        <button className="bg-orange-600 hover:bg-orange-700 text-white w-12 rounded-full m-1 flex items-center justify-center transition-all shadow-md shadow-orange-200">
                            <Search size={18} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* RIGHT: Buttons & Profile */}
                    <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">

                        {/* Order Button (Desktop) */}
                        {user?.role !== 'admin' && (
                            <Link to="/prescription">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="hidden lg:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 hover:shadow-xl space-x-2"
                                >
                                    <FileText size={16} />
                                    <span>Upload Rx</span>
                                </motion.button>
                            </Link>
                        )}

                        {/* Authentication Logic */}
                        {user ? (
                            <>
                                {/* Profile Dropdown */}
                                <div className="relative group">
                                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-gray-200">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold border border-orange-200">
                                            {user.username ? user.username.charAt(0).toUpperCase() : <User size={16} />}
                                        </div>
                                        <div className="hidden md:flex flex-col items-start leading-none">
                                            <span className="text-[10px] text-gray-400 font-medium">Namaste,</span>
                                            <span className="text-sm font-bold text-gray-900 max-w-[80px] truncate">{user.username || "User"}</span>
                                        </div>
                                        <ChevronDown size={14} className="text-gray-400" />
                                    </div>

                                    {/* Dropdown Menu - Native Style */}
                                    <div className="hidden group-hover:block absolute right-0 top-full pt-2 w-64 z-50">
                                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100/50 py-2 animate-in fade-in slide-in-from-top-2 ring-1 ring-black/5 overflow-hidden">
                                            <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">My Account</p>
                                            </div>

                                            <div className="p-2 space-y-1">
                                                {user?.role === 'admin' ? (
                                                    <Link to="/admin" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors">Admin Panel</Link>
                                                ) : (
                                                    <>
                                                        <Link to="/dashboard" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors">Your Orders</Link>
                                                        <Link to="/dashboard" className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-colors">Wishlist</Link>
                                                        {/* Recommendations Removed */}
                                                    </>
                                                )}

                                                <div className="border-t border-gray-100 my-1 mx-2"></div>

                                                <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2">
                                                    <LogOut size={16} /> Sign Out
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* Admin Dashboard Link or Cart */}
                                {user?.role === 'admin' ? (
                                    <Link to="/admin" className="hidden md:flex flex-col items-center leading-tight cursor-pointer px-3 py-1.5 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                                        <span className="text-[10px] text-gray-500 font-bold uppercase">Manage</span>
                                        <span className="font-bold text-xs text-orange-600">Admin</span>
                                    </Link>
                                ) : (
                                    /* Cart Icon */
                                    <Link to="/cart" className="relative group p-2 hover:bg-orange-50 rounded-full transition-colors ml-1">
                                        <div className="relative">
                                            <ShoppingCart size={24} className="text-gray-800 group-hover:text-orange-600 transition-colors" />
                                            {cart.length > 0 && (
                                                <span className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                                    {cart.length}
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                )}
                            </>
                        ) : (
                            <Link to="/login">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
                                >
                                    Login
                                </motion.button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Search Bar (Visually improved) */}
            <div className="md:hidden px-4 pb-3">
                <div className="flex h-10 rounded-full ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-orange-500/50 bg-gray-50 overflow-hidden relative">
                    <input
                        type="text"
                        placeholder="Search medicines..."
                        className="flex-1 px-4 bg-transparent outline-none text-sm text-gray-700"
                    />
                    <button className="bg-orange-600 text-white px-5 flex items-center justify-center m-0.5 rounded-full shadow-sm">
                        <Search size={18} />
                    </button>
                </div>
            </div>

            {/* Voice Search Toast */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl z-50 flex items-center gap-3 border border-gray-700/50"
                    >
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgb(239,68,68)]"></div>
                        <span className="font-bold text-sm tracking-wide">Voice Search Unavailable Demo</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
