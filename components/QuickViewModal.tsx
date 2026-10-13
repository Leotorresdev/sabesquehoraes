"use client";

import { useState } from "react";
import Image from "next/image";
import { Reloj, RelojVariante } from "@/lib/supabase";
import { X, Check, ShoppingBag, MessageCircle, ShieldCheck, Truck } from "lucide-react";

interface QuickViewModalProps {
  reloj: Reloj | null;
  initialVariant: RelojVariante | null;
  onClose: () => void;
  onAddToCart: (reloj: Reloj, variant: RelojVariante) => void;
}

export default function QuickViewModal({
  reloj,
  initialVariant,
  onClose,
  onAddToCart,
}: QuickViewModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<RelojVariante | null>(
    initialVariant
  );
  const [added, setAdded] = useState(false);

  if (!reloj) return null;

  const activeVariant =
    selectedVariant || (reloj.relojes_variantes && reloj.relojes_variantes[0]);

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

  const handleAdd = () => {
    if (!activeVariant || !inStock) return;
    onAddToCart(reloj, activeVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#090d0b] border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#D4AF37] transition-colors z-20 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Watch Image */}
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#131c16] via-[#090d0b] to-[#030504] border border-[#D4AF37]/30 p-4 flex items-center justify-center">
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
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-widest block mb-1">
                Alta Relojería Certificada
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                {reloj.modelo}
              </h2>
            </div>

            {/* Price & Stock */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#D4AF37]">
                ${price} <span className="text-sm text-gray-400 font-normal">USD</span>
              </span>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider ${
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
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-2 font-medium">
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
            <div className="space-y-2 py-3 border-y border-gray-800/80 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Garantía de originalidad con certificado digital</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>Envío asegurado a todo el país</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-1">
              <button
                onClick={handleBuyWhatsApp}
                className={`w-full py-3.5 rounded-xl font-serif font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
                  inStock
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#B89223] text-black hover:brightness-110 active:scale-95 shadow-[#D4AF37]/20"
                    : "bg-gradient-to-r from-red-950 to-neutral-900 border border-red-700/60 text-red-200 hover:brightness-110 active:scale-95 shadow-red-950/40"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>{inStock ? "Ordenar vía WhatsApp" : "Consultar Disponibilidad vía WhatsApp"}</span>
              </button>

              <button
                onClick={handleAdd}
                disabled={!inStock}
                className={`w-full py-3 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  inStock
                    ? "bg-[#0e1411] border-gray-700 hover:border-[#D4AF37]/60 text-gray-200 cursor-pointer"
                    : "bg-black/40 border-gray-850 text-gray-600 cursor-not-allowed"
                }`}
              >
                {inStock ? (
                  added ? (
                    <>
                      <Check className="w-4 h-4 text-[#10B981]" />
                      <span className="text-[#10B981]">¡Añadido al Carrito!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-gray-300" />
                      <span>Añadir al Carrito</span>
                    </>
                  )
                ) : (
                  <span>Modelo Agotado</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
