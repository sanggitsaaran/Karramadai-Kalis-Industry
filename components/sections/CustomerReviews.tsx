// components/sections/CustomerReviews.tsx
import { Card, CardContent } from "../ui/card";
import { reviews } from "../../lib/data";

export default function CustomerReviews() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
             <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">
                    What Our Customers Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card key={index}>
                            <CardContent className="pt-6">
                                <p className="italic">"{review.comment}"</p>
                                <p className="font-bold text-right mt-4">- {review.name}</p>
                                <p className="text-sm text-gray-500 text-right">{review.location}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}