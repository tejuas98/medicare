import React from 'react';
import { ShieldCheck, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Policy = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-black text-gray-900 mb-8 border-b pb-4">Terms & Policies</h1>

            <div className="space-y-8">
                {/* Privacy Policy */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="text-orange-600" size={28} />
                        <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 prose prose-sm max-w-none text-gray-600">
                        <p className="mb-2">Last updated: {new Date().toLocaleDateString()}</p>
                        <p>
                            At BharatMeds, we take your privacy seriously. This policy describes how we collect, use, and handle your personal information.
                        </p>
                        <ul className="list-disc ml-5 space-y-1 mt-2">
                            <li>We collect information you provide directly to us (name, address, prescription).</li>
                            <li>We use this information to process orders and improve our services.</li>
                            <li>We do not sell your personal data to third parties.</li>
                            <li>Your payment data is processed securely via PCI-DSS compliant partners.</li>
                        </ul>
                    </div>
                </section>

                {/* Terms of Service */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="text-orange-600" size={28} />
                        <h2 className="text-2xl font-bold text-gray-800">Terms of Service</h2>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 prose prose-sm max-w-none text-gray-600">
                        <p>
                            By using BharatMeds, you agree to the following terms:
                        </p>
                        <ul className="list-disc ml-5 space-y-1 mt-2">
                            <li>You must be at least 18 years old to use this service.</li>
                            <li>Prescription medicines require a valid doctor's prescription.</li>
                            <li>Prices are subject to change without notice.</li>
                            <li>We reserve the right to refuse service to anyone.</li>
                        </ul>
                    </div>
                </section>

                {/* Shipping & Returns */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <TruckIcon className="text-orange-600" size={28} />
                        <h2 className="text-2xl font-bold text-gray-800">Shipping & Returns</h2>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 prose prose-sm max-w-none text-gray-600">
                        <h4 className="font-bold text-gray-900 mb-2">Shipping</h4>
                        <p className="mb-2">We ship to over 20,000 pincodes across India. Standard delivery takes 2-4 days. Express delivery is available in select cities.</p>

                        <h4 className="font-bold text-gray-900 mb-2 mt-4">Returns</h4>
                        <p>We accept returns for damaged or incorrect items within 7 days of delivery. Refrigerated items cannot be returned.</p>
                    </div>
                </section>
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-500 mb-4">Have specific questions?</p>
                <Link to="/contact" className="btn btn-primary px-8 py-3 rounded-full">Contact Support</Link>
            </div>
        </div>
    );
};

// Helper component for the icon
const TruckIcon = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
);

export default Policy;
