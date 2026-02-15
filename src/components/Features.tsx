import React from "react";

export default function Features() {
    return (
        <section id="features" className="py-20 bg-stone-50 border-t border-stone-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-black font-serif mb-4">
                        Everything you need, nothing you don't
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We stripped away the confusing settings and bloated interfaces to focus
                        on raw performance and security.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300 border border-stone-100">
                        <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-teal-accent text-3xl">
                                policy
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-black font-serif mb-3">
                            Malware Scanning
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Automated deep scans of your core files, themes, and plugins. We
                            detect signatures before they become problems.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300 border border-stone-100">
                        <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-brand-yellow text-3xl">
                                smart_toy
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-black font-serif mb-3">
                            Bot Protection
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Intelligent firewall rules that block malicious bots and scrapers
                            while letting legitimate traffic pass through seamlessly.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300 border border-stone-100">
                        <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-brand-black text-3xl">
                                analytics
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-black font-serif mb-3">
                            Actionable Analytics
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Clear, concise reports on traffic and threats. Know exactly what's
                            hitting your site without drowning in data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
