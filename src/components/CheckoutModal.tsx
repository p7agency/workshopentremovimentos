import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Copy, CreditCard, ShieldCheck, AlertCircle, Calendar } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [copiedKey, setCopiedKey] = useState(false);
  const [formErrors, setFormErrors] = useState({ name: "", email: "", phone: "" });

  const validate = () => {
    const errors = { name: "", email: "", phone: "" };
    let valid = true;
    if (!formData.name.trim()) {
      errors.name = "Nome é obrigatório";
      valid = false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "E-mail válido é obrigatório";
      valid = false;
    }
    if (!formData.phone.trim()) {
      errors.phone = "Telefone é obrigatório";
      valid = false;
    }
    setFormErrors(errors);
    return valid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep("payment");
    }
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText("entre3movimentos@workshop.com.br");
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleFinishPayment = () => {
    setStep("success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-brown"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-md bg-brand-offwhite text-brand-brown shadow-2xl border border-brand-greige/30"
          >
            {/* Header */}
            <div className="bg-brand-brown text-brand-offwhite p-6 relative flex items-center justify-between border-b border-brand-terracotta/20">
              <div>
                <span className="text-xs font-sans tracking-widest text-brand-terracotta font-medium uppercase block mb-1">
                  Inscrição Confirmada
                </span>
                <h3 className="font-serif text-2xl tracking-normal">
                  Falta pouco para começar
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-brand-offwhite/70 hover:text-brand-offwhite transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              {step === "form" && (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="bg-brand-lightgray p-4 rounded-sm border-l-4 border-brand-terracotta">
                      <p className="font-serif text-brand-brown text-sm leading-relaxed">
                        "Descubra como alinhar comunicação, gestão e atendimento para que sua marca seja escolhida pelo que representa."
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm font-sans text-brand-terracotta font-semibold tracking-wide uppercase">
                        <ShieldCheck className="w-4 h-4 text-brand-terracotta shrink-0 animate-pulse" />
                        Mapeamento Intensivo • Imersão de Alto Padrão
                      </div>
                    </div>

                  <div>
                    <label className="block text-xs font-sans font-medium uppercase tracking-wider text-brand-brown/80 mb-2">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-brand-greige text-brand-brown px-4 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors duration-200"
                      placeholder="Ex: Amanda Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {formErrors.name && (
                      <span className="text-xs text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium uppercase tracking-wider text-brand-brown/80 mb-2">
                      Seu Melhor E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white border border-brand-greige text-brand-brown px-4 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors duration-200"
                      placeholder="Ex: amanda@suamarca.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {formErrors.email && (
                      <span className="text-xs text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium uppercase tracking-wider text-brand-brown/80 mb-2">
                      WhatsApp para Avisos
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white border border-brand-greige text-brand-brown px-4 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors duration-200"
                      placeholder="Ex: (11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {formErrors.phone && (
                      <span className="text-xs text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.phone}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-terracotta text-brand-offwhite hover:bg-[#834e2e] transition-colors py-4 font-sans font-medium uppercase tracking-widest text-xs duration-300 mt-2 block shadow-lg hover:shadow-brand-terracotta/20"
                  >
                    Prosseguir para o Pagamento
                  </button>
                </form>
              )}

              {step === "payment" && (
                <div className="space-y-6">
                  {/* Tabs */}
                  <div className="flex border-b border-brand-greige">
                    <button
                      onClick={() => setPaymentMethod("pix")}
                      className={`flex-1 pb-3 text-center text-xs font-sans font-medium uppercase tracking-widest border-b-2 transition-all ${
                        paymentMethod === "pix"
                          ? "border-brand-terracotta text-brand-terracotta"
                          : "border-transparent text-brand-brown/50"
                      }`}
                    >
                      PIX (R$ 300,00)
                    </button>
                    <button
                      onClick={() => setPaymentMethod("card")}
                      className={`flex-1 pb-3 text-center text-xs font-sans font-medium uppercase tracking-widest border-b-2 transition-all ${
                        paymentMethod === "card"
                          ? "border-brand-terracotta text-brand-terracotta"
                          : "border-transparent text-brand-brown/50"
                      }`}
                    >
                      Cartão de Crédito
                    </button>
                  </div>

                  {paymentMethod === "pix" ? (
                    <div className="flex flex-col items-center space-y-4 py-2">
                      <div className="bg-brand-lightgray p-4 rounded border border-brand-greige/40 flex items-center justify-center">
                        {/* Mock elegant style QR Code */}
                        <div className="relative w-40 h-40 bg-white p-2 border border-brand-greige flex flex-col justify-between">
                          <div className="flex justify-between">
                            <div className="w-8 h-8 border-t-2 border-l-2 border-brand-brown" />
                            <div className="w-8 h-8 border-t-2 border-r-2 border-brand-brown" />
                          </div>
                          <div className="flex items-center justify-center">
                            {/* Visual decorative matrix resembling QR code */}
                            <div className="grid grid-cols-5 gap-1.5 w-24 h-24">
                              {Array.from({ length: 25 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`rounded-sm ${
                                    (i * 7 + 3) % 5 === 0 || i % 3 === 0 || i === 0 || i === 4 || i === 20 || i === 24
                                      ? "bg-brand-brown"
                                      : "bg-transparent"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="w-8 h-8 border-b-2 border-l-2 border-brand-brown" />
                            <div className="w-8 h-8 border-b-2 border-r-2 border-brand-brown" />
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-sm font-serif text-brand-brown">
                          Escaneie o código acima ou copie a chave Pix abaixo
                        </p>
                        <p className="text-[11px] font-sans uppercase tracking-wider text-brand-terracotta mt-1">
                          Inscrição Completa • Total R$ 300,00 à vista
                        </p>
                      </div>

                      {/* Pix Key copy wrapper */}
                      <div className="w-full flex items-center border border-brand-greige bg-white">
                        <input
                          type="text"
                          readOnly
                          value="entre3movimentos@workshop.com.br"
                          className="flex-1 bg-transparent px-4 py-3 text-xs font-mono text-brand-brown focus:outline-none"
                        />
                        <button
                          onClick={handleCopyKey}
                          className="px-4 py-3 border-l border-brand-greige hover:bg-brand-lightgray transition-colors text-brand-terracotta flex items-center gap-1.5 font-sans font-medium text-xs uppercase tracking-wider"
                        >
                          {copiedKey ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              Copiado
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Copiar
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[11px] font-sans font-medium uppercase tracking-wider text-brand-brown/80 mb-1.5">
                          Número do Cartão
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            maxLength={19}
                            className="w-full bg-white border border-brand-greige px-4 py-3 pl-10 text-sm focus:outline-none focus:border-brand-terracotta transition-colors"
                            placeholder="4000 1234 5678 9010"
                          />
                          <CreditCard className="w-4 h-4 text-brand-greige absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-sans font-medium uppercase tracking-wider text-brand-brown/80 mb-1.5">
                            Validade
                          </label>
                          <input
                            type="text"
                            maxLength={5}
                            className="w-full bg-white border border-brand-greige px-4 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors"
                            placeholder="MM/AA"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-sans font-medium uppercase tracking-wider text-brand-brown/80 mb-1.5">
                            CVC
                          </label>
                          <input
                            type="text"
                            maxLength={4}
                            className="w-full bg-white border border-brand-greige px-4 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-sans font-medium uppercase tracking-wider text-brand-brown/80 mb-1.5">
                          Parcelamento
                        </label>
                        <select className="w-full bg-white border border-brand-greige px-4 py-3 text-sm focus:outline-none focus:border-brand-terracotta transition-colors">
                          <option>12x de R$ 31,02 (Total R$ 372,24)</option>
                          <option>6x de R$ 50,00 (Sem juros)</option>
                          <option>1x de R$ 300,00 (À vista)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={handleFinishPayment}
                      className="w-full bg-brand-brown text-brand-offwhite hover:bg-brand-brown/90 transition-colors py-4 font-sans font-medium uppercase tracking-widest text-xs duration-300 block shadow-lg"
                    >
                      {paymentMethod === "pix" ? "Já fiz o Pix, confirmar inscrição" : "Confirmar Inscrição"}
                    </button>
                    <button
                      onClick={() => setStep("form")}
                      className="w-full text-center mt-3 text-xs font-sans text-brand-brown/60 hover:text-brand-brown transition-colors uppercase tracking-widest"
                    >
                      Voltar e alterar dados
                    </button>
                  </div>
                </div>
              )}

              {step === "success" && (
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 bg-brand-terracotta/10 text-brand-terracotta rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-3xl text-brand-brown">Bem-vindo(a) ao Workshop!</h4>
                    <p className="text-sm font-sans text-brand-brown/80 leading-relaxed max-w-sm mx-auto">
                      Inscrição de <strong className="font-medium">{formData.name}</strong> recebida com sucesso.
                    </p>
                  </div>

                  <div className="bg-brand-lightgray p-5 rounded-sm text-left max-w-md mx-auto space-y-3.5 text-xs text-brand-brown/90 border border-brand-greige/40">
                    <p className="font-semibold uppercase tracking-wider text-[10px] text-brand-terracotta">
                      Próximos passos fundamentais:
                    </p>
                    <div className="flex gap-2.5">
                      <div className="w-4 h-4 shrink-0 rounded-full bg-brand-terracotta text-brand-offwhite flex items-center justify-center text-[10px] mt-0.5">1</div>
                      <p><strong>E-mail de boas-vindas:</strong> Enviamos os dados de acesso para <strong className="font-medium">{formData.email}</strong>. Verifique também na caixa de spam.</p>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="w-4 h-4 shrink-0 rounded-full bg-brand-terracotta text-brand-offwhite flex items-center justify-center text-[10px] mt-0.5">2</div>
                      <p><strong>Avisos por WhatsApp:</strong> Você receberá os links de acesso seguro para o ambiente online e imersivo no número <strong className="font-medium">{formData.phone}</strong>.</p>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="w-4 h-4 shrink-0 rounded-full bg-brand-terracotta text-brand-offwhite flex items-center justify-center text-[10px] mt-0.5">3</div>
                      <p>Acompanhe também os bastidores diários no Instagram do <a href="https://www.instagram.com/entre3movimentos/" target="_blank" rel="noreferrer" className="underline hover:text-brand-terracotta">@entre3movimentos</a>.</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        onClose();
                        setStep("form");
                      }}
                      className="inline-block bg-brand-brown text-brand-offwhite hover:bg-brand-brown/90 px-8 py-3.5 font-sans font-medium uppercase tracking-widest text-xs transition-colors rounded-sm"
                    >
                      Fechar Janela
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
