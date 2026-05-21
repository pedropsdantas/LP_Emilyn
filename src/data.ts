import { Treatment, Testimonial, InstagramReel } from "./types";

export const TREATMENTS: Treatment[] = [
  {
    id: "limpeza",
    name: "Limpeza de Pele de Alta Performance",
    description: "Higienização profunda combinada com Peeling Ultrassônico e máscara restauradora de luz. Remove impurezas, cravos e desintoxica as células cutâneas.",
    category: "facial",
    duration: "1h 30min",
    benefits: ["Extração indolor de comedões", "Fino afinamento epidérmico", "Renovação celular instantânea", "Pele visivelmente mais iluminada e macia"],
    ctaText: "Quero uma Limpeza de Pele"
  },
  {
    id: "botox",
    name: "Toxina Botulínica (Botox)",
    description: "Aplicação preventiva e corretiva para suavizar rugas dinâmicas da testa, glabela (entre as sobrancelhas) e pés-de-galinha. Aspecto jovem e descansado, sem perder a naturalidade.",
    category: "injetaveis",
    duration: "30min",
    benefits: ["Suaviza rugas frontais e periorbiculares", "Prevenção de vincos permanentes", "Efeito 'lifting' sutil no olhar", "Resultado natural e elegante"],
    ctaText: "Suavizar minhas linhas de expressão"
  },
  {
    id: "labial",
    name: "Preenchimento Labial",
    description: "Escultura labial com Ácido Hialurônico premium. Foco em definir o contorno (arco do cupido), proporcionar simetria, hidratação profunda e volume proporcional.",
    category: "injetaveis",
    duration: "45min",
    benefits: ["Correção de assimetrias", "Definição nítida das bordas labiais", "Efeito gloss permanente e hidratação", "Volume ajustado conforme o visagismo facial"],
    ctaText: "Quero Lábios Hidratados e Definidos"
  },
  {
    id: "microagulhamento",
    name: "Microagulhamento com Drug Delivery",
    description: "Microperfurações cirúrgicas controladas associadas à infusão imediata de fatores de crescimento, vitamina C e ácido hialurônico. Fantástico para cicatrizes de acne, melasma e rejuvenescimento.",
    category: "facial",
    duration: "1h",
    benefits: ["Estímulo massivo de colágeno e elastina", "Clareamento uniforme de manchas e melasma", "Suavização duradoura de cicatrizes comuns de acne", "Melhora drástica na textura dos poros"],
    ctaText: "Agendar Meu Microagulhamento"
  },
  {
    id: "bioestimulador",
    name: "Bioestimuladores de Colágeno",
    description: "Tratamento de alta tecnologia (Radiesse/Sculptra) injetado nas camadas profundas para estimular o próprio organismo a produzir até 400% mais colágeno, combatendo a flacidez facial ou corporal.",
    category: "injetaveis",
    duration: "40min",
    benefits: ["Efeito de sustentação e contorno facial", "Eliminação progressiva da flacidez do rosto e pescoço", "Melhora visível da qualidade e espessura da pele", "Resultados graduais que duram até 24 meses"],
    ctaText: "Restaurar a Firmeza da Minha Pele"
  },
  {
    id: "enzimas",
    name: "Lipo de Alta Definição com Enzimas",
    description: "Aplicação subcutânea de mesclas lipolíticas e firmadoras em pontos específicos de gordura localizada (como papada, abdômen, flancos ou culote). Acelera a queima local sem cortes.",
    category: "corporal",
    duration: "30min",
    benefits: ["Redução imediata de medidas em áreas críticas", "Quebra das células de gordura (adipólise) com segurança", "Auxílio na redução de flacidez concomitante", "Recuperação imediata sem repouso cirúrgico"],
    ctaText: "Eliminar Gordura Localizada"
  },
  {
    id: "drenagem",
    name: "Drenagem Linfática Facial & Corporal",
    description: "Manobras suaves e ritmadas que estimulam o sistema linfático a eliminar o excesso de líquidos, toxinas inflamatórias e edemas locais. Fantástica para desinchar e pós-operatórios.",
    category: "corporal",
    duration: "1h",
    benefits: ["Combate imediato à retenção hídrica", "Alívio de peso corporal e melhora circulatória", "Acelera a eliminação natural de toxinas", "Reduz medidas e modela silhuetas com suavidade"],
    ctaText: "Desinchar e Relaxar"
  },
  {
    id: "harmonizacao",
    name: "Harmonização Facial Individualizada",
    description: "Planejamento estético tridimensional baseado no perfil visagista do paciente. Utiliza pequenos preenchimentos estratégicos de ácido hialurônico em malar, mandíbula, queixo e olheiras.",
    category: "injetaveis",
    duration: "1h 15min",
    benefits: ["Realce de pontos de luz naturais do rosto", "Projeção sutil e elegante do queixo e mandíbula", "Correção profunda do olhar cansado nas olheiras", "Harmonização geral que respeita suas feições nativas"],
    ctaText: "Solicitar Análise de Harmonização"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana Alencar",
    treatment: "Limpeza de Pele Profunda & Botox",
    comment: "A Dra. Emilyn é extremamente minuciosa e atenciosa! Minha limpeza de pele não doeu nada e o resultado do botox ficou super natural. Todo mundo diz que pareço mais descansada e radiante sem nem saber que apliquei nada!",
    rating: 5,
    date: "14/05/2026",
    avatarUrl: "https://picsum.photos/seed/mari/100/100"
  },
  {
    id: "t2",
    name: "Beatriz Siqueira",
    treatment: "Preenchimento Labial",
    comment: "Sempre tive muito medo de ficar parecendo artificial, mas a Emilyn explicou tudo, analisou meu rosto e o resultado ficou divino! Meus lábios estão contornados, volumosos na medida certa e super hidratados.",
    rating: 5,
    date: "03/05/2026",
    avatarUrl: "https://picsum.photos/seed/bea/100/100"
  },
  {
    id: "t3",
    name: "Juliana Santos",
    treatment: "Protocolo Melasma e Microagulhamento",
    comment: "Sofria com manchas de melasma há anos após a gestação. Com 3 sessões do protocolo que a Dra. Emilyn desenhou para mim e a rotina de homecare adequada, minhas manchas clarearam quase 90%! Recuperei minha autoestima.",
    rating: 5,
    date: "18/04/2026",
    avatarUrl: "https://picsum.photos/seed/juli/100/100"
  }
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: "reel1",
    title: "✨ A Ordem Correta do seu Skincare Matinal!",
    views: "24.5k",
    durationString: "0:45",
    likes: "3.2k",
    takeaways: [
      "1. Gel de limpeza (remover oleosidade noturna)",
      "2. Tônico hidratante ou água termal",
      "3. Sérum nutritivo concentrado (Vitamina C ou Ácido Hialurônico)",
      "4. Protetor Solar (o passo mais importante, mesmo em dias nublados!)"
    ],
    suggestedTreatmentId: "limpeza",
    videoTips: [
      "Secar o rosto dando batidinhas leves com uma toalha limpa, nunca esfregar.",
      "Aguardar 1 a 2 minutos entre o sérum e o protetor solar para melhor absorção.",
      "Não esquecer de aplicar o restante do produto no pescoço e colo!"
    ]
  },
  {
    id: "reel2",
    title: "💋 Mitos e Verdades sobre Preenchimento Labial",
    views: "52.1k",
    durationString: "1:00",
    likes: "6.8k",
    takeaways: [
      "Mito: 'Lábios vão ficar gigantes para sempre'. Ácido hialurônico é reabsorvido pelo corpo após 10 a 12 meses.",
      "Verdade: O preenchimento além de volume, promove hidratação profunda que suaviza rachaduras labiais.",
      "Mito: 'O procedimento é insuportável'. Usamos anestésicos de grau clínico para conforto absoluto."
    ],
    suggestedTreatmentId: "labial",
    videoTips: [
      "A primeira semana apresenta inchaço normal que regride rapidamente.",
      "Beba bastante água nos dias seguintes, pois o ácido hialurônico capta água para dar volume.",
      "Evite massagens intensas e batom nas primeiras 24 horas."
    ]
  },
  {
    id: "reel3",
    title: "💉 Botox Preventivo: Vale a pena fazer aos 25 anos?",
    views: "38.9k",
    durationString: "0:50",
    likes: "4.5k",
    takeaways: [
      "Sim! Evita que as linhas finas de expressão se tornem vincos profundos e rugas estáticas na testa.",
      "Utiliza doses menores direcionadas apenas aos músculos de expressão excessiva.",
      "Mantém as sobrancelhas levantadas e expressivas sem o aspecto 'congelado'."
    ],
    suggestedTreatmentId: "botox",
    videoTips: [
      "A aplicação é super rápida (cerca de 15 minutos).",
      "O efeito completo surge entre 7 a 15 dias após a aplicação.",
      "Evite deitar-se ou massagear o rosto pelas 4 horas seguintes ao procedimento."
    ]
  }
];

