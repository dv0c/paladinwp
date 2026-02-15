import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-stone-100 py-16 px-6 border-t border-stone-200 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                            <span
                                className="material-symbols-outlined text-brand-black"
                                style={{ fontSize: "18px" }}
                            >
                                shield
                            </span>
                        </div>
                        <span className="font-serif font-bold text-lg text-brand-black tracking-tight">
                            LiteBotShield
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                        Making WordPress security accessible, powerful, and clutter-free.
                        Built for performance-minded developers and site owners.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-brand-black mb-4 font-serif">
                        Product
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li>
                            <Link href="/features" className="hover:text-brand-black">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="hover:text-brand-black">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-brand-black">
                                Changelog
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-brand-black">
                                Documentation
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-brand-black mb-4 font-serif">
                        Company
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li>
                            <Link href="#" className="hover:text-brand-black">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-brand-black">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-brand-black">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-brand-black">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200 text-center md:text-left text-xs text-gray-400 uppercase tracking-widest">
                © 2023 LiteBotShield Security. All rights reserved.
            </div>
        </footer>
    );
}
