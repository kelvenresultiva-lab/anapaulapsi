// Todo o conteúdo textual e de contato do site fica centralizado aqui.
// Edite os valores abaixo para customizar o site sem precisar mexer nos componentes.
//
// ATENÇÃO — PLACEHOLDERS PENDENTES (substituir antes de publicar):
// - crp: número de CRP inventado, só para não deixar o campo vazio.
//   CRP é obrigatório e fiscalizado — publicar um número falso é grave.
// - phoneWhatsapp / phoneDisplay / email: dados de exemplo (endereço e
//   Instagram já são os reais, confirmados pela cliente).
// - specialtiesContent: itens ajustados para refletir que ela atende
//   crianças, adolescentes e adultos (confirmado), com um item de
//   neurodivergência/TEA-TDAH inferido dos emojis 🧩🌈 usados por ela —
//   AINDA preciso confirmar a abordagem teórica e o foco clínico exato.
// - aboutContent (formação/atuação/biografia): texto genérico, não é a
//   biografia real dela.
// - testimonialsContent: depoimentos FICTÍCIOS — ver aviso na seção.
// - reasonsContent / stats do Hero: números de exemplo.
// - conveniosContent: não sabemos se ela atende convênio, texto neutro.

const addressLine1 = "R. Pacífico Mascarenhas, 89";
const addressLine2 = "Centro, Curvelo - MG, 35790-132";
const addressLandmark = "mediante agendamento prévio";
const fullAddress = `${addressLine1}, ${addressLine2}`;

export const siteConfig = {
  professionalName: "Ana Paula Batista",
  professionalNameShort: "Ana Paula",
  crp: "CRP 04/00000",
  title: "Psicóloga Clínica",
  city: "Curvelo - MG",
  phoneDisplay: "(38) 99999-0000",
  phoneWhatsapp: "5538999990000",
  email: "contato@anapaulabatista.com.br",
  instagramHandle: "@anapaulabatistapsi",
  instagramUrl: "https://www.instagram.com/anapaulabatistapsi",
  addressLine1,
  addressLine2,
  addressLandmark,
  mapsLinkUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
} as const;

export const navLinks = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Como funciona", href: "#abordagem" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const headerCta = {
  label: "AGENDAR CONSULTA",
  href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
};

export const heroContent = {
  eyebrow: "PSICÓLOGA CLÍNICA",
  displayName: "Ana Paula",
  bullets: [
    "Atendimento psicológico acolhedor.",
    "Atendimento presencial em Curvelo - MG e online.",
    "Atendimento online para todo o Brasil.",
  ],
  primaryCta: {
    label: "AGENDAR CONSULTA",
    href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
  },
  secondaryCta: {
    label: "SOBRE MIM",
    href: "#sobre",
  },
  image: {
    src: "/images/hero,fotodela.png",
    alt: "Ana Paula Batista em seu consultório",
  },
  mobileTagline: "O autoconhecimento é a chave para entendermos nossa mente.",
  mobileCta: {
    label: "MAIS INFORMAÇÕES",
    href: `https://wa.me/${siteConfig.phoneWhatsapp}`,
  },
  mobileImage: {
    src: "/images/herolimpa.png",
    alt: "Ana Paula Batista sorrindo em seu consultório",
  },
};

export const introContent = {
  heading: "Você sente que está funcionando, mas não está vivendo bem?",
  paragraph:
    "Reconhecer os sinais de ansiedade, insegurança ou esgotamento é o primeiro passo. O acompanhamento psicológico te ajuda a entender o que você sente e retomar o equilíbrio emocional.",
  image: {
    src: "/images/intro-dor.png",
    alt: "Mulher e homem exaustos, com a cabeça sobrecarregada de pensamentos",
  },
  symptoms: [
    "Ansiedade no dia a dia",
    "Insegurança e autocrítica",
    "Cansaço que não passa",
    "Dificuldade em relacionamentos",
    "Pensamentos acelerados",
    "Sensação de estar sempre no limite",
    "Dificuldade de concentração",
    "Baixa autoestima",
    "Medo de decepcionar os outros",
    "Dificuldade em dizer não",
  ],
  footnote:
    "Estes sinais não são falhas de caráter, mas indícios de que sua mente pede cuidado. Com o acompanhamento certo, é possível sentir alívio e retomar o controle da sua vida.",
  ctaLabel: "AGENDAR PRIMEIRA CONSULTA",
};

