// components/sections/FeaturedProducts.tsx
import { products } from "../../lib/data";
import ProductCard from "../../components/shared/ProductCard";

export default function FeaturedProducts() {
    // Show only the first 3 products on the homepage
    const featured = products.slice(0, 3);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Our Star Products
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-lg mt-3">
                        Discover the tools that are changing the game for gardeners everywhere.
                    </p>
                </div>
                
                {/* This grid layout will now work correctly with our new ProductCard */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}