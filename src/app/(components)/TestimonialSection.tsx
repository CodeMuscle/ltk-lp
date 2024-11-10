import Image from "next/image";
import React from "react";

import priya from "../../../public/assets/priya.png";
import neha from "../../../public/assets/neha.png";
import vikram from "../../../public/assets/vikram.png";
import rahul from "../../../public/assets/rahul.png";
import milletDosa from "../../../public/assets/millet-dosa.png";
import asafoetida from "../../../public/assets/asafoetida.png";

const TestimonialSection = () => {
  return (
    <section className="xl:max-w-7xl max-w-[90%] my-16 mx-auto">
      <div className="flex flex-col gap-8 items-center">
        <h2 className="font-semibold text-black text-xl lg:text-4xl">
          Testimonials
        </h2>

        {/* Grid */}
        {/* Grid 1 */}
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="rounded-xl shadow-md p-4 flex flex-col items-start gap-6 lg:w-1/2">
            <div className="flex flex-col gap-3">
              <div className="text-yellow-400">★★★★</div>
              <p className="text-base font-normal text-black">
                LTK’s Millet Dosa Maavu has become a staple in my kitchen! It
                makes the fluffiest dosas with minimal effort. The Perungayam
                Thool is so pure and enhances the flavor of every dish. I love
                that these products are both healthy and high-quality!
              </p>
            </div>

            <div className="flex flex-row gap-3 items-center justify-center">
              <div className="icon">
                <Image
                  src={priya}
                  alt="Priya"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p className="text-lg font-medium text-black">Priya Sharma,</p>
                <p className="text-base font-normal text-gray-400">Chennai</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:w-1/2">
            <div className="">
              <Image
                src={milletDosa}
                alt="millet-dosa"
                className="rounded-xl"
                style={{ width: "100%" }}
              />
            </div>
            <div className="rounded-xl shadow-md p-4 flex flex-col items-start gap-6 lg:w-1/2">
              <div className="flex flex-col gap-3">
                <div className="text-yellow-400">★★★★</div>
                <p className="text-base font-normal text-black">
                  Healthy eating just got easier with LTK! Their Millet Dosa
                  Maavu makes delicious, crispy dosas
                </p>
              </div>

              <div className="flex flex-row gap-3 items-center justify-center">
                <div className="icon">
                  <Image
                    src={neha}
                    alt="Neha"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-lg font-medium text-black">Neha Patel,</p>
                  <p className="text-base font-normal text-gray-400">
                    Ahmedabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="flex lg:flex-row-reverse flex-col-reverse gap-4">
          <div className="rounded-xl shadow-md p-4 flex flex-col items-start gap-6 lg:w-1/2">
            <div className="flex flex-col gap-3">
              <div className="text-yellow-400">★★★★</div>
              <p className="text-base font-normal text-black">
                Making dosa has never been this easy! LTK’s Millet Dosa Maavu is
                convenient and tastes amazing. And their Perungayam Thool is a
                game-changer in my cooking—it’s aromatic and fresh, giving my
                dishes an authentic touch!
              </p>
            </div>

            <div className="flex flex-row gap-3 items-center justify-center">
              <div className="icon">
                <Image
                  src={vikram}
                  alt="Vikram"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p className="text-lg font-medium text-black">Vikram Jain,</p>
                <p className="text-base font-normal text-gray-400">Mumbai</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:w-1/2">
            <div className="">
              <Image
                src={asafoetida}
                alt="asafoetida"
                className="rounded-xl"
                style={{ width: "100%" }}
              />
            </div>
            <div className="rounded-xl shadow-md p-4 flex flex-col items-start gap-6 lg:w-1/2">
              <div className="flex flex-col gap-3">
                <div className="text-yellow-400">★★★★</div>
                <p className="text-base font-normal text-black">
                  I’ve been trying to include more millet in my diet, and LTK’s
                  Millet Dosa Maavu makes it easy and delicious.
                </p>
              </div>

              <div className="flex flex-row gap-3 items-center justify-center">
                <div className="icon">
                  <Image
                    src={rahul}
                    alt="Rahul"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-lg font-medium text-black">Rahul Menon,</p>
                  <p className="text-base font-normal text-gray-400">
                    Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
