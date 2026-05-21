import { Instagram, MapPin, Clock, Phone, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#4A3F35] text-[#FAF7F2] pt-16 pb-8 px-4 border-t border-[#3D342C]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo Brand info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-white uppercase">
                Dra. Emilyn Figueiredo
              </span>
              <span className="text-[10px] tracking-widest font-sans font-bold text-[#A68B77] uppercase">
                Estética Avançada & Harmonização
              </span>
            </div>
            <p className="text-xs text-[#E8DED2] leading-relaxed max-w-sm">
              Tratamentos inovadores baseados na individualidade, visagismo e bem-estar. Realçando sua luz interior com segurança, suavidade e dedicação científica.
            </p>
          </div>

          {/* Quick links to sections */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-sans">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#tratamentos" className="text-[#E8DED2] hover:text-white transition">Procedimentos Clínicos</a>
              </li>
              <li>
                <a href="#diagnostico-pele" className="text-[#E8DED2] hover:text-white transition">Consultor de Skin Care (IA)</a>
              </li>
              <li>
                <a href="#reels-instagram" className="text-[#E8DED2] hover:text-white transition">Instagram Reels Feed</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-[#E8DED2] hover:text-white transition">Depoimentos dos Clientes</a>
              </li>
            </ul>
          </div>

          {/* Clinic hours / Schedule */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-sans flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#A68B77]" /> Expediente
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DED2]">
              <li className="flex justify-between border-b border-[#3D342C] pb-1.5">
                <span>Segunda a Sexta:</span>
                <span className="text-white font-medium">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between border-b border-[#3D342C] pb-1.5">
                <span>Sábados:</span>
                <span className="text-white font-medium">08:00 - 13:00</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Domingos e Feriados:</span>
                <span className="text-[#A68B77] font-medium font-mono uppercase text-[10px] tracking-wider">Fechado</span>
              </li>
            </ul>
          </div>

          {/* Location & Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-sans flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#A68B77]" /> Localização Marcar
            </h4>
            <div className="space-y-3 text-xs text-[#E8DED2]">
              <p className="leading-relaxed">
                Av. Ministro Geraldo Barreto Sobral, 2150<br />
                Centro Médico Jardins, Sala 608<br />
                Jardins, Aracaju - SE, 49026-010
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <a 
                  href="https://api.whatsapp.com/send?phone=5579999999999" 
                  className="inline-flex items-center gap-2 text-white hover:text-[#A68B77] transition"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A68B77]" /> (79) 99999-9999
                </a>
                
                <a 
                  href="https://www.instagram.com/emilynfigueiredoesteta/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-white hover:text-[#A68B77] transition"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#A68B77]" /> @emilynfigueiredoesteta
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row copyrights and back to top */}
        <div className="border-t border-[#3D342C] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#E8DED2]/80">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Dra. Emilyn Figueiredo. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkme.bio/emilynfigueiredoesteta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition"
            >
              Linkme.bio Oficial
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A68B77]"></span>
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1 text-[#A68B77] hover:text-[#FAF7F2] transition cursor-pointer"
            >
              Topo <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
