// app/(site)/products/page.tsx
import ProductCard from "../../../components/shared/ProductCard";
import { products } from "../../../lib/data";

export default function ProductsPage() {
    return (
        <div className="container py-12 md:py-16">
            <h1 className="text-4xl font-bold text-center mb-12">All Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* ... content is the same */}
            </div>
        </div>
    )
}