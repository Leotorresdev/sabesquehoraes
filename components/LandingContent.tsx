"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CatalogSection from "@/components/CatalogSection";
import BrandEssence from "@/components/BrandEssence";
import QuickViewModal from "@/components/QuickViewModal";
import Footer from "@/components/Footer";
import { Reloj, RelojVariante } from "@/lib/supabase";

interface LandingContentProps {
  initialRelojes: Reloj[];
}

export default function LandingContent({ initialRelojes }: LandingContentProps) {
  const [selectedReloj, setSelectedReloj] = useState<Reloj | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<RelojVariante | null>(null);

  const handleOpenQuickView = (reloj: Reloj, variant: RelojVariante) => {
    setSelectedReloj(reloj);
    setSelectedVariant(variant);
  };

  const handleCloseQuickView = () => {
    setSelectedReloj(null);
    setSelectedVariant(null);
  };

  const handleAddToCart = (reloj: Reloj, variant: RelojVariante) => {
    // Direct purchase flow via WhatsApp with pre-filled message
    const price = variant?.precio ? Number(variant.precio).toFixed(2) : "0.00";
    const inStock = (variant?.stock || 0) > 0;
    const message = inStock
      ? encodeURIComponent(
          `Hola SabesQueHoraEs, deseo comprar el reloj *${reloj.modelo}* (Color: *${variant.color}*) por un valor de *$${price} USD*. ¿Tienen disponibilidad para coordinar el pago y envío?`
        )
      : encodeURIComponent(
          `Hola SabesQueHoraEs, veo que el reloj *${reloj.modelo}* (Color: *${variant.color}*) está agotado. ¿Tienen fecha estimada de reposición o disponibilidad de este modelo?`
        );
    window.open(`https://wa.me/584124389835?text=${message}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050706] text-white">
      {/* Navbar without search and cart icons */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <CatalogSection
          initialRelojes={initialRelojes}
          onSelectReloj={handleOpenQuickView}
          onAddToCart={handleAddToCart}
        />
        <BrandEssence />
      </main>

      {/* Quick Buy Modal for selected watch */}
      {selectedReloj && (
        <QuickViewModal
          key={selectedReloj.id}
          reloj={selectedReloj}
          initialVariant={selectedVariant}
          onClose={handleCloseQuickView}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
