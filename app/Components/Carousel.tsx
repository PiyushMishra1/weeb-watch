"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import img from "../../public/Images/ac.png";
import im from "@/public/Images/me.png";

interface CarouselSlide {
  title: string;
  image: string;
}

const slides: CarouselSlide[] = [
  { title: "Hogwart Legacy", image: `${img.src}` },
  { title: "Assassin's Creed", image: `${im.src}` },
  // Add more slides as needed
];

export default function CarouselDemo() {
  console.log(img);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false, delay: 6000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className="relative overflow-hidden w-[40vw] h-full rounded-xl"
      ref={emblaRef}
    >
      <div className="flex ">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 ">
            <div className="relative w-full h-[34vw] my-[40px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="relative h-full w-full rounded-xl"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0F2B] to-transparent p-4">
                <h2 className="text-2xl font-bold text-white">{slide.title}</h2>
                <p>{slide.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
