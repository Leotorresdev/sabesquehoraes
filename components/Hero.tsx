"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-[#050706] py-3 sm:py-8 lg:py-10 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#0c4d38]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-black"
        >
          {/* Main User Background Image Container with Crisp Mobile Proportions */}
          <div className="relative w-full min-h-[300px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[440px] xl:min-h-[470px] flex items-center">
            <Image
              src="/hero-user-bg.jpg"
              alt="SabesQueHoraEs - Alta Relojería"
              fill
              priority
              className="object-cover object-[85%_center] md:object-center select-none"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Gradient Overlay strictly focused on the left for text contrast, leaving the watch 100% luminous & sharp */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent w-[70%] sm:w-full pointer-events-none" />

            {/* Professional Text & Button Overlay */}
            <div className="relative z-10 w-full max-w-[62%] sm:max-w-xl px-4 sm:px-10 md:px-12 lg:px-16 py-6 sm:py-10 space-y-2.5 sm:space-y-6">
              {/* Title with Metallic Gold Gradient and Drop Shadows */}
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                TIEMPO,{" "}
                <span className="text-gold-gradient font-serif italic font-normal inline-block drop-shadow-[0_4px_15px_rgba(212,175,55,0.45)]">
                  ARTE
                </span>
                <br />
                Y{" "}
                <span className="text-gold-gradient font-serif font-bold inline-block drop-shadow-[0_4px_15px_rgba(212,175,55,0.45)]">
                  PRESTIGIO
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-[11px] sm:text-base md:text-lg lg:text-xl text-gray-200 font-light tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] max-w-md">
                Descubre la excelencia{" "}
                <span className="text-[#D4AF37] font-normal underline decoration-[#D4AF37]/40 underline-offset-4">
                  en alta relojería
                </span>
              </p>

              {/* Professional Interactive CTA Button */}
              <div className="pt-1 sm:pt-2">
                <Link
                  href="#colecciones"
                  className="inline-flex items-center gap-1.5 sm:gap-3 px-4 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#0a2e22] via-[#0f4432] to-[#0a2e22] text-[#FFF1C5] hover:text-white border border-[#D4AF37]/60 font-serif font-semibold text-[10px] sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(10,46,34,0.9)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-[#D4AF37] transition-all transform hover:-translate-y-0.5 group cursor-pointer"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
