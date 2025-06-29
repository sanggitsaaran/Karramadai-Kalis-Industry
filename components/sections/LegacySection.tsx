// components/sections/LegacySection.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function LegacySection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Side: Text Content */}
                    <div className="space-y-4">
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Our Heritage
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            A Legacy of Power and Reliability
                        </h2>
                        <p className="text-gray-600 max-w-lg">
                            The Kalis Power Weeder isn't just a new product; it's the culmination of years of engineering and a commitment to quality you can feel. Our original pamphlet is a testament to the vision that started it all.
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/about">Learn Our Story</Link>
                        </Button>
                    </div>

                    {/* Right Side: Pamphlet Image with style */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/main.jpg" // The path to your pamphlet image
                            alt="The original Kalis Power Weeder pamphlet"
                            width={350}
                            height={500}
                            className="rounded-lg object-contain shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-300"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}