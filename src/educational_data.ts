
import { EducationalContent } from './types';

export const LOCAL_EDUCATIONAL_CONTENT: EducationalContent[] = [
  {
    id: 'gestacao',
    ageRange: 'Gestação',
    minYears: -1,
    maxYears: 0,
    books: [
      { id: 'b1', title: 'O Diário de Bordo do Bebê', author: 'Dr. Silva', description: 'Um guia completo sobre o desenvolvimento fetal.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/baby1/400/600' },
      { id: 'b2', title: 'Nove Meses de Espera', author: 'Ana Maria', description: 'Relatos emocionantes sobre a jornada da maternidade.', type: 'literary', coverUrl: 'https://picsum.photos/seed/baby2/400/600' },
      { id: 'b3', title: 'Nutrição na Gestação', author: 'Nutri Kids', description: 'O que comer para garantir a saúde da mãe e do bebê.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/baby3/400/600' },
      { id: 'b4', title: 'Vínculo Paterno', author: 'João Pai', description: 'A importância da presença do pai desde o útero.', type: 'literary', coverUrl: 'https://picsum.photos/seed/baby4/400/600' },
      { id: 'b5', title: 'Yoga para Gestantes', author: 'Zen Mom', description: 'Exercícios suaves para manter o equilíbrio.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/baby5/400/600' }
    ],
    activities: [
      { 
        id: 'a1', 
        title: 'Pintura na Barriga', 
        description: 'Use tintas atóxicas para criar arte e se conectar com o bebê.', 
        type: 'cognitive', 
        icon: '🎨',
        materials: ['Tintas atóxicas', 'Pincéis macios', 'Água para limpeza'],
        howToDo: [
          'Escolha um momento calmo e relaxante.',
          'Prepare as tintas e os pincéis.',
          'Faça desenhos suaves na barriga, sentindo a textura.',
          'Converse com o bebê enquanto pinta.'
        ]
      },
      { 
        id: 'a2', 
        title: 'Playlist de Ninar', 
        description: 'Monte uma seleção de músicas calmas para o bebê ouvir no útero.', 
        type: 'motor', 
        icon: '🎵',
        materials: ['Celular ou rádio', 'Fone de ouvido (opcional)', 'Ambiente tranquilo'],
        howToDo: [
          'Selecione músicas instrumentais ou sons da natureza.',
          'Coloque o som em volume baixo próximo à barriga.',
          'Observe se o bebê reage aos diferentes ritmos.',
          'Aproveite para relaxar junto com a música.'
        ]
      },
      { 
        id: 'a3', 
        title: 'Diário de Sensações', 
        description: 'Escreva como você se sente a cada chute ou movimento.', 
        type: 'cognitive', 
        icon: '✍️',
        materials: ['Caderno ou bloco de notas', 'Caneta', 'Momentos de pausa'],
        howToDo: [
          'Mantenha o diário sempre por perto.',
          'Ao sentir um movimento, anote o horário e a sensação.',
          'Descreva o que você estava fazendo no momento.',
          'Releia as anotações para perceber padrões de atividade.'
        ]
      },
      { 
        id: 'a4', 
        title: 'Leitura em Voz Alta', 
        description: 'Leia contos para o bebê se acostumar com sua voz.', 
        type: 'motor', 
        icon: '📖',
        materials: ['Livros infantis', 'Poltrona confortável', 'Voz suave'],
        howToDo: [
          'Escolha um livro com rimas ou ritmo pausado.',
          'Leia em voz alta, variando a entonação.',
          'Acaricie a barriga enquanto lê.',
          'Crie o hábito de ler no mesmo horário todos os dias.'
        ]
      }
    ],
    familyTalks: [
      { id: 't1', title: 'Expectativas do Parto', description: 'Conversem sobre os desejos e medos para o grande dia.', dynamic: 'Cada um escreve um desejo em um papel.' },
      { id: 't2', title: 'Divisão de Tarefas', description: 'Como será a rotina após a chegada do bebê?', dynamic: 'Montem um quadro visual de apoio.' },
      { id: 't3', title: 'Escolha do Nome', description: 'O significado e a história por trás das opções.', dynamic: 'Contem histórias de antepassados.' }
    ]
  },
  {
    id: 'primeira_infancia',
    ageRange: '0-2 Anos',
    minYears: 0,
    maxYears: 2,
    books: [
      { id: 'b6', title: 'O Despertar dos Sentidos', author: 'Clara Luz', description: 'Como estimular os 5 sentidos do recém-nascido.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/infant1/400/600' },
      { id: 'b7', title: 'Primeiras Palavras', author: 'Editora Casulo', description: 'Um livro ilustrado para os primeiros balbucios.', type: 'literary', coverUrl: 'https://picsum.photos/seed/infant2/400/600' },
      { id: 'b8', title: 'Sono do Bebê: Guia Prático', author: 'Dra. Noite', description: 'Estratégias para noites mais tranquilas.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/infant3/400/600' },
      { id: 'b9', title: 'Brincar é Aprender', author: 'Mestre Lúdico', description: 'Atividades simples para o dia a dia.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/infant4/400/600' },
      { id: 'b10', title: 'Cores do Mundo', author: 'Artes Kids', description: 'Explorando o arco-íris visualmente.', type: 'literary', coverUrl: 'https://picsum.photos/seed/infant5/400/600' }
    ],
    activities: [
      { 
        id: 'a5', 
        title: 'Cesta de Tesouros', 
        description: 'Coloque objetos de diferentes texturas para o bebê explorar.', 
        type: 'motor', 
        icon: '🧺',
        materials: ['Cesta de vime ou caixa', 'Objetos de madeira', 'Tecidos variados', 'Colheres de metal'],
        howToDo: [
          'Reúna objetos seguros da casa.',
          'Coloque-os na cesta de forma acessível.',
          'Deixe o bebê sentado ou de bruços explorando.',
          'Observe qual objeto desperta mais interesse.'
        ]
      },
      { 
        id: 'a6', 
        title: 'Espelho, Espelho Meu', 
        description: 'Brinque na frente do espelho para reconhecimento facial.', 
        type: 'motor', 
        icon: '🪞',
        materials: ['Espelho inquebrável ou fixo', 'Brinquedos coloridos', 'Ambiente iluminado'],
        howToDo: [
          'Posicione o bebê em frente ao espelho.',
          'Aponte para as partes do rosto dele.',
          'Faça caretas e sons para ele imitar.',
          'Ajude-o a tocar no próprio reflexo.'
        ]
      },
      { 
        id: 'a7', 
        title: 'Pintura com Dedos', 
        description: 'Use iogurte colorido com corante natural para diversão segura.', 
        type: 'cognitive', 
        icon: '🖐️',
        materials: ['Iogurte natural', 'Corante alimentício', 'Papel grande ou bandeja'],
        howToDo: [
          'Misture o iogurte com gotas de corante.',
          'Coloque o bebê sentado no chão sobre o papel.',
          'Deixe-o espalhar o iogurte com as mãos.',
          'Não se preocupe se ele levar à boca, é seguro!'
        ]
      },
      { 
        id: 'a8', 
        title: 'Dança do Colinho', 
        description: 'Dancem juntos ao som de ritmos suaves.', 
        type: 'motor', 
        icon: '💃',
        materials: ['Música animada', 'Espaço livre', 'Braços fortes'],
        howToDo: [
          'Pegue o bebê no colo de forma segura.',
          'Siga o ritmo da música com passos leves.',
          'Gire suavemente e cante junto.',
          'Mantenha contato visual constante.'
        ]
      }
    ],
    familyTalks: [
      { id: 't4', title: 'Primeiras Descobertas', description: 'O que mais surpreendeu vocês no bebê esta semana?', dynamic: 'Compartilhem uma foto ou vídeo marcante.' },
      { id: 't5', title: 'Rede de Apoio', description: 'Quem são as pessoas que estão caminhando com vocês?', dynamic: 'Mandem uma mensagem de gratidão para alguém.' },
      { id: 't6', title: 'Tempo de Qualidade', description: 'Como desligar das telas e focar no bebê?', dynamic: 'Façam 15 min de silêncio e observação.' }
    ]
  },
  {
    id: 'exploradores',
    ageRange: '3-4 Anos',
    minYears: 3,
    maxYears: 5,
    books: [
      { id: 'b11', title: 'O Mundo das Emoções', author: 'Dr. Sentir', description: 'Ajudando a criança a nomear o que sente.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/child1/400/600' },
      { id: 'b12', title: 'Aventura no Quintal', author: 'Bia Aventura', description: 'Uma história sobre descobertas na natureza.', type: 'literary', coverUrl: 'https://picsum.photos/seed/child2/400/600' },
      { id: 'b13', title: 'Desfralde sem Medo', author: 'Psico Kids', description: 'Guia para pais sobre essa transição importante.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/child3/400/600' },
      { id: 'b14', title: 'Amigos da Floresta', author: 'Leo Fauna', description: 'Contos sobre amizade e cooperação.', type: 'literary', coverUrl: 'https://picsum.photos/seed/child4/400/600' },
      { id: 'b15', title: 'Por que o Céu é Azul?', author: 'Curioso Jr.', description: 'Respostas simples para grandes perguntas.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/child5/400/600' }
    ],
    activities: [
      { 
        id: 'a9', 
        title: 'Caça ao Tesouro Natural', 
        description: 'Encontre folhas, pedras e gravetos de diferentes formas.', 
        type: 'motor', 
        icon: '🌿',
        materials: ['Cesta ou sacola', 'Lupa (opcional)', 'Guia de natureza simples'],
        howToDo: [
          'Vá a um parque ou jardim seguro.',
          'Peça para a criança encontrar 3 tipos de folhas.',
          'Procure pedras de cores diferentes.',
          'Observe os pequenos insetos sem tocá-los.'
        ]
      },
      { 
        id: 'a10', 
        title: 'Teatro de Sombras', 
        description: 'Use as mãos e uma lanterna para criar personagens na parede.', 
        type: 'cognitive', 
        icon: '🔦',
        materials: ['Lanterna ou abajur', 'Parede clara', 'Escuridão'],
        howToDo: [
          'Apague as luzes do quarto.',
          'Posicione a lanterna em direção à parede.',
          'Use as mãos para criar formas (pássaro, cachorro).',
          'Conte uma história usando as sombras.'
        ]
      },
      { 
        id: 'a11', 
        title: 'Chef Mirim', 
        description: 'Faça biscoitos de formas variadas com a criança.', 
        type: 'motor', 
        icon: '🍪',
        materials: ['Massa de biscoito', 'Cortadores de formas', 'Assadeira'],
        howToDo: [
          'Prepare a massa junto com a criança.',
          'Deixe-a usar os cortadores para criar formas.',
          'Explique sobre o calor do forno (com cuidado).',
          'Saboreiem os biscoitos feitos por vocês.'
        ]
      },
      { 
        id: 'a12', 
        title: 'Posturas Divertidas', 
        description: 'Imite poses de animais para trabalhar o equilíbrio.', 
        type: 'motor', 
        icon: '🧘',
        materials: ['Tapete ou gramado', 'Música calma', 'Imagens de animais'],
        howToDo: [
          'Mostre a foto de um flamingo (equilíbrio em um pé).',
          'Imite um gato se espreguiçando.',
          'Faça a pose da cobra (deitado de bruços).',
          'Respirem fundo entre cada postura.'
        ]
      }
    ],
    familyTalks: [
      { id: 't7', title: 'Lidando com Frustrações', description: 'Como reagimos quando algo não sai como planejado?', dynamic: 'Respirem fundo juntos 3 vezes.' },
      { id: 't8', title: 'Nossa História', description: 'Contem uma história engraçada de quando a criança era bebê.', dynamic: 'Vejam fotos antigas juntos.' },
      { id: 't9', title: 'A Arte de Esperar', description: 'Por que não podemos ter tudo na hora que queremos?', dynamic: 'Plantem uma semente e falem sobre o tempo.' }
    ]
  },
  {
    id: 'invencoes',
    ageRange: '5-6 Anos',
    minYears: 5,
    maxYears: 7,
    books: [
      { id: 'b16', title: 'A Fábrica de Ideias', author: 'Eng. Criativo', description: 'Como transformar sucata em invenções incríveis.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/invent1/400/600' },
      { id: 'b17', title: 'O Mistério das Letras Fugitivas', author: 'Lara Letra', description: 'Uma aventura para descobrir o som de cada letra.', type: 'literary', coverUrl: 'https://picsum.photos/seed/invent2/400/600' },
      { id: 'b18', title: 'Contando Estrelas', author: 'Astro Kids', description: 'Introdução lúdica aos números e ao espaço.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/invent3/400/600' },
      { id: 'b19', title: 'O Pequeno Engenheiro', author: 'Mestre Obra', description: 'Construindo pontes e torres com blocos.', type: 'literary', coverUrl: 'https://picsum.photos/seed/invent4/400/600' },
      { id: 'b20', title: 'Cozinha Científica', author: 'Chef Lab', description: 'Experiências comestíveis que ensinam química básica.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/invent5/400/600' }
    ],
    activities: [
      { 
        id: 'a13', 
        title: 'Laboratório de Slime', 
        description: 'Crie sua própria massa de modelar com ingredientes caseiros.', 
        type: 'cognitive', 
        icon: '🧪',
        materials: ['Cola branca', 'Bicarbonato de sódio', 'Solução de lentes', 'Corante'],
        howToDo: [
          'Misture a cola com o corante em um pote.',
          'Adicione uma pitada de bicarbonato.',
          'Coloque gotas da solução aos poucos.',
          'Mexa até desgrudar das mãos.'
        ]
      },
      { 
        id: 'a14', 
        title: 'Pista de Rolo de Papel', 
        description: 'Monte uma pista de corrida usando rolos de papel higiênico.', 
        type: 'motor', 
        icon: '🏎️',
        materials: ['Rolos de papel vazios', 'Fita adesiva', 'Bolinhas de gude ou carrinhos'],
        howToDo: [
          'Corte os rolos ao meio longitudinalmente.',
          'Cole-os na parede ou móvel criando uma rampa.',
          'Teste a inclinação para a bolinha descer.',
          'Faça competições de velocidade.'
        ]
      },
      { 
        id: 'a15', 
        title: 'Pintura com Bolhas', 
        description: 'Use canudos e sabão colorido para criar artes abstratas.', 
        type: 'motor', 
        icon: '🫧',
        materials: ['Detergente', 'Água', 'Tintas ou corantes', 'Canudos', 'Papel'],
        howToDo: [
          'Misture água, sabão e tinta em copos.',
          'Assopre com o canudo até formar muitas bolhas.',
          'Encoste o papel suavemente sobre as bolhas.',
          'Veja as marcas circulares coloridas surgirem.'
        ]
      },
      { 
        id: 'a16', 
        title: 'Cidade de Papelão', 
        description: 'Construa uma maquete da sua rua usando caixas vazias.', 
        type: 'motor', 
        icon: '🏘️',
        materials: ['Caixas de papelão variadas', 'Tesoura sem ponta', 'Cola', 'Canetinhas'],
        howToDo: [
          'Desenhe janelas e portas nas caixas.',
          'Organize as "casas" criando ruas.',
          'Use tampinhas para fazer rodas de carros.',
          'Crie personagens de papel para morar na cidade.'
        ]
      }
    ],
    familyTalks: [
      { id: 't10', title: 'Superpoderes Reais', description: 'Qual o talento especial de cada um na família?', dynamic: 'Criem uma capa de super-herói para cada um.' },
      { id: 't11', title: 'Cuidando do Planeta', description: 'Como podemos reduzir o lixo em nossa casa?', dynamic: 'Separem o lixo reciclável juntos hoje.' },
      { id: 't12', title: 'O Que é Verdade?', description: 'Conversando sobre imaginação vs realidade na internet.', dynamic: 'Brinquem de "Verdade ou Invenção".' }
    ]
  },
  {
    id: 'autonomia',
    ageRange: '7-8 Anos',
    minYears: 7,
    maxYears: 9,
    books: [
      { id: 'b21', title: 'O Guia do Jovem Explorador', author: 'Cap. Aventura', description: 'Manual de sobrevivência e curiosidades do mundo.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/auto1/400/600' },
      { id: 'b22', title: 'O Enigma dos Números', author: 'Matemágico', description: 'Desvendando mistérios usando a matemática.', type: 'literary', coverUrl: 'https://picsum.photos/seed/auto2/400/600' },
      { id: 'b23', title: 'Histórias de Grandes Líderes', author: 'Bio Kids', description: 'Pessoas que mudaram o mundo com suas ideias.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/auto3/400/600' },
      { id: 'b24', title: 'Manual da Amizade', author: 'Conselheiro Amigo', description: 'Como lidar com sentimentos e resolver conflitos.', type: 'literary', coverUrl: 'https://picsum.photos/seed/auto4/400/600' },
      { id: 'b25', title: 'Finanças para Pequenos', author: 'Dindim Jr.', description: 'Aprendendo a poupar para grandes sonhos.', type: 'pedagogical', coverUrl: 'https://picsum.photos/seed/auto5/400/600' }
    ],
    activities: [
      { 
        id: 'a17', 
        title: 'Cápsula do Tempo', 
        description: 'Guarde objetos e uma carta para abrir daqui a 5 anos.', 
        type: 'cognitive', 
        icon: '⏳',
        materials: ['Caixa de metal ou plástico', 'Papel e caneta', 'Fotos e pequenos objetos'],
        howToDo: [
          'Escreva uma carta para o seu "eu do futuro".',
          'Escolha 3 objetos que representem o seu hoje.',
          'Coloque tudo na caixa e lacre bem.',
          'Esconda ou enterre em local seguro com a data de abertura.'
        ]
      },
      { 
        id: 'a18', 
        title: 'Noite de Astronomia', 
        description: 'Identifique constelações usando um mapa estelar.', 
        type: 'motor', 
        icon: '🔭',
        materials: ['Mapa estelar ou app', 'Lanterna com papel celofane vermelho', 'Cobertor'],
        howToDo: [
          'Escolha uma noite de céu limpo.',
          'Estenda o cobertor no chão.',
          'Use a lanterna vermelha para ler o mapa (não ofusca a visão).',
          'Tente encontrar o Cruzeiro do Sul ou as Três Marias.'
        ]
      },
      { 
        id: 'a19', 
        title: 'Clube do Livro', 
        description: 'Escolha um livro para lerem juntos e debaterem o final.', 
        type: 'cognitive', 
        icon: '📚',
        materials: ['Um livro de capítulos', 'Marcador de página', 'Lanche gostoso'],
        howToDo: [
          'Leiam um capítulo por noite.',
          'Ao final, pergunte: "O que você faria no lugar do herói?".',
          'Desenhem a cena favorita da história.',
          'Dêem uma nota de 1 a 10 para o livro.'
        ]
      },
      { 
        id: 'a20', 
        title: 'Oficina de Upcycling', 
        description: 'Transforme uma camiseta velha em uma ecobag estilosa.', 
        type: 'motor', 
        icon: '♻️',
        materials: ['Camiseta velha', 'Tesoura de tecido', 'Giz ou caneta'],
        howToDo: [
          'Corte as mangas e a gola da camiseta.',
          'Faça franjas na parte de baixo.',
          'Amarre as franjas umas nas outras para fechar o fundo.',
          'Use sua nova bolsa para carregar brinquedos ou compras.'
        ]
      }
    ],
    familyTalks: [
      { id: 't13', title: 'Nossa Árvore Genealógica', description: 'Quem foram nossos antepassados e suas histórias?', dynamic: 'Desenhem a árvore da família juntos.' },
      { id: 't14', title: 'Segurança Digital', description: 'O que fazer se encontrar algo estranho na internet?', dynamic: 'Criem uma "senha secreta" da família.' },
      { id: 't15', title: 'A Recompensa do Esforço', description: 'Por que algumas coisas levam tempo para serem conquistadas?', dynamic: 'Compartilhem uma conquista difícil de cada um.' }
    ]
  }
];
