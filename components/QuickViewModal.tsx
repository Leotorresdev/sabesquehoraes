"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Reloj, RelojVariante } from "@/lib/supabase";
import { X, MessageCircle, ShieldCheck, Truck } from "lucide-react";

interface QuickViewModalProps {
  reloj: Reloj | null;
  initialVariant: RelojVariante | null;
  onClose: () => void;
  onAddToCart?: (reloj: Reloj, variant: RelojVariante) => void;
}

export default function QuickViewModal({
  reloj,
  initialVariant,
  onClose,
}: QuickViewModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<RelojVariante | null>(
    () => initialVariant || (reloj?.relojes_variantes && reloj.relojes_variantes[0]) || null
  );

  // Lock body scroll while modal is open & handle Escape key
  useEffect(() => {
    if (!reloj) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [reloj, onClose]);

  if (!reloj) return null;

  const activeVariant =
    selectedVariant || (reloj.relojes_variantes && reloj.relojes_variantes[0]) || null;

  const price = activeVariant?.precio
    ? Number(activeVariant.precio).toFixed(2)
    : "0.00";
  const inStock = (activeVariant?.stock || 0) > 0;
  const imageUrl = activeVariant?.foto_url || "/hero-watch-seamless.jpg";

  const handleBuyWhatsApp = () => {
    if (!activeVariant) return;
    const message = inStock
      ? encodeURIComponent(
          `Hola SabesQueHoraEs, deseo comprar el reloj *${reloj.modelo}* (Color: *${activeVariant.color}*) por un valor de *$${price} USD*. ¿Tienen disponibilidad para coordinar el pago y envío?`
        )
      : encodeURIComponent(
          `Hola SabesQueHoraEs, veo que el reloj *${reloj.modelo}* (Color: *${activeVariant.color}*) está agotado. ¿Tienen fecha estimada de reposición o disponibilidad de este modelo?`
        );
    window.open(`https://wa.me/584124389835?text=${message}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl bg-[#090d0b] border border-[#D4AF37]/50 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[90dvh] sm:max-h-[88vh] flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 border border-gray-700/80 hover:border-[#D4AF37] flex items-center justify-center text-gray-300 hover:text-white transition-all z-30 cursor-pointer shadow-lg active:scale-95"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto overscroll-contain p-4 sm:p-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-center">
            {/* Watch Image */}
            <div className="relative h-56 sm:h-auto sm:aspect-[4/5] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#131c16] via-[#090d0b] to-[#030504] border border-[#D4AF37]/30 p-3 sm:p-4 flex items-center justify-center">
              {!inStock && (
                <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-red-950/90 border border-red-500/70 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-red-200 uppercase tracking-wider">
                    Agotado
                  </span>
                </div>
              )}
              <Image
                src={imageUrl}
                alt={reloj.modelo}
                fill
                className={`object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] ${
                  !inStock ? "grayscale-[35%] opacity-85" : ""
                }`}
              />
            </div>

            {/* Watch Details */}
            <div className="space-y-4 sm:space-y-5">
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#D4AF37] uppercase tracking-widest block mb-1">
                  Alta Relojería Certificada
                </span>
                <h2 className="font-serif text-xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                  {reloj.modelo}
                </h2>
              </div>

              {/* Price & Stock */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  ${price} <span className="text-xs sm:text-sm text-gray-400 font-normal">USD</span>
                </span>
                <span
                  className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider ${
                    inStock
                      ? "bg-[#062319] text-[#34D399] border border-[#059669]/40"
                      : "bg-red-950/80 text-red-300 border border-red-700/50"
                  }`}
                >
                  {inStock ? "Disponible" : "Agotado"}
                </span>
              </div>

              {/* Variant / Color Picker */}
              {reloj.relojes_variantes && reloj.relojes_variantes.length > 0 && (
                <div>
                  <label className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider block mb-2 font-medium">
                    Selecciona la variante:{" "}
                    <span className="text-white font-semibold">
                      {activeVariant?.color}
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {reloj.relojes_variantes.map((v) => {
                      const variantOut = (v.stock || 0) <= 0;
                      const isSelected = activeVariant?.id === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? variantOut
                                ? "border-red-500/80 bg-red-950/50 text-red-200 shadow-sm"
                                : "border-[#D4AF37] bg-[#D4AF37]/25 text-[#FFF1C5]"
                              : variantOut
                              ? "border-gray-800/80 bg-black/60 text-gray-500 hover:border-gray-700"
                              : "border-gray-800 bg-black/40 text-gray-400 hover:border-gray-700"
                          }`}
                        >
                          <span>{v.color}</span>
                          {variantOut && (
                            <span className="text-[9px] text-red-400 uppercase font-semibold">
                              (Agotado)
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Guarantees */}
              <div className="space-y-2 py-2.5 sm:py-3 border-y border-gray-800/80 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Garantía de originalidad con certificado digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Envío asegurado a todo el país</span>
                </div>
              </div>

              {/* Action: WhatsApp order */}
              <div className="pt-2 pb-2">
                <button
                  type="button"
                  onClick={handleBuyWhatsApp}
                  className={`w-full py-3.5 sm:py-4 px-4 rounded-xl font-serif font-bold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer ${
                    inStock
                      ? "bg-gradient-to-r from-[#E6C25B] via-[#D4AF37] to-[#B89223] text-black hover:brightness-110 active:scale-95 shadow-[#D4AF37]/25"
                      : "bg-gradient-to-r from-red-950 to-neutral-900 border border-red-700/60 text-red-200 hover:brightness-110 active:scale-95 shadow-red-950/40"
                  }`}
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>{inStock ? "Ordenar vía WhatsApp" : "Consultar Disponibilidad vía WhatsApp"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
