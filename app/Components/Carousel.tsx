"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  return (
    <Carousel
      className="w-[60vw] hidden md:w-[30vw] md:h-[90%] md:flex lg:w-[87%] lg:h-full max-w-lg"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <>
            <CarouselItem className="aspect-square h-[490px]">
              <Image
                className="md:w-[30vw] md:h-[90%] lg:w-full lg:h-full rounded-md"
                objectFit="cover"
                src={require("@/public/Images/ac.png")}
                alt="no image"
              />
            </CarouselItem>
            <CarouselItem className="aspect-square  h-[490px]">
              <Image
                className="md:w-[30vw] md:h-[90%] lg:w-full lg:h-full rounded-md"
                objectFit="cover"
                src={require("@/public/Images/me.png")}
                alt="no image"
              />
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white-400 bg-transparent border-0" />
      <CarouselNext className="text-white-400 bg-transparent border-0" />
    </Carousel>
  );
}
