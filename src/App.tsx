import { useState } from "react";
import { Sparkles, ArrowRight, Star, Heart, Calendar, HelpCircle, Check, MapPin, Award, UserCheck, Shield } from "lucide-react";
import Header from "./components/Header";
import SkinConsultation from "./components/SkinConsultation";
import ReelsShowcase from "./components/ReelsShowcase";
import ContactScheduler from "./components/ContactScheduler";
import Footer from "./components/Footer";
import { TREATMENTS, TESTIMONIALS, FAQS } from "./data";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<"todos" | "facial" | "corporal" | "injetaveis">("todos");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredTreatments = TREATMENTS.filter(
    (t) => activeCategory === "todos" || t.category === activeCategory
  );

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getWhatsAppDirectLink = (treatmentName: string) => {
    const baseUrl = "https://api.whatsapp.com/send?phone=5579999999999";
    const textMsg = encodeURIComponent(
      `Olá Dra. Emilyn! Gostaria de obter mais informações sobre o tratamento de *${treatmentName}* e consultar os horários de atendimento clínico.`
    );
    return `${baseUrl}&text=${textMsg}`;
  };

  return (
    <div id="home-root" className="min-h-screen bg-[#FAF7F2] text-[#4A3F35] font-sans antialiased selection:bg-[#8C7A6B]/20 selection:text-[#3D342C]">
      
      {/* HEADER SECTION */}
      <Header />

      {/* HERO HERO HERO HERO */}
      <section id="hero" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-to-tr from-[#F2EBE1] via-[#FAF7F2] to-white md:px-6">
        
        {/* Shimmer graphic backgrounds */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#A68B77]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#8C7A6B]/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#8C7A6B] bg-[#8C7A6B]/15 uppercase font-sans animate-fade-in border border-[#E8DED2]">
              <Sparkles className="w-3.5 h-3.5 text-[#A68B77]" /> Estética Avançada e Naturalidade
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-serif text-[#3D342C] tracking-tight leading-[1.1]">
              A arte de cuidar da <br className="hidden sm:inline" />
              <span className="relative inline-block">
                <span className="italic text-[#A68B77]">sua beleza</span> natural
                <span className="absolute left-0 bottom-2 w-full h-[4px] bg-[#8C7A6B]/10 rounded-full -z-1"></span>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#6B5E52] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Protocolos clínicos individualizados e harmonização facial de alta performance combinando rigor técnico, empatia e os bioativos mais nobres no mercado mundial por Dra. Emilyn Figueiredo. Estética inteligente sem exageros.
            </p>

            {/* Stepper Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-diagnostic-cta"
                onClick={() => scrollToSection("#diagnostico-pele")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-xs font-bold tracking-widest text-[#FAF7F2] bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 hover:scale-[1.02] transform transition-all cursor-pointer uppercase shadow-lg shadow-[#8C7A6B]/20"
              >
                Diagnóstico de Pele Grátis <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-portfolio-cta"
                onClick={() => scrollToSection("#tratamentos")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-xs font-bold tracking-widest text-[#4A3F35] bg-white hover:bg-[#F2EBE1] border border-[#E8DED2] transition-all cursor-pointer uppercase"
              >
                Ver Procedimentos
              </button>
            </div>

            {/* Values badges */}
            <div className="pt-6 border-t border-[#E8DED2] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <span className="block font-serif text-xl md:text-2xl font-bold text-[#8C7A6B]">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B5E52] opacity-80">Insumos Premium</span>
              </div>
              <div className="border-x border-[#E8DED2] px-4">
                <span className="block font-serif text-xl md:text-2xl font-bold text-[#8C7A6B]">Natural</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B5E52] opacity-80">Visagismo Clínico</span>
              </div>
              <div>
                <span className="block font-serif text-xl md:text-2xl font-bold text-[#8C7A6B]">+1.2k</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B5E52] opacity-80">Lábios & Rosto</span>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic featuring our high quality clinical rendering photo */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[380px] sm:max-w-[420px] lg:max-w-none aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white z-10 transition duration-500 hover:scale-[1.01]">
              <img
                src="/src/assets/images/hero_aesthetic_clinic_1779401584452.png"
                alt="Clínica de Estética Dra Emilyn Figueiredo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              
              {/* Abstract glowing bottom bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3D342C]/95 via-[#3D342C]/40 to-transparent p-6 text-white text-center">
                <span className="text-[10px] tracking-widest text-[#A68B77] uppercase font-bold block mb-1">Centro Médico Jardins</span>
                <span className="font-serif text-sm md:text-base font-semibold block animate-pulse">Agende Sua Experiência Sensorial</span>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-[#E8DED2] flex items-center gap-3 max-w-[200px] z-20 animate-bounce">
              <span className="w-8 h-8 rounded-full bg-[#F2EBE1] text-[#8C7A6B] flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-[#8C7A6B] text-[#8C7A6B]" />
              </span>
              <div>
                <span className="font-bold text-xs text-[#3D342C] block">Estrela do Reels</span>
                <span className="text-[9px] text-[#6B5E52]">Conselhos Clínicos Diários</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BIO: EMILYN FIGUEIREDO PROFILE  */}
      <section id="sobre" className="py-20 bg-white border-y border-[#E8DED2]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Her Portrait generated asset */}
            <div className="lg:col-span-12 xl:col-span-5 relative">
              <div className="relative max-w-[340px] md:max-w-[400px] mx-auto aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img
                  src="/src/assets/images/emilyn_portrait_1779401602099.png"
                  alt="Dra. Emilyn Figueiredo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Backing decorative frame */}
              <div className="absolute inset-0 bg-[#F2EBE1]/80 border border-[#E8DED2]/60 rounded-[3rem] -translate-x-4 translate-y-4 -z-10 mx-auto max-w-[340px] md:max-w-[400px] h-full"></div>
            </div>

            {/* Right Column: Her Philosophy, specialisation & vision */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold text-[#8C7A6B] tracking-[0.25em] uppercase block">
                Elegância Sem Exageros
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif text-[#3D342C] tracking-tight leading-tight">
                Dra. Emilyn Figueiredo
              </h2>
              
              <h3 className="text-[#A68B77] font-bold text-xs tracking-widest uppercase font-mono -mt-3">
                Biomédica Esteta | Especialista em Visagismo Dinâmico
              </h3>

              <div className="text-sm md:text-base text-[#6B5E52] leading-relaxed space-y-4 text-justify">
                <p>
                  Acredito firmemente que a alta estética facial não deve anular seus traços nativos, mas sim iluminar o que há de mais elegante em você. Cada seringa ou protocolo de pele que realizo na clínica é precedido por uma análise visagista cuidadosa, que respeita suas proporções naturais e histórico dermatológico.
                </p>
                <p>
                  Minha paixão é traduzir a ciência e biologia celular em resultados visíveis na derme: preenchimentos labiais hidratantes que entregam naturalidade, estimulação profunda de colágeno para sustentação e limpezas meticulosas que preparam o tecido para respirar puramente.
                </p>
              </div>

              {/* Core Quality Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
                <div className="flex gap-2.5 items-start">
                  <UserCheck className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#3D342C] block font-bold uppercase tracking-wider">Atendimento Humanizado</strong>
                    <span className="text-[11px] text-[#6B5E52]">Diagnósticos individuais sem pressa, com foco na sua real necessidade.</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <Award className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#3D342C] block font-bold uppercase tracking-wider">Habilitação Registrada</strong>
                    <span className="text-[11px] text-[#6B5E52]">Domínio de técnicas injetáveis e protocolos validados internacionalmente.</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <Shield className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#3D342C] block font-bold uppercase tracking-wider">Insumos Certificados</strong>
                    <span className="text-[11px] text-[#6B5E52]">Ácido Hialurônico e toxinas das marcas mais seguras do setor médico.</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <Calendar className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#3D342C] block font-bold uppercase tracking-wider">Apoio Homecare Pós</strong>
                    <span className="text-[11px] text-[#6B5E52]">Suporte total no WhatsApp para conduzir sua cicatrização e cuidados de casa.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-center lg:text-left">
                <button
                  id="sobre-booking-cta"
                  onClick={() => scrollToSection("#agendamento")}
                  className="inline-flex items-center gap-1.5 px-8 py-4 rounded-full text-xs font-bold tracking-widest text-[#FAF7F2] bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 transition cursor-pointer uppercase shadow-md"
                >
                  Agendar Minha Avaliação Inicial
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS PORTFOLIO FILTERABLE */}
      <section id="tratamentos" className="py-20 bg-[#FAF7F2] scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#8C7A6B] tracking-[0.3em] uppercase block mb-2">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#3D342C]">Especialidades da Clínica</h2>
            <p className="mt-3 text-sm text-[#6B5E52] max-w-lg mx-auto">
              Nossos tratamentos clínicos de alta performance para renovar, esculpir, purificar e revitalizar o rosto e o corpo.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-md mx-auto">
            {["todos", "facial", "injetaveis", "corporal"].map((cat) => (
              <button
                key={cat}
                id={`filter-cat-${cat}`}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#8C7A6B] text-[#FAF7F2] shadow-md shadow-[#8C7A6B]/20"
                    : "bg-white hover:bg-[#F2EBE1] border border-[#E8DED2] text-[#4A3F35]"
                }`}
              >
                {cat === "todos" && "Todos"}
                {cat === "facial" && "Faciais"}
                {cat === "injetaveis" && "Injetáveis"}
                {cat === "corporal" && "Corporais"}
              </button>
            ))}
          </div>

          {/* Dynamic grid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <div 
                key={treatment.id}
                id={`treatment-card-${treatment.id}`}
                className="bg-white rounded-[2rem] p-6 border border-[#E8DED2] shadow-md shadow-[#8C7A6B]/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#A68B77] bg-[#F2EBE1] border border-[#E8DED2]/50 font-sans tracking-widest uppercase px-3 py-1 rounded-full">
                      {treatment.category === "facial" && "Tratamento Facial"}
                      {treatment.category === "injetaveis" && "Procedimento Injetável"}
                      {treatment.category === "corporal" && "Estética Corporal"}
                    </span>
                    {treatment.duration && (
                      <span className="text-[10px] text-[#8C7A6B] font-sans font-semibold">⏱ {treatment.duration}</span>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-serif text-[#3D342C] font-semibold group-hover:text-[#8C7A6B] transition-colors">
                    {treatment.name}
                  </h3>

                  <p className="text-xs md:text-sm text-[#6B5E52] leading-relaxed">
                    {treatment.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <strong className="text-[10px] font-bold text-[#3D342C] uppercase tracking-wider block">Benefícios:</strong>
                    <ul className="space-y-1">
                      {treatment.benefits.map((b, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-xs text-[#6B5E52] leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-[#8C7A6B] mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DED2]/60">
                  <a
                    id={`treatment-booking-link-${treatment.id}`}
                    href={getWhatsAppDirectLink(treatment.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-full text-xs font-bold text-center border uppercase tracking-wider cursor-pointer transition-all bg-white hover:bg-[#8C7A6B] hover:text-[#FAF7F2] border-[#8C7A6B] text-[#8C7A6B] shadow-sm"
                  >
                    {treatment.ctaText}
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SKIN INTELLIGENT DIAGNOSTIC SYSTEM CONTAINER */}
      <SkinConsultation />

      {/* REELS INSTAGRAM SIMULATION COMPONENT */}
      <ReelsShowcase />

      {/* SOCIAL PROOF: PATIENT TESTIMONIALS */}
      <section id="depoimentos" className="py-20 bg-[#FAF7F2] border-y border-[#E8DED2] scroll-mt-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#8C7A6B] tracking-[0.3em] uppercase block mb-2">Relatos de Amor Próprio</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#3D342C] font-semibold tracking-tight">Experiências Reais na Clínica</h2>
            <p className="mt-3 text-xs md:text-sm text-[#6B5E52] max-w-md mx-auto">
              Quem já confiou seus lábios, rosto e autoestima nas mãos e conhecimentos da Dra. Emilyn conta como foi se reencontrar com o espelho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                id={`testimonial-${t.id}`}
                className="bg-white rounded-[2rem] p-6 border border-[#E8DED2] shadow-sm relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Star review ratings */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8C7A6B] text-[#8C7A6B]" />
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-[#4A3F35] italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DED2]/50 flex items-center gap-3">
                  {t.avatarUrl && (
                    <img 
                      src={t.avatarUrl} 
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-[#8C7A6B]/30" 
                    />
                  )}
                  <div>
                    <span className="font-bold text-[#3D342C] block text-xs md:text-sm">{t.name}</span>
                    <span className="text-[10px] tracking-wide text-[#A68B77] block uppercase font-mono font-bold mt-0.5">{t.treatment}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* APPOINTMENT REQUEST WIDGET FORM */}
      <ContactScheduler />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-20 bg-white scroll-mt-10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#8C7A6B] tracking-[0.3em] uppercase block mb-2">Esclarecendo Suas Dúvidas</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#3D342C]">Perguntas Frequentes</h2>
            <p className="mt-3 text-sm text-[#6B5E52]">
              Reunimos as principais perguntas que recebemos no consultório para ajudar você na sua escolha.
            </p>
          </div>

          <div id="faq-accordion" className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="rounded-2xl border border-[#E8DED2] bg-[#FAF7F2] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 text-[#3D342C] hover:bg-[#F2EBE1] transition cursor-pointer"
                  >
                    <span className="font-serif font-bold text-sm md:text-base">{faq.question}</span>
                    <span className="text-lg text-[#8C7A6B] font-bold w-6 h-6 rounded-full bg-white flex items-center justify-center border border-[#E8DED2] shrink-0">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-60 border-t border-[#E8DED2] p-5 opacity-100 bg-white" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-xs md:text-sm text-[#6B5E52] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER AREA SECTION */}
      <Footer />

    </div>
  );
}
