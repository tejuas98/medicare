import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart, Mail, Phone, MapPin, CreditCard, CheckCircle } from 'lucide-react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Company Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 group mb-4">
                            <div className="bg-orange-500/10 p-2 rounded-lg">
                                <Heart className="h-6 w-6 text-orange-500 fill-current" />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tight">
                                Bharat<span className="text-orange-500">Meds</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            India's most trusted online pharmacy. 100% genuine medicines, ayurvedic products, and health supplements delivered to every pincode in India.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink icon={Facebook} href="#" />
                            <SocialLink icon={Twitter} href="#" />
                            <SocialLink icon={Instagram} href="#" />
                            <SocialLink icon={Linkedin} href="#" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/shop">Shop Medicines</FooterLink>
                            <FooterLink to="/shop?category=Ayurveda">Ayurveda</FooterLink>
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/careers">Careers</FooterLink>
                            <FooterLink to="/contact">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Support</h3>
                        <ul className="space-y-3 text-sm">
                            <FooterLink to="/contact">Help Center</FooterLink>
                            <FooterLink to="/prescription">Upload Prescription</FooterLink>
                            <FooterLink to="/shipping">Shipping Policy</FooterLink>
                            <FooterLink to="/returns">Returns & Refunds</FooterLink>
                            <FooterLink to="/privacy">Privacy Policy</FooterLink>
                            <FooterLink to="/terms">Terms of Service</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
                        <p className="text-sm text-gray-400 mb-4">Subscribe for health tips and exclusive offers.</p>
                        <form className="space-y-3" onSubmit={handleSubscribe}>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                                />
                                <Mail className="absolute right-3 top-3 text-gray-500 h-5 w-5" />
                            </div>
                            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                                {subscribed ? (
                                    <> <CheckCircle size={16} /> Subscribed! </>
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </form>
                        <div className="mt-6 pt-6 border-t border-gray-800">
                            <p className="text-xs text-gray-500 mb-2">We Accept</p>
                            <div className="flex gap-2 text-gray-400">
                                <CreditCard size={24} />
                                <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-[8px] font-bold">UPI</div>
                                <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-[8px] font-bold">RuPay</div>
                                <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-[8px] font-bold">NetBank</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} BharatMeds India Pvt Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone size={14} />
                            <span>1800-108-1008</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>Bandra Kurla Complex, Mumbai</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon: Icon, href }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all duration-300"
        >
            <Icon size={18} />
        </a>
    );
}

function FooterLink({ to, children }) {
    return (
        <li>
            <Link to={to} className="text-gray-400 hover:text-orange-500 transition-colors inline-block hover:translate-x-1 duration-200">
                {children}
            </Link>
        </li>
    );
}
