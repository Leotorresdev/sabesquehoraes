"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050706]/95 backdrop-blur-md border-b border-[#D4AF37]/25 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:border-[#D4AF37] transition-colors">
            <Image
              src="/logo.jpg"
              alt="SabesQueHoraEs Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-wide text-white font-bold group-hover:text-[#FFF1C5] transition-colors">
              Sabes<span className="text-[#D4AF37]">Que</span>HoraEs
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]/80 -mt-1 font-sans">
              Tienda de Relojes
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#inicio"
            className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#colecciones"
            className="text-sm font-medium text-[#D4AF37] hover:text-[#FFF1C5] transition-colors font-semibold"
          >
            Colecciones
          </Link>
          <Link
            href="#sobre-nosotros"
            className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-[#D4AF37] p-1 cursor-pointer"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d0b] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4">
          <Link
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-gray-200 hover:text-[#D4AF37]"
          >
            Inicio
          </Link>
          <Link
            href="#colecciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-[#D4AF37] font-semibold"
          >
            Colecciones
          </Link>
          <Link
            href="#sobre-nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-gray-200 hover:text-[#D4AF37]"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-gray-200 hover:text-[#D4AF37]"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