export const FAQS = [
  {
    question: "Como faço para agendar uma avaliação com a Dra. Emilyn?",
    answer: "O agendamento é feito de forma simples e rápida através do nosso WhatsApp oficial ou preenchendo o diagnóstico inteligente de pele na nossa página. Nós avaliaremos suas queixas e reservaremos um horário sob medida."
  },
  {
    question: "Os procedimentos são doloridos?",
    answer: "A prioridade número um é o seu conforto absoluto! Para todos os procedimentos injetáveis (como Botox ou preenchimento) ou tratamentos profundos (como microagulhamento), utilizamos anestésicos tópicos potentes de grau médico que reduzem o desconforto a níveis mínimos."
  },
  {
    question: "O que é o Botox preventivo?",
    answer: "É a aplicação da toxina botulínica antes que as rugas se tornem visíveis com o rosto em repouso. Ele relaxa a musculatura levemente, evitando que o franzir repetido da testa e olhos parta as fibras de colágeno, criando rugas profundas no futuro."
  },
  {
    question: "A clínica aceita cartão ou parcelamento?",
    answer: "Sim! Facilitamos o pagamento em dinheiro, PIX (com desconto especial) ou parcelado no cartão de crédito em até 6x para que você possa investir na sua autoestima com tranquilidade."
  }
];
