// components/sections/HeroSection.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
];

export default function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      
      <AnimatePresence>
        <motion.div
          key={imageIndex}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[imageIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 w-full h-full bg-black/60" />

      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              The Revolution in Gardening is Here
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Engineered for durability and precision. Reclaim your garden with
              ease and efficiency.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-success hover:bg-success/90"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            
            {/* 
              --- THIS IS THE FIX ---
              We removed 'variant="outline"' and created a custom "glass" style.
            */}
            <Button 
              asChild 
              size="lg" 
              className="border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black"
            >
              <Link href="/videos">See It In Action</Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}