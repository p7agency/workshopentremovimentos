import { motion } from "motion/react";
import { Check, ShieldCheck, Sparkles, Trophy, Video } from "lucide-react";

interface OfferCtaProps {
  onOpenCheckout: () => void;
}

export default function OfferCta({ onOpenCheckout }: OfferCtaProps) {
  const assetsIncluded = [
    "Acesso Completo aos 03 Blocos Práticos da Imersão On-line",
    "Workshop Gravado (Bônus)",
    "Duas turmas disponíveis (11 ou 14 de agosto) — após a compra, nosso time entra em contato para confirmar a sua data preferida",
    "Garantia incondicional de reembolso total de 07 dias"
  ];

  return (
    <section id="offer" className="relative bg-[#291e14] text-brand-offwhite py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-terracotta/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-terracotta/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-24">
        
        {/* Header content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-terracotta/20 border border-brand-terracotta/30 px-3.5 py-1.5 rounded-xs">
            <Sparkles className="w-4 h-4 text-brand-terracotta animate-pulse" />
            <span className="font-sans font-semibold text-xs sm:text-sm tracking-[0.25em] text-[#fbd7cd] uppercase">
              CONVITE EXCLUSIVO • VAGAS LIMITADAS
            </span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-4xl md:text-5.5xl font-light leading-tight tracking-tight text-brand-offwhite">
            Eleve o Padrão da sua Marca e Liderança
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#cdbeaf] max-w-xl mx-auto">
            A oportunidade definitiva de redesenhar a coerência interna que separa as marcas comuns do verdadeiro alto padrão.
          </p>
        </motion.div>

        {/* Persuative Offer Card (Ticket style) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#35281d]/80 border border-brand-greige/10 p-6 sm:p-8 md:p-12 lg:p-14 rounded-sm shadow-2xl relative"
        >
          
          {/* Subtle elegant border line */}
          <div className="absolute -inset-[1.5px] border border-brand-terracotta/20 rounded-sm pointer-events-none" />

          {/* Left Panel: Deliverables Checklist */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            <div className="space-y-2">
              <span className="font-sans text-xs sm:text-sm tracking-widest text-[#fbd7cd] font-bold uppercase block">O QUE ESTÁ INCLUSO:</span>
              <h3 className="font-serif text-2.5xl sm:text-3xl font-light text-brand-offwhite">Acesso Completo</h3>
            </div>

            <ul className="space-y-4">
              {assetsIncluded.map((item, index) => (
                <li key={index} className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-brand-terracotta/10 border border-brand-terracotta/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#fbd7cd] shrink-0" />
                  </div>
                  <span className="font-sans font-light text-base text-brand-offwhite/90 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex items-center gap-3 text-brand-greige text-xs sm:text-sm font-sans">
              <Trophy className="w-4 h-4 text-brand-terracotta shrink-0 font-light" />
              <span>Sua vaga protegida por uma garantia incondicional de 7 dias.</span>
            </div>
          </div>

          {/* Right Panel: Value box & CTA */}
          <div className="lg:col-span-5 bg-brand-brown/40 border border-brand-greige/5 p-8 rounded-sm flex flex-col justify-between items-center text-center space-y-8 self-center w-full relative">
            <div className="w-full space-y-4">
              <span className="font-sans text-xs sm:text-sm tracking-widest text-brand-terracotta uppercase block font-bold">CONDIÇÃO DE INSCRIÇÃO</span>
              
              <div className="inline-block relative">
                <span className="text-base font-sans text-[#7c6f62] line-through block tracking-wider">
                  Valor Original: R$ 997,00
                </span>
                <span className="absolute bottom-[48%] left-0 right-0 h-[1.5px] bg-brand-terracotta/80 rotate-3" />
              </div>

              <div className="space-y-1.5 py-4 bg-brand-brown/30 border-y border-brand-greige/10">
                <span className="font-sans text-sm font-light text-brand-offwhite/70 block">
                  Por apenas:
                </span>
                <div className="font-serif text-4xl sm:text-5xl md:text-5.5xl font-light text-brand-offwhite tracking-tight leading-none py-1">
                  12x <span className="text-brand-terracotta">R$ 41,37</span>
                </div>
                <span className="font-sans text-sm sm:text-base font-medium uppercase tracking-widest text-brand-offwhite block">
                  ou R$ 400,00 à vista
                </span>
                <span className="font-sans text-xs tracking-wider text-[#e29360] uppercase font-bold block pt-1.5">
                  Incluso: workshop gravado (bônus)
                </span>
              </div>
            </div>

            {/* Direct persuasive features */}
            <div className="w-full space-y-4 pt-1">
              <button
                onClick={onOpenCheckout}
                className="w-full bg-[#cc6b49] hover:bg-brand-offwhite text-brand-offwhite hover:text-[#291e14] transition-all duration-300 py-4.5 text-xs font-sans font-semibold uppercase tracking-[0.22em] rounded-xs shadow-xl cursor-pointer group flex items-center justify-center gap-2"
              >
                QUERO ME INSCREVER AGORA
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-brand-greige font-sans uppercase tracking-[0.16em] font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-terracotta shrink-0" />
                <span>Transação 100% Segura & Criptografada</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Closing Phrase Banner - Emotional & Professional impact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto pt-16 border-t border-brand-greige/10 text-center space-y-6"
        >
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#dfd6cd] font-light leading-snug">
            "Gente perdida não constrói. Sobrevive. Assuma a direção da sua equipe e da sua marca."
          </p>
          <span className="font-sans text-xs tracking-[0.25em] text-[#e29360] uppercase block">
            — ENTRE MOVIMENTOS
          </span>
        </motion.div>

      </div>
    </section>
  );
}
