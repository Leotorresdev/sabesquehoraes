"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-[#050706] py-3 sm:py-6 lg:py-8 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#0c4d38]/20 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_25px_65px_rgba(0,0,0,0.95)] bg-black"
        >
          {/* Main Hero Background Image Container with Grand, Imposing Proportions */}
          <div className="relative w-full min-h-[430px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex items-center">
            {/* Background Image */}
            <Image
              src="/hero-user-bg.jpg"
              alt="SabesQueHoraEs - Alta Relojería"
              fill
              priority
              className="object-cover object-[82%_center] sm:object-[80%_center] md:object-center select-none"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Subtle radial glow focused behind the watch on the right */}
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-[#0c4d38]/25 rounded-full blur-[110px] pointer-events-none" />

            {/* Left side gradient to guarantee maximum text contrast while keeping watch 100% luminous */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 via-45% to-transparent w-[80%] sm:w-[65%] md:w-[60%] pointer-events-none" />

            {/* Top and bottom vignettes for seamless integration */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

            {/* Professional Text & Button Content */}
            <div className="relative z-10 w-full max-w-[65%] sm:max-w-xl px-4 sm:px-10 md:px-12 lg:px-16 py-8 sm:py-12 space-y-3 sm:space-y-6">
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 rounded-full bg-[#062319]/85 border border-[#D4AF37]/45 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-sm">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" />
                <span className="text-[9px] sm:text-xs font-semibold tracking-widest uppercase">
                  Colección Exclusiva
                </span>
              </div>

              {/* Title with Metallic Gold Gradient and Drop Shadows */}
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
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
              <p className="text-[11px] sm:text-base md:text-lg text-gray-200 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-sm sm:max-w-md leading-relaxed">
                Descubre la excelencia{" "}
                <span className="text-[#D4AF37] font-normal underline decoration-[#D4AF37]/40 underline-offset-4">
                  en alta relojería
                </span>{" "}
                con piezas únicas de precisión y diseño atemporal.
              </p>

              {/* Professional Interactive CTA Button */}
              <div className="pt-1 sm:pt-3">
                <Link
                  href="#colecciones"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#0a2e22] via-[#0f4432] to-[#0a2e22] hover:from-[#0f4432] hover:to-[#0a2e22] text-[#FFF1C5] hover:text-white border border-[#D4AF37]/65 hover:border-[#D4AF37] font-serif font-semibold text-[11px] sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(10,46,34,0.9)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 group cursor-pointer"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
