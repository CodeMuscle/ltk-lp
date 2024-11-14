import HeroSection from "./(components)/HeroSection";
import FeatureStrip from "./(components)/FeatureStrip";
import NewsletterSection from "./(components)/NewsletterSection";
import BlogSection from "./(components)/BlogSection";
import EnquirySection from "./(components)/EnquirySection";
import ExploreCategories from "./(components)/ExploreCategories";
import TestimonialSection from "./(components)/TestimonialSection";
import OurStory from "./(components)/OurStory";
import ProductsSection from "./(components)/ProductsSection";

export default function Home() {
  return (
    <section className="w-full mx-auto">
      <HeroSection />
      <FeatureStrip />
      <ProductsSection title={"Best Sellers"} />
      <ProductsSection title={"Asafoetida"} />
      <ProductsSection title={"Ready Mix Powder"} />
      <ExploreCategories />
      <OurStory />
      <TestimonialSection />
      <EnquirySection />
      <BlogSection />
      <NewsletterSection />
    </section>
  );
}
