import { useState } from "react";
import { Sparkles, ArrowRight, ArrowLeft, Sun, Moon, Check, Loader2, Smile, AlertCircle } from "lucide-react";
import { SkinProfile, RecommendationResult } from "../types";

export default function SkinConsultation() {
  const [step, setStep] = useState<number>(0);
  const [profile, setProfile] = useState<SkinProfile>({
    skinType: "oleosa",
    mainConcern: "cravos/acne",
    sensitivity: "baixa",
    ageGroup: "25-35",
    currentRoutineCount: 1,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);

  const skinTypes = [
    { value: "oleosa", label: "Oleosa", desc: "Produção excessiva de sebo, brilho constante, tendência a poros dilatados" },
    { value: "seca", label: "Seca", desc: "Perda excessiva de água, repuxamento, descamação ou falta de viço" },
    { value: "mista", label: "Mista", desc: "Oleosidade na zona T (testa, nariz e queixo) e áreas secas nas bochechas" },
    { value: "normal", label: "Normal", desc: "Textura equilibrada, poucos poros visíveis, sem propensões excessivas" },
  ];

  const mainConcerns = [
    { value: "manchas/melasma", label: "Manchas e Melasma", emoji: "✨" },
    { value: "rugas/linhas", label: "Rugas e Linhas de Expressão", emoji: "👵" },
    { value: "cravos/acne", label: "Espinhas, Cravos e Acne", emoji: "🔴" },
    { value: "flacidez", label: "Flacidez ou Falta de Firmeza", emoji: "💧" },
    { value: "desidratação", label: "Desidratação e Pele Sem Brilho", emoji: "🍂" },
  ];

  const sensitivityLevels = [
    { value: "baixa", label: "Resistente (Baixa)", desc: "Tolera ativos fortes e raramente fica vermelha" },
    { value: "média", label: "Média/Ocasional", desc: "Apresenta irritações leves dependendo do produto" },
    { value: "alta", label: "Extremamente Sensível (Alta)", desc: "Sensações frequentes de queimação, coceira ou vermelhidão imediata" },
  ];

  const ageGroups = [
    { value: "menos de 25", label: "Menos de 25" },
    { value: "25-35", label: "De 25 a 35 anos" },
    { value: "36-50", label: "De 36 a 50 anos" },
    { value: "mais de 50", label: "Acima de 50 anos" },
  ];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleDiagnose = async () => {
    setLoading(true);
    setStep(5); // Show loading/result layout
    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      const data = await response.json();
      setRecommendation(data);
    } catch (e) {
      console.error("Erro na requisição inteligente:", e);
    } finally {
      setLoading(false);
    }
  };

  const resetDiagnose = () => {
    setStep(0);
    setRecommendation(null);
  };

  // Pre-formatted WhatsApp text representing the customer's diagnostic
  const getWhatsAppLink = (recName: string) => {
    const baseUrl = "https://api.whatsapp.com/send?phone=5579999999999"; // Default placeholder Brazilian number
    const textMsg = encodeURIComponent(
      `Olá Dra. Emilyn! Fiz o diagnóstico de pele inteligente no seu site e obtive estas recomendações:\n\n` +
      `- *Pele*: ${profile.skinType.toUpperCase()} (Preocupação: ${profile.mainConcern})\n` +
      `- *Sugestão Clínica*: *${recName}*\n\n` +
      `Gostaria de agendar uma consulta presencial para fazer uma avaliação detalhada desse tratamento!`
    );
    return `${baseUrl}&text=${textMsg}`;
  };

  return (
    <div id="diagnostico-pele" className="bg-[#FAF7F2] py-20 px-4 border-b border-[#E8DED2] scroll-mt-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Banner header inside card */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#8C7A6B] bg-[#8C7A6B]/15 uppercase border border-[#E8DED2] mb-3">
            <Sparkles className="w-3 h-3 text-[#A68B77]" /> Assistência Personalizada com IA
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#3D342C] tracking-tight">
            Diagnóstico e Rotina de Beleza Inteligente
          </h2>
          <p className="mt-4 text-sm text-[#6B5E52] max-w-xl mx-auto">
            Descubra as reais necessidades da sua pele em 1 minuto. Nosso consultor baseado em inteligência artificial traça sua rotina perfeita de Homecare e indica os melhores tratamentos clínicos da Dra. Emilyn.
          </p>
        </div>

        {/* Diagnostic Wizard Box */}
        <div id="quiz-container" className="bg-white rounded-[2rem] p-6 md:p-10 shadow-lg border border-[#E8DED2] min-h-[420px] flex flex-col justify-between">
          
          {step <= 4 && (
            <div id="progress-indicator" className="w-full bg-[#FAF7F2] h-1.5 rounded-full mb-8 overflow-hidden">
              <div 
                className="bg-[#8C7A6B] h-full transition-all duration-300" 
                style={{ width: `${((step + 1) / 5) * 100}%` }}
              ></div>
            </div>
          )}

          {/* Form Step Contents */}
          <div className="flex-1">
            
            {/* STEP 0: Skin Type */}
            {step === 0 && (
              <div id="step-0" className="opacity-100 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-serif text-[#3D342C] mb-6 flex items-center gap-2">
                  <span className="text-[#8C7A6B] font-mono">01.</span> Como você descreve o comportamento atual da sua pele?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skinTypes.map((t) => (
                    <button
                      key={t.value}
                      id={`skin-type-opt-${t.value}`}
                      onClick={() => setProfile({ ...profile, skinType: t.value })}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        profile.skinType === t.value
                          ? "border-[#8C7A6B] bg-[#F2EBE1]/40 ring-1 ring-[#8C7A6B]"
                          : "border-[#E8DED2] bg-white hover:border-[#8C7A6B]"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-[#3D342C] text-base">{t.label}</span>
                        {profile.skinType === t.value && (
                          <span className="w-5 h-5 rounded-full bg-[#8C7A6B] text-[#FAF7F2] flex items-center justify-center text-xs">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6B5E52] leading-relaxed">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1: Main Concern */}
            {step === 1 && (
              <div id="step-1">
                <h3 className="text-xl md:text-2xl font-serif text-[#3D342C] mb-6 flex items-center gap-2">
                  <span className="text-[#8C7A6B] font-mono">02.</span> Qual é a sua maior insatisfação ou incômodo facial hoje?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mainConcerns.map((c) => (
                    <button
                      key={c.value}
                      id={`concern-opt-${c.value}`}
                      onClick={() => setProfile({ ...profile, mainConcern: c.value })}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        profile.mainConcern === c.value
                          ? "border-[#8C7A6B] bg-[#F2EBE1]/40 ring-1 ring-[#8C7A6B]"
                          : "border-[#E8DED2] bg-white hover:border-[#8C7A6B]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.emoji}</span>
                        <span className="font-semibold text-[#3D342C] text-sm md:text-base">{c.label}</span>
                      </div>
                      {profile.mainConcern === c.value && (
                        <span className="w-5 h-5 rounded-full bg-[#8C7A6B] text-[#FAF7F2] flex items-center justify-center text-xs">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Sensitivity */}
            {step === 2 && (
              <div id="step-2">
                <h3 className="text-xl md:text-2xl font-serif text-[#3D342C] mb-6 flex items-center gap-2">
                  <span className="text-[#8C7A6B] font-mono">03.</span> Sua pele costuma reagir mal a produtos ou ativos cosméticos?
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {sensitivityLevels.map((s) => (
                    <button
                      key={s.value}
                      id={`sensitivity-opt-${s.value}`}
                      onClick={() => setProfile({ ...profile, sensitivity: s.value })}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-start ${
                        profile.sensitivity === s.value
                          ? "border-[#8C7A6B] bg-[#F2EBE1]/40 ring-1 ring-[#8C7A6B]"
                          : "border-[#E8DED2] bg-white hover:border-[#8C7A6B]"
                      }`}
                    >
                      <div>
                        <span className="font-semibold text-[#3D342C] block mb-1 text-base">{s.label}</span>
                        <p className="text-xs text-[#6B5E52] leading-relaxed">{s.desc}</p>
                      </div>
                      {profile.sensitivity === s.value && (
                        <span className="w-5 h-5 rounded-full bg-[#8C7A6B] text-[#FAF7F2] flex items-center justify-center text-xs mt-1">
                          <Check className="w-4 h-4" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Age Group */}
            {step === 3 && (
              <div id="step-3">
                <h3 className="text-xl md:text-2xl font-serif text-[#3D342C] mb-6 flex items-center gap-2">
                  <span className="text-[#8C7A6B] font-mono">04.</span> Qual é a sua faixa etária atual?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {ageGroups.map((g) => (
                    <button
                      key={g.value}
                      id={`age-opt-${g.value}`}
                      onClick={() => setProfile({ ...profile, ageGroup: g.value })}
                      className={`text-center p-4 rounded-xl border transition-all cursor-pointer ${
                        profile.ageGroup === g.value
                          ? "border-[#8C7A6B] bg-[#F2EBE1]/40 ring-1 ring-[#8C7A6B]"
                          : "border-[#E8DED2] bg-white hover:border-[#8C7A6B]"
                      }`}
                    >
                      <span className="font-semibold text-[#3D342C] text-sm md:text-base block">{g.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: Steps count */}
            {step === 4 && (
              <div id="step-4">
                <h3 className="text-xl md:text-2xl font-serif text-[#3D342C] mb-6 flex items-center gap-2">
                  <span className="text-[#8C7A6B] font-mono">05.</span> Quantos passos você consegue realizar no seu skincare diário hoje?
                </h3>
                <div className="max-w-md mx-auto text-center mt-6">
                  <div className="flex justify-center items-center gap-6 mb-4">
                    <button
                      id="step4-decrement"
                      onClick={() => setProfile({ ...profile, currentRoutineCount: Math.max(0, profile.currentRoutineCount - 1) })}
                      className="w-12 h-12 rounded-full border border-[#8C7A6B] text-[#8C7A6B] flex items-center justify-center font-bold text-xl hover:bg-[#8C7A6B] hover:text-white transition-all cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-4xl font-serif text-[#3D342C] w-12 font-bold">{profile.currentRoutineCount}</span>
                    <button
                      id="step4-increment"
                      onClick={() => setProfile({ ...profile, currentRoutineCount: Math.min(5, profile.currentRoutineCount + 1) })}
                      className="w-12 h-12 rounded-full border border-[#8C7A6B] text-[#8C7A6B] flex items-center justify-center font-bold text-xl hover:bg-[#8C7A6B] hover:text-white transition-all cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-[#6B5E52] italic font-medium">
                    {profile.currentRoutineCount === 0 && "Iniciante completo: prefiro rotina ultra direta"}
                    {profile.currentRoutineCount === 1 && "Básico: costumo apenas lavar o rosto"}
                    {profile.currentRoutineCount === 2 && "Prático: lavo e uso protetor solar ou hidratante"}
                    {profile.currentRoutineCount >= 3 && "Intermediário: já aplico tônico, sérum, protetor ou creme"}
                  </p>
                </div>
              </div>
            )}

            {/* STEP 5: Loading State & Intelligent Diagnosis Result */}
            {step === 5 && (
              <div id="step-5" className="py-2">
                {loading ? (
                  <div id="ai-loading" className="flex flex-col items-center justify-center py-12 text-center">
                    <Loader2 className="w-12 h-12 text-[#8C7A6B] animate-spin mb-4" />
                    <h4 className="text-lg font-serif text-[#3D342C] font-semibold animate-pulse">
                      Analisando sua pele com IA clínica...
                    </h4>
                    <p className="text-xs text-[#6B5E52] mt-2 max-w-sm">
                      Formulando a sinergia perfeita entre produtos homecare e tratamentos personalizados da clínica médica.
                    </p>
                  </div>
                ) : (
                  recommendation && (
                    <div id="ai-recommendations" className="space-y-8 animate-fadeIn">
                      
                      {/* Analysis Block */}
                      <div className="bg-[#F2EBE1] p-5 rounded-[2rem] border border-[#E8DED2]">
                        <h4 className="text-xs font-bold tracking-widest text-[#8C7A6B] uppercase mb-2 flex items-center gap-1.5 font-sans">
                          🔬 Diagnóstico Profissional
                        </h4>
                        <p className="text-[#3D342C] text-sm md:text-base leading-relaxed font-serif text-justify">
                          {recommendation.skinAnalysis}
                        </p>
                      </div>

                      {/* Homecare Routines (morning & night) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Morning */}
                        <div className="bg-[#FAF7F2] p-6 rounded-[2rem] border border-[#E8DED2]">
                          <h5 className="font-bold text-[#8C7A6B] text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
                            <Sun className="w-4 h-4 text-amber-600" /> Cronograma Matinal
                          </h5>
                          <ul className="space-y-3">
                            {recommendation.morningRoutine.map((item, idx) => (
                              <li key={idx} className="flex gap-2.5 items-start text-xs text-[#6B5E52] leading-relaxed">
                                <span className="text-[#8C7A6B] font-extrabold mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Night */}
                        <div className="bg-[#FAF7F2] p-6 rounded-[2rem] border border-[#E8DED2]">
                          <h5 className="font-bold text-[#A68B77] text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
                            <Moon className="w-4 h-4 text-indigo-700" /> Cronograma Noturno
                          </h5>
                          <ul className="space-y-3">
                            {recommendation.nightRoutine.map((item, idx) => (
                              <li key={idx} className="flex gap-2.5 items-start text-xs text-[#6B5E52] leading-relaxed">
                                <span className="text-[#A68B77] font-extrabold mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* CLINICAL TREATMENTS PROPOSED */}
                      <div className="border border-[#E8DED2] rounded-[2rem] p-6 bg-gradient-to-tr from-[#F2EBE1]/40 via-white to-white">
                        <h5 className="font-sans font-bold text-xs tracking-widest text-[#8C7A6B] uppercase mb-4 flex items-center gap-1.5 justify-center">
                          ✨ Protocolos Clínicos Recomendados por Dra. Emilyn:
                        </h5>
                        
                        <div className="space-y-4">
                          {recommendation.recommendedTreatments.map((t, idx) => (
                            <div key={idx} id={`rec-clin-${idx}`} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DED2] shadow-sm">
                              <div className="flex-1">
                                <span className="font-bold text-[#3D342C] block text-base md:text-lg mb-1">{t.name}</span>
                                <p className="text-xs text-[#6B5E52] leading-relaxed">{t.reason}</p>
                              </div>
                              <div>
                                <a
                                  href={getWhatsAppLink(t.name)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full font-bold text-xs text-white bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 transition-all cursor-pointer w-full md:w-auto justify-center tracking-widest uppercase"
                                >
                                  Agendar Consulta
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expert behaviour tip */}
                      <div className="bg-[#F2EBE1] p-4 rounded-xl border border-[#E8DED2] text-[#4A3F35] text-xs flex gap-3 items-start">
                        <AlertCircle className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#3D342C] block mb-0.5">Dica de Ouro de Autocuidado</strong>
                          {recommendation.expertTip}
                        </div>
                      </div>

                    </div>
                  )
                )}
              </div>
            )}

          </div>

          {/* Stepper Buttons layout */}
          {step <= 4 && (
            <div id="step-nav" className="flex justify-between items-center mt-10 border-t border-[#E8DED2] pt-6">
              <button
                id="prev-btn"
                onClick={handlePrev}
                disabled={step === 0}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#8C7A6B] text-[#8C7A6B] text-sm font-semibold transition hover:bg-[#8C7A6B] hover:text-white disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar
              </button>

              {step < 4 ? (
                <button
                  id="next-btn"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 text-white text-sm font-semibold transition cursor-pointer ml-auto"
                >
                  Próximo <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  id="diagnose-submit"
                  onClick={handleDiagnose}
                  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 hover:scale-[1.02] text-white text-sm font-semibold transition shadow-md cursor-pointer ml-auto"
                >
                  <Sparkles className="w-4 h-4" /> Descobrir Minha Rotina
                </button>
              )}
            </div>
          )}

          {step === 5 && !loading && (
            <div className="flex justify-center mt-8 border-t border-[#E8DED2] pt-6">
              <button
                id="reset-diagnose"
                onClick={resetDiagnose}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#8C7A6B] text-[#8C7A6B] hover:bg-[#8C7A6B] hover:text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer"
              >
                <Smile className="w-4 h-4" /> Refazer Diagnóstico
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
