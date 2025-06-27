// app/page.tsx
import FadeIn from "../components/shared/FadeIn"; // <-- IMPORT IT
import Advantages from "../components/sections/Advantages";
import CustomerReviews from "../components/sections/CustomerReviews";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import HeroSection from "../components/sections/HeroSection";

export default function HomePage() {
  return (
    <div>
      {/* Each section is now wrapped in our animation component */}
      <FadeIn>
        <HeroSection />
      </FadeIn>
      <FadeIn>
        <FeaturedProducts />
      </FadeIn>
      <FadeIn>
        <Advantages />
      </FadeIn>
      <FadeIn>
        <CustomerReviews />
      </FadeIn>
    </div>
  );
}