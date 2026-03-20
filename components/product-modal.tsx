'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductModalProps {
  isOpen: boolean;
  product: {
    id: string;
    image: string;
    title: string;
    caption: string;
    price: string;
    description: string;
  } | null;
  onClose: () => void;
  onGetLink: (productId: string) => void;
}

export default function ProductModal({
  isOpen,
  product,
  onClose,
  onGetLink,
}: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-6 md:p-8">
            {/* Product Image */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8 bg-muted">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-2">
                  {product.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-4">{product.caption}</p>
                <p className="text-primary text-2xl font-semibold mb-4">{product.price}</p>
              </div>

              {/* Description */}
              <div className="prose prose-sm max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-6 border-t border-border">
                <button
                  onClick={() => onGetLink(product.id)}
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
                >
                  Get Link
                </button>
                <a
                  href="https://amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
