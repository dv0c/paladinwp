import React from "react";

export default function SecurityOperations() {
    return (
        <section className="py-24 bg-stone-100 border-y border-stone-200" id="dashboard">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                        <span className="text-teal-accent font-bold uppercase tracking-widest text-xs mb-2 block">
                            Power User Interface
                        </span>
                        <h2 className="text-4xl font-black">Security Operations</h2>
                    </div>
                    <div className="flex items-center gap-6 bg-white p-4 border border-stone-200 rounded-sm shadow-sm">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase">
                                Files Scanned
                            </span>
                            <span className="text-lg font-bold">14,205</span>
                        </div>
                        <div className="w-px h-8 bg-stone-100"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase">
                                Health Score
                            </span>
                            <span className="text-lg font-bold text-emerald-600">A+</span>
                        </div>
                        <div className="w-px h-8 bg-stone-100"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase">
                                Active Threats
                            </span>
                            <span className="text-lg font-bold">0</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-brand-black shadow-[8px_8px_0px_0px_rgba(36,28,21,1)] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-stone-100">
                        <div className="lg:col-span-8 p-8 border-b lg:border-b-0 lg:border-r border-stone-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        Scan Intensity
                                    </h4>
                                    <div className="space-y-3">
                                        <label className="flex items-center p-4 border-2 border-brand-yellow bg-brand-yellow/5 cursor-pointer group rounded-sm">
                                            <input
                                                defaultChecked
                                                className="text-teal-accent focus:ring-0 w-4 h-4"
                                                name="intensity"
                                                type="radio"
                                            />
                                            <div className="ml-4">
                                                <p className="text-sm font-bold">Quick Scan</p>
                                                <p className="text-[11px] text-gray-500">
                                                    Focus on entry points & core files
                                                </p>
                                            </div>
                                        </label>
                                        <label className="flex items-center p-4 border border-stone-200 hover:border-brand-black cursor-pointer transition-colors rounded-sm">
                                            <input
                                                className="text-teal-accent focus:ring-0 w-4 h-4"
                                                name="intensity"
                                                type="radio"
                                            />
                                            <div className="ml-4">
                                                <p className="text-sm font-bold">Deep Analysis</p>
                                                <p className="text-[11px] text-gray-500">
                                                    Heuristic check of all directories
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        Directory Scope
                                    </h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center justify-between p-2 hover:bg-stone-50 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    defaultChecked
                                                    className="rounded-sm text-teal-accent focus:ring-0"
                                                    type="checkbox"
                                                />
                                                <span className="text-sm font-medium">
                                                    wp-content/plugins
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400">
                                                48 items
                                            </span>
                                        </label>
                                        <label className="flex items-center justify-between p-2 hover:bg-stone-50 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    defaultChecked
                                                    className="rounded-sm text-teal-accent focus:ring-0"
                                                    type="checkbox"
                                                />
                                                <span className="text-sm font-medium">
                                                    wp-content/themes
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400">
                                                12 items
                                            </span>
                                        </label>
                                        <label className="flex items-center justify-between p-2 hover:bg-stone-50 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    className="rounded-sm text-teal-accent focus:ring-0"
                                                    type="checkbox"
                                                />
                                                <span className="text-sm font-medium">
                                                    wp-includes (System)
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-bold text-red-400">
                                                Restricted
                                            </span>
                                        </label>
                                        <button className="flex items-center gap-2 text-teal-accent text-xs font-bold mt-4 hover:underline">
                                            <span className="material-symbols-outlined text-sm">
                                                add_circle
                                            </span>{" "}
                                            Add Custom Path
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-stone-50/50">
                            <div>
                                <p className="text-xs text-gray-500 mb-6 leading-relaxed italic">
                                    Ready to audit the file system? Advanced scan configurations are
                                    applied immediately upon execution.
                                </p>
                                <button className="w-full bg-brand-black text-white py-4 font-bold flex items-center justify-center gap-3 hover:bg-brand-dark-gray transition-colors rounded-sm">
                                    <span className="material-symbols-outlined">play_arrow</span>
                                    Start New Scan
                                </button>
                            </div>
                            <div className="mt-8 pt-8 border-t border-stone-200">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                                        Engine Status
                                    </span>
                                    <span className="text-[10px] font-bold text-emerald-600">
                                        IDLE / READY
                                    </span>
                                </div>
                                <div className="w-full bg-stone-200 h-1.5 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-serif text-xl font-bold">
                                Recent Scan History
                            </h3>
                            <div className="flex gap-2">
                                <button className="p-2 border border-stone-200 hover:bg-stone-50 rounded-sm">
                                    <span className="material-symbols-outlined text-xl">
                                        tune
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-[10px] uppercase tracking-widest font-bold text-gray-400 border-b border-stone-100">
                                        <th className="pb-4 pr-4">ID</th>
                                        <th className="pb-4 px-4">Mode</th>
                                        <th className="pb-4 px-4">Date & Time</th>
                                        <th className="pb-4 px-4">Duration</th>
                                        <th className="pb-4 px-4 text-center">Threats Found</th>
                                        <th className="pb-4 px-4">Status</th>
                                        <th className="pb-4 pl-4 text-right">Detail</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr className="group hover:bg-stone-50/50 transition-colors">
                                        <td className="py-4 pr-4 font-mono text-xs text-gray-400">
                                            #LB-89241
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-[10px] font-bold px-2 py-0.5 bg-brand-yellow border border-brand-black/10">
                                                QUICK
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <p className="text-sm font-bold">Oct 24, 2023</p>
                                            <p className="text-[10px] text-gray-400">04:15 PM</p>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600">
                                            3m 12s
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <span className="text-sm font-black text-emerald-600">
                                                0
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                <span className="text-xs font-bold text-emerald-600">
                                                    SUCCESS
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 pl-4 text-right">
                                            <button className="text-teal-accent font-bold text-xs hover:underline">
                                                LOG
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50/50 transition-colors">
                                        <td className="py-4 pr-4 font-mono text-xs text-gray-400">
                                            #LB-89212
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-[10px] font-bold px-2 py-0.5 bg-stone-100 border border-brand-black/10">
                                                DEEP
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <p className="text-sm font-bold">Oct 23, 2023</p>
                                            <p className="text-[10px] text-gray-400">11:30 AM</p>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600">
                                            28m 45s
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <span className="text-sm font-black text-red-600">
                                                2
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                                <span className="text-xs font-bold text-red-600">
                                                    FLAGGED
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 pl-4 text-right">
                                            <button className="text-teal-accent font-bold text-xs hover:underline">
                                                LOG
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50/50 transition-colors">
                                        <td className="py-4 pr-4 font-mono text-xs text-gray-400">
                                            #LB-89105
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-[10px] font-bold px-2 py-0.5 bg-brand-yellow border border-brand-black/10">
                                                QUICK
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <p className="text-sm font-bold">Oct 22, 2023</p>
                                            <p className="text-[10px] text-gray-400">09:05 PM</p>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-gray-600">
                                            4m 02s
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <span className="text-sm font-black text-emerald-600">
                                                0
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                <span className="text-xs font-bold text-emerald-600">
                                                    SUCCESS
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 pl-4 text-right">
                                            <button className="text-teal-accent font-bold text-xs hover:underline">
                                                LOG
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
