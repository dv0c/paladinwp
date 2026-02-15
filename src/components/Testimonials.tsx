import React from "react";

const testimonials = [
    {
        quote:
            "Finally, a security plugin that doesn't feel like bloatware. It's fast, effective, and the interface is actually usable.",
        author: "Sarah Jenkins",
        role: "Freelance Developer",
        avatar: "S",
    },
    {
        quote:
            "I used to get bot spam daily. Since installing LiteBotShield, it's gone. Zero configuration needed.",
        author: "Mike Ross",
        role: "E-commerce Owner",
        avatar: "M",
    },
    {
        quote:
            "The malware scanner saved my client's site. It found a backdoor that two other premium plugins missed.",
        author: "David Chen",
        role: "Agency Director",
        avatar: "D",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white border-t border-stone-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-black font-serif mb-4">
                        Trusted by Developers
                    </h2>
                    <p className="text-gray-600">
                        See what the community is saying about LiteBotShield.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-stone-50 p-8 rounded-xl border border-stone-100 relative"
                        >
                            <span className="material-symbols-outlined text-brand-yellow/20 text-6xl absolute top-4 right-4 select-none">
                                format_quote
                            </span>
                            <p className="text-brand-dark-gray italic mb-8 relative z-10 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-brand-black text-white rounded-full flex items-center justify-center font-bold">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-brand-black text-sm">
                                        {t.author}
                                    </div>
                                    <div className="text-xs text-brand-dark-gray uppercase tracking-wider">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
