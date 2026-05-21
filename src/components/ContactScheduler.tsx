import React, { useState } from "react";
import { MessageSquare, Calendar, Clock, MapPin, Smile, CheckCircle } from "lucide-react";
import { TREATMENTS } from "../data";

export default function ContactScheduler() {
  const [formData, setFormData] = useState({
    name: "",
    treatmentId: TREATMENTS[0].id,
    date: "",
    timeSlot: "manha",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    { value: "manha", label: "Período da Manhã (08h - 12h)" },
    { value: "tarde", label: "Período da Tarde (13h - 19h)" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getWhatsAppMessageLink = () => {
    const selectedTreatment = TREATMENTS.find((t) => t.id === formData.treatmentId)?.name || TREATMENTS[0].name;
    const timeLabel = formData.timeSlot === "manha" ? "pela manhã (08h - 12h)" : "pela tarde (13h - 19h)";
    
    const formattedDate = formData.date 
      ? new Date(formData.date).toLocaleDateString("pt-BR", { timeZone: "UTC" })
      : "data a combinar";

    const text = encodeURIComponent(
      `Olá Dra. Emilyn! Me chamo *${formData.name}* e gostaria de pré-agendar o tratamento de *${selectedTreatment}*.\n\n` +
      `- *Data Preferencial*: ${formattedDate}\n` +
      `- *Período Preferencial*: ${timeLabel}\n` +
      (formData.message ? `- *Observações*: ${formData.message}\n` : "") +
      `\nGostaria de confirmar os valores e horários disponíveis para esta semana!`
    );

    return `https://api.whatsapp.com/send?phone=5579999999999&text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;
    setSubmitted(true);
    // Open the WhatsApp redirection link in a new window/tab
    window.open(getWhatsAppMessageLink(), "_blank", "referrer");
  };

  return (
    <div id="agendamento" className="bg-[#FAF7F2] py-20 px-4 border-b border-[#E8DED2] scroll-mt-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Card Left: Local info and instructions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#8C7A6B] bg-[#8C7A6B]/15 uppercase border border-[#E8DED2] mb-3 font-sans">
                <Calendar className="w-3.5 h-3.5 text-[#8C7A6B]" /> Canal de Atendimento
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#3D342C] tracking-tight mb-4 leading-tight">
                Pronta para Transformar Sua Autoestima?
              </h2>
              <p className="text-sm md:text-base text-[#6B5E52] leading-relaxed">
                Preencha as preferências de data e procedimento abaixo para gerar sua ficha de atendimento. Você será redirecionada imediatamente para falar com a nossa equipe de forma direta, rápida e prioritária.
              </p>
            </div>

            <div className="space-y-4">
              {/* Point 1 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-[#E8DED2] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#8C7A6B]/15 text-[#8C7A6B] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-[#3D342C] block text-sm font-semibold">Avaliação Personalizada</strong>
                  <span className="text-xs text-[#6B5E52] leading-relaxed">Cada detalhe do seu rosto e rotina analisados detalhadamente via visagismo.</span>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-[#E8DED2] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#8C7A6B]/15 text-[#8C7A6B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-[#3D342C] block text-sm font-semibold">Espaço Confortável & Seguro</strong>
                  <span className="text-xs text-[#6B5E52] leading-relaxed">Clínica moderna no Centro Médico Jardins com estacionamento privativo e recepção aconchegante.</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E8DED2] pt-6 flex items-center gap-2 text-xs text-[#6B5E52]">
              <Smile className="w-5 h-5 text-[#8C7A6B] shrink-0" />
              <span>Agendando, nossa assistente médica enviará os horários livres.</span>
            </div>
          </div>

          {/* Card Right: Booking interactive sheet */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 md:p-10 shadow-lg border border-[#E8DED2]">
            {submitted ? (
              <div id="scheduler-success" className="text-center py-12 space-y-4 animate-scaleUp">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif text-[#3D342C] font-semibold">Ficha Pré-Agendada!</h3>
                <p className="text-sm text-[#6B5E52] max-w-md mx-auto leading-relaxed">
                  Caso o direcionamento automático para o WhatsApp não tenha ocorrido, você pode clicar no botão abaixo para dar início ao seu atendimento prioritário:
                </p>
                <div className="pt-4 max-w-sm mx-auto">
                  <a
                    href={getWhatsAppMessageLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5" /> Reabrir WhatsApp Oficial
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#8C7A6B] hover:underline cursor-pointer block mx-auto"
                  >
                    Fazer outra solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-[#3D342C] mb-2">
                    Solicitar Horário da Sua Consulta
                  </h3>
                  <p className="text-xs text-[#6B5E52] leading-relaxed">
                    Escolha o procedimento de interesse e nós indicaremos as maiores especialidades recomendadas pela Dra. Emilyn.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold text-[#3D342C] uppercase tracking-wider">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Amanda Silva Santos"
                      className="w-full text-sm px-4 py-3 rounded-xl border border-[#E8DED2] focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] focus:outline-none transition bg-[#FAF7F2]"
                    />
                  </div>

                  {/* Treatment Selection dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="treatmentId" className="block text-xs font-bold text-[#3D342C] uppercase tracking-wider">
                      Tratamento Desejado
                    </label>
                    <select
                      id="treatmentId"
                      name="treatmentId"
                      value={formData.treatmentId}
                      onChange={handleInputChange}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-[#E8DED2] focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] focus:outline-none transition bg-[#FAF7F2] cursor-pointer"
                    >
                      {TREATMENTS.map((treatment) => (
                        <option key={treatment.id} value={treatment.id}>
                          {treatment.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date selection picker */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-xs font-bold text-[#3D342C] uppercase tracking-wider">
                      Data de Preferência
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-[#E8DED2] focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] focus:outline-none transition bg-[#FAF7F2]"
                    />
                  </div>

                  {/* Time slots radios */}
                  <div className="space-y-2">
                    <label htmlFor="timeSlot" className="block text-xs font-bold text-[#3D342C] uppercase tracking-wider">
                      Melhor Período
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-[#E8DED2] focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] focus:outline-none transition bg-[#FAF7F2] cursor-pointer"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts.value} value={ts.value}>
                          {ts.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Text Message notes */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-[#3D342C] uppercase tracking-wider">
                    Dúvidas ou Observações Especiais (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ex: Tenho melasma em bochechas ou gostaria de saber se amamentando posso fazer o peeling..."
                    className="w-full text-sm px-4 py-3 rounded-xl border border-[#E8DED2] focus:border-[#8C7A6B] focus:ring-1 focus:ring-[#8C7A6B] focus:outline-none transition bg-[#FAF7F2] resize-none"
                  ></textarea>
                </div>

                <button
                  id="submit-agendamento"
                  type="submit"
                  className="w-full bg-[#8C7A6B] hover:bg-[#8C7A6B]/90 text-white py-4 px-6 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#8C7A6B]/20 cursor-pointer flex items-center justify-center gap-2 transform hover:scale-[1.01]"
                >
                  <MessageSquare className="w-5 h-5 text-[#FAF7F2]" /> Enviar Ficha via WhatsApp
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
