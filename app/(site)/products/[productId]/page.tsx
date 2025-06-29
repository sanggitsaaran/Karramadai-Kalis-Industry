// app/(site)/products/[productId]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import { products } from "../../../../lib/data";

export default async function SingleProductPage({ params }: { params: { productId: string }}) {
    const product = products.find(p => p.id === params.productId);

    if (!product) {
        notFound();
    }

    return (
        <div className="container py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                
                {/* Left Column: Product Image */}
                <div>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="rounded-lg object-cover w-full shadow-lg"
                    />
                </div>

                {/* Right Column: Product Details */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
                    <p className="text-lg text-gray-600">{product.tagline}</p>
                    <p className="text-4xl font-extrabold text-primary">${product.price}</p>
                    <p className="text-base leading-relaxed text-gray-700 mt-2">{product.description}</p>
                    
                    {/* --- START: NEW "MAKE IN INDIA" TRUST BADGE SECTION --- */}
                    <div className="mt-6 flex items-center gap-4 border-t pt-6">
                        <Image
                            src="/images/main.jpg" // Make sure this image exists in your /public/images folder
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
                    {/* --- END: NEW TRUST BADGE SECTION --- */}

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                        <Button size="lg" variant="outline">Ask a Question</Button>
                        <Button size="lg">Add to Cart</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}