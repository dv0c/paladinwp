import Pricing from "@/components/Pricing";
import DetailedComparison from "@/components/DetailedComparison";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function PricingPage() {
    return (
        <div className="grow flex flex-col">
            <Pricing />
            <DetailedComparison />
            <Testimonials />
            <FAQ />
        </div>
    );
}
