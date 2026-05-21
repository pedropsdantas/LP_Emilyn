import React, { useState } from "react";
import { Play, Heart, Eye, X, MessageCircle, Instagram, Sparkles, AlertCircle } from "lucide-react";
import { INSTAGRAM_REELS, TREATMENTS } from "../data";
import { InstagramReel } from "../types";

export default function ReelsShowcase() {
  const [selectedReel, setSelectedReel] = useState<InstagramReel | null>(null);
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});

  // Associate some cover artwork using our generated mock paths or rich gradient fallbacks
  const getCoverImageForReel = (id: string): string => {
    switch (id) {
      case "reel1":
        // Use our skincare procedure generated image
        return "/src/assets/images/skincare_procedure_1779401619192.png";
      case "reel2":
        // Use our clinic interior generated image
        return "/src/assets/images/hero_aesthetic_clinic_1779401584452.png";
      case "reel3":
        // Use our beautiful clinician portrait generated image
        return "/src/assets/images/emilyn_portrait_1779401602099.png";
      default:
        return "https://picsum.photos/seed/reels/600/900";
    }
  };

  const toggleLike = (reelId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedReels((prev) => ({
      ...prev,
      [reelId]: !prev[reelId],
    }));
  };

  const getTreatmentCta = (treatmentId: string) => {
    const matched = TREATMENTS.find((t) => t.id === treatmentId);
    return matched ? matched : TREATMENTS[0];
  };

  const getWhatsAppLink = (reelTitle: string, treatmentName: string) => {
    const baseUrl = "https://api.whatsapp.com/send?phone=5579999999999";
    const textMsg = encodeURIComponent(
      `Olá Dra. Emilyn! Vi seu Reel no Instagram sobre "${reelTitle}" e fiquei super interessada no tratamento clínico de *${treatmentName}*.\n\nGostaria de entender melhor como funciona e consultar os horários disponíveis!`
    );
    return `${baseUrl}&text=${textMsg}`;
  };

  return (
    <div id="reels-instagram" className="bg-white py-20 px-4 scroll-mt-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#8C7A6B] bg-[#8C7A6B]/15 uppercase border border-[#E8DED2] mb-3">
            <Instagram className="w-3.5 h-3.5 text-[#8C7A6B]" /> Dicas Rápidas no Instagram
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#3D342C] tracking-tight">
            Emilyn no Reels: Ciência & Estética
          </h2>
          <p className="mt-4 text-[#6B5E52] max-w-xl mx-auto text-sm md:text-base">
            Acompanhe insights de beleza, verdades clínicas reveladas e confira os segredos de autocuidado compartilhados diariamente no nosso canal oficial do Instagram.
          </p>
        </div>

        {/* List of simulated Reels cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTAGRAM_REELS.map((reel) => {
            const isLiked = likedReels[reel.id];
            const displayLikes = isLiked 
              ? `${(parseFloat(reel.likes) + 0.1).toFixed(1)}k` 
              : reel.likes;

            return (
              <div 
                key={reel.id}
                id={`reel-card-${reel.id}`}
                onClick={() => setSelectedReel(reel)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#FAF7F2] hover:shadow-2xl transition-all duration-300 border border-[#E8DED2] aspect-[9/16] shadow-sm transform hover:-translate-y-2 flex flex-col justify-end"
              >
                {/* Simulated vertical short-format cover */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={getCoverImageForReel(reel.id)} 
                    alt={reel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  {/* Lux gradient over image to provide card caption readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-1"></div>
                </div>

                {/* Top overlay tags */}
                <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
                  <span className="bg-[#8C7A6B] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Instagram className="w-3 h-3" /> @emilynfigueiredoesteta
                  </span>
                  
                  <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> {reel.views}
                  </span>
                </div>

                {/* Simulated Play button in center */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center z-10">
                  <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 text-white flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all">
                    <Play className="w-6 h-6 fill-white ml-1 text-white" />
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="p-6 relative z-10 space-y-3">
                  <h3 className="font-serif text-lg font-semibold text-white tracking-tight leading-snug drop-shadow-sm">
                    {reel.title}
                  </h3>
                  
                  {/* Interactions drawer */}
                  <div className="flex items-center justify-between text-xs text-white/90 pt-2 border-t border-white/20">
                    <div className="flex items-center gap-1 font-semibold">
                      <button 
                        id={`like-btn-${reel.id}`}
                        onClick={(e) => toggleLike(reel.id, e)} 
                        className="p-1 hover:bg-white/10 rounded-full transition cursor-pointer"
                      >
                        <Heart className={`w-5 h-5 transition-all ${isLiked ? "fill-red-500 text-red-500 scale-125" : "text-white"}`} />
                      </button>
                      <span>{displayLikes} curtidas</span>
                    </div>

                    <div className="flex items-center gap-1 font-semibold text-white/80">
                      <MessageCircle className="w-4 h-4" />
                      <span>Ver Dica</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reels Detailed Takeaways Modal */}
        {selectedReel && (
          <div id="reels-modal-overlay" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div 
              id="reels-modal-body"
              className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-4xl w-full max-h-[90vh] border border-[#E8DED2] animate-scaleUp"
            >
              
              {/* Media simulated video side (Left on desktop) */}
              <div className="relative w-full md:w-5/12 bg-stone-900 border-r border-[#E8DED2]/40 aspect-[9/16] md:aspect-auto">
                <img 
                  src={getCoverImageForReel(selectedReel.id)} 
                  alt={selectedReel.title}
                  className="w-full h-full object-cover brightness-[80%]" 
                  referrerPolicy="no-referrer"
                />
                
                {/* Accent overlay with simulated clinical advice state */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#3D342C]/20 to-black/35 p-6 flex flex-col justify-between">
                  <div>
                    <span className="bg-[#8C7A6B] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                      <Instagram className="w-3 h-3" /> REELS ATIVO
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[#A68B77] text-[10px] tracking-widest font-bold uppercase flex items-center gap-1.5 label-sans">
                      <Sparkles className="w-3 h-3" /> Dica de Empreendedora
                    </span>
                    <h4 className="text-white text-base font-serif leading-snug font-semibold">
                      {selectedReel.title}
                    </h4>
                    <p className="text-[#FAF7F2]/80 text-[11px] leading-relaxed">
                      Este conteúdo visa esclarecer e aproximar você de rotinas baseadas em rigor científico, eliminando boatos e facilitando sua escolha cosmética diária.
                    </p>
                  </div>
                </div>
              </div>

              {/* Informational takeaways side (Right on desktop) */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-[#FAF7F2]">
                <div>
                  <div className="flex justify-between items-start mb-6 border-b border-[#E8DED2] pb-4">
                    <div>
                      <span className="text-[10px] font-bold text-[#8C7A6B] uppercase tracking-widest font-mono">
                        Resumo do Vídeo e Estudos
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif text-[#3D342C] font-semibold tracking-tight mt-1">
                        Segredos Revelados
                      </h3>
                    </div>
                    
                    <button 
                      id="close-reels-modal"
                      onClick={() => setSelectedReel(null)}
                      className="p-1.5 text-[#6B5E52] hover:text-[#3D342C] bg-[#E8DED2]/40 hover:bg-[#E8DED2]/90 rounded-full transition cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Takeaway Items Checklist */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-[#8C7A6B] tracking-wider uppercase block mb-3">
                        Principais Tópicos Abordados no Reels:
                      </span>
                      <ul className="space-y-2.5">
                        {selectedReel.takeaways.map((takeaway, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-xs md:text-sm text-[#4A3F35] leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-[#8C7A6B]/15 text-[#8C7A6B] flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pro Expert Step hacks */}
                    <div className="bg-white rounded-2xl p-4 border border-[#E8DED2] space-y-2">
                      <span className="text-[10px] font-bold text-[#8C7A6B] uppercase tracking-wider flex items-center gap-1.5 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 text-[#8C7A6B]" /> Dicas Extras do Vídeo:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#6B5E52]">
                        {selectedReel.videoTips.map((tip, idx) => (
                          <li key={idx} className="flex gap-1.5 items-start">
                            <span className="text-[#8C7A6B] font-bold">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Direct action CTA button linking the Reel content to Emilyn's clinical services */}
                <div className="mt-8 border-t border-[#E8DED2] pt-6">
                  {(() => {
                    const matchedTreatment = getTreatmentCta(selectedReel.suggestedTreatmentId);
                    return (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                          <span className="text-[10px] text-[#A68B77] font-bold uppercase tracking-widest block font-mono">
                            Procedimento Aludido
                          </span>
                          <span className="text-[#3D342C] font-semibold text-sm">
                            {matchedTreatment.name}
                          </span>
                        </div>
                        
                        <a
                          id="reel-booking-cta"
                          href={getWhatsAppLink(selectedReel.title, matchedTreatment.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 text-[#FAF7F2] text-xs md:text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all w-full sm:w-auto shadow-md shadow-[#8C7A6B]/20 cursor-pointer"
                        >
                          Agendar no WhatsApp
                        </a>
                      </div>
                    );
                  })()}
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
