import { useState } from "react";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Hosts from "./components/Hosts";
import AccessRecap from "./components/AccessRecap";
import OfferCta from "./components/OfferCta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    window.open("https://pay.kiwify.com.br/2lXVAzc", "_blank");
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="bg-brand-offwhite text-brand-brown font-sans selection:bg-brand-terracotta selection:text-brand-offwhite min-h-screen">
      {/* Main Sections */}
      <main>
        {/* BLOCO 1 - HERO */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* BLOCO 2 - INTRODUÇÃO */}
        <Introduction />

        {/* BLOCO 4 - SOLUÇÃO */}
        <Solutions />

        {/* BLOCO 7 - ESPECIALISTAS */}
        <Hosts />

        {/* BLOCO 8 - RECAPITULAÇÃO */}
        <AccessRecap />

        {/* BLOCO 9 - OFERTA / CTA */}
        <OfferCta onOpenCheckout={handleOpenCheckout} />

        {/* BLOCO 10 - FAQ */}
        <Faq />
      </main>

      {/* BLOCO 11 - RODAPÉ */}
      <Footer onOpenCheckout={handleOpenCheckout} />

      {/* Interactive Checkout Modal Overlay */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
