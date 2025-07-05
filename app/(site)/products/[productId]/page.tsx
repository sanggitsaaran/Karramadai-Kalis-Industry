// app/(site)/products/[productId]/page.tsx

import { notFound } from "next/navigation";
import { products } from "../../../../lib/data";
import ProductClientPage from "../[productId]/ProductCLientPage";

// The 'async' keyword makes this component future-proof and production-ready.
export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16">
      <ProductClientPage product={product} />
    </div>
  );
}