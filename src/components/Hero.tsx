import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Video, Compass, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <section className="relative bg-brand-brown text-brand-offwhite min-h-[95vh] lg:min-h-screen flex items-center pt-28 pb-20 px-6 md:px-8 overflow-hidden">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-brand-terracotta/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-brand-terracotta/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text & Action Panel Left */}
          <div className="lg:col-span-12 text-left space-y-8 flex flex-col justify-center max-w-4xl">
            
            {/* Elegant Header/Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 bg-brand-terracotta/20 border border-brand-terracotta/35 px-4 py-2 rounded-xs self-start"
            >
              <span className="w-2 h-2 rounded-full bg-brand-terracotta animate-ping shrink-0" />
              <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.2em] text-[#fbd7cd] uppercase">
                Entre Movimentos — A Gestão da Experiência do Cliente
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-3.5xl sm:text-4.5xl md:text-5xl lg:text-6xl font-light text-brand-offwhite leading-[1.15] tracking-tight max-w-2xl"
            >
              Alinhe a comunicação, gestão e atendimento para que sua marca seja escolhida pelo que representa, <span className="italic font-normal text-brand-terracotta">não pelo que custa</span>.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="font-serif italic text-base sm:text-lg md:text-xl text-[#cdbeaf] max-w-xl font-light leading-relaxed"
            >
              Uma imersão profunda com três especialistas do mercado de luxo para desenhar a coerência interna que multiplica o seu valor de mercado.
            </motion.p>

            {/* Seção de datas (nova, com as duas opções) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3 pt-6 border-t border-brand-greige/10 max-w-md"
            >
              <span className="font-sans text-xs sm:text-sm tracking-widest text-[#e29360] uppercase block font-bold">
                Escolha a data que melhor se encaixa na sua agenda:
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-brand-terracotta/30 bg-[#35281d]/50 p-4 rounded-xs">
                  <span className="font-sans font-bold text-[10px] text-brand-terracotta tracking-wider uppercase block mb-1">Opção 1</span>
                  <p className="font-serif text-base sm:text-lg text-brand-offwhite font-light">11 de agosto</p>
                </div>
                <div className="border border-brand-terracotta/30 bg-[#35281d]/50 p-4 rounded-xs">
                  <span className="font-sans font-bold text-[10px] text-brand-terracotta tracking-wider uppercase block mb-1">Opção 2</span>
                  <p className="font-serif text-base sm:text-lg text-brand-offwhite font-light">14 de agosto</p>
                </div>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-4"
            >
              <button
                onClick={onOpenCheckout}
                className="bg-brand-terracotta hover:bg-brand-offwhite text-brand-offwhite hover:text-brand-brown px-12 py-5 text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-brand-terracotta/25 border border-brand-terracotta flex items-center justify-center gap-3 cursor-pointer group"
              >
                QUERO MINHA VAGA
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Selos / Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-y-3 gap-x-6 text-[13px] sm:text-sm md:text-base font-sans text-brand-greige pt-6 w-full max-w-xl"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-terracotta shrink-0" />
                <span>Garantia De 07 Dias</span>
              </div>
              <span className="text-brand-greige/40">•</span>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-brand-terracotta shrink-0" />
                <span>Gravação Disponível Permanente</span>
              </div>
            </motion.div>
          </div>

        {/* Animated Micro-Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            <span className="font-sans text-[9px] tracking-[0.3em] text-[#cdbeaf]/60 uppercase mb-1">
              ROLE PARA EXPLORAR
            </span>
            <div className="w-[1.5px] h-8 bg-gradient-to-b from-brand-terracotta to-transparent" />
          </motion.div>
        </div>

        </div>
      </div>

      {/* Luxury vertical lines in margin */}
      <div className="absolute right-6 bottom-10 hidden lg:flex flex-col items-center gap-4 z-10">
        <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#cdbeaf]/50 [writing-mode:vertical-lr]">
          ESTRATÉGIA & IDENTIDADE
        </span>
        <div className="w-[1px] h-20 bg-brand-greige/15" />
      </div>
      <div className="absolute left-6 bottom-10 hidden lg:flex flex-col items-center gap-4 z-10">
        <div className="w-[1px] h-20 bg-brand-greige/15" />
        <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#cdbeaf]/50 [writing-mode:vertical-lr]">
          MERCADO DE ALTO PADRÃO
        </span>
      </div>
    </section>
  );
}
