import HeroSection from "./(components)/HeroSection";
import FeatureStrip from "./(components)/FeatureStrip";
import NewsletterSection from "./(components)/NewsletterSection";
import BlogSection from "./(components)/BlogSection";
import EnquirySection from "./(components)/EnquirySection";
import ExploreCategories from "./(components)/ExploreCategories";

export default function Home() {
  return (
    <section className="w-full mx-auto">
      <HeroSection />
      <FeatureStrip />
      <ExploreCategories />
      <EnquirySection />
      <BlogSection />
      <NewsletterSection />
    </section>
  );
}
