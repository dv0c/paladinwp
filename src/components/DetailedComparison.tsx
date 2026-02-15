import React from "react";

export default function DetailedComparison() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-black font-serif mb-4">
                        Compare Plans
                    </h2>
                    <p className="text-gray-600">
                        Detailed breakdown of features across all tiers.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-brand-black">
                                <th className="py-4 px-6 font-bold text-brand-black w-1/3">
                                    Feature
                                </th>
                                <th className="py-4 px-6 font-bold text-brand-black w-1/6 text-center">
                                    Basic
                                </th>
                                <th className="py-4 px-6 font-bold text-brand-black w-1/6 text-center bg-brand-yellow/10">
                                    Premium
                                </th>
                                <th className="py-4 px-6 font-bold text-brand-black w-1/6 text-center">
                                    Prototype
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200">
                            <tr>
                                <td className="py-4 px-6 text-brand-dark-gray font-medium">
                                    Daily Malware Scan
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className="material-symbols-outlined text-teal-accent">
                                        check_circle
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center bg-brand-yellow/5">
                                    <span className="material-symbols-outlined text-teal-accent">
                                        check_circle
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className="material-symbols-outlined text-teal-accent">
                                        check_circle
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-brand-dark-gray font-medium">
                                    Real-time Protection
                                </td>
                                <td className="py-4 px-6 text-center text-gray-300">
                                    <span className="material-symbols-outlined">cancel</span>
                                </td>
                                <td className="py-4 px-6 text-center bg-brand-yellow/5">
                                    <span className="material-symbols-outlined text-teal-accent">
                                        check_circle
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className="material-symbols-outlined text-teal-accent">
                                        check_circle
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-brand-dark-gray font-medium">
                                    Country Blocking
                                </td>
                                <td className="py-4 px-6 text-center text-gray-300">
                                    <span className="material-symbols-outlined">cancel</span>
                                </td>
                                <td className="py-4 px-6 text-center bg-brand-yellow/5">
                                    <span className="material-symbols-outlined text-teal-accent">
                                        check_circle
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <span className="material-symbols-outlined text-teal-accent">
                                        check_circle
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-brand-dark-gray font-medium">
                                    Audit Logs
                                </td>
                                <td className="py-4 px-6 text-center">7 Days</td>
                                <td className="py-4 px-6 text-center bg-brand-yellow/5">
                                    30 Days
                                </td>
                                <td className="py-4 px-6 text-center">Unlimited</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-brand-dark-gray font-medium">
                                    Support
                                </td>
                                <td className="py-4 px-6 text-center">Email</td>
                                <td className="py-4 px-6 text-center bg-brand-yellow/5">
                                    Priority
                                </td>
                                <td className="py-4 px-6 text-center">Developer Direct</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
