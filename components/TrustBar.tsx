import { ShieldCheck, Truck, Headphones } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Garantía Original",
      fullTitle: "Garantía de Originalidad",
      desc: "100% Certificada",
      fullDesc: "Autenticidad 100% certificada",
    },
    {
      icon: Truck,
      title: "Envío Asegurado",
      fullTitle: "Envío Asegurado",
      desc: "Cobertura Nacional",
      fullDesc: "Entrega protegida a todo el país",
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      fullTitle: "Soporte 24/7",
      desc: "Asesoría Experta",
      fullDesc: "Asesoría personalizada VIP",
    },
  ];

  return (
    <section className="relative z-20 mt-3 sm:mt-5 mb-8 sm:mb-14 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-[#090d0b]/95 via-[#0b130f]/95 to-[#090d0b]/95 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#D4AF37]/30 py-2.5 sm:py-4 px-2 sm:px-6 shadow-[0_8px_25px_rgba(0,0,0,0.7)]">
        <div className="grid grid-cols-3 divide-x divide-[#D4AF37]/20 items-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 px-1 sm:px-4 text-center sm:text-left"
              >
                {/* Compact Luxury Icon Badge */}
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0c3b2c]/40 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.12)]">
                  <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#D4AF37]" />
                </div>

                {/* Compact Text Content */}
                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-white text-[9px] sm:text-xs md:text-sm tracking-wide leading-tight truncate sm:whitespace-normal">
                    <span className="sm:hidden">{item.title}</span>
                    <span className="hidden sm:inline">{item.fullTitle}</span>
                  </h3>
                  <p className="text-[7.5px] sm:text-[11px] text-gray-400 font-light mt-0.5 leading-tight truncate sm:whitespace-normal">
                    <span className="sm:hidden">{item.desc}</span>
                    <span className="hidden sm:inline">{item.fullDesc}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