export const processContent = {
  eyebrow: `${siteConfig.professionalNameShort.toUpperCase()}   |   ${siteConfig.title.toUpperCase()}`,
  heading: "Um processo claro para sua evolução",
  subtext:
    "Quatro etapas que estruturam o cuidado psicológico — da escuta inicial à evolução documentada ao longo do tempo.",
  image: {
    src: "/images/anapaulafoto.png",
    alt: "Ana Paula Batista em seu consultório",
  },
  items: [
    {
      icon: "hand-heart",
      title: "Escuta Inicial",
      description:
        "Primeira conversa para compreender sua história, demandas e momento de vida. Um espaço seguro para começar.",
    },
    {
      icon: "users",
      title: "Acompanhamento Contínuo",
      description:
        "Sessões com escuta qualificada, acolhimento e direcionamento terapêutico de acordo com suas necessidades.",
    },
    {
      icon: "clipboard-check",
      title: "Plano Terapêutico",
      description:
        "O processo é construído com clareza, respeitando seus objetivos, seu ritmo e aquilo que faz sentido para você.",
    },
    {
      icon: "sprout",
      title: "Evolução no Processo",
      description:
        "Ao longo do acompanhamento, trabalhamos sua evolução emocional com mais consciência, autonomia e consistência.",
    },
  ],
};

// ATENÇÃO: foco clínico ainda não confirmado em detalhe pela Ana Paula —
// ver aviso no topo do arquivo. O item de neurodivergência foi inferido
// dos emojis 🧩🌈 que ela usa; confirmar antes de publicar.
export const specialtiesContent = {
  heading: "Quem eu acompanho",
  subtext:
    "Atendimento para crianças, adolescentes e adultos — cada acompanhamento é individualizado, sem fórmulas prontas.",
  ctaLabel: "AGENDAR AVALIAÇÃO CLÍNICA",
  items: [
    {
      icon: "puzzle",
      tag: "TEA, TDAH E NEURODIVERGÊNCIA",
      title: "Neurodivergência",
      description:
        "Avaliação e acompanhamento afirmativo para crianças, adolescentes e adultos neurodivergentes e suas famílias.",
    },
    {
      icon: "baby",
      tag: "INFÂNCIA E ADOLESCÊNCIA",
      title: "Infância e Adolescência",
      description:
        "Acompanhamento do desenvolvimento emocional e comportamental, em parceria com a família e a escola.",
    },
    {
      icon: "wind",
      tag: "ANSIEDADE E AUTOESTIMA",
      title: "Ansiedade e Autoestima",
      description:
        "Acompanhamento para adultos que buscam lidar com a ansiedade do dia a dia e fortalecer a autoestima.",
    },
  ],
};

// ATENÇÃO: biografia, formação e atuação ainda são texto genérico —
// ver aviso no topo do arquivo.
export const aboutContent = {
  eyebrow: "SOBRE A ANA PAULA",
  heading: "Psicologia que respeita a complexidade da sua história.",
  image: {
    src: "/images/sobre-ana-paula.png",
    alt: "Retrato de Ana Paula Batista",
  },
  paragraphs: [
    "Sou formada em Psicologia, com um olhar clínico voltado ao contexto de vida de cada paciente, e não apenas aos sintomas.",
    "Atendo crianças, adolescentes e adultos — cada acompanhamento é individualizado e ajustado a cada retorno, respeitando o tempo e a história de cada pessoa.",
    "Atendo presencialmente em Curvelo - MG e, online, para todo o Brasil, sempre com rigor técnico e cuidado humano em cada sessão.",
  ],
  formationHeading: "Formação",
  formation: [
    "Psicologia",
    "Formação complementar em atendimento clínico",
  ],
  actingHeading: "Atuação",
  acting: [
    "Membro do CRP — Conselho Regional de Psicologia",
    "Atendimento presencial em Curvelo - MG e online para todo o Brasil",
  ],
};

