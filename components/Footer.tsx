"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Truck } from "lucide-react";

export default function Footer() {
  const handleWhatsAppAsesoria = () => {
    const text = encodeURIComponent(
      "Hola SabesQueHoraEs, deseo recibir asesoría personalizada para elegir un reloj de su catálogo."
    );
    window.open(`https://wa.me/584120000000?text=${text}`, "_blank");
  };

  const handleWhatsAppEnvios = () => {
    const text = encodeURIComponent(
      "Hola SabesQueHoraEs, deseo consultar la cobertura y métodos de envío nacional para la entrega de mi reloj."
    );
    window.open(`https://wa.me/584120000000?text=${text}`, "_blank");
  };

  return (
    <footer id="contacto" className="bg-[#040605] border-t border-[#D4AF37]/30 pt-14 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-gray-850">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-md">
                <Image
                  src="/logo.jpg"
                  alt="SabesQueHoraEs Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  Sabes<span className="text-[#D4AF37]">Que</span>HoraEs
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]/80 -mt-1 font-sans">
                  Tienda de Relojes
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              Tu tienda especializada en piezas de relojería de alta presencia y prestigio. Catálogo exclusivo con atención directa y compra garantizada.
            </p>
          </div>

          {/* Enlaces Útiles */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wider uppercase">
              Enlaces útiles
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#inicio" className="hover:text-[#D4AF37] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#colecciones" className="hover:text-[#D4AF37] transition-colors">
                  Colecciones
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="hover:text-[#D4AF37] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Atención y Envíos (Integración Creativa a WhatsApp) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wider uppercase">
              Atención Directa
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={handleWhatsAppAsesoria}
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors text-left cursor-pointer group"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Asesoría en WhatsApp</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppEnvios}
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors text-left cursor-pointer group"
                >
                  <Truck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Envíos Nacionales</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Redes Sociales (Instagram & TikTok) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wider uppercase">
              Redes Sociales
            </h4>
            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de SabesQueHoraEs"
                className="w-10 h-10 rounded-xl bg-[#090d0b] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok de SabesQueHoraEs"
                className="w-10 h-10 rounded-xl bg-[#090d0b] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.31.88.16 1.8-.02 2.52-.55.75-.53 1.2-1.4 1.25-2.31.06-3.82.02-7.64.04-11.46.01-2.28-.01-4.56.02-6.84z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} SabesQueHoraEs. Todos los derechos reservados.</p>
          <p>Tienda oficial especializada en alta relojería.</p>
        </div>
      </div>
    </footer>
  );
}
