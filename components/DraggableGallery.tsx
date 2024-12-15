"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

interface DraggableGalleryProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const DraggableGallery: React.FC<DraggableGalleryProps> = ({
  beforeImage,
  afterImage,
  alt,
}) => {
  const [sliderValue, setSliderValue] = useState([50]);
  const [aspectRatio, setAspectRatio] = useState(16 / 9); // Default aspect ratio

  const handleImageLoad = (naturalWidth: number, naturalHeight: number) => {
    setAspectRatio(naturalWidth / naturalHeight);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div 
        className="relative overflow-hidden"
        style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
      >
        <Image
          src={beforeImage}
          alt={`Before ${alt}`}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
          onLoadingComplete={({ naturalWidth, naturalHeight }) => 
            handleImageLoad(naturalWidth, naturalHeight)
          }
        />
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
        >
          <Image
            src={afterImage}
            alt={`After ${alt}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderValue[0]}%` }}
        />
      </div>
      <Slider
        value={sliderValue}
        onValueChange={setSliderValue}
        max={100}
        step={1}
        className="mt-4"
      />
    </div>
  );
};

export default DraggableGallery;