export const galleryContent = {
  eyebrow: "AMBIENTE SEGURO E DE FÁCIL ACESSO",
  heading: "Meu espaço de atendimento foi pensado para que você se sinta acolhida.",
  subtext: `O consultório fica no ${siteConfig.addressLine2.split(",")[0]} de ${siteConfig.city}, ${siteConfig.addressLandmark}.`,
  images: [
    { src: "/images/consultorio-real-1.png", alt: "Sala de atendimento, com sofá e poltrona" },
    { src: "/images/consultorio-real-2.png", alt: "Ambiente aconchegante da sala de atendimento" },
    { src: "/images/consultorio-real-3.png", alt: "Cantinho de leitura da sala de atendimento" },
  ],
};

// ATENÇÃO: depoimentos fictícios preenchidos apenas para não deixar a seção
// vazia. Substituir pelos depoimentos reais antes de publicar o site.
export const testimonialsContent = {
  heading: "Histórias reais de confiança e cuidado",
  subtext: "Veja o que dizem os pacientes que confiaram no seu cuidado e comprometimento.",
  cardHeading: "O que dizem sobre o atendimento",
  reviews: [
    {
      name: "Camila R.",
      timeAgo: "há 3 semanas",
      rating: 5,
      text: "A Ana Paula me ajudou a entender coisas que eu carregava há anos sem saber nomear. Me senti acolhida desde a primeira sessão.",
    },
  ],
};

export const reasonsContent = {
  eyebrow: "POR QUE COMEÇAR COMIGO",
  heading: "Quatro motivos para começar agora",
  subtext:
    "Psicoterapia de verdade não é sobre respostas prontas — é sobre ser ouvida com atenção, tempo e cuidado em cada etapa do processo.",
  items: [
    {
      number: "01",
      icon: "clock",
      title: "Tempo de escuta real",
      description:
        "Cada sessão tem a duração combinada, sem pressa e sem hora marcada de forma corrida. Você fala, eu escuto de verdade.",
    },
    {
      number: "02",
      icon: "file-check",
      title: "Devolutiva por escrito",
      description:
        "Ao final do processo de avaliação, você recebe um documento com minhas percepções e o direcionamento do acompanhamento.",
    },
    {
      number: "03",
      icon: "hand-heart",
      title: "Abordagem com critério",
      description:
        "Cada técnica é escolhida com base no que faz sentido para você, com revisão constante ao longo do processo.",
    },
    {
      number: "04",
      icon: "shield-check",
      title: "Retorno sempre garantido",
      description:
        "Encaixe prioritário quando você precisar. Você não fica sem suporte entre uma sessão e outra.",
    },
  ],
};

// ATENÇÃO: sem confirmação sobre convênio — texto neutro (particular +
// recibo para reembolso). Ajustar se ela aceitar convênio.
export const faqContent = {
  eyebrow: "DÚVIDAS FREQUENTES",
  heading: "Dúvidas frequentes",
  questions: [
    {
      question: "A Ana Paula atende convênio?",
      answer:
        "O atendimento é particular, com emissão de recibo para solicitar reembolso junto ao seu plano de saúde, quando aplicável.",
    },
    {
      question: "Como funciona a consulta online?",
      answer:
        "As consultas online seguem a mesma estrutura das presenciais, com a mesma duração e o mesmo cuidado na avaliação, para pacientes de todo o Brasil.",
    },
    {
      question: "Com que frequência são as consultas de retorno?",
      answer:
        "Varia conforme o quadro clínico, mas em geral as sessões acontecem semanalmente ou quinzenalmente, com encaixe prioritário se necessário.",
    },
    {
      question: "Qual a duração do tratamento?",
      answer:
        "Cada caso é único. O tempo de acompanhamento é definido junto com você, com metas claras revisadas a cada retorno.",
    },
    {
      question: "Onde fica o consultório?",
      answer: `${siteConfig.addressLine1}, ${siteConfig.addressLine2}. Consultas online para pacientes de todo o Brasil.`,
    },
    {
      question: "A Ana Paula atende crianças e adolescentes?",
      answer:
        "Sim. O atendimento é oferecido para crianças, adolescentes e adultos, com abordagem adequada a cada fase do desenvolvimento.",
    },
  ],
};

export const footerContent = {
  quickLinks: [
    { label: "Home", href: "#topo" },
    { label: "Sobre mim", href: "#sobre" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "FAQ", href: "#faq" },
  ],
  schedule: {
    heading: "Horário de Atendimento",
    lines: ["Segunda a Sexta: 8h às 18h"],
    note: "As consultas necessitam ser previamente agendadas.",
  },
  ctaLabel: "AGENDAR CONSULTA",
};
