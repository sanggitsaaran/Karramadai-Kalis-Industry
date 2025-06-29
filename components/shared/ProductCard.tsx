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
  return (
    <Card className="w-full flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader className="p-0">
        <div className="overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
        <CardDescription className="mt-2">{product.tagline}</CardDescription>
        <p className="text-3xl font-extrabold mt-4">${product.price}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-4">
        <Button variant="outline" asChild className="w-full">
            <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
        {/* 
          THIS IS THE FIX:
          We are telling this button to use the 'bg-success' class.
        */}
        <Button asChild className="w-full bg-success hover:bg-success/90">
          <Link href="#">Add to Cart</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}