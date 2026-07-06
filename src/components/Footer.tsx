import { Instagram, ArrowUp, Mail, ShieldAlert } from "lucide-react";

interface FooterProps {
  onOpenCheckout: () => void;
}

export default function Footer({ onOpenCheckout }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-brown text-[#f8f8f8] py-20 px-6 md:px-8 border-t border-brand-terracotta/20 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Footer CTA & Closing statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12 border-b border-brand-greige/15">
          
          {/* Text and Pricing */}
          <div className="space-y-6 text-left">
            <span className="font-sans font-medium text-xs tracking-[0.25em] text-brand-terracotta uppercase block">
              IMERSÃO COMPLETA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-offwhite font-light tracking-tight max-w-sm">
              Garanta sua vaga no Workshop Entre Movimentos
            </h2>
            
            <div className="space-y-1.5 pt-2">
              <p className="font-serif text-2xl md:text-3xl font-light text-brand-offwhite/95">
                12x de <span className="italic">R$ 31,02</span>
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-brand-greige">
                ou R$ 300,00 à vista
              </p>
            </div>
          </div>

          {/* Action button & social links */}
          <div className="space-y-8 flex flex-col items-start md:items-end md:text-right">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-transparent border border-[#f8f8f8] hover:bg-brand-offwhite hover:text-brand-brown text-[#f8f8f8] px-8 py-4.5 text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 shadow-lg cursor-pointer"
            >
              QUERO MINHA VAGA
            </button>

            {/* Social link */}
            <div className="flex flex-col gap-2 items-start md:items-end">
              <span className="font-sans text-[10px] uppercase tracking-widest text-brand-greige">
                SIGA O DIÁLOGO DIÁRIO
              </span>
              <a
                href="https://www.instagram.com/entre3movimentos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-offwhite hover:text-brand-terracotta transition-colors text-sm font-sans"
              >
                <Instagram className="w-5 h-5 text-brand-terracotta" />
                @entre3movimentos
              </a>
            </div>
          </div>

        </div>

        {/* Footer Navigation and Brand Stamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-serif text-xl tracking-wider text-brand-offwhite font-light">
              ENTRE MOVIMENTOS
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-greige mt-1">
              COMUNICAÇÃO · GESTÃO · ATENDIMENTO
            </span>
          </div>

          {/* Quick link support */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-greige/80 uppercase tracking-widest font-sans font-medium">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-offwhite transition-colors">Voltar ao topo</button>
            <span>•</span>
            <a href="https://www.instagram.com/entre3movimentos/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-offwhite transition-colors">Instagram</a>
            <span>•</span>
            <a href="mailto:contato@entre3movimentos.com" className="hover:text-brand-offwhite transition-colors">Suporte</a>
          </nav>
        </div>

        {/* Bottom Legal Stuff */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-brand-greige/10 text-xs font-sans font-light text-brand-greige/80 text-center md:text-left">
          <div className="space-y-1">
            <p>Workshop Experiencial Online • Edição Reservada de Alto Padrão</p>
            <p>Copyright © 2026, Todos os Direitos Reservados</p>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#b3aca4]/60">
            <span>Ambiente Seguro</span>
            <div className="w-1.5 h-1.5 bg-green-700/80 rounded-full" />
            <span>SSL Certificado</span>
          </div>
        </div>

      </div>

      {/* Floating back-to-top button corner */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 lg:right-10 w-9 h-9 border border-brand-greige/20 rounded-full flex items-center justify-center text-brand-greige hover:text-brand-offwhite hover:border-brand-offwhite transition-all bg-brand-brown/40 backdrop-blur-sm cursor-pointer"
        title="Voltar para o topo"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
