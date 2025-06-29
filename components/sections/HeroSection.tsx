// components/sections/HeroSection.tsx
import Link from "next/link";
import { Button } from "../../components/ui/button"; // Corrected the import path

export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            The Revolution in Gardening is Here
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                           Engineered for durability and precision. Reclaim your garden with ease and efficiency.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        {/* 
                          THIS IS THE FIX:
                          We are telling this specific button to use the 'bg-success' class,
                          which is mapped to your green color.
                        */}
                        <Button asChild size="lg" className="bg-success hover:bg-success/90">
                            <Link href="/products">Shop Now</Link>
                        </Button>
                        
                        {/* This button stays as a neutral outline, which is good design */}
                        <Button asChild variant="outline" size="lg">
                            <Link href="/videos">See Videos</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}