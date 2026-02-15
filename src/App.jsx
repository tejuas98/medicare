import React from 'react';
import { useLocation, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Prescription from './pages/Prescription';
import AdminDashboard from './pages/AdminDashboard';
import AdminOverview from './pages/admin/AdminOverview';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminSettings from './pages/admin/AdminSettings';
import AdminPrescriptions from './pages/admin/AdminPrescriptions';
import { AuthProvider } from './context/AuthContext';
import { ShopProvider } from './context/ShopContext';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

// Create a separate component for the routed content to use usage of useLocation
const AppContent = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            {location.pathname !== '/login' && <Navbar />}
            <div className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                        <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
                        <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
                        <Route path="/login" element={<PageTransition><Auth /></PageTransition>} />
                        <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
                        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                        <Route path="/policy" element={<PageTransition><Policy /></PageTransition>} />
                        <Route path="/shipping" element={<PageTransition><Policy /></PageTransition>} />
                        <Route path="/returns" element={<PageTransition><Policy /></PageTransition>} />
                        <Route path="/privacy" element={<PageTransition><Policy /></PageTransition>} />
                        <Route path="/terms" element={<PageTransition><Policy /></PageTransition>} />
                        <Route path="/careers" element={<PageTransition><About /></PageTransition>} />
                        <Route path="/prescription" element={<PageTransition><Prescription /></PageTransition>} />

                        {/* Admin Routes */}
                        <Route path="/admin" element={<AdminDashboard />}>
                            <Route index element={<AdminOverview />} />
                            <Route path="products" element={<AdminProducts />} />
                            <Route path="orders" element={<AdminOrders />} />
                            <Route path="prescriptions" element={<AdminPrescriptions />} />
                            <Route path="settings" element={<AdminSettings />} />
                        </Route>
                    </Routes>
                </AnimatePresence>
            </div>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <AuthProvider>
            <ShopProvider>
                <Router>
                    <AppContent />
                </Router>
            </ShopProvider>
        </AuthProvider>
    );
}

export default App;
