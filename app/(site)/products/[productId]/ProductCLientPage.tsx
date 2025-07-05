// app/(site)/products/[productId]/ProductClientPage.tsx

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { type Product } from "../../../../lib/data";
import { cn } from "../../../../lib/utils";

export default function ProductClientPage({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (product?.images?.[0]) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  return (
    // This is the main grid for the whole page (Left and Right columns)
    <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
      
      {/* --- START: LEFT COLUMN (IMAGE GALLERY) --- */}
      <div className="flex flex-col gap-4">
        
        {/* Main Displayed Image Container */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl bg-slate-100">
          {selectedImage && (
            <Image
              key={selectedImage}
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover animate-fade-in"
            />
          )}
        </div>
        
        {/* Thumbnail Images Container */}
        <div className="grid grid-cols-5 grid-rows-1 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "relative aspect-square min-h-16 rounded-md overflow-hidden transition-all duration-200",
                "ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-primary",
                selectedImage === image
                  ? "ring-2 ring-primary opacity-100"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      {/* --- END: LEFT COLUMN --- */}

      {/* --- START: RIGHT COLUMN (PRODUCT DETAILS) --- */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
        <p className="text-lg text-gray-600">{product.tagline}</p>
        <p className="text-4xl font-extrabold text-primary">₹{product.price}</p>
        <p className="text-base leading-relaxed text-gray-700 mt-2">{product.description}</p>
        
        <div className="mt-6 flex items-center gap-4 border-t pt-6">
          <Image
            src="/images/main.jpg"
            alt="Make in India Logo"
            width={100}
            height={70}
            className="object-contain"
          />
          <p className="text-sm text-gray-600 font-semibold">
            Proudly manufactured in India. <br />
            Built for the world.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <Button size="lg" variant="outline">Ask a Question</Button>
          <Button size="lg">Add to Cart</Button>
        </div>
      </div>
      {/* --- END: RIGHT COLUMN --- */}
    </div>
  );
}
