import React from "react";

const faqs = [
    {
        question: "How does the malware scanner work?",
        answer:
            "Our scanner uses a combination of signature-based detection and heuristic analysis to identify malicious code in your WordPress files and database. It runs automatically in the background without affecting your site's performance.",
    },
    {
        question: "Will LiteBotShield slow down my website?",
        answer:
            "No. We designed LiteBotShield specifically for performance. Unlike other security plugins that bloat your database and slow down page loads, our engine is lightweight and optimized for speed.",
    },
    {
        question: "Do I need the Premium plan?",
        answer:
            "The Basic plan offers essential protection for most personal sites. However, if you run an e-commerce store or a high-traffic business site, we highly recommend the Premium plan for its real-time scanning and advanced bot protection capabilities.",
    },
    {
        question: "What happens if my site gets hacked while using LiteBotShield?",
        answer:
            "If you are on our Premium plan, our security experts will clean your site for free. We stand by our protection.",
    },
];

export default function FAQ() {
    return (
        <section className="py-20 bg-stone-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-black font-serif mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600">
                        Everything you need to know about protecting your WordPress site.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
                        >
                            <h3 className="font-bold text-lg text-brand-black mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
