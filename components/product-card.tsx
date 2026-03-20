'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  caption: string;
  price: string;
  onGetLink: () => void;
  onViewDetails: () => void;
}

export default function ProductCard({
  image,
  title,
  caption,
  price,
  onGetLink,
  onViewDetails,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div
        className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-muted transition-all duration-300"
        onClick={onViewDetails}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 flex items-end p-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails();
              }}
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View Details
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div onClick={onViewDetails} className="cursor-pointer">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2 text-balance">
          {caption}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold">{price}</span>
        </div>
      </div>

      {/* Get Link Button */}
      <button
        onClick={onGetLink}
        className="w-full mt-3 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
      >
        Get Link
      </button>
    </div>
  );
}
