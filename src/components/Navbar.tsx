import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-6 px-6 lg:px-12 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-100">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                    <span
                        className="material-symbols-outlined text-brand-black"
                        style={{ fontSize: "24px" }}
                    >
                        shield
                    </span>
                </div>
                <Link
                    href="/"
                    className="font-serif font-bold text-xl text-brand-black tracking-tight"
                >
                    LiteBotShield
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-dark-gray">
                <Link
                    href="/features"
                    className="hover:text-brand-black transition-colors"
                >
                    Features
                </Link>
                <Link
                    href="/dashboard"
                    className="hover:text-brand-black transition-colors"
                >
                    Dashboard
                </Link>
                <Link
                    href="/pricing"
                    className="hover:text-brand-black transition-colors"
                >
                    Pricing
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <Link
                    href="#"
                    className="hidden md:block text-sm font-bold text-brand-black hover:underline"
                >
                    Log In
                </Link>
                <Link
                    href="#"
                    className="px-5 py-2.5 bg-brand-black text-white text-sm font-bold rounded hover:bg-brand-dark-gray transition-colors"
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
