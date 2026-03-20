'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import ProductCard from '@/components/product-card';
import ProductModal from '@/components/product-modal';
import DMPopup from '@/components/dm-popup';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { products, type Product } from '@/lib/products';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showDMPopup, setShowDMPopup] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleGetLink = (productId: string) => {
    setShowDMPopup(true);
    // Simulate DM sending
    setTimeout(() => {
      setShowDMPopup(false);
    }, 4000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Product Grid */}
      <section id="shop" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              Shop Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our curated selection of elegant jewelry pieces
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                caption={product.caption}
                price={product.price}
                onViewDetails={() => handleViewDetails(product)}
                onGetLink={() => handleGetLink(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProductModal
        isOpen={showModal}
        product={selectedProduct}
        onClose={handleCloseModal}
        onGetLink={handleGetLink}
      />

      <DMPopup isOpen={showDMPopup} onClose={() => setShowDMPopup(false)} />
    </main>
  );
}
