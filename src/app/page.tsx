import HeroSection from "./(components)/HeroSection";
import FeatureStrip from "./(components)/FeatureStrip";
import NewsletterSection from "./(components)/NewsletterSection";
import BlogSection from "./(components)/BlogSection";
import EnquirySection from "./(components)/EnquirySection";
import ExploreCategories from "./(components)/ExploreCategories";
import TestimonialSection from "./(components)/TestimonialSection";
import OurStory from "./(components)/OurStory";
import ProductsSection from "./(components)/ProductsSection";
import {
  asafoetidaProducts,
  bestSellers,
  milletProducts,
} from "./(data)/homepage";

export default function Home() {
  return (
    <section className="w-full mx-auto overflow-hidden">
      <HeroSection />
      <FeatureStrip />
      <ProductsSection data={bestSellers} title={"Best Sellers"} />
      <ProductsSection data={asafoetidaProducts} title={"Asafoetida"} />
      <ProductsSection data={milletProducts} title={"Ready Mix Powder"} />
      <ExploreCategories />
      <OurStory />
      <TestimonialSection />
      <EnquirySection />
      <BlogSection />
      <NewsletterSection />
    </section>
  );
}
