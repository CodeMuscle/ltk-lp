"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { bestSellers } from "../(data)/homepage";
import Image from "next/image";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 10000, // Adjust autoplay delay
        }),
      ]}
      className="w-full max-w-7xl"
    >
      <CarouselContent>
        {/* Mapping over the bestSellers array to create a carousel item for each product */}
        {bestSellers.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card key={item.id}>
                <CardContent className="flex flex-col gap-2 aspect-square items-center justify-center p-4 w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Image
                      className="self-center min-h-[20rem]"
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <p className="text-lg font-normal">{item.name}</p>
                      <p className="text-yellow-400 text-lg">
                        {item.discount}{" "}
                        <span className="text-gray-500 line-through">
                          {item.mrp}
                        </span>
                      </p>
                      <p className="px-4 py-2 bg-black rounded-full text-base font-normal text-white">
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <button className="rounded-full w-full py-2 bg-[#84160A] border border-[#84160A] text-white font-normal text-lg">
                      Buy Now
                    </button>
                    <button className="rounded-full w-full py-2 bg-white border border-[#000] text-black font-normal text-lg">
                      Buy Now
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Carousel navigation buttons */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
