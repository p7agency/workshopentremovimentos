import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Settings, Users, Compass } from "lucide-react";

export default function Solutions() {
  const resolutions = [
    {
      num: "01",
      area: "Atendimento",
      problem: "O cliente é atendido mas não sente que foi cuidado.",
      solution: "O cliente sai satisfeito e volta porque se sentiu especial.",
      icon: Heart,
      stamp: "CONEXÃO EMOCIONAL",
      bgHighlight: "from-amber-500/10 to-transparent",
      iconColor: "text-amber-600"
    },
    {
      num: "02",
      area: "Gestão",
      problem: "A equipe entrega tarefas, mas não entrega a marca.",
      solution: "Uma equipe que age, fala e cuida como a marca que representa.",
      icon: Settings,
      stamp: "ALINHAMENTO DE VALOR",
      bgHighlight: "from-brand-terracotta/10 to-transparent",
      iconColor: "text-brand-terracotta"
    },
    {
      num: "03",
      area: "Liderança",
      problem: "A equipe trabalha, mas não sabe para onde está indo.",
      solution: "Clareza de direção e uma liderança que carrega a cultura da marca.",
      icon: Compass,
      stamp: "VISÃO E PROPÓSITO",
      bgHighlight: "from-orange-500/10 to-transparent",
      iconColor: "text-[#e29360]"
    }
  ];

  const alsoResolves = [
    "A forma como sua equipe atende e se relaciona com cada cliente de alto valor.",
    "A qualidade da liderança que você exerce todos os dias com elegância.",
    "O valor percebido da sua assinatura, permitindo correções de margem.",
    "A consistência inegável entre o discurso de marketing e a realidade da marca.",
    "A capacidade orgânica de fidelização de clientes qualificados."
  ];

  const targetAudience = [
    "Líderes e diretores em transição de papel estratégico",
    "Donos de negócio com equipes em expansão no alto padrão",
    "Profissionais que exigem alto refinamento de posicionamento"
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-brand-lightgray text-brand-brown px-6 md:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.25em] text-brand-terracotta uppercase block">
            RESULTADOS PRÁTICOS
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4.5xl md:text-5xl text-brand-brown font-light leading-snug">
            O que o workshop resolve
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#7c7165] font-light max-w-2xl mx-auto">
            A ponte definitiva entre os gargalos silenciosos da sua marca e as soluções de alto padrão.
          </p>
        </motion.div>

        {/* Highlight pillars - beautiful aesthetic grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resolutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-brand-offwhite border border-brand-greige/15 p-8 md:p-10 rounded-sm relative group hover:shadow-xl hover:border-brand-terracotta/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Decorative glow top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-terracotta/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-6">
                  {/* Header within card */}
                  <div className="flex items-center justify-between border-b border-brand-greige/10 pb-4">
                    <span className="font-sans text-xs tracking-widest text-[#a37c58] uppercase block font-bold">
                      {item.stamp}
                    </span>
                    <Icon className={`w-5 h-5 ${item.iconColor} shrink-0 animate-pulse`} />
                  </div>

                  {/* Title & tag */}
                  <div className="space-y-2">
                    <span className="font-serif italic text-4xl text-brand-terracotta/25 font-bold block">
                      {item.num}
                    </span>
                    <h3 className="font-serif text-2.5xl sm:text-3xl text-brand-brown font-light leading-tight">
                      {item.area}
                    </h3>
                  </div>

                  {/* Problem / Solution layout inside the card */}
                  <div className="space-y-5 pt-2">
                    <div className="space-y-2">
                      <span className="font-sans text-[11px] tracking-widest text-[#a37c58]/80 uppercase block font-bold leading-none">
                        PROBLEMA ATUAL:
                      </span>
                      <p className="font-sans font-light text-[#5a4f44] text-base leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="space-y-2 bg-brand-brown/5 p-4 rounded-xs border-l-[3px] border-brand-terracotta">
                      <span className="font-sans text-[11px] tracking-widest text-brand-terracotta uppercase block font-extrabold leading-none">
                        A SOLUÇÃO REAL:
                      </span>
                      <p className="font-sans font-semibold text-brand-brown text-base leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro badge */}
                <div className="mt-8 pt-4 border-t border-brand-greige/10 flex items-center justify-between text-xs font-sans text-brand-greige">
                  <span>METODOLOGIA ATIVA</span>
                  <ArrowRight className="w-4 h-4 text-brand-terracotta/40 group-hover:text-brand-terracotta group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Resolution and Target Audience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10">
          
          {/* Also Resolves */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 bg-brand-offwhite/50 p-8 md:p-10 rounded-sm"
          >
            <div className="space-y-3">
              <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.2em] text-brand-terracotta uppercase">
                COERÊNCIA & CLAREZA
              </span>
              <h3 className="font-serif text-2.5xl sm:text-3.5xl text-brand-brown font-light">
                O workshop também resolve:
              </h3>
            </div>

            <ul className="space-y-4">
              {alsoResolves.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#e29360] font-sans text-base shrink-0 select-none mt-1 font-bold">
                    •
                  </span>
                  <p className="font-sans font-light text-[#5a4f44] text-base sm:text-lg leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Para Quem é */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 bg-brand-brown text-brand-offwhite p-8 md:p-10 rounded-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.2em] text-[#e29360] uppercase">
                  PÚBLICO-ALVO EXCLUSIVO
                </span>
                <h3 className="font-serif text-2.5xl sm:text-3.5xl text-brand-offwhite font-light">
                  Para quem é esta experiência
                </h3>
              </div>

              <ul className="space-y-5">
                {targetAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[#e29360] font-sans text-base shrink-0 select-none mt-1 font-bold">
                      •
                    </span>
                    <p className="font-sans font-light text-[#eadfd4] text-base sm:text-lg leading-relaxed tracking-wide">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
