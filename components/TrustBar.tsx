import { ShieldCheck, Truck, Headphones } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Garantía de Originalidad",
      desc: "Autenticidad y calidad 100% certificada",
    },
    {
      icon: Truck,
      title: "Envío Asegurado",
      desc: "Cobertura nacional con entrega protegida",
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      desc: "Asesoría personalizada por expertos",
    },
  ];

  return (
    <section className="relative z-20 -mt-4 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0b0f0d]/90 backdrop-blur-md rounded-2xl border border-[#D4AF37]/30 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/20">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index !== 0 ? "pt-4 md:pt-0 md:pl-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0d4a38]/40 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-base md:text-lg tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5 font-light">
                    {item.desc}
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
