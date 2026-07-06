import { motion } from "motion/react";
import martinaImg from "../assets/images/martina.png";
import marianeImg from "../assets/images/mariane.png";
import micheleImg from "../assets/images/michele.png";

export default function Hosts() {
  const hostList = [
    {
      name: "Martina Bugs",
      specialty: "Executiva do Mercado de Luxo & Gestão de Pessoas",
      brands: ["Burberry (Brand Manager)", "Louis Vuitton", "Trussardi", "Thierry Mugler"],
      photo: martinaImg,
      bio: [
        "Executiva do mercado de luxo há mais de 30 anos, formada em moda e gestão de pessoas. Gerenciou as marcas Trussardi e Thierry Mugler. Na Louis Vuitton atuou em compras, treinamento e capacitação das equipes Brasil, Venezuela e México. Em 2015 tornou-se Brand Manager da Burberry no Brasil, inaugurando 10 lojas próprias e liderando as equipes de NY e Londres."
      ]
    },
    {
      name: "Mariane Junqueira",
      specialty: "Conselheira & Diretora por 13 anos na Fendi Brasil",
      brands: ["Fendi (Diretora)", "Louis Vuitton", "Baccarat", "Louboutin"],
      photo: marianeImg,
      bio: [
        "30 anos no mercado de luxo, com passagens por Louis Vuitton, Baccarat, Louboutin e Fendi, onde foi diretora por 13 anos e liderou a marca em ciclos estratégicos (a flagship brasileira alcançou o maior crescimento das Américas em 2023). Atua como mentora, treinadora e conselheira."
      ]
    },
    {
      name: "Michele Gainzarain",
      specialty: "Posicionamento Pessoal, Auto-Imagem & Marketing",
      brands: ["Louis Vuitton", "Dolce & Gabbana", "Giorgio Armani", "Ermenegildo Zegna", "MCF Consultoria"],
      photo: micheleImg,
      bio: [
        "Mais de 20 anos no mercado de luxo nas áreas de Marketing, VM, Produto e Cliente. Passou por Polo Ralph Lauren, Louis Vuitton (América Latina), D&G, Dolce & Gabbana, Giorgio Armani, Emporio Armani e Ermenegildo Zegna. Especialista em auto-imagem e posicionamento pessoal. 15 anos na MCF Consultoria com projetos estratégicos em varejo e lifestyle."
      ]
    }
  ];

  return (
    <section id="especialistas" className="py-24 md:py-32 bg-brand-brown text-brand-offwhite px-6 md:px-8 relative overflow-hidden">
      {/* Decorative background visual elements for deep high-contrast backdrop */}
      <div className="absolute right-6 top-1/4 select-none opacity-[0.03] font-serif text-[120px] italic [writing-mode:vertical-lr] hidden xl:block uppercase tracking-widest pointer-events-none">
        DIRETRIZ
      </div>

      <div className="absolute left-[-15%] top-[-10%] w-[50%] h-[50%] bg-[#b06a4f]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[-10%] w-[50%] h-[50%] bg-[#db9276]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Header - Sizable, Majestic, highlighting Career Authority */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-sans font-bold text-sm tracking-[0.25em] text-[#e29360] uppercase block">
            CONDUÇÃO EXCLUSIVA
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4.5xl md:text-5xl text-brand-offwhite font-light leading-tight tracking-tight">
            Três nomes respeitados que guiarão a transformação da sua marca
          </h2>
          <div className="w-20 h-[1.5px] bg-brand-terracotta mx-auto my-4" />
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#dfd6cd] max-w-2xl mx-auto font-light leading-relaxed">
            Mais de 80 anos de experiência somados na liderança e gestão tática das maiores grifes de luxo internacionais.
          </p>
        </div>

        {/* Brand Bar / Trust Banner directly above the cards - Highlight authority */}
        <div className="bg-[#2a1e15] border border-brand-terracotta/20 p-6 sm:p-8 rounded-sm text-center space-y-4 max-w-5xl mx-auto">
          <span className="font-sans font-semibold text-xs sm:text-sm tracking-[0.25em] text-[#e29360] uppercase block">
            DÉCADAS DE ATUAÇÃO E GESTÃO NAS MAIORES GRIFES DO SÉCULO
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-serif italic text-base sm:text-lg md:text-xl text-[#f3efe9]/80">
            <span>Fendi</span>
            <span className="text-brand-terracotta/40">•</span>
            <span>Louis Vuitton</span>
            <span className="text-brand-terracotta/40">•</span>
            <span>Burberry</span>
            <span className="text-brand-terracotta/40">•</span>
            <span>Dolce & Gabbana</span>
            <span className="text-brand-terracotta/40">•</span>
            <span>Giorgio Armani</span>
            <span className="text-brand-terracotta/40">•</span>
            <span>Louboutin</span>
            <span className="text-brand-terracotta/40">•</span>
            <span>Baccarat</span>
          </div>
        </div>

        {/* Vertically stacked Individual Host Blocks for maximum authority and prominence */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20 max-w-5xl mx-auto">
          {hostList.map((host, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-[#281b11] border border-brand-terracotta/20 rounded-sm p-8 sm:p-10 md:p-12 shadow-2xl relative group hover:border-[#e29360]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle architectural background indicator inside each individual block */}
              <div className="absolute right-4 bottom-4 font-serif italic text-[70px] sm:text-[100px] text-brand-terracotta/[0.03] select-none pointer-events-none font-bold">
                0{index + 1}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                {/* Visual / Left Side */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Profile Photo */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-brand-terracotta/30 shadow-xl shadow-brand-terracotta/10 group-hover:border-[#e29360]/50 transition-all duration-500">
                      <img
                        src={host.photo}
                        alt={host.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-serif italic text-xl md:text-2xl text-[#e29360] font-semibold">0{index + 1}.</span>
                      <span className="h-[1.5px] w-8 bg-brand-terracotta/30" />
                    </div>
                    <h3 className="font-serif text-3.5xl sm:text-4xl md:text-4.5xl font-light text-brand-offwhite tracking-tight leading-none">
                      {host.name}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm tracking-wider text-[#e29360] font-bold uppercase leading-relaxed">
                    {host.specialty}
                  </p>

                  <div className="pt-6 border-t border-brand-greige/10 space-y-3">
                    <span className="font-sans font-bold text-xs sm:text-sm tracking-widest text-[#e29360] uppercase block">
                      CHANCELA DE CARREIRA:
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {host.brands.map((brand, bIdx) => (
                        <span 
                          key={bIdx}
                          className="font-serif italic text-xs px-3.5 py-1.5 bg-[#1a0e07] border border-brand-terracotta/30 text-brand-offwhite rounded-xs tracking-wide"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side / Narrative Storytelling */}
                <div className="lg:col-span-7 space-y-6 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-brand-terracotta/10 pt-6 lg:pt-0 lg:pl-8">
                  <span className="font-sans text-xs sm:text-sm tracking-widest text-brand-greige/80 uppercase block font-bold mb-2">
                    BIOGRAFIA E TRAGETÓRIA
                  </span>
                  {host.bio.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans font-light text-[#f5eee6] text-base sm:text-lg md:text-xl leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
