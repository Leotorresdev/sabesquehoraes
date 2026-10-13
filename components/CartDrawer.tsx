"use client";

import Image from "next/image";
import { Reloj, RelojVariante } from "@/lib/supabase";
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag } from "lucide-react";

export interface CartItem {
  reloj: Reloj;
  variant: RelojVariante;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (variantId: string, delta: number) => void;
  onRemoveItem: (variantId: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + (item.variant.precio || 0) * item.quantity,
    0
  );

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;
    
    let message = "Hola SabesQueHoraEs, deseo realizar un pedido con los siguientes relojes de mi carrito:\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.reloj.modelo}* (Variante: ${item.variant.color})\n`;
      message += `   - Cantidad: ${item.quantity}\n`;
      message += `   - Subtotal: $${(item.variant.precio * item.quantity).toFixed(2)} USD\n\n`;
    });
    message += `*TOTAL A PAGAR: $${total.toFixed(2)} USD*\n`;
    message += "Por favor, indíquenme los métodos de pago y datos de envío disponibles.";

    window.open(`https://wa.me/584120000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#090d0b] border-l border-[#D4AF37]/40 h-full flex flex-col p-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="font-serif text-xl font-bold text-white tracking-wide">
              Tu Carrito ({items.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#D4AF37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#D4AF37]/40" />
              <p className="text-sm font-light">Tu carrito está actualmente vacío.</p>
              <button
                onClick={onClose}
                className="mt-2 text-xs font-semibold text-[#D4AF37] hover:underline uppercase tracking-wider"
              >
                Explorar Colecciones
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.variant.id}
                className="flex items-center gap-4 bg-[#0e1411] p-3.5 rounded-2xl border border-gray-800"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-black/60 shrink-0 border border-gray-800">
                  <Image
                    src={item.variant.foto_url || "/hero-watch.jpg"}
                    alt={item.reloj.modelo}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-white text-sm font-semibold truncate font-serif">
                    {item.reloj.modelo}
                  </h4>
                  <p className="text-xs text-[#D4AF37] font-medium">
                    ${Number(item.variant.precio).toFixed(2)} USD
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Color: {item.variant.color}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden bg-black/40">
                      <button
                        onClick={() => onUpdateQuantity(item.variant.id, -1)}
                        className="p-1 hover:bg-gray-800 text-gray-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.variant.id, 1)}
                        className="p-1 hover:bg-gray-800 text-gray-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.variant.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors ml-auto p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-gray-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Total estimado:</span>
              <span className="text-2xl font-bold text-[#D4AF37] font-serif">
                ${total.toFixed(2)} USD
              </span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89223] text-black font-serif font-bold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/20"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              <span>Finalizar Pedido en WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
