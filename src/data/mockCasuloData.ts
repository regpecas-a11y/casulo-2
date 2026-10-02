import { TrustedPerson, HelpRequest, DailyItem, GroceryItem, GuideArticle } from '../types/casulo';

export const INITIAL_TRUSTED_PEOPLE: TrustedPerson[] = [
  {
    id: 'p1',
    name: 'Tia Clara',
    relation: 'Irmã da Mariana',
    initials: 'TC',
    availability: 'Disponível hoje · Pode trazer almoço ou ficar 1h com as crianças',
    avatarColor: 'bg-[#E8EFE9] text-[#2C4A35] border-[#BDD3C2]',
    isAvailableToday: true,
  },
  {
    id: 'p2',
    name: 'Vovô Carlos',
    relation: 'Pai · Aposentado',
    initials: 'VC',
    availability: 'Manhãs livres · Adora passear na pracinha com o Theo e a Maya',
    avatarColor: 'bg-[#FAF0EC] text-[#9A462C] border-[#E8C5B8]',
    isAvailableToday: true,
  },
  {
    id: 'p3',
    name: 'Madrinha Luiza',
    relation: 'Amiga da família',
    initials: 'ML',
    availability: 'Disponível após as 17h · Pode ajudar na hora do banho e jantar',
    avatarColor: 'bg-[#F2EFF9] text-[#55477E] border-[#D4CBEA]',
    isAvailableToday: false,
  },
  {
    id: 'p4',
    name: 'Vizinho Marcos',
    relation: 'Vizinho do 302 (também pai)',
    initials: 'VM',
    availability: 'Apoio rápido · Emergência de mercado ou olhar 20 min no prédio',
    avatarColor: 'bg-[#F5F2EA] text-[#63553E] border-[#DCD5C4]',
    isAvailableToday: true,
  }
];

export const INITIAL_HELP_REQUESTS: HelpRequest[] = [
  {
    id: 'hr-1',
    title: 'Alguém pode ajudar com uma refeição hoje?',
    message: 'Gael está com dente nascendo e não consegui fazer o almoço do Theo e da Maya.',
    createdAt: 'Hoje às 10:15',
    status: 'aceito',
    targetPersonId: 'p1',
    targetPersonName: 'Tia Clara',
    acceptedBy: {
      name: 'Tia Clara',
      message: 'Mari, estou preparando um panelão de sopa nutritiva e levo aí às 12h30! Descansa um pouco.',
      acceptedAt: 'Hoje às 10:22',
    },
    category: 'refeicao'
  },
  {
    id: 'hr-2',
    title: 'Preciso de um tempo para descansar (40 min)',
    message: 'Noite muito picada com o bebê. Preciso fechar os olhos 40 minutinhos.',
    createdAt: 'Hoje às 08:30',
    status: 'concluido',
    targetPersonId: 'p2',
    targetPersonName: 'Vovô Carlos',
    acceptedBy: {
      name: 'Vovô Carlos',
      message: 'Fiquei com o Theo e a Maya desenhando na sala. Tudo calmo por aqui!',
      acceptedAt: 'Hoje às 09:15',
    },
    category: 'descanso'
  }
];

export const INITIAL_DAILY_ITEMS: DailyItem[] = [
  {
    id: 'd1',
    text: 'Beber um copo d’água agora',
    completed: true,
    gentleNote: 'Você também tem sede e precisa se hidratar.'
  },
  {
    id: 'd2',
    text: 'Almoço simplificado (o feijão do freezer tá liberado)',
    completed: false,
    gentleNote: 'Não precisa ser perfeito, só precisa alimentar todo mundo com carinho.'
  },
  {
    id: 'd3',
    text: '15 minutos de silêncio ou pausa com os olhos fechados',
    completed: false,
    gentleNote: 'Pausar não é recompensa por ter feito tudo; é necessidade básica.'
  }
];

export const INITIAL_GROCERY_ITEMS: GroceryItem[] = [
  { id: 'g1', name: 'Bananas prata (para lanche rápido)', category: 'Frutas & Feira', checked: true },
  { id: 'g2', name: 'Ovos caipiras (proteína coringa)', category: 'Geladeira', checked: false },
  { id: 'g3', name: 'Macarrão parafuso integral', category: 'Despensa', checked: false },
  { id: 'g4', name: 'Abobrinha e cenoura (ralar no molho)', category: 'Frutas & Feira', checked: false },
  { id: 'g5', name: 'Ricota fresca ou queijo branco macio', category: 'Geladeira', checked: false },
  { id: 'g6', name: 'Fralda tamanho G (Gael)', category: 'Higiene', checked: false },
];

