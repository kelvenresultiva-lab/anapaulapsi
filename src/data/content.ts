export const site = {
  name: "Ana Paula",
  fullName: "Ana Paula",
  role: "Psicóloga Clínica",
  crp: "Psicóloga Clínica — CRP 04/00000",
  city: "Curvelo",
  state: "MG",
  address: {
    street: "R. Pacífico Mascarenhas, 89 - Centro, Curvelo - MG, 35790-132",
    cityLine: "Curvelo - MG (mediante agendamento prévio)",
    mapsUrl: "https://www.google.com/maps?q=R.+Pac%C3%ADfico+Mascarenhas%2C+89%2C+Centro%2C+Curvelo+-+MG",
    embedQuery: "R. Pacífico Mascarenhas, 89, Centro, Curvelo - MG",
  },
  phoneDisplay: "(38) 99999-0000",
  whatsappNumber: "5538999990000",
  whatsappMessage:
    "Olá, Ana Paula! Encontrei seu site e gostaria de saber mais sobre o acompanhamento psicológico.",
  email: "contato@anapaulabatista.com.br",
  instagramHandle: "@anapaulabatistapsi",
  instagramUrl: "https://www.instagram.com/anapaulabatistapsi",
  hours: "Segunda a Sexta: 8h às 18h",
  hoursNote: "As consultas necessitam ser previamente agendadas.",
  modality: "Atendimento presencial em Curvelo (MG) e online para todo o Brasil",
  metaDescription:
    "Ana Paula Batista é psicóloga clínica, com atendimento em Curvelo (MG) e online para todo o Brasil, para crianças, adolescentes e adultos.",
} as const;

