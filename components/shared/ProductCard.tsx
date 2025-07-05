// components/shared/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { type Product } from "../../lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Get the first image from the array to use as the thumbnail.
  // We add a fallback to a placeholder in case the images array is empty.
  const thumbnailUrl = product.images?.[0] || "/images/placeholder.svg";

  return (
    <Card className="w-full flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader className="p-0 border-b">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            // --- THIS IS THE FIX ---
            // We now use the first image from the 'images' array.
            src={thumbnailUrl} 
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
        <CardDescription className="mt-2">{product.tagline}</CardDescription>
        <p className="text-3xl font-extrabold text-primary mt-4">₹{product.price}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-4">
        <Button variant="outline" asChild className="w-full">
            <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
        <Button asChild className="w-full bg-success hover:bg-success/90">
          <Link href="#">Add to Cart</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}