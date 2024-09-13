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
      className="w-full max-w-lg"
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
            <CarouselItem className="aspect-square">
              <Image
                className="w-full h-full rounded-md"
                objectFit="cover"
                src={require("@/public/Images/ac.png")}
                alt="no image"
              />
            </CarouselItem>
            <CarouselItem className="aspect-square">
              <Image
                className="w-full h-full rounded-md"
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
