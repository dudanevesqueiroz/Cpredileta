// Search Engine para pesquisa em tempo real no site

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  page: string;
  section: string;
  sectionId?: string;
  keywords: string[];
  path: string;
}

// Índice completo de conteúdo pesquisável do site
export const searchIndex: SearchResult[] = [
  // HOME PAGE
  {
    id: "home-hero",
    title: "Clínica Predileta - Dentista em Famalicão",
    description: "O seu sorriso é a nossa prioridade. Clínica dentária moderna em Famalicão com especialistas qualificados.",
    page: "Início",
    section: "Página Inicial",
    keywords: ["dentista", "famalicão", "clínica", "sorriso", "dentes", "dentária"],
    path: "/"
  },
  {
    id: "home-appointment",
    title: "Marcar Consulta",
    description: "Agende a sua consulta de avaliação dentária online de forma rápida e fácil.",
    page: "Início",
    section: "Marcação de Consulta",
    sectionId: "marcar-consulta",
    keywords: ["marcar", "consulta", "agendar", "marcação", "agendamento", "avaliação"],
    path: "/#marcar-consulta"
  },
  {
    id: "home-contact",
    title: "Contactos",
    description: "Entre em contacto connosco por telefone, email ou visite-nos em Famalicão.",
    page: "Início",
    section: "Contactos",
    sectionId: "contactos",
    keywords: ["contacto", "telefone", "email", "morada", "localização", "famalicão"],
    path: "/#contactos"
  },

  // ESPECIALIDADES
  {
    id: "esp-dentisteria",
    title: "Clínica Geral - Médico Dentista",
    description: "Cuidados dentários completos, tratamento de cáries, restaurações e extrações.",
    page: "Especialidades",
    section: "Clínica Geral",
    keywords: ["dentisteria", "clínica geral", "médico dentista", "dentista", "cárie", "obturação", "restauração", "dentes", "tratamento", "extração"],
    path: "/especialidades#clinica-geral"
  },
  {
    id: "esp-limpeza",
    title: "Limpeza Dentária e Prevenção",
    description: "Limpeza profissional, destartarização e prevenção de cáries.",
    page: "Especialidades",
    section: "Limpeza Dentária",
    keywords: ["limpeza", "destartarização", "tártaro", "gengiva", "higiene", "prevenção", "limpeza dentária"],
    path: "/especialidades#limpeza-dentaria"
  },
  {
    id: "esp-ortodontia",
    title: "Ortodontia - Colocar Aparelho",
    description: "Aparelhos dentários fixos e removíveis para correção do alinhamento dentário.",
    page: "Especialidades",
    section: "Ortodontia",
    keywords: ["ortodontia", "aparelho", "colocar aparelho", "bracket", "alinhamento", "dentes tortos", "correção"],
    path: "/especialidades#ortodontia-colocar"
  },
  {
    id: "esp-alinhadores",
    title: "Alinhamento Dentário",
    description: "Alinhadores invisíveis modernos e discretos para sorrisos perfeitos.",
    page: "Especialidades",
    section: "Alinhamento Dentário",
    keywords: ["alinhadores", "invisível", "transparente", "alinhamento", "ortodontia invisível"],
    path: "/especialidades#alinhamento-dentario"
  },
  {
    id: "esp-clareamento",
    title: "Branqueamento Dentário",
    description: "Branqueamento profissional para um sorriso mais branco e luminoso.",
    page: "Especialidades",
    section: "Branqueamento Dentário",
    keywords: ["clareamento", "branqueamento", "branco", "dentes brancos", "estética", "sorriso", "preço clareamento"],
    path: "/especialidades#branqueamento-dentario"
  },
  {
    id: "esp-estetica",
    title: "Medicina Dentária Estética",
    description: "Facetas, lentes de contacto dentárias e reabilitação estética do sorriso.",
    page: "Especialidades",
    section: "Estética Dentária",
    keywords: ["estética", "facetas", "lentes de contacto", "sorriso", "estético", "reabilitação"],
    path: "/especialidades#medicina-dentaria"
  },

  // PREÇOS
  {
    id: "precos-page",
    title: "Preços e Formas de Pagamento",
    description: "Consulte os nossos preços transparentes e opções de pagamento faseado.",
    page: "Preços",
    section: "Preços",
    keywords: ["preço", "custo", "valor", "pagamento", "faseado", "financiamento"],
    path: "/acordos-precos"
  },
  {
    id: "precos-consulta",
    title: "Consulta de Avaliação",
    description: "Primeira consulta com avaliação completa e plano de tratamento.",
    page: "Preços",
    section: "Consultas",
    keywords: ["consulta", "avaliação", "primeira consulta", "preço consulta"],
    path: "/acordos-precos#consultas"
  },
  {
    id: "precos-limpeza",
    title: "Limpeza Dentária",
    description: "Destartarização e polimento profissional dos dentes.",
    page: "Preços",
    section: "Higiene Oral",
    keywords: ["limpeza", "preço limpeza", "destartarização", "valor limpeza"],
    path: "/acordos-precos#limpeza"
  },
  {
    id: "precos-clareamento",
    title: "Clareamento Dentário",
    description: "Tratamento de branqueamento profissional em consultório.",
    page: "Preços",
    section: "Estética Dentária",
    keywords: ["clareamento", "branqueamento", "preço clareamento", "quanto custa"],
    path: "/acordos-precos#clareamento"
  },
  {
    id: "precos-aparelho",
    title: "Aparelho Dentário",
    description: "Ortodontia com aparelhos fixos ou removíveis.",
    page: "Preços",
    section: "Ortodontia",
    keywords: ["aparelho", "ortodontia", "preço aparelho", "colocar aparelho", "bracket"],
    path: "/acordos-precos#aparelho"
  },

  // SOBRE NÓS / HISTÓRIA
  {
    id: "historia-clinica",
    title: "História da Clínica Predileta",
    description: "Conheça a nossa história e evolução ao longo dos anos em Famalicão.",
    page: "Sobre Nós",
    section: "A Nossa História",
    keywords: ["história", "sobre", "clínica", "quem somos", "tradição", "experiência"],
    path: "/historia"
  },
  {
    id: "historia-equipa",
    title: "A Nossa Equipa",
    description: "Equipa de profissionais qualificados liderada pela Doutora Dora.",
    page: "Sobre Nós",
    section: "Equipa Médica",
    keywords: ["equipa", "médicos", "dentistas", "doutora dora", "profissionais", "staff"],
    path: "/historia#equipa"
  },
  {
    id: "historia-doutora-dora",
    title: "Doutora Dora - Diretora Clínica",
    description: "Médica dentista com vasta experiência e formação especializada.",
    page: "Sobre Nós",
    section: "Doutora Dora",
    keywords: ["doutora dora", "diretora", "médica dentista", "especialista"],
    path: "/historia#doutora-dora"
  },
  {
    id: "historia-valores",
    title: "Valores e Missão",
    description: "Compromisso com a qualidade, ética profissional e satisfação do paciente.",
    page: "Sobre Nós",
    section: "Valores",
    keywords: ["valores", "missão", "compromisso", "qualidade", "ética"],
    path: "/historia#valores"
  },

  // ANTES E DEPOIS
  {
    id: "antes-depois",
    title: "Casos Clínicos - Antes e Depois",
    description: "Veja os resultados dos nossos tratamentos através de casos reais.",
    page: "Casos Clínicos",
    section: "Galeria",
    keywords: ["antes", "depois", "resultados", "casos", "transformação", "galeria"],
    path: "/antes-depois"
  },

  // CONTACTOS
  {
    id: "contactos-page",
    title: "Contactos e Localização",
    description: "Telefone, email, morada e horário de funcionamento da clínica.",
    page: "Contactos",
    section: "Contactos",
    keywords: ["contacto", "telefone", "email", "morada", "horário", "localização"],
    path: "/contactos"
  },
  {
    id: "contactos-horario",
    title: "Horário de Funcionamento",
    description: "Horário de atendimento de segunda a sexta-feira.",
    page: "Contactos",
    section: "Horário",
    keywords: ["horário", "horas", "aberto", "funcionamento", "atendimento"],
    path: "/contactos#horario"
  },
  {
    id: "contactos-morada",
    title: "Morada em Famalicão",
    description: "R. Dr. José Barbosa de Castro Vizela, Famalicão",
    page: "Contactos",
    section: "Localização",
    keywords: ["morada", "localização", "endereço", "famalicão", "onde fica", "como chegar"],
    path: "/contactos#morada"
  }
];

/**
 * Pesquisa no índice de conteúdo
 * @param query - termo de pesquisa
 * @returns array de resultados ordenados por relevância
 */
export function searchContent(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  const results = searchIndex
    .map(item => {
      let score = 0;

      // Pesquisa no título (peso maior)
      if (item.title.toLowerCase().includes(normalizedQuery)) {
        score += 100;
      }
      queryWords.forEach(word => {
        if (item.title.toLowerCase().includes(word)) {
          score += 30;
        }
      });

      // Pesquisa na descrição
      if (item.description.toLowerCase().includes(normalizedQuery)) {
        score += 50;
      }
      queryWords.forEach(word => {
        if (item.description.toLowerCase().includes(word)) {
          score += 15;
        }
      });

      // Pesquisa nas keywords (muito relevante)
      item.keywords.forEach(keyword => {
        if (keyword.includes(normalizedQuery)) {
          score += 80;
        }
        queryWords.forEach(word => {
          if (keyword.includes(word)) {
            score += 25;
          }
        });
      });

      // Pesquisa parcial (prefixo) - "dent" encontra "dentária"
      item.keywords.forEach(keyword => {
        queryWords.forEach(word => {
          if (keyword.startsWith(word) || word.startsWith(keyword)) {
            score += 10;
          }
        });
      });

      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8); // Limitar a 8 resultados

  return results;
}

/**
 * Navega para uma secção específica com scroll suave
 * @param path - caminho para navegar (ex: "/especialidades#ortodontia")
 */
export function navigateToSection(path: string) {
  const [pathname, hash] = path.split('#');

  // Se for a mesma página, fazer scroll direto
  if (window.location.pathname === pathname || (!pathname && hash)) {
    const element = document.getElementById(hash || '');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });

      // Highlight temporário da secção
      highlightSection(element);
    }
  } else {
    // Se for outra página, navegar e depois fazer scroll
    window.location.href = path;
  }
}

/**
 * Destaca temporariamente uma secção
 * @param element - elemento HTML a destacar
 */
export function highlightSection(element: HTMLElement) {
  // Adicionar classe de highlight
  element.style.transition = 'all 0.6s ease';
  element.style.backgroundColor = 'rgba(41, 52, 183, 0.08)';
  element.style.borderRadius = '16px';
  element.style.padding = '8px';

  // Remover highlight após 2 segundos
  setTimeout(() => {
    element.style.backgroundColor = '';
    element.style.padding = '';
    setTimeout(() => {
      element.style.transition = '';
    }, 600);
  }, 2000);
}
