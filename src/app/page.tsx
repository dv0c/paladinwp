import Link from "next/link";
import Features from "@/components/Features";
import SecurityOperations from "@/components/SecurityOperations";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <header className="relative px-6 py-20 lg:py-32 flex flex-col items-center text-center max-w-5xl mx-auto grow justify-center">
        <div className="absolute inset-0 -z-10 hero-pattern opacity-50"></div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-black leading-tight tracking-tight mb-8">
          Secure your WordPress <br className="hidden md:block" />
          <span className="relative inline-block">
            without the clutter
            <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-yellow -z-10 transform -rotate-1 opacity-60"></span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-brand-dark-gray max-w-2xl mb-10 leading-relaxed font-light">
          Powerful security doesn't have to be complicated. LiteBotShield provides
          enterprise-grade protection with a dashboard you'll actually enjoy
          using.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/pricing"
            className="px-8 py-4 bg-brand-yellow text-brand-black text-lg font-bold rounded shadow-soft hover:bg-[#ebd019] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
          >
            Get Started
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/features"
            className="px-8 py-4 bg-white border border-stone-200 text-brand-black text-lg font-bold rounded shadow-card hover:bg-stone-50 transition-all flex items-center justify-center"
          >
            Learn more
          </Link>
        </div>
        <div className="mt-16 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <span className="material-symbols-outlined text-teal-accent">
            verified
          </span>{" "}
          Trusted by 10,000+ WordPress Sites
        </div>
      </header>
      <Features />
      <SecurityOperations />
      <Pricing />
    </>
  );
}
