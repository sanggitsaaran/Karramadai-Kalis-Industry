// app/(site)/products/[productId]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import { products } from "../../../../lib/data";

// ADDED the 'async' keyword here
export default async function SingleProductPage({ params }: { params: { productId: string }}) {
    const product = products.find(p => p.id === params.productId);

    if (!product) {
        notFound();
    }

    return (
        <div className="container py-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="rounded-lg object-cover w-full"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="text-lg text-gray-600">{product.tagline}</p>
                    <p className="text-3xl font-extrabold">${product.price}</p>
                    <p className="text-base leading-relaxed">{product.description}</p>
                    <div className="flex gap-4 mt-4">
                        <Button size="lg">Add to Cart</Button>
                        <Button size="lg" variant="outline">Ask a Question</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}