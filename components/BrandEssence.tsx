"use client";

import Image from "next/image";
import { Sparkles, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandEssence() {
  return (
    <section id="sobre-nosotros" className="relative py-10 sm:py-24 bg-[#050706] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-[0_25px_60px_rgba(0,0,0,0.95)] bg-black"
        >
          {/* Panoramic Banner Container (1024 x 434) with Mobile Crisp Proportions */}
          <div className="relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] xl:min-h-[520px] flex items-center">
            <Image
              src="/sobre-nosotros-banner.jpg"
              alt="Sobre Nosotros - SabesQueHoraEs Alta Relojería"
              fill
              className="object-cover object-[85%_center] md:object-center select-none"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Dark Scrim Overlay strictly covering the left for text readability, keeping the two-tone watch 100% bright & sharp */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent w-[70%] sm:w-full pointer-events-none" />

            {/* Professional Text Content Layer */}
            <div className="relative z-10 w-full max-w-[62%] sm:max-w-xl px-4 sm:px-10 md:px-12 lg:px-16 py-6 sm:py-12 space-y-2.5 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0d4a38]/50 border border-[#D4AF37]/40 text-[#FFF1C5] text-[9px] sm:text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
                Tradición & Pasión
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                Nuestra{" "}
                <span className="text-gold-gradient font-serif">
                  Esencia
                </span>
              </h2>

              {/* Body Description */}
              <p className="text-[11px] sm:text-base md:text-lg text-gray-200 font-light leading-snug sm:leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                En <strong className="text-white font-medium">SabesQueHoraEs</strong> seleccionamos piezas que trascienden el tiempo: relojes que fusionan la precisión de la ingeniería mecánica con una presencia estética inigualable.
              </p>

              <p className="hidden sm:block text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Un reloj no solo mide las horas: define tu carácter, proyecta tu visión y te acompaña en cada meta alcanzada.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-1 sm:pt-3 border-t border-gray-800/80">
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0d4a38]/40 border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
                    <Shield className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[10px] sm:text-sm font-semibold">100% Auténticos</h4>
                    <p className="text-gray-400 text-[9px] sm:text-[11px]">Calidad garantizada.</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0d4a38]/40 border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white text-[10px] sm:text-sm font-semibold">Entrega Inmediata</h4>
                    <p className="text-gray-400 text-[9px] sm:text-[11px]">Stock disponible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
