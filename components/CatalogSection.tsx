"use client";

import { useState } from "react";
import Image from "next/image";
import { Reloj, RelojVariante } from "@/lib/supabase";
import { ChevronDown, ChevronUp, AlertCircle, ShoppingBag } from "lucide-react";

interface CatalogSectionProps {
  initialRelojes: Reloj[];
  onSelectReloj: (reloj: Reloj, variant: RelojVariante) => void;
  onAddToCart: (reloj: Reloj, variant: RelojVariante) => void;
}

export default function CatalogSection({
  initialRelojes,
  onSelectReloj,
}: CatalogSectionProps) {
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  
  // Initially show exactly 6 cards
  const INITIAL_VISIBLE_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Get active variant for a watch, default to first in-stock variant or first variant
  const getActiveVariant = (reloj: Reloj): RelojVariante | undefined => {
    if (!reloj.relojes_variantes || reloj.relojes_variantes.length === 0) {
      return undefined;
    }
    const selectedVariantId = selectedVariants[reloj.id];
    if (selectedVariantId) {
      const found = reloj.relojes_variantes.find((v) => v.id === selectedVariantId);
      if (found) return found;
    }
    const inStockVariant = reloj.relojes_variantes.find((v) => (v.stock || 0) > 0);
    return inStockVariant || reloj.relojes_variantes[0];
  };

  const handleVariantSelect = (relojId: string, variantId: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [relojId]: variantId,
    }));
  };

  const handleShowMore = () => {
    // Unfold all remaining models
    setVisibleCount(initialRelojes.length);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    const element = document.getElementById("colecciones");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayedRelojes = initialRelojes.slice(0, visibleCount);
  const hasMore = initialRelojes.length > visibleCount;
  const isExpanded = visibleCount > INITIAL_VISIBLE_COUNT && initialRelojes.length > INITIAL_VISIBLE_COUNT;

  return (
    <section id="colecciones" className="py-14 sm:py-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
          <span className="text-gold-gradient font-serif">NUESTRAS</span> COLECCIONES
        </h2>
        <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-3 sm:mb-4" />
        <p className="text-gray-400 text-xs sm:text-base font-light px-4">
          Explora nuestro catálogo en tiempo real. Selecciona tu modelo favorito y compra directamente.
        </p>
      </div>

      {/* Watches Grid: 2 columns on mobile, 3 on desktop */}
      {initialRelojes.length === 0 ? (
        <div className="text-center py-20 bg-[#0a0d0b] rounded-2xl border border-gray-800">
          <AlertCircle className="w-10 h-10 text-[#D4AF37]/60 mx-auto mb-3" />
          <h3 className="font-serif text-lg text-white font-bold">Catálogo actualizándose</h3>
          <p className="text-gray-400 text-xs mt-1">Pronto estarán disponibles nuevos modelos.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {displayedRelojes.map((reloj) => {
              const activeVariant = getActiveVariant(reloj);
              const price = activeVariant?.precio ? Number(activeVariant.precio).toFixed(2) : "0.00";
              const imageUrl = activeVariant?.foto_url || "/sample-watch.jpg";
              const isOutOfStock = (activeVariant?.stock || 0) <= 0;

              return (
                <div
                  key={reloj.id}
                  className="group relative bg-gradient-to-b from-[#0b100d] via-[#070a08] to-[#040605] rounded-2xl sm:rounded-3xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 p-2.5 sm:p-5 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.18)]"
                >
                  {/* Luxury Portrait Watch Showcase Container (4:5 vertical portrait) */}
                  <div
                    onClick={() => activeVariant && onSelectReloj(reloj, activeVariant)}
                    className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#131c16] via-[#090d0b] to-[#030504] border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all duration-500 p-2 sm:p-4 flex items-center justify-center cursor-pointer mb-2 sm:mb-4"
                  >
                    {/* Out of stock badge */}
                    {isOutOfStock && (
                      <div className="absolute top-2 left-2 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-red-950/85 border border-red-500/60 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        <span className="text-[9px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">
                          Agotado
                        </span>
                      </div>
                    )}

                    {/* Subtle Radial Glow Behind Watch */}
                    <div className="absolute inset-0 bg-radial-gradient from-[#0c3b2c]/20 via-transparent to-transparent opacity-80 pointer-events-none" />

                    <div className="relative w-full h-full">
                      <Image
                        src={imageUrl}
                        alt={reloj.modelo}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-700 ease-out ${
                          isOutOfStock ? "grayscale-[35%] opacity-85" : ""
                        }`}
                      />
                    </div>

                    {/* Subtle Glass Highlight on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Variants Selector - Touch friendly on mobile */}
                  {reloj.relojes_variantes && reloj.relojes_variantes.length > 1 && (
                    <div className="flex items-center gap-1 sm:gap-2 mb-2 overflow-x-auto py-1 scrollbar-none">
                      <span className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider font-semibold shrink-0">
                        Color:
                      </span>
                      {reloj.relojes_variantes.map((v) => {
                        const variantOut = (v.stock || 0) <= 0;
                        const isSelected = activeVariant?.id === v.id;
                        return (
                          <button
                            key={v.id}
                            onClick={() => handleVariantSelect(reloj.id, v.id)}
                            className={`text-[9px] sm:text-[11px] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg border transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                              isSelected
                                ? variantOut
                                  ? "border-red-500/80 bg-red-950/50 text-red-200 font-semibold shadow-sm"
                                  : "border-[#D4AF37] bg-[#D4AF37]/25 text-[#FFF1C5] font-semibold shadow-sm"
                                : variantOut
                                ? "border-gray-800/80 bg-black/60 text-gray-500 hover:border-gray-700"
                                : "border-gray-800/90 bg-black/60 text-gray-400 hover:border-gray-700"
                            }`}
                            title={variantOut ? `${v.color} (Agotado)` : v.color}
                          >
                            <span>{v.color}</span>
                            {variantOut && (
                              <span className="text-[7px] sm:text-[8px] text-red-400/90 uppercase font-semibold">
                                (Agotado)
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Watch Card Footer Info */}
                  <div className="pt-2 sm:pt-3 border-t border-gray-850">
                    <h3 className="font-serif font-bold text-xs sm:text-base lg:text-lg text-white uppercase tracking-wider group-hover:text-[#FFF1C5] transition-colors truncate">
                      {reloj.modelo}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mt-1.5 sm:mt-3">
                      <div>
                        <span className="text-[8px] sm:text-[10px] text-gray-400 block uppercase tracking-widest">
                          Precio
                        </span>
                        <p className="text-sm sm:text-2xl font-bold text-[#D4AF37] tracking-tight font-serif leading-tight">
                          ${price}{" "}
                          <span className="text-[9px] sm:text-xs text-gray-400 font-sans font-normal">USD</span>
                        </p>
                      </div>

                      {/* Buy / Sold Out Button */}
                      {isOutOfStock ? (
                        <button
                          onClick={() => activeVariant && onSelectReloj(reloj, activeVariant)}
                          className="w-full sm:w-auto px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 hover:bg-red-900/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>Agotado</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => activeVariant && onSelectReloj(reloj, activeVariant)}
                          className="w-full sm:w-auto px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89223] text-black text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#D4AF37]/20 flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Comprar</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination: Ver Más Button (after first 6 cards) */}
          <div className="mt-12 sm:mt-16 text-center">
            {hasMore ? (
              <button
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-9 py-3 sm:py-4 rounded-xl bg-[#090d0b] border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] text-[#FFF1C5] font-serif font-bold text-sm sm:text-base hover:bg-[#D4AF37]/10 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] cursor-pointer group"
              >
                <span>Ver Más Modelos ({initialRelojes.length - visibleCount} restantes)</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:translate-y-1 transition-transform" />
              </button>
            ) : isExpanded ? (
              <button
                onClick={handleShowLess}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-[#090d0b] border border-gray-700 hover:border-[#D4AF37]/50 text-gray-300 font-serif text-xs sm:text-sm transition-all cursor-pointer"
              >
                <span>Mostrar Menos</span>
                <ChevronUp className="w-4 h-4 text-[#D4AF37]" />
              </button>
            ) : null}
          </div>
        </>
      )}
    </section>
  );
}
