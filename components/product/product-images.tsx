"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto">
        <Image
          src={currentImage}
          alt="current-image"
          width={270}
          height={270}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center gap-2 justify-center">
        {images.map((image, index) => (
          <div key={image}>
            <Image
              src={image}
              alt={`image-${index}`}
              width={100}
              height={100}
              className={cn("bg-cover rounded-md cursor-pointer", {
                "border-2 md:border-1 border-primary rounded-md":
                  image === currentImage,
              })}
              onClick={() => setCurrentImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
