import SecurityOperations from "@/components/SecurityOperations";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="grow flex flex-col">
            <section className="bg-stone-50 py-16 px-6 border-b border-stone-200">
                <div className="max-w-7xl mx-auto">
                    <span className="text-teal-accent font-bold uppercase tracking-widest text-xs mb-2 block">
                        Command Center
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-black mb-4">
                        Mission Control
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Monitor your site's health, configure scan intensity, and track threats
                        in real-time. This is the power user interface for security professionals.
                    </p>
                </div>
            </section>

            <SecurityOperations />

            <section className="py-20 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-brand-black font-serif mb-2">
                                Live Threat Intelligence
                            </h2>
                            <p className="text-gray-500">
                                Global attack vectors blocked in the last 24 hours.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                LIVE
                            </span>
                        </div>
                    </div>

                    {/* Mock Map UI */}
                    <div className="bg-brand-black rounded-xl overflow-hidden shadow-2xl relative h-[500px] border border-stone-800">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>

                        {/* Mock Data Points */}
                        <div className="absolute top-1/4 left-1/4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
                            </span>
                        </div>
                        <div className="absolute top-1/3 left-1/2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-accent"></span>
                            </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black to-transparent p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <div className="text-gray-500 text-xs uppercase font-bold mb-1">SQL Injections</div>
                                    <div className="text-white text-2xl font-mono">8,241</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase font-bold mb-1">XSS Attempts</div>
                                    <div className="text-white text-2xl font-mono">12,593</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase font-bold mb-1">Brute Force</div>
                                    <div className="text-white text-2xl font-mono">45,102</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase font-bold mb-1">Malware Uploads</div>
                                    <div className="text-white text-2xl font-mono">329</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-brand-yellow py-16 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
                    <div className="shrink-0">
                        <div className="w-20 h-20 bg-brand-black rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-4xl">
                                support_agent
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-brand-black font-serif mb-4">
                            Need an automated security team?
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Upgrade to <span className="font-bold">Premium</span> and get 24/7 human monitoring. Our experts analyze your logs so you don't have to.
                        </p>
                        <Link href="/pricing" className="inline-block px-8 py-4 bg-brand-black text-white font-bold rounded hover:bg-brand-dark-gray transition-colors">
                            Upgrade to Premium
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
