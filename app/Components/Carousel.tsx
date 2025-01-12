"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface CarouselSlide {
  title: string;
  description: string;
  image: string;
}

const slides: CarouselSlide[] = [
  { title: "Hogwart Legacy", description: "Experience the magic", image: "/Images/ac.png" },
  { title: "Assassin's Creed", description: "Dive into history", image: "/Images/me.png" },
  // Add more slides as needed
];

export default function CarouselDemo() {
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
    <div className="relative overflow-hidden w-[80%] mt-5 align-middle max-w-7xl mx-auto rounded-xl" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0">
            <div className="relative w-full h-[500px]">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0F2B] to-transparent p-4 md:p-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{slide.title}</h2>
                <p className="text-sm md:text-base text-white/80">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}