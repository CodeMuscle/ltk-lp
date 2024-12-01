import { Data } from "@/types/types";
import { CarouselSize } from "./Carousel";

const ProductsSection = ({ title, data }: { title: string; data: Data[] }) => {
  return (
    <section className="xl:max-w-7xl max-w-[90%] my-16 mx-auto">
      <div className="flex flex-col gap-8 items-center">
        <h2 className="font-semibold text-black text-xl lg:text-4xl">
          {title}
        </h2>

        {/* Carousel */}
        <CarouselSize data={data} />
      </div>
    </section>
  );
};

export default ProductsSection;
