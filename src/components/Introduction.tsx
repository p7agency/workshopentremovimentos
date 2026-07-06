import { motion } from "motion/react";
import { Quote, Sparkles } from "lucide-react";

export default function Introduction() {
  return (
    <section id="introducao" className="py-24 md:py-32 bg-brand-offwhite text-brand-brown px-6 md:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-64 h-64 bg-brand-lightgray/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text panel left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="w-12 h-[1px] bg-brand-terracotta animate-pulse" />
            <span className="font-sans font-semibold text-xs sm:text-sm tracking-[0.25em] text-brand-terracotta uppercase block">
              O DIFERENCIAL DO ALTO PADRÃO
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl text-brand-brown font-light leading-snug">
              No alto padrão, o que o mercado vê quando olha para sua marca responde por{" "}
              <strong className="font-medium text-brand-terracotta">80% da decisão de escolha.</strong>
            </h2>
            
            <p className="font-sans font-light text-[#5a4f44] text-base sm:text-lg md:text-xl leading-relaxed">
              O design intangível da sua comunicação, a consistência moral das suas ações internas e o esmero com que você lida com cada interação moldam de forma absoluta a perception de exclusividade e o valor real da sua assinatura.
            </p>
          </motion.div>

          {/* Elegant Display Highlight Card right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 bg-[#f0ede9] border border-brand-greige/15 p-8 md:p-12 relative flex flex-col justify-between min-h-[420px] shadow-sm rounded-sm"
          >
            <Quote className="w-10 h-10 text-brand-terracotta/20 absolute top-6 left-6" />
            
            <div className="mt-12 relative z-10 space-y-6">
              <span className="font-sans text-xs sm:text-sm uppercase tracking-widest text-[#7a6f65] block font-bold">
                PREMISSA DO MERCADO EXCLUSIVO
              </span>
              <p className="font-serif italic text-2xl md:text-3xl text-brand-terracotta font-light leading-snug">
                "Lidere com clareza absoluta. Valorize a cultura dos rituais diários. Aumente de forma definitiva o valor percebido de cada entrega."
              </p>
            </div>

            {/* Injected elegant subtle outline structure inside to make it visually more architectural */}
            <div className="border border-brand-greige/15 p-6 rounded-sm bg-brand-offwhite/40 space-y-3 mt-8">
              <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#a3988b] block font-bold">
                SINTONIA DOS TRÊS MOVIMENTOS
              </span>
              <p className="font-sans font-light text-sm sm:text-base text-[#5a4f44] leading-relaxed">
                A verdadeira harmonia só existe quando sua comunicação magnética se encontra com uma equipe perfeitamente polida e sintonizada.
              </p>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
