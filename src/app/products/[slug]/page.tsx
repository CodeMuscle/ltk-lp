"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import nextIcon from "../../../../public/assets/next.svg";
import minusIcon from "../../../../public/assets/minus.svg";
import plusIcon from "../../../../public/assets/plus.svg";

import { products } from "../../(data)/products";
import ProductsSection from "@/app/(components)/ProductsSection";
import { bestSellers } from "@/app/(data)/homepage";

interface IProductPageProps {
  params: Promise<{ slug: string }>;
}

const ProductPage = ({ params }: IProductPageProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const [expandDescription, setExpandDescription] = useState(true);
  const [expandReview, setExpandReview] = useState(false);

  const { slug } = React.use(params);

  const product = products.find((prod) => prod.slug === slug);

  const [mainImage, setMainImage] = useState(product?.image_url || "");

  if (!product) {
    return (
      <div className="flex flex-col gap-8 lg:max-w-7xl max-w-[90%] items-center justify-center py-12">
        <p className="text-black font-2xl text-center">{`Product not found :(`}</p>
      </div>
    );
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleSizeChange = (index: number) => setSelectedSizeIndex(index);

  const priceMultiplier =
    selectedSizeIndex > 0 ? 1 + selectedSizeIndex * 0.25 : 1;
  const totalPrice = product.discount_price * priceMultiplier * quantity;

  const expandTab1 = () => {
    setExpandDescription(true);
    setExpandReview(false);
  };

  const expandTab2 = () => {
    setExpandDescription(false);
    setExpandReview(true);
  };

  return (
    <section className="mx-auto py-8 lg:max-w-7xl max-w-[90%] flex flex-col items-start gap-6">
      <div className="flex flex-row gap-4 justify-start">
        <Link href="/" className="font-normal text-base hover:underline">
          Home
        </Link>
        <Image src={nextIcon} alt="icon" width={8} height={8} />
        <Link
          href="/products"
          className="font-normal text-base hover:underline"
        >
          Products
        </Link>
        <Image src={nextIcon} alt="icon" width={8} height={8} />
        <p className="font-normal text-base">{product.name}</p>
      </div>

      <div className="w-full flex flex-col gap-12 justify-center items-center">
        {/* Product Section */}
        <div className="product-section w-full">
          <div className="flex lg:flex-row flex-col gap-12 items-start justify-between">
            {/* Image Section */}
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="image-section md:w-1/2 md:min-w-[500px] flex items-center justify-center">
                {/* Main Image */}
                <div className="fade-in min-h-[15rem] transition-all duration-500 ease-in-out">
                  {mainImage && (
                    <Image
                      src={mainImage}
                      alt={product.name}
                      height={1000}
                      width={1000}
                      style={{
                        width: "100%",
                        minWidth: "300px",
                        maxHeight: "400px",
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <button
                  className={`border shadow-md rounded-xl hover:border-gray-600 py-2 w-1/2 ${
                    mainImage === product.image_front
                      ? "border-[#84160A]"
                      : "border-gray-200"
                  }`}
                  onClick={() => setMainImage(product.image_front)}
                >
                  <Image
                    src={product.image_front}
                    alt={product.name}
                    height={200}
                    width={200}
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                </button>
                <button
                  className={`border shadow-md rounded-xl hover:border-gray-600 py-2 w-1/2 ${
                    mainImage === product.image_back
                      ? "border-[#84160A]"
                      : "border-gray-200"
                  }`}
                  onClick={() => setMainImage(product.image_back)}
                >
                  <Image
                    src={product.image_back}
                    alt={product.name}
                    height={200}
                    width={200}
                    style={{ width: "100%", maxWidth: "200px" }}
                  />
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="details-section flex flex-col gap-5 md:w-1/2">
              <h2 className="font-semibold text-lg lg:text-3xl text-black capitalize">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg lg:text-3xl text-black capitalize">
                  Rs. {totalPrice}.00
                </h3>
                <p className="font-normal text-lg text-gray-400">
                  Shipping is calculated at checkout.
                </p>
              </div>

              {/* Size */}
              <div className="flex flex-col gap-2">
                <p className="font-normal text-lg text-black">
                  Size:{" "}
                  <span className="text-gray-500">
                    {product.quantity[selectedSizeIndex]}gm
                  </span>
                </p>
                <div className="flex flex-row gap-2 items-center justify-start">
                  {product.quantity.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSizeChange(index)}
                      className={`rounded-full p-2 px-4 text-black font-normal text-lg border hover:border-black duration-200 transition-all w-fit ${
                        selectedSizeIndex === index
                          ? `border-black`
                          : `border-gray-200`
                      }`}
                    >
                      {item}gm
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-2 items-start justify-start">
                <p className="text-black font-normal text-lg">Quantity</p>

                <div className="rounded-full border border-gray-600 px-3 py-1 flex flex-row gap-5 items-center justify-center">
                  <button
                    onClick={decreaseQuantity}
                    className="text-black font-normal text-lg"
                  >
                    <Image
                      src={minusIcon}
                      alt={"minusIcon"}
                      width={15}
                      height={15}
                    />
                  </button>
                  <p className="text-black font-normal text-xl">{quantity}</p>
                  <button
                    onClick={increaseQuantity}
                    className="text-black font-normal text-lg"
                  >
                    <Image
                      src={plusIcon}
                      alt={"plusIcon"}
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>

              {/* Buy Now Button */}
              <div className="flex flex-col gap-2 items-center justify-center w-full mt-5">
                <Link
                  href={`/bulk-orders`}
                  className="rounded-full w-full py-2 bg-[#84160A] border border-[#84160A] text-white font-normal text-lg text-center"
                >
                  Bulk Order
                </Link>
                {/* <Link
                  href={`/bulk-orders`}
                  className="rounded-full w-full py-2 bg-white border border-[#000] text-black font-normal text-lg text-center"
                >
                  Add To Cart
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Description & Reviews */}
        <div className="max-w-3xl my-12 flex flex-col gap-6 items-start justify-center">
          <div className="max-w-3xl mx-auto flex flex-row justify-center">
            <button
              onClick={expandTab1}
              className={`w-1/2 flex items-center justify-center border-b-[2px] hover:border-black transition-all duration-300 py-3 pr-52 pl-60 ${
                expandDescription ? "border-black" : "border-gray-300"
              }`}
            >
              <p
                className={`font-semibold text-2xl ${
                  expandDescription ? "text-black" : "text-gray-500"
                }`}
              >
                Description
              </p>
            </button>
            <button
              onClick={expandTab2}
              className={`w-1/2 flex items-center justify-center border-b-[2px] hover:border-black transition-all duration-300 py-3 pl-52 pr-60 ${
                expandReview ? "border-black" : "border-gray-300"
              }`}
            >
              <p
                className={`font-semibold text-2xl ${
                  expandReview ? "text-black" : "text-gray-500"
                }`}
              >
                Reviews
              </p>
            </button>
          </div>
          <div className="max-w-3xl flex justify-center items-center">
            <div
              className={`description-tab ${
                expandDescription ? `block` : `hidden`
              }`}
            >
              <ReactMarkdown
                className={`max-w-3xl mx-auto text-lg font-normal text-gray-600`}
              >
                {product.description}
              </ReactMarkdown>
            </div>

            <div
              className={`review-tab ${
                expandReview ? `flex flex-col gap-4` : `hidden`
              }`}
            >
              {product.reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col gap-1 items-start justify-start"
                >
                  <p className="text-lg font-medium text-gray-800 italic">
                    {review.name}:
                  </p>
                  <p className="text-base font-normal text-gray-600">
                    {review.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ProductsSection data={bestSellers} title={"Related Products"} />
      </div>
    </section>
  );
};

export default ProductPage;
