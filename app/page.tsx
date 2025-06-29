// app/page.tsx
import FadeIn from "../components/shared/FadeIn";
import Advantages from "../components/sections/Advantages";
import CustomerReviews from "../components/sections/CustomerReviews";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import HeroSection from "../components/sections/HeroSection";
import LegacySection from "../components/sections/LegacySection"; // <-- IMPORT IT

export default function HomePage() {
  return (
    <div>
      <FadeIn><HeroSection /></FadeIn>
      <FadeIn><FeaturedProducts /></FadeIn>
      <FadeIn><Advantages /></FadeIn>
      <FadeIn><CustomerReviews /></FadeIn>
      <FadeIn><LegacySection /></FadeIn> {/* <-- ADD IT HERE */}
    </div>
  );
}