export function whatsappLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${message}`;
}

export const nav = [
  { label: "Início", href: "#hero" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Como funciona", href: "#processo" },
  { label: "FAQ", href: "#faq" },
] as const;

export const header = {
  ctaLabel: "Agendar consulta",
} as const;

export const hero = {
  eyebrow: "CRP: 04/00000",
  greeting: "",
  name: "Psicóloga Ana Paula Batista",
  subtitle:
    "Ofereço um atendimento psicológico acolhedor, presencial em Curvelo (MG) e online para todo o Brasil.",
  checklist: [
    "Crianças, adolescentes e adultos",
    "Atendimento presencial e online",
    "Escuta acolhedora e sem julgamentos",
  ],
  ctaLabel: "Agendar consulta",
  ctaSecondaryLabel: "Sobre mim",
  ctaSecondaryHref: "#sobre",
  image: {
    src: "/images/hero-fotodela.png",
    alt: "Ana Paula Batista em seu consultório",
  },
} as const;

export const heroStat = {
  value: "+200",
  label: "pessoas acompanhadas",
} as const;

export const heroMobile = {
  eyebrow: "PSICÓLOGA CLÍNICA",
  title: "Ana Paula",
  tagline: "O AUTOCONHECIMENTO É A CHAVE PARA ENTENDERMOS NOSSA MENTE.",
  ctaLabel: "Mais informações",
  image: {
    src: "/images/herolimpa.png",
    alt: "Ana Paula Batista sorrindo em seu consultório",
  },
} as const;

export const specialties = {
  items: [
    {
      icon: "Puzzle",
      title: "Neurodivergência",
      description:
        "Avaliação e acompanhamento psicológico para crianças, adolescentes e adultos neurodivergentes, oferecendo um espaço acolhedor para compreender necessidades individuais, fortalecer potencialidades e orientar as famílias ao longo desse processo.",
    },
    {
      icon: "Baby",
      title: "Infância e Adolescência",
      description:
        "Acompanho crianças e adolescentes em seu desenvolvimento emocional e comportamental, oferecendo um espaço acolhedor para lidar com desafios, fortalecer recursos internos e promover o bem-estar, em parceria com a família e a escola.",
    },
    {
      icon: "Wind",
      title: "Ansiedade e Autoestima",
      description:
        "Através de um acompanhamento acolhedor, auxilio adultos a compreenderem a ansiedade, fortalecerem a autoestima e desenvolverem recursos para enfrentar os desafios do dia a dia com mais equilíbrio e confiança.",
    },
  ],
} as const;

export const about = {
  eyebrow: "SOBRE A ANA PAULA",
  greeting: "Olá, sou",
  title: "Ana Paula",
  paragraphs: [
    "Sou formada em Psicologia, com um olhar clínico voltado ao contexto de vida de cada paciente, e não apenas aos sintomas.",
    "Atendo crianças, adolescentes e adultos — cada acompanhamento é individualizado e ajustado a cada retorno, respeitando o tempo e a história de cada pessoa.",
    "Atendo presencialmente em Curvelo (MG) e, online, para todo o Brasil, sempre com rigor técnico e cuidado humano em cada sessão.",
  ],
  formationCard: {
    label: "Formação",
    text: "Psicologia, com formação complementar em atendimento clínico.",
  },
  image: {
    src: "/images/sobre-ana-paula.png",
    alt: "Retrato de Ana Paula Batista",
  },
} as const;

export const gallery = {
  id: "consultorio",
  eyebrow: "AMBIENTE SEGURO E DE FÁCIL ACESSO",
  title: "Meu espaço de atendimento foi pensado para que você se sinta acolhida",
  images: [
    {
      src: "/images/consultorio-real-1.png",
      alt: "Sala de atendimento, com sofá e poltrona",
    },
    {
      src: "/images/consultorio-real-2.png",
      alt: "Ambiente aconchegante da sala de atendimento",
    },
    {
      src: "/images/consultorio-real-3.png",
      alt: "Cantinho de leitura da sala de atendimento",
    },
  ],
} as const;

export const testimonials = {
  eyebrow: "DEPOIMENTOS",
  title: "Histórias reais de confiança e cuidado",
  isPlaceholder: true,
  items: [
    {
      name: "Camila R.",
      rating: 5,
      text: "A Ana Paula me ajudou a entender coisas que eu carregava há anos sem saber nomear. Me senti acolhida desde a primeira sessão.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "Um espaço de escuta sem julgamentos. Consegui entender melhor minhas próprias reações e hoje lido com mais equilíbrio com o dia a dia.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "O acompanhamento me ajudou a fortalecer minha autoestima e a lidar melhor com a ansiedade. Recomendo muito o trabalho da Ana Paula.",
    },
  ],
} as const;

export const process = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  title: "Um processo claro para sua evolução",
  paragraphs: [
    "Um primeiro encontro para compreender sua história, suas necessidades e o seu momento de vida. A partir daí, construímos juntas um plano terapêutico personalizado, com objetivos claros e passos que fazem sentido para você.",
    "O acompanhamento segue com sessões regulares, com escuta qualificada e direcionamento terapêutico de acordo com suas necessidades, trabalhando sua evolução emocional com mais consciência e autonomia ao longo do tempo.",
  ],
  progressBars: [
    { label: "Escuta acolhedora", value: 100 },
    { label: "Compromisso com o processo", value: 97 },
  ],
  ctaLabel: "Agendar consulta",
  stat: {
    value: "+200",
    label: "Atendimentos realizados",
  },
  image: {
    src: "/images/anapaulafoto.png",
    alt: "Ana Paula Batista em seu consultório",
  },
} as const;

export const reasons = {
  eyebrow: "ALGUNS BENEFÍCIOS DA TERAPIA",
  title: "Ambiente seguro, respeitoso, sigiloso e livre de julgamentos",
  subtitle:
    "A psicoterapia proporciona ao paciente o alcance de inúmeros benefícios, como controle das emoções, melhora nas relações interpessoais e mais qualidade de vida.",
  items: [
    {
      number: "01",
      title: "Controle das emoções",
      description:
        "Um indivíduo com controle emocional é capaz de lidar com os problemas de forma positiva.",
    },
    {
      number: "02",
      title: "Melhora nas relações",
      description:
        "As relações têm impacto em nossa motivação, produtividade e em nossa satisfação.",
    },
    {
      number: "03",
      title: "Diminuição da agressividade",
      description:
        "Novas maneiras de se relacionar irão lhe proporcionar novas experiências sociais.",
    },
    {
      number: "04",
      title: "Diminuição da insônia",
      description: "Quando conseguimos dormir bem, a vida nos agradece.",
    },
  ],
} as const;

export const faq = {
  eyebrow: "DÚVIDAS FREQUENTES",
  title: "Ainda tem dúvidas?",
  featured: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Por que buscar acompanhamento psicológico?",
    paragraphs: [
      "A terapia é um espaço para encontrar mais clareza diante dos seus conflitos e dificuldades, com o apoio de uma profissional. No acompanhamento psicológico, existem técnicas que ajudam cada pessoa a reconhecer o que a tem incomodado no dia a dia.",
      "Esse processo acontece a partir da relação de confiança entre psicóloga e paciente — por isso, é importante encontrar uma profissional qualificada, ética e responsável, com quem você se sinta à vontade.",
    ],
    ctaLabel: "Mais informações",
  },
  items: [
    {
      question: "Como funciona o atendimento online?",
      answer:
        "As consultas online seguem a mesma estrutura das presenciais, com a mesma duração e o mesmo cuidado na avaliação, para pacientes de todo o Brasil.",
    },
    {
      question: "Quanto tempo dura cada sessão?",
      answer:
        "Cada sessão tem duração de cerca de 50 minutos, no mesmo horário combinado semanalmente ou quinzenalmente.",
    },
    {
      question: "Vocês fazem diagnóstico ou passam medicação?",
      answer:
        "Não. Psicólogos não prescrevem medicação — isso é atribuição exclusiva de médicos psiquiatras. O acompanhamento psicológico trabalha por meio de avaliação e escuta, com devolutivas claras sobre o que é observado ao longo do processo.",
    },
    {
      question: "Como sei se preciso de acompanhamento psicológico?",
      answer:
        "Sinais como ansiedade constante, tristeza persistente, dificuldade em lidar com as emoções ou insatisfação com a vida podem indicar que é hora de buscar ajuda. Se algo tem te incomodado no dia a dia, já vale a pena conversar.",
    },
    {
      question: "Como faço para agendar minha primeira sessão?",
      answer:
        "Basta entrar em contato pelo WhatsApp para alinharmos o melhor horário e formato — presencial em Curvelo ou online — para você.",
    },
  ],
} as const;

export const footer = {
  about:
    "Espaço de escuta psicológica com ética, acolhimento e compromisso com a sua singularidade.",
  quickLinksTitle: "Links rápidos",
  hoursTitle: "Horário de atendimento",
  ctaLabel: "Agendar consulta",
  rightsText: `© ${new Date().getFullYear()} ${site.name} — ${site.role}. Todos os direitos reservados.`,
} as const;