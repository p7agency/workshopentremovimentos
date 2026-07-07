import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual é a forma de pagamento?",
      a: "Você pode realizar o seu pagamento à vista via Pix (R$ 400,00) ou parcelar em até 12x de R$ 41,37 em cartões de crédito aceitos nacionalmente. Também suportamos faturamento direto caso prefira entrar em contato por nosso canal corporativo."
    },
    {
      q: "Como funciona o acesso à gravação?",
      a: "A gravação integral de todo o Workshop Entre Movimentos será disponibilizada de forma estruturada logo após o término das transmissões."
    },
    {
      q: "O workshop é ao vivo ou apenas gravado?",
      a: "O workshop é 100% ao vivo e interativo, com transmissão online e imersiva de excelência na data escolhida. Isso nos permite realizar exercícios contextualizados, dinâmicas e discussões em tempo real."
    },

    {
      q: "O pagamento é seguro?",
      a: "Absolutamente. Nós utilizamos soluções de pagamento corporativas de alta tecnologia que integram criptografia ponta-a-ponta SSL, protegendo seus dados com estrita confidencialidade."
    },

  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-offwhite text-brand-brown px-6 md:px-8 border-t border-brand-lightgray relative">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.25em] text-brand-terracotta uppercase block">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4.5xl text-brand-brown font-light">
            Esclareça seus questionamentos
          </h2>
          <p className="font-sans font-light text-[#5a4f44] text-base sm:text-lg max-w-xl mx-auto">
            Tem alguma dúvida sobre o Workshop? Confira as respostas para as principais dúvidas de nossos participantes.
          </p>
        </div>

        {/* Accordeon Column - Extremely clean, separate floating cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`p-6 rounded-sm transition-all duration-300 ${
                  isOpen ? "bg-[#efebe5] shadow-sm" : "bg-[#fdfcfb]/40 hover:bg-[#efebe5]/50"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-brand-brown group-hover:text-brand-terracotta transition-colors duration-200">
                    {faq.q}
                  </span>
                  
                  <span
                    className={`w-8 h-8 rounded-full border border-brand-greige/15 flex items-center justify-center shrink-0 ml-4 lg:ml-8 transition-transform duration-300 text-brand-terracotta ${
                      isOpen ? "rotate-180 bg-brand-terracotta/10 border-brand-terracotta/20" : "bg-transparent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
 
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pr-12 font-sans font-light text-base md:text-[17px] text-[#5a4f44] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
