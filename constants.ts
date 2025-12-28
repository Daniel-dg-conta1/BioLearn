import { NavItem, User, Stat, Module, Term, Question, NewsItem, Discussion } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Início', icon: 'dashboard' },
  { id: 'modules', label: 'Módulos', icon: 'book' },
  { id: 'glossary', label: 'Glossário', icon: 'menu_book' }, // Added for navigation
  { id: 'quiz-creator', label: 'Gerador', icon: 'edit_note' }, // Teacher tool
  { id: 'games', label: 'Games', icon: 'stadia_controller' },
  { id: 'downloads', label: 'Downloads', icon: 'download' },
  { id: 'news', label: 'Notícias', icon: 'newspaper' },
  { id: 'community', label: 'Comunidade', icon: 'groups' },
];

export const CURRENT_USER: User = {
  name: "Alex Morgan",
  role: "Graduação Biologia",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrwv6rWlqqj2EHwKuf4fc4BnSxXLxgPMhDPsqVqbEXlp68xLesG5B9PmVmFKbS3m_DmZrFV6jqhJYzvSd6MWLvIZoAPYxA6rUf1AWU-JLRk0D_p7UcxqNnNC2lw3SK_f7N0A47pKpETASpo0Swkdab_ghoP4Tu9dc_z4PzVjQ0vd_xmv_7UdD1J8KT0Q1hPK6ExVqCaWznp-VgPQVcWtu-X_LLQvOqB8juGtHq7hQt7lt6P2XqzRXYGSGINjmdoqmpLrW5vOSzVdI",
  level: 12,
  xp: 1850
};

export const DASHBOARD_STATS: Stat[] = [
  { label: 'Média Geral', value: 'A-', subValue: '92% Média', icon: 'grade', colorClass: 'text-primary' },
  { label: 'Tempo de Estudo', value: '12h', subValue: 'Nesta semana', icon: 'schedule', colorClass: 'text-blue-500' },
  { label: 'Tarefas', value: '3', subValue: 'Vencem em breve', icon: 'assignment_late', colorClass: 'text-orange-500' },
  { label: 'Horas de Lab', value: '8/10', subValue: 'Completadas', icon: 'science', colorClass: 'text-purple-500' },
];

export const MODULES: Module[] = [
  {
    id: 1,
    category: 'Genética',
    title: 'Hereditariedade & Variação',
    description: 'Entenda como as características são passadas dos pais para os filhos através dos genes.',
    progress: 35,
    modulesCount: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbA5kO_PygB0CVfLzk8XdXJCCjTMkdOEoA_WnoLrbbpA8RRZR_cKuM2ujWRUFX8QtAiRKt391UDY5Q73EHyj-eELEpt4quwfc6LoGY92acumHF8TV-O0vclUrTFIgJmM2l2X3s0lmUok7Kaye_s2totPEwil8HD4Ex1QLgJthUyet72RApG2Asn_-p-59981l1Aa76UCoiqLNXDZr3S3aQwThfSidAhf2bBcvNwuhxGUQUaqbtaJzBw2iJ8SN4o_xRGejoRuPeKw4',
    type: 'video'
  },
  {
    id: 2,
    category: 'Botânica',
    title: 'Fisiologia Vegetal',
    description: 'Explore a fotossíntese, respiração e biologia estrutural na vida das plantas.',
    progress: 12,
    modulesCount: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOuFHRn3GCqcAlWXbhtAW-U_ooycgfrg6Mrp5Fb3PKS2gwI3TAKIkeFA9mk0xtcQ6C76ZUIxm4OSYZmTLntGT1b1dbJpgBSck-lyyWxdhf21UMoQ3TMAXjdwZ4mZZxQ1s3pAzkvFX_bYl_yVOlJMC1XuIOImiiGegxrFq8SMsBV4Fd5ERaPBpG43vBrzGasGOKNEgo3laYtst-3_0nMk8TGXKc3k0rnJSWwbE1TfvRskRSZ46EVFuw5uoLlsQXHfjjDHcSjU5o8Sg',
    type: 'quiz'
  },
  {
    id: 3,
    category: 'Microbiologia',
    title: 'Crescimento Bacteriano',
    description: 'Estude as fases de crescimento das bactérias e os efeitos dos antibióticos.',
    progress: 89,
    modulesCount: 6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsczt_92MB4GUiuCNi99HZAvf_zd1BvESRYfYCpikQgoGsjnFpwSSlgv5ZoUqPoptqIOMoI_5b7DHLz191Glau-ZJvdcM5n1WjbOUB3-J-AfFRApYBGavrUN7ZiOyxQij8voc0KB6RYugyJqhJSYG-vwfxT1jTaLAdB9StW6DasHQLAVDmsp3-UEfCDvvKrqhLn2_WNdNlYmz_AdSLG2Yzur_B7UvSEhKCdiQPTufUhhFJIcsyIXOLW43T1NBsKtbCGw8lBH4JHyE',
    type: '3d'
  },
];

