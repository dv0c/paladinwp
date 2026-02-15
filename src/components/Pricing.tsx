import React from "react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-black font-serif mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-gray-600">Choose the plan that fits your needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
                    <div className="pricing-card">
                        <h3 className="text-xl font-bold text-brand-black font-serif mb-2">
                            Basic
                        </h3>
                        <div className="mb-6 flex items-baseline">
                            <span className="text-4xl font-bold text-brand-black">€5</span>
                            <span className="text-gray-500 ml-2">/month</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-8 grow">
                            Essential protection for personal blogs and small sites.
                        </p>
                        <ul className="space-y-4 mb-8 text-sm text-brand-dark-gray">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-teal-accent text-lg">
                                    check
                                </span>
                                Daily Malware Scan
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-teal-accent text-lg">
                                    check
                                </span>
                                Basic Firewall
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-teal-accent text-lg">
                                    check
                                </span>
                                Login Protection
                            </li>
                        </ul>
                        <a
                            href="#"
                            className="btn-outline text-center mt-auto bg-stone-100 hover:bg-stone-200"
                        >
                            Select Basic
                        </a>
                    </div>
                    <div className="bg-brand-black p-8 rounded-2xl shadow-xl md:-translate-y-4 relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow rounded-bl-full opacity-10"></div>
                        <div className="absolute top-4 right-4">
                            <span className="bg-brand-yellow text-brand-black text-[10px] uppercase font-bold px-2 py-1 rounded">
                                Popular
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white font-serif mb-2">
                            Premium
                        </h3>
                        <div className="mb-6 flex items-baseline">
                            <span className="text-4xl font-bold text-white">€10</span>
                            <span className="text-gray-400 ml-2">/month</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-8 grow">
                            Advanced security for growing businesses and stores.
                        </p>
                        <ul className="space-y-4 mb-8 text-sm text-stone-200">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-yellow text-lg">
                                    check
                                </span>
                                Real-time Scanning
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-yellow text-lg">
                                    check
                                </span>
                                Advanced Bot Blocking
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-yellow text-lg">
                                    check
                                </span>
                                Country Blocking
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-yellow text-lg">
                                    check
                                </span>
                                Priority Support
                            </li>
                        </ul>
                        <a
                            href="#"
                            className="btn-primary text-center mt-auto shadow-none border-none hover:bg-[#ebd019]"
                        >
                            Get Premium
                        </a>
                    </div>
                    <div className="pricing-card border-dashed border-2 border-stone-300 bg-stone-50">
                        <h3 className="text-xl font-bold text-brand-black font-serif mb-2">
                            Meindesk Prototype
                        </h3>
                        <div className="mb-6 flex items-baseline">
                            <span className="text-4xl font-bold text-brand-black">€30</span>
                            <span className="text-gray-500 ml-2">/year</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-8 grow">
                            Special yearly rate for early adopters & developers.
                        </p>
                        <ul className="space-y-4 mb-8 text-sm text-brand-dark-gray">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-teal-accent text-lg">
                                    check
                                </span>
                                All Premium Features
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-teal-accent text-lg">
                                    check
                                </span>
                                Early Access to Beta
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-teal-accent text-lg">
                                    check
                                </span>
                                Developer API Access
                            </li>
                        </ul>
                        <a href="#" className="btn-outline text-center mt-auto bg-white">
                            Join Prototype
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
