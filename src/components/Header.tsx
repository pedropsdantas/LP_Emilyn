import { useState, useEffect } from "react";
import { Sparkles, Calendar, Menu, X, PhoneCall } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tratamentos", href: "#tratamentos" },
    { name: "Diagnóstico de Pele (IA)", href: "#diagnostico-pele" },
    { name: "Dicas no Reels", href: "#reels-instagram" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQs", href: "#faq" },
  ];

  const handleScrollToSection = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-[#E8DED2] py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* LOGO DESIGN WITH EDITORIAL SANS/SERIF FAMILY */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="flex flex-col cursor-pointer"
        >
          <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#3D342C] uppercase">
            Dra. Emilyn Figueiredo
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.25em] font-sans font-bold text-[#8C7A6B] uppercase -mt-0.5">
            Estética de Alta Performance
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollToSection(link.href)}
              className="text-xs font-semibold uppercase tracking-widest text-[#6B5E52] hover:text-[#8C7A6B] transition cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=5579999999999&text=Ol%C3%A1%20Dra.%20Emilyn!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20est%C3%A9tica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-sans text-xs font-bold tracking-widest uppercase text-[#FAF7F2] bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 transition-all shadow-md shadow-[#8C7A6B]/20 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" /> Agendar Consulta
          </a>
        </div>

        {/* Hamburger Mobile Menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-1.5 rounded-lg text-[#3D342C] hover:bg-[#F2EBE1] transition cursor-pointer"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[#E8DED2] shadow-lg py-6 px-4 space-y-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollToSection(link.href)}
                className="text-left py-2 px-3 rounded-lg text-sm font-semibold text-[#6B5E52] hover:bg-[#FAF7F2] hover:text-[#8C7A6B] transition cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="border-t border-[#E8DED2] pt-4">
            <a
              href="https://api.whatsapp.com/send?phone=5579999999999&text=Ol%C3%A1%20Dra.%20Emilyn!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20est%C3%A9tica."
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full py-3 rounded-xl font-sans text-xs font-bold tracking-widest uppercase text-[#FAF7F2] bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 transition shadow"
            >
              <Calendar className="w-4 h-4" /> Entrar em Contato
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