export const GLOSSARY_TERMS: Term[] = [
  {
    id: 1,
    term: 'Transporte Ativo',
    category: 'Biologia Celular',
    definition: 'O movimento de íons ou moléculas através de uma membrana celular para uma região de maior concentração, assistido por enzimas e exigindo energia.',
    example: '"A bomba de sódio-potássio é um exemplo clássico de transporte ativo, movendo sódio para fora da célula e potássio para dentro contra seus gradientes de concentração."',
    related: ['Transporte Passivo', 'ATP', 'Difusão']
  },
  {
    id: 2,
    term: 'Adaptação',
    category: 'Bio Evolutiva',
    definition: 'Uma mudança ou o processo de mudança pelo qual um organismo ou espécie se torna mais adequado ao seu ambiente.',
    example: '',
    related: ['Seleção Natural', 'Evolução']
  },
  {
    id: 3,
    term: 'Alelo',
    category: 'Genética',
    definition: 'Uma de duas ou mais formas alternativas de um gene que surgem por mutação e são encontradas no mesmo local em um cromossomo.',
    example: '',
    related: ['Gene', 'Cromossomo']
  },
  {
    id: 4,
    term: 'Aminoácido',
    category: 'Bioquímica',
    definition: 'Compostos orgânicos que se combinam para formar proteínas. Aminoácidos e proteínas são os blocos de construção da vida.',
    example: '"O corpo humano usa aminoácidos para produzir proteínas que ajudam o corpo a decompor alimentos, crescer e reparar tecidos corporais."',
    related: ['Proteína', 'Ligação Peptídica'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY_ylf6n5SjiB0s0JSrLh9-g-gsyuSFZyZuhi9QENENTuDj1QK2m2j6DTPc00OAxt3XY_EJlzW_kdzITHP9J1LPSal7vcFn6OHjlla_DTYLEsc6mn6Q1T3gA1fa6o2anfuBothM7zpuw3vrZ-4tmwELi5KvOidW36Womt9OExDOmU6cDjrTfjUFjijMWC5oH52vM-tVdExehPfS8MV9wWjfNhBhPuW-FzvAxrnAxz5uuuFG09akEAd5U1jSC28J5GZzL5VmHSe1yM'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    type: 'Pesquisa',
    title: 'Entendendo o Papel das Mitocôndrias no Envelhecimento',
    excerpt: 'Estudos recentes revelam como a produção de energia celular afeta a longevidade e a saúde metabólica em mamíferos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBjgNTFn-Rk-S99jIrsL9e9vOy33YHzriGz1aEyMrFTqt5url-sRjgWU8yCINi0iKsDgwZLpaV5BZleJma6AA82jQL4cAjfoaafQ9oJWZfTuBVM28oHP82OLn8J_u6giVME9Qac_RDFRhRP_jU-G9GHPcnbjzlNNCakaXVVv8BH3-wfunVmjtdclmQcsqLG5uH7roK5TPluFKTlNE5SITk6ZVotUhre9cObitO7WydxNaMgyDULMzKMBRtV6Sg5vzBmh5-SsE7ZtE',
    date: '2 horas atrás',
    isFeatured: false
  },
  {
    id: 2,
    type: 'Evento',
    title: 'Webinar: Carreiras em Biologia Marinha',
    excerpt: 'Junte-se à Dra. Sarah Chen para discutir caminhos na conservação marinha e oportunidades de pesquisa para graduandos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBesTTD9N5zS5ujx-9EnYKY33ZL9CHgWGMhmOHdk640vfzSkVs5aWA2_zve6gjBKMsKeQZF9bVFMaloUhBA6e0A1cmgVazqiB0p6iUEQwKXVy8OnOape_5W4NmuL69gjIJAtefeqGQbYgeuC3s56m2FBCA4eVqhAiNXxVghEkVGLOIxaUOw63q-wANmuDaCW2PbkGvPHuSCh4wrgn6VZsH0Bhq4tQpy7ZdO0Fvjr0x96T8yq-R4LaM6oyJdMtj2_v5FqXdSwfv7l0A',
    date: 'Ontem',
    isFeatured: false
  },
  {
    id: 3,
    type: 'Recursos',
    title: 'Atualização do Guia de Estudo: Módulo de Fotossíntese',
    excerpt: 'Reformulamos o módulo de aprendizagem sobre fotossíntese com novos diagramas interativos e questões de quiz.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj0J9b-23T7Y8k7kWiZ94f4s-3jhFLWQJ2k68nIKbLDJhJ9htn38o8LvFD4yevgGIUBk__n2bXUdli4KnMi1bNkzWYDGRwTXkCQHzMJqDTLxWubpHsp16hupRDvzPbt1F7SGSgStnGkHfDnlZeqiQe-uHYL0mezNpH7TG44qFa-h0b0HA5IB2oRrugm902SyZFKUjanVntfK3BOCllP1VVFyafaKTXkOxNPSrmMsUbhYk2jaiMqki5E4jBZmlFZ4ptAAF9MkP4EO0',
    date: '3 dias atrás',
    isFeatured: false
  }
];

export const DISCUSSIONS: Discussion[] = [
  {
    id: 1,
    title: 'Ajuda para entender as nuances do Ciclo de Krebs?',
    author: 'Sarah J.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIUrNn31E8_FJgPyhNMLqtT1L3Xah_Z1reo_AflCd6noAox7wIffKkszxYrtKePMS1iZW8BjNCL7Pe1J22EHYSfvSNrevyTirhB_4tASp_l92071Jqw7P0mVWr4FKyDhuYjiOui43h7e1aVO-Wqq7PZeskh1lFDS5MsKDajP0ZWQRC9w65V81xvh3jZxCYAvJ65if_7H_GBnk1s5-SRAfFzKqfGJEHT1RN_ap0ZuE460EiZjZlseV9q8jsh54on_72o-ZmgNzSPjI',
    role: 'Estudante',
    timeAgo: '2h atrás',
    tags: ['BiologiaCelular'],
    content: 'Estou com dificuldade para rastrear os átomos de carbono durante o ciclo. Alguém tem um bom recurso visual ou mnemônico para ajudar a...',
    upvotes: 124,
    comments: 32,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZzAkv-BPNsnRz1C8fYDQbitf5_1wOa35wffXjjA0G6KbN59x4Tt1UMGsENn5Djkq-7NpXuV4klSAUF7T8eGPxxGuptnLw165jHza5AHDwv9r0LRUsBMwSt9m12oo_Ha0_cKEr3dwuxLBafop89buXQKKHrgeqj9CjR7yUMBx4oReQvETdX2rwtnrVFwYeUK6X2YZBgayLMXbJqxGIedjTCkewcU9hJgEaZLEgFaaNYV2HumERgLAhv8ZCye0evZlwTcvbGJxCCu4',
    isTrending: true
  },
  {
    id: 2,
    title: 'Modelo 3D Interativo de Célula para Revisão Final',
    author: 'Dr. Chen',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEiPyukRJqSs1LiAE3v6s_UrDBuNIsIUfmVAb0bNkr-2LxfqSNwQD_fT6mstB0rGY5_jz0qtluGy2kEgCstyvPJyyD_TmztphdYqUH4Yg_gmL2Q0P6PYCF01__LrajYvWBGlejH3K10AWDfMKhV3p2RgqhPKvYx1OZ-vf4lYRiHFG7zBX9fEBU28wfJAnHVz9bl9IEMjhl_179Hs58NSdpgWmxPsxuVxQsIwlABrL70c6uNPlY2oNkGVyCl_Brsn9cwSj_C8ym9-k',
    role: 'Professor',
    timeAgo: '5h atrás',
    tags: ['Recursos', 'DicasDeEstudo'],
    content: 'Acabei de enviar um novo modelo WebGL para a aba de recursos. Ele permite explorar organelas em detalhes. Altamente recomendado para as próximas provas finais sobre estruturas celulares.',
    upvotes: 856,
    comments: 45,
    isResource: true
  },
  {
    id: 3,
    title: 'Discussão: Ética do CRISPR em testes humanos',
    author: 'Alex M.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoVhYj2Ko6b6NPfNH1D4RVGKbJhieZ1SPvqZkT6MHNEXFnJ8AH0HqfTpCL_aOd2ur7eZP-JLGRqkP39eaVoNWBjf3z3wLvDCRCHJ8-EEalYAD7eFSPmet7cZQ8QRFOBVasDGEgXps8dCWrMrLHIjrISbCDF0FipbKffaVatwhuuxXbQD_owsYEesGXBpX7fJhlOs_8l94WppgIu6pmNlzYaMxuTRlZLGnBXB97ijOBO1ZmRpSDNMHPZTw2rwE_HubKY1sXK6rIx-4',
    role: 'Estudante',
    timeAgo: '8h atrás',
    tags: ['Genética', 'Ética'],
    content: 'Com as aprovações recentes, onde traçamos a linha? Estou escrevendo um artigo sobre isso e adoraria ouvir diferentes perspectivas da comunidade.',
    upvotes: 42,
    comments: 118
  }
];
