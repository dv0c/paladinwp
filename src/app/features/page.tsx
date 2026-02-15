import Link from "next/link";
import Features from "@/components/Features";

export default function FeaturesPage() {
    return (
        <div className="grow flex flex-col">
            <section className="bg-brand-black text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-4 block">
                        Under the Hood
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8">
                        Advanced Protection for <br />
                        Modern WordPress
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We've reimagined how WordPress security should work. No bloat, no
                        complex settings, just raw performance and ironclad defense.
                    </p>
                </div>
            </section>

            <Features />

            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-brand-yellow text-4xl">
                                radar
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-brand-black font-serif mb-6">
                            Deep Heuristic Scanning
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Traditional scanners only look for known file hashes. LiteBotShield
                            analyzes code structure and behavior to detect zero-day exploits and
                            obfuscated malware that others miss.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-teal-accent mt-1">
                                    check_circle
                                </span>
                                <div>
                                    <h4 className="font-bold text-brand-black">PHP Analysis</h4>
                                    <p className="text-sm text-gray-500">
                                        Scans themes and plugins for backdoors and shells.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-teal-accent mt-1">
                                    check_circle
                                </span>
                                <div>
                                    <h4 className="font-bold text-brand-black">
                                        Database Integrity
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Checks for malicious injections in your posts and comments.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 relative">
                        <div className="absolute top-4 right-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="font-mono text-sm text-brand-dark-gray mt-6 space-y-2">
                            <p>
                                <span className="text-blue-500">Scanning</span> /var/www/html/wp-content...
                            </p>
                            <p>
                                <span className="text-gray-400">[OK]</span> index.php
                            </p>
                            <p>
                                <span className="text-gray-400">[OK]</span> wp-config.php
                            </p>
                            <p>
                                <span className="text-red-500">[ALERT]</span> unknown-file.php{" "}
                                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs ml-2">
                                    MALWARE DETECTED
                                </span>
                            </p>
                            <p className="text-teal-accent pl-4">
                                ↳ Isolate and Quarantine? (Y/n) <span className="animate-pulse">_</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-stone-100 text-center px-6">
                <h2 className="text-3xl font-bold text-brand-black font-serif mb-6">
                    Ready to secure your site?
                </h2>
                <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-white text-lg font-bold rounded shadow-lg hover:bg-brand-dark-gray transition-colors"
                >
                    View Plans
                </Link>
            </section>
        </div>
    );
}
