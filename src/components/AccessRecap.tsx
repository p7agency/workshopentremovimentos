import { motion } from "motion/react";
import { Compass, Gift, Calendar, Video, ShieldAlert, CheckSquare } from "lucide-react";

export default function AccessRecap() {
  const inclusions = [
    {
      title: "Transmissão digital exclusiva ao vivo",
      descr: "Transmissão digital ao vivo em ambiente fechado, seguro, online e imersivo com as três especialistas."
    },
    {
      title: "Networking de altíssimo nível",
      descr: "Interações e trocas no ambiente fechado com outros diretores, líderes e fundadores de marcas de alto padrão."
    },
    {
      title: "Guia de Exercícios e Atividades Virtuais",
      descr: "Material didático digital impecável de uso individual, otimizado para preenchimento estético e estratégico."
    },
    {
      title: "Garantia de Segurança de 7 dias",
      descr: "Caso entenda que o conteúdo não condiz com sua atual ambição estratégica, faremos a devolução integral."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-offwhite text-brand-brown px-6 md:px-8 border-b border-brand-lightgray relative">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.25em] text-brand-terracotta uppercase block">
            RESUMO DA VISTA COMPLETA
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-brown font-light">
            Tudo o que você terá acesso
          </h2>
          <div className="w-16 h-[1px] bg-brand-terracotta mx-auto mt-4" />
        </motion.div>

        {/* Dynamic inclusions list without harsh borders */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f2efe9]/40 p-8 md:p-14 space-y-8 rounded-sm relative"
        >
          
          {/* Subtle details */}
          <div className="absolute top-4 right-4 text-xs sm:text-sm font-sans text-brand-greige uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-terracotta animate-pulse" />
            Pacote Exclusivo
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {inclusions.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start group hover:translate-x-1 transition-transform duration-300"
              >
                <span className="text-brand-terracotta font-sans text-sm leading-none shrink-0 select-none mt-1 group-hover:scale-125 transition-transform duration-300">
                  •
                </span>
                
                <div className="space-y-1.5">
                  <h3 className="font-sans font-bold text-brand-brown text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-[#5a4f44]/90 text-sm sm:text-base leading-relaxed">
                    {item.descr}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core reassurance tag */}
          <div className="border-t border-brand-greige/10 pt-8 text-center">
            <p className="font-serif italic text-base md:text-lg text-brand-terracotta font-light">
              "Um programa completo projetado para elevar os três pilares estratégicos de sua marca de luxo."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