export const QUICK_RECIPE_DATA = {
  title: 'Macarrão de panela única com legumes & ricota',
  subtitle: 'Nutritivo, suja uma panela só e agrada do bebê de 1 ano aos mais velhos',
  prepTime: '20 minutos',
  servings: 'Rende 4 porções',
  tag: 'Almoço prático sem louça acumulada',
  ingredients: [
    '250g de macarrão parafuso ou penne',
    '1 abobrinha pequena ralada',
    '1 cenoura média ralada fina',
    '1 xícara de molho de tomate caseiro ou passata simples',
    '150g de ricota esfarelada ou queijo branco macio',
    '2 colheres (sopa) de azeite de oliva e pitada leve de orégano'
  ],
  steps: [
    'Em uma panela média, refogue a cenoura e a abobrinha raladas no azeite por 2 minutos.',
    'Adicione o macarrão cru, a passata de tomate e cubra com água fervente (cerca de 2 dedos acima da massa).',
    'Deixe cozinhar em fogo médio com a panela semi-tampada por 10 a 12 minutos, mexendo duas vezes.',
    'Quando o macarrão estiver macio e o molho encorpado, desligue o fogo e misture a ricota delicadamente.',
    'Para o bebê de 1 ano (Gael): separe a porção e corte ou amasse levemente conforme a fase de mastigação.'
  ],
  antiGuiltNote: 'Dias corridos pedem soluções práticas. Comida feita em casa com ingredientes simples alimenta o corpo e preserva sua energia.'
};

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    id: 'desenvolvimento',
    title: 'Jornada de Desenvolvimento (0 a 5 anos)',
    subtitle: 'Compreendendo os ritmos individuais sem a pressão de marcos rígidos',
    tag: 'Fases & Ritmos',
    readTime: '4 min de leitura',
    summary: 'Cada criança floresce em um tempo próprio. Descubra o que esperar dos 0 aos 5 anos com acolhimento e sem comparações com tabelas que geram ansiedade.',
    content: [
      {
        heading: 'O mito da linha reta no desenvolvimento',
        paragraphs: [
          'É comum vermos em redes sociais comparações sobre a idade em que cada criança andou, falou ou desfraldou. Porém, a ciência do desenvolvimento infantil nos lembra que o crescimento acontece em saltos, pausas e ritmos singulares.',
          'Em uma família com mais de uma criança, como a de Gael (1 ano), Maya (3 anos) e Theo (5 anos), percebemos na prática que cada irmão tem temperamento, interesses motores e necessidades emocionais completamente distintas.'
        ],
        tips: [
          '1 ano (Gael): Foco na exploração motora, primeiros passos, curiosidade com texturas e segurança no colo.',
          '3 anos (Maya): Explosão da linguagem, construção de frases, primeiras perguntas sobre o mundo e testes de autonomia.',
          '5 anos (Theo): Consolidação do brincar coletivo, imaginação simbólica rica, regras e coordenação fina.'
        ]
      },
      {
        heading: 'Sinais de conexão antes de metas de rendimento',
        paragraphs: [
          'Mais importante do que antecipar etapas é observar se a criança interage com o ambiente, responde a estímulos afetivos e se sente segura em seu círculo familiar.',
          'Se surgir qualquer dúvida real ou incômodo intuitivo, a melhor conduta é sempre conversar abertamente com o pediatra que acompanha a família desde os primeiros meses.'
        ]
      }
    ],
    source: 'Diretrizes de Atenção à Saúde da Criança · Ministério da Saúde & Sociedade Brasileira de Pediatria (SBP)',
    reviewerSpace: 'Espaço reservado para validação de Pediatra e Especialista em Desenvolvimento Infantil',
    updatedAt: 'Outubro de 2026'
  },
  {
    id: 'blw-alimentacao',
    title: 'Alimentação Complementar & Abordagem BLW',
    subtitle: 'Sinais de prontidão, formatos seguros e uma relação leve com a mesa',
    tag: 'Nutrição Infantil',
    readTime: '5 min de leitura',
    summary: 'A introdução alimentar pode ser leve, respeitando a autonomia do bebê e sem transformar a hora da refeição em um campo de batalha familiar.',
    content: [
      {
        heading: 'Sinais de Prontidão (Em torno dos 6 meses)',
        paragraphs: [
          'A introdução de novos alimentos só deve começar quando o bebê manifesta prontidão: sentar com o mínimo de apoio, sustentação firme do pescoço, interesse ativo pela comida dos adultos e diminuição do reflexo de protrusão da língua.',
          'A abordagem BLW (Baby-Led Weaning) propõe oferecer os alimentos em pedaços com formatos e consistências seguras para que o próprio bebê explore com as mãos.'
        ],
        tips: [
          'Formato seguro: Cortes longitudinais (em formato de dedo ou palito comprido), permitindo que o bebê segure a base na mão e coma o topo.',
          'Consistência macia: O alimento deve ser facilmente amassado entre o polegar e o indicador (ex: cenoura e abobrinha bem cozidas, banana madura).',
          'Alimentos redondos e duros proibidos inteiros: Uvas, tomates-cereja, castanhas e cenoura crua devem ser cortados longitudinalmente em 4 partes ou triturados.'
        ]
      },
      {
        heading: 'Reflexo de GAG não é Engasgo',
        paragraphs: [
          'O reflexo de GAG (náusea fisiológica) é um mecanismo natural de defesa que traz o alimento para frente na boca quando ele vai muito para trás. A criança tosse, fica vermelhinha por segundos e resolve sozinha.',
          'O engasgo verdadeiro é silencioso e requer intervenção imediata (manobra de desengasgo). Manter a calma e estudar as manobras antes da introdução traz segurança para toda a família.'
        ]
      }
    ],
    source: 'Guia Alimentar para Crianças Brasileiras Menores de 2 Anos · Ministério da Saúde',
    reviewerSpace: 'Espaço reservado para validação de Nutricionista Materno-Infantil e Pediatra',
    updatedAt: 'Outubro de 2026'
  },
  {
    id: 'bem-estar-cuidador',
    title: 'Bem-estar de Quem Cuida & Saúde Mental',
    subtitle: 'Cuidar de quem cuida: por que você não tem que carregar o mundo sozinho',
    tag: 'Acolhimento & Vínculo',
    readTime: '3 min de leitura',
    summary: 'O cansaço parental crônico não é sinal de incapacidade, mas sim o reflexo direto de uma sociedade que isolou as famílias e sobrecarregou quem cuida.',
    content: [
      {
        heading: 'O mito da mãe e do pai incansáveis',
        paragraphs: [
          'Costuma-se romantizar o sacrifício parental, como se o esgotamento fosse medalha de bom cuidador. A realidade clínica mostra o contrário: cuidadores exaustos têm maior dificuldade de regulação emocional e sofrem com a culpa desnecessária.',
          'Dizer "não dou conta de tudo hoje" não é fraqueza. É um diagnóstico lúcido da realidade prática de cuidar de crianças pequenas sem ajuda constante.'
        ],
        tips: [
          'Micropausas de 3 minutos: Fechar os olhos, lavar o rosto com água fresca ou tomar uma xícara de chá morno sem multitarefas.',
          'Dividir a carga mental em voz alta: Não assuma sozinha o planejamento invisível (compras, horários, roupas, vacinas).',
          'Pedir ajuda clara e específica: Em vez de "preciso de ajuda", peça "você pode trazer o almoço às 12h?" ou "pode brincar 30 min na sala?".'
        ]
      },
      {
        heading: 'Quando procurar suporte especializado',
        paragraphs: [
          'Tristeza profunda e prolongada, irritabilidade constante, falta de energia para o autocuidado básico ou pensamentos obsessivos são sinais de que o suporte de um profissional de psicologia ou psiquiatria é bem-vindo e necessário.'
        ]
      }
    ],
    source: 'Saúde Mental Perinatal e Apoio Parental · Fiocruz & Redes de Atenção Psicossocial (RAPS)',
    reviewerSpace: 'Espaço reservado para validação de Psicóloga(o) Perinatal e da Família',
    updatedAt: 'Outubro de 2026'
  },
  {
    id: 'direitos-familias',
    title: 'Direitos Práticos das Famílias no Brasil',
    subtitle: 'Licenças, pausas no trabalho, acompanhamento médico e garantias legais',
    tag: 'Cidadania & Leis',
    readTime: '4 min de leitura',
    summary: 'Conhecer seus direitos trabalhistas e sociais é fundamental para proteger o tempo com seus filhos e garantir segurança financeira e emocional.',
    content: [
      {
        heading: 'Garantias trabalhistas essenciais (CLT)',
        paragraphs: [
          'A legislação brasileira assegura proteções fundamentais para pais e mães trabalhadores formais com vínculo de emprego.',
          'Aqui resumimos os principais direitos em linguagem direta para consulta rápida.'
        ],
        tips: [
          'Licença-Maternidade: 120 dias garantidos por lei, prorrogáveis por mais 60 dias em empresas cadastradas no Programa Empresa Cidadã (total de 180 dias).',
          'Licença-Paternidade: 5 dias corridos por lei, prorrogáveis por mais 15 dias no Programa Empresa Cidadã (total de 20 dias).',
          'Pausas para Amamentação: Até os 6 meses de vida do bebê, a mulher tem direito a dois descansos especiais de meia hora cada durante a jornada diária.',
          'Faltas para consultas médicas: O responsável legal tem direito a 1 dia por ano para acompanhar filho de até 6 anos em consulta médica (art. 473 da CLT).'
        ]
      },
      {
        heading: 'Estabilidade Provisória e Adoção',
        paragraphs: [
          'A gestante tem garantia de emprego desde a confirmação da gravidez até 5 meses após o parto, não podendo ser demitida sem justa causa.',
          'Para adoção ou guarda judicial com fins de adoção, os prazos de licença-maternidade e salário-maternidade aplicam-se igualmente, independentemente da idade da criança adotada.'
        ]
      }
    ],
    source: 'Consolidação das Leis do Trabalho (CLT) · Lei 11.770/2008 (Empresa Cidadã) · CF/88',
    reviewerSpace: 'Espaço reservado para validação de Especialista em Direito do Trabalho e Direitos da Criança',
    updatedAt: 'Outubro de 2026'
  }
];
