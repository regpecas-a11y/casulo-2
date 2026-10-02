
import { JourneyStep, PhaseStatus, Recipe, FoodItem, MealSuggestion, Mission, Era } from './types';

export const FINANCE_MODULES = [
  { 
    id: 'mod1', 
    title: 'MÓDULO 1: ECONOMIA NO ENXOVAL', 
    icon: '👶', 
    description: 'Como montar o quarto e o kit básico sem cair em armadilhas de marketing.',
    minAge: -1,
    maxAge: 0,
    studies: [
      { 
        id: 's1_1', 
        title: 'Guia de Fraldas 🧷', 
        description: 'Um bebê usa cerca de 2.500 fraldas no primeiro ano.',
        content: 'Dica de Ouro: Compre tamanhos maiores (G e GG) em promoções antecipadas. Evite estocar RN, o bebê cresce muito rápido!'
      },
      { 
        id: 's1_2', 
        title: 'Móveis de Segunda Mão 🛏️', 
        description: 'Reduza custos em até 60% com itens usados de qualidade.',
        content: 'Checklist de Segurança: Verifique o selo do INMETRO e higienize todos os tecidos antes de montar o quartinho.' 
      },
      { 
        id: 's1_3', 
        title: 'Roupas: O Ciclo Rápido 👕', 
        description: 'Por que não investir em marcas caras nos primeiros meses.',
        content: 'O bebê perde roupas a cada 15-30 dias no início. Aposte em kits básicos de algodão e brechós infantis.' 
      }
    ]
  },
  { 
    id: 'mod2', 
    title: 'MÓDULO 2: ALIMENTAÇÃO E SAÚDE', 
    icon: '🛒', 
    description: 'Ajustando o orçamento mensal para a nova realidade nutricional.',
    minAge: 0,
    maxAge: 2,
    studies: [
      { 
        id: 's2_1', 
        title: 'Papinhas Caseiras vs Industrializados 🥣', 
        description: 'Economia de 70% na introdução alimentar.',
        content: 'Cozinhar em lotes no fim de semana e congelar em porções é a chave para a saúde do bebê e economia da família.'
      },
      { 
        id: 's2_2', 
        title: 'Farmácia de Emergência 💊', 
        description: 'Como criar um kit básico sem compras por impulso.',
        content: 'Tenha apenas o essencial prescrito pelo pediatra (antitérmico, soro). Evite comprar fórmulas e suplementos sem necessidade médica.' 
      },
      { 
        id: 's2_3', 
        title: 'Convênio vs SUS 🏥', 
        description: 'Avaliando custos fixos de saúde.',
        content: 'Calcule o custo-benefício de planos com coparticipação para rotinas de pediatria e vacinas particulares vs postos de saúde.' 
      }
    ]
  },
  { 
    id: 'mod3', 
    title: 'MÓDULO 3: EDUCAÇÃO FINANCEIRA', 
    icon: '🚀', 
    description: 'Transforme pequenas economias diárias em patrimônio.',
    minAge: -1,
    maxAge: 18,
    studies: [
      { 
        id: 's3_1', 
        title: 'Juros Compostos para Crianças 📈', 
        description: 'O poder do tempo no investimento do seu filho.',
        content: 'Começar com R$ 50 hoje vale muito mais que R$ 500 daqui a 10 anos devido ao efeito multiplicador dos juros compostos.'
      },
      { 
        id: 's3_2', 
        title: 'Conta para Menor de Idade 💳', 
        description: 'Como abrir e gerenciar ativos para seu filho.',
        content: 'Muitos bancos digitais oferecem contas gratuitas para menores. Dê preferência a corretoras com taxa zero para custódia.' 
      },
      { 
        id: 's3_3', 
        title: 'Inflação do Enxoval 🎈', 
        description: 'Proteja o dinheiro da desvalorização.',
        content: 'Guardar dinheiro parado na poupança perde valor. Investir em títulos atrelados ao IPCA+ garante o poder de compra futuro.' 
      }
    ]
  },
  { 
    id: 'mod4', 
    title: 'MÓDULO 4: PLANEJAMENTO ESCOLAR', 
    icon: '🎒', 
    description: 'Antecipando os custos da educação formal.',
    minAge: 1,
    maxAge: 6,
    studies: [
      { 
        id: 's4_1', 
        title: 'Berçário vs Babá 🍼', 
        description: 'Comparativo de custos e benefícios financeiros.',
        content: 'Considere não apenas a mensalidade, mas transporte, alimentação, impostos trabalhistas e a flexibilidade de horários.'
      },
      { 
        id: 's4_2', 
        title: 'Materiais Escolares 📝', 
        description: 'Estratégias para compra antecipada.',
        content: 'Comprar fora de época e em grupos coletivos com outros pais pode reduzir custos em até 30% na lista de materiais.' 
      },
      { 
        id: 's4_3', 
        title: 'Fundo de Faculdade 🎓', 
        description: 'Meta de longo prazo com aportes mensais.',
        content: 'Trace um objetivo de 18 anos. Automatize as transferências para que o investimento aconteça antes de você gastar o dinheiro.' 
      }
    ]
  },
  { 
    id: 'mod5', 
    title: 'MÓDULO 5: LAZER E VIAGENS', 
    icon: '🏖️', 
    description: 'Momentos em família sem dívidas.',
    minAge: 0,
    maxAge: 18,
    studies: [
      { 
        id: 's5_1', 
        title: 'Viagens com Bebê ✈️', 
        description: 'Logística barata para as primeiras férias.',
        content: 'Aproveite a gratuidade de passagens aéreas para menores de 2 anos no colo. Escolha destinos com estrutura de copa baby.'
      },
      { 
        id: 's5_2', 
        title: 'Festas de Aniversário 🎂', 
        description: 'Onde investir e onde economizar no 1º ano.',
        content: 'Priorize memórias e registros fotográficos sobre decorações cinematográficas caras que a criança não aproveitará plenamente.' 
      },
      { 
        id: 's5_3', 
        title: 'Brinquedos Inteligentes 🧩', 
        description: 'O rodízio de brinquedos como economia.',
        content: 'Assinatura de brinquedos ou trocas entre amigos evita o acúmulo de plásticos e mantém o interesse da criança sempre alto.' 
      }
    ]
  },
  { 
    id: 'mod6', 
    title: 'MÓDULO 6: PROTEÇÃO FAMILIAR', 
    icon: '🛡️', 
    description: 'Segurança financeira para imprevistos.',
    minAge: -1,
    maxAge: 18,
    studies: [
      { 
        id: 's6_1', 
        title: 'Reserva de Emergência 🆘', 
        description: 'Quanto ter guardado com um novo dependente.',
        content: 'Com a chegada de um bebê, a meta de reserva ideal sobe para cobrir de 6 a 12 meses do novo custo de vida familiar.'
      },
      { 
        id: 's6_2', 
        title: 'Seguro de Vida 💎', 
        description: 'Proteção para quem você mais ama.',
        content: 'Visto como investimento de sucessão e segurança para o futuro da criança, garantindo que os planos de educação não parem.' 
      },
      { 
        id: 's6_3', 
        title: 'Testamento e Sucessão 📝', 
        description: 'Organização patrimonial básica.',
        content: 'Evite custos altos de inventário futuro e conflitos familiares com um planejamento patrimonial e sucessório básico.' 
      }
    ]
  },
  { 
    id: 'mod7', 
    title: 'MÓDULO 7: A PRIMEIRA MESADA', 
    icon: '🪙', 
    description: 'Como introduzir o conceito de dinheiro para crianças pequenas.',
    minAge: 4,
    maxAge: 8,
    isInteractive: true,
    studies: [
      { 
        id: 's7_1', 
        title: 'A Regra dos 3 Cofrinhos 🐷', 
        description: 'Gastar, Guardar e Doar.',
        content: 'Ensine a criança a dividir sua mesada em três partes. Isso cria consciência sobre prioridades e generosidade desde cedo.'
      },
      { 
        id: 's7_2', 
        title: 'Desejo vs Necessidade 🍭', 
        description: 'O primeiro passo para o consumo consciente.',
        content: 'Antes de comprar um brinquedo, pergunte: "Você precisa disso ou apenas quer?". Ajude-a a entender a diferença.' 
      },
      { 
        id: 's7_3', 
        title: 'Paciência Recompensada ⏳', 
        description: 'O teste do marshmallow financeiro.',
        content: 'Se ela guardar o dinheiro hoje, poderá comprar algo maior no próximo mês. Ensine o valor da espera.' 
      }
    ]
  },
  { 
    id: 'mod8', 
    title: 'MÓDULO 8: EMPREENDEDORISMO KIDS', 
    icon: '🍋', 
    description: 'Estimulando a criatividade e o valor do trabalho.',
    minAge: 6,
    maxAge: 12,
    isInteractive: true,
    studies: [
      { 
        id: 's8_1', 
        title: 'A Barraca de Limonada 🥤', 
        description: 'Entendendo custos e lucros básicos.',
        content: 'Ajude a criança a calcular quanto gastou em ingredientes e por quanto deve vender para ter lucro.'
      },
      { 
        id: 's8_2', 
        title: 'Valorizando Talentos 🎨', 
        description: 'Transformando hobbies em pequenas rendas.',
        content: 'Se a criança gosta de desenhar ou fazer artesanato, mostre que o talento dela tem valor de mercado.' 
      },
      { 
        id: 's8_3', 
        title: 'Atendimento ao Cliente 🤝', 
        description: 'A importância da educação e honestidade.',
        content: 'Ser gentil e honesto com os "clientes" é o segredo para um negócio de sucesso, mesmo que seja de brincadeira.' 
      }
    ]
  },
  { 
    id: 'mod9', 
    title: 'MÓDULO 9: CONSUMO CONSCIENTE', 
    icon: '🌍', 
    description: 'Finanças e sustentabilidade andando juntas.',
    minAge: 5,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's9_1', 
        title: 'O Custo do Desperdício 🗑️', 
        description: 'Dinheiro jogado fora em comida e energia.',
        content: 'Mostre que apagar a luz e não desperdiçar comida ajuda a sobrar dinheiro para coisas mais divertidas.'
      },
      { 
        id: 's9_2', 
        title: 'Reciclar para Economizar ♻️', 
        description: 'Brinquedos novos com materiais velhos.',
        content: 'Criar seus próprios brinquedos economiza dinheiro e ajuda o planeta. É o poder da criatividade financeira.' 
      },
      { 
        id: 's9_3', 
        title: 'Publicidade e Desejo 📺', 
        description: 'Aprendendo a filtrar o que vemos na TV.',
        content: 'Ensine a criança que nem tudo o que passa no comercial é tão legal quanto parece. Analise as propagandas com ela.' 
      }
    ]
  },
  { 
    id: 'mod10', 
    title: 'MÓDULO 10: GENEROSIDADE E DOAÇÃO', 
    icon: '💝', 
    description: 'O papel social do dinheiro na vida da criança.',
    minAge: 3,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's10_1', 
        title: 'Desapego Solidário 🧸', 
        description: 'Doando brinquedos que não usa mais.',
        content: 'Fazer o dinheiro (em forma de bens) circular ajuda outras crianças e ensina sobre empatia e abundância.'
      },
      { 
        id: 's10_2', 
        title: 'Ajudando uma Causa 🐾', 
        description: 'Escolhendo onde investir sua generosidade.',
        content: 'Deixe a criança escolher uma causa (como animais ou crianças carentes) para doar uma pequena parte da mesada.' 
      },
      { 
        id: 's10_3', 
        title: 'Tempo é Dinheiro? ⏰', 
        description: 'O valor do voluntariado.',
        content: 'Doe tempo. Mostre que ajudar os outros é uma forma valiosa de "riqueza" que não envolve moedas.' 
      }
    ]
  },
  { 
    id: 'mod11', 
    title: 'MÓDULO 11: MATEMÁTICA DO DIA A DIA', 
    icon: '🔢', 
    description: 'Praticando cálculos financeiros no supermercado.',
    minAge: 6,
    maxAge: 10,
    isInteractive: true,
    studies: [
      { 
        id: 's11_1', 
        title: 'O Jogo do Preço Justo 🏷️', 
        description: 'Comparando marcas e tamanhos.',
        content: 'No mercado, peça para a criança encontrar o item mais barato entre três opções. Isso treina a percepção de valor.'
      },
      { 
        id: 's11_2', 
        title: 'Calculando o Troco 🪙', 
        description: 'Agilidade mental com moedas e notas.',
        content: 'Deixe a criança pagar pequenas compras e conferir o troco. É a matemática aplicada à vida real.' 
      },
      { 
        id: 's11_3', 
        title: 'Lista de Compras 📝', 
        description: 'Foco e disciplina no orçamento.',
        content: 'Ensine que se não está na lista, não entra no carrinho. Isso evita gastos impulsivos e mantém o foco.' 
      }
    ]
  },
  { 
    id: 'mod12', 
    title: 'MÓDULO 12: INVESTIMENTOS PARA O FUTURO', 
    icon: '🏦', 
    description: 'Conceitos avançados explicados de forma simples.',
    minAge: 8,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's12_1', 
        title: 'O que é uma Ação? 📈', 
        description: 'Sendo dono de um pedacinho de uma empresa.',
        content: 'Explique que comprar uma ação é como ser dono de uma parte da fábrica de brinquedos ou de chocolates.'
      },
      { 
        id: 's12_2', 
        title: 'Dividendos: O Dinheiro que Trabalha 💸', 
        description: 'Recebendo "aluguel" dos seus investimentos.',
        content: 'Mostre que algumas empresas pagam você só por ter as ações delas. É o dinheiro gerando mais dinheiro.' 
      },
      { 
        id: 's12_3', 
        title: 'Risco e Recompensa 🎲', 
        description: 'Entendendo que nem todo investimento é seguro.',
        content: 'Ensine que investimentos com maior ganho costumam ter mais risco. Diversificar é o segredo do sucesso.' 
      }
    ]
  },
  { 
    id: 'mod13', 
    title: 'MÓDULO 13: BANCO DIGITAL E SEGURANÇA', 
    icon: '📱', 
    description: 'Navegando no mundo das finanças online.',
    minAge: 7,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's13_1', 
        title: 'O que é o PIX? ⚡', 
        description: 'Dinheiro instantâneo e digital.',
        content: 'Explique como o dinheiro viaja pelo celular sem precisar de papel. Mas cuidado: uma vez enviado, não volta!'
      },
      { 
        id: 's13_2', 
        title: 'Senhas e Proteção 🔐', 
        description: 'Guardando sua chave do cofre digital.',
        content: 'Sua senha é secreta. Ensine a importância de não compartilhar códigos e usar biometria quando possível.' 
      },
      { 
        id: 's13_3', 
        title: 'Cuidado com Golpes ⚠️', 
        description: 'Identificando mensagens falsas.',
        content: 'Se algo parece bom demais para ser verdade na internet, provavelmente é mentira. Ensine a desconfiar de prêmios fáceis.' 
      }
    ]
  },
  { 
    id: 'mod14', 
    title: 'MÓDULO 14: CARREIRA E RENDA', 
    icon: '💼', 
    description: 'Como as profissões geram valor e dinheiro.',
    minAge: 7,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's14_1', 
        title: 'O Valor do Estudo 📚', 
        description: 'Conhecimento é o melhor investimento.',
        content: 'Quanto mais você aprende, mais problemas consegue resolver e mais valor o seu trabalho terá no futuro.'
      },
      { 
        id: 's14_2', 
        title: 'Diferentes Profissões 👩‍⚕️', 
        description: 'Explorando como cada um ganha a vida.',
        content: 'Do médico ao programador, cada profissão tem sua importância e sua forma de remuneração.' 
      },
      { 
        id: 's14_3', 
        title: 'Trabalho em Equipe 🤝', 
        description: 'Colaboração gera mais resultados.',
        content: 'Trabalhar bem com os outros ajuda a criar projetos maiores e mais lucrativos do que trabalhar sozinho.' 
      }
    ]
  },
  { 
    id: 'mod15', 
    title: 'MÓDULO 15: ORÇAMENTO FAMILIAR', 
    icon: '🏠', 
    description: 'A criança participando das decisões da casa.',
    minAge: 6,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's15_1', 
        title: 'De onde vem o dinheiro? 🏦', 
        description: 'Entendendo o salário dos pais.',
        content: 'Explique de forma simples que o trabalho dos pais se transforma no dinheiro que paga a casa e a comida.'
      },
      { 
        id: 's15_2', 
        title: 'Contas Fixas vs Variáveis 💡', 
        description: 'Luz, água e internet também custam.',
        content: 'Mostre os boletos (sem assustar). Ajude a criança a entender que viver em uma casa tem custos mensais.' 
      },
      { 
        id: 's15_3', 
        title: 'Planejando as Férias 🏖️', 
        description: 'Economizando em conjunto para um objetivo comum.',
        content: 'Envolva a criança no plano de economia para a próxima viagem. Isso gera senso de pertencimento e responsabilidade.' 
      }
    ]
  },
  { 
    id: 'mod16', 
    title: 'MÓDULO 16: CRÉDITO E DÍVIDAS', 
    icon: '💳', 
    description: 'O perigo de gastar o que não se tem.',
    minAge: 9,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's16_1', 
        title: 'O Cartão não é Mágico ✨', 
        description: 'Entendendo que o cartão de crédito é um empréstimo.',
        content: 'Explique que o banco paga para você agora, mas você terá que pagar o banco com juros depois se atrasar.'
      },
      { 
        id: 's16_2', 
        title: 'O que são Juros de Dívida? 📉', 
        description: 'A bola de neve negativa.',
        content: 'Diferente dos investimentos, aqui os juros trabalham contra você. Evite sempre as dívidas de consumo.' 
      },
      { 
        id: 's16_3', 
        title: 'Comprando à Vista 💵', 
        description: 'O poder do desconto e da liberdade.',
        content: 'Quem tem o dinheiro na mão tem o poder de negociar descontos e não fica preso a parcelas futuras.' 
      }
    ]
  },
  { 
    id: 'mod17', 
    title: 'MÓDULO 17: IMPOSTOS E CIDADANIA', 
    icon: '🏛️', 
    description: 'Para onde vai parte do nosso dinheiro.',
    minAge: 10,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's17_1', 
        title: 'O que é Imposto? 🧾', 
        description: 'A contribuição para o bem comum.',
        content: 'Explique que parte do preço de tudo o que compramos vai para pagar escolas, hospitais e praças públicas.'
      },
      { 
        id: 's17_2', 
        title: 'Nota Fiscal é Importante! 📄', 
        description: 'Garantindo que o imposto chegue ao destino.',
        content: 'Pedir a nota fiscal ajuda a evitar que o dinheiro do imposto seja desviado e garante seus direitos de consumidor.' 
      },
      { 
        id: 's17_3', 
        title: 'Cuidando do que é Público 🌳', 
        description: 'Economizando o dinheiro de todos.',
        content: 'Não estragar o que é público (como bancos de praça) faz com que o governo gaste menos com consertos e mais com melhorias.' 
      }
    ]
  },
  { 
    id: 'mod18', 
    title: 'MÓDULO 18: O VALOR DAS COISAS', 
    icon: '💎', 
    description: 'Preço é o que você paga, valor é o que você leva.',
    minAge: 5,
    maxAge: 18,
    isInteractive: true,
    studies: [
      { 
        id: 's18_1', 
        title: 'Coisas que o Dinheiro não Compra ❤️', 
        description: 'Amizade, amor e tempo em família.',
        content: 'Ensine que as coisas mais valiosas da vida são gratuitas. O dinheiro é apenas uma ferramenta para nos ajudar.'
      },
      { 
        id: 's18_2', 
        title: 'Qualidade vs Quantidade 🧸', 
        description: 'Um brinquedo bom dura mais que dez ruins.',
        content: 'Às vezes é melhor pagar um pouco mais por algo que vai durar muito tempo do que comprar algo barato que quebra logo.' 
      },
      { 
        id: 's18_3', 
        title: 'Alegria de Conquistar 🏆', 
        description: 'O valor do esforço pessoal.',
        content: 'Conseguir algo depois de economizar por meses traz uma satisfação muito maior do que ganhar tudo de mão beijada.' 
      }
    ]
  }
];

export const FINANCE_BADGES = [
  { id: 'b1', name: 'Poupador Feroz', icon: '🦁' },
  { id: 'b2', name: 'Meta no Alvo', icon: '🎯' },
  { id: 'b3', name: 'Futuro Garantido', icon: '🌈' },
  { id: 'b4', name: 'Zero Desperdício', icon: '♻️' },
  { id: 'b5', name: 'Mestre da Planilha', icon: '📊' }
];

export const DAILY_MENU: MealSuggestion[] = [
  { label: 'Café da Manhã', val: 'Mingau de Aveia Cremoso', time: '08:00' },
  { label: 'Almoço', val: 'Carne Moída com Abóbora Cabotiá', time: '12:30' },
  { label: 'Café da Tarde', val: 'Purê de Manga Palmer', time: '15:30' },
  { label: 'Jantar', val: 'Sopa de Inhame Fortificante', time: '19:00' }
];

export const FOOD_DATABASE: FoodItem[] = [
  // FRUTAS (20)
  { 
    id: 'f1', name: 'Banana Nanica', category: 'FRUTAS', icon: '🍌', vitamins: 'B6, C, Potássio', seasonality: 'O ano todo', 
    blwInstructions: 'Corte a banana em terços e ofereça com parte da casca (lavada) para que o bebê consiga segurar sem escorregar.',
    benefits: 'NUTRIENTES: Rica em potássio (essencial para o coração) e vitamina B6.\n\nSAÚDE INTESTINAL: Contém fibras que previnem a constipação.\n\nIMUNIDADE: Vitamina C para fortalecer as defesas naturais.\n\nSUPER PODER: Fornece energia instantânea para as primeiras explorações.',
    airfryerRecipe: '1. Descasque a banana e corte ao meio verticalmente.\n2. Pincele uma gota de óleo de coco e polvilhe canela.\n3. Asse por 8-10 min a 180°C até ficar dourada e cremosa.'
  },
  { 
    id: 'f2', name: 'Maçã Gala', category: 'FRUTAS', icon: '🍎', vitamins: 'Fibras, C', seasonality: 'Abril a Setembro', 
    blwInstructions: 'Nunca ofereça crua em pedaços duros. Ofereça cozida no vapor ou assada em fatias largas até que fiquem macias.',
    benefits: 'NUTRIENTES: Fonte de quercetina, um potente protetor celular.\n\nSAÚDE INTESTINAL: Rica em pectina, que regula o trânsito digestivo.\n\nCÉREBRO: Antioxidantes que auxiliam na neuroproteção.\n\nSUPER PODER: Alimento hipoalergênico, ideal para o início da introdução alimentar.',
    airfryerRecipe: '1. Retire o miolo e fatie em luas de 1cm.\n2. Coloque no cesto com um pau de canela próximo.\n3. Asse a 160°C por 12 min até que mude de cor e fique macia.'
  },
  { 
    id: 'f3', name: 'Mamão Papaia', category: 'FRUTAS', icon: '🥣', vitamins: 'A, C, Fibras', seasonality: 'O ano todo', 
    blwInstructions: 'Corte em fatias largas (formato de "meia lua") e mantenha a casca se estiver escorregando demais das mãos do bebê.',
    benefits: 'NUTRIENTES: Alta concentração de Vitamina A (saúde dos olhos).\n\nSAÚDE INTESTINAL: Papaína (enzima) que ajuda na digestão e solta o intestino.\n\nPELE: Betacaroteno para proteção e renovação celular.\n\nSUPER PODER: É o melhor remédio natural para bebês constipados.',
    airfryerRecipe: '1. Corte fatias grossas (3 dedos de largura).\n2. Aqueça por apenas 4 min a 160°C.\n3. Sirva morno: o calor libera mais aroma e sabor doce.'
  },
  { 
    id: 'f4', name: 'Pêra Williams', category: 'FRUTAS', icon: '🍐', vitamins: 'C, K, Fibras', seasonality: 'Janeiro a Maio', 
    blwInstructions: 'Assim como a maçã, deve ser oferecida cozida ou muito madura (derretendo na boca). Corte em fatias longitudinais.',
    benefits: 'NUTRIENTES: Rica em boro, mineral vital para o desenvolvimento ósseo.\n\nSAÚDE INTESTINAL: Fibras solúveis que hidratam as fezes.\n\nIMUNIDADE: Vitamina K para auxiliar na coagulação e saúde vascular.\n\nSUPER PODER: Extremamente hidratante (composta por 84% de água).',
    airfryerRecipe: '1. Fatie a pêra ao meio e retire as sementes.\n2. Coloque um cravo da índia em cada metade (retire antes de dar ao bebê).\n3. Asse por 15 min a 170°C até soltar o suco natural.'
  },
  { 
    id: 'f5', name: 'Abacate Manteiga', category: 'FRUTAS', icon: '🥑', vitamins: 'E, B6, Gorduras Boas', seasonality: 'Fevereiro a Agosto', 
    blwInstructions: 'Corte em fatias largas. Se estiver muito maduro, pode passar em farelo de aveia para dar aderência à mão do bebê.',
    benefits: 'NUTRIENTES: Vitamina E para proteção celular e gorduras monoinsaturadas.\n\nCÉREBRO: O tipo de gordura essencial para a bainha de mielina dos neurônios.\n\nCRESCIMENTO: Densidade calórica alta para ganho de peso saudável.\n\nSUPER PODER: Estimula a absorção de vitaminas de outros vegetais.',
    airfryerRecipe: '1. Corte uma fatia grossa com casca.\n2. Pincele a polpa com azeite extra virgem.\n3. Toste a 180°C por 6 min. Fica com sabor amendodo delicioso.'
  },
  { 
    id: 'f6', name: 'Manga Palmer', category: 'FRUTAS', icon: '🥭', vitamins: 'A, C', seasonality: 'Outubro a Março', 
    blwInstructions: 'Ofereça o caroço (limpo de fibras excessivas) para o bebê roer ou fatias largas sem casca.',
    benefits: 'NUTRIENTES: Magnésio e Cobre para saúde do sangue e metabolismo.\n\nVISÃO: Abundante em vitamina A e zeaxantina.\n\nIMUNIDADE: Protege as mucosas do trato respiratório.\n\nSUPER PODER: O caroço ajuda a aliviar a coceira na gengiva dos dentes nascendo.',
    airfryerRecipe: '1. Corte a manga em bastões rígidos (não muito madura).\n2. Pincele uma gota de azeite.\n3. Asse por 7 min a 190°C para "selar" o exterior e não escorregar.'
  },
  { 
    id: 'f7', name: 'Kiwi', category: 'FRUTAS', icon: '🥝', vitamins: 'C, K', seasonality: 'Maio a Outubro', 
    blwInstructions: 'Corte ao meio e ofereça para o bebê explorar ou em fatias largas. Deve estar bem maduro e macio.',
    benefits: 'NUTRIENTES: Contém mais Vitamina C que duas laranjas inteiras.\n\nSAÚDE INTESTINAL: Actinicinas que facilitam a quebra de proteínas das carnes.\n\nIMUNIDADE: Estimula a produção de glóbulos brancos.\n\nSUPER PODER: Potencializa a absorção de ferro de origem vegetal das refeições.',
    airfryerRecipe: '1. Descasque e fatie em rodelas grossas (2cm).\n2. Não use temperaturas altas; apenas aqueça por 3 min a 140°C.\n3. Ideal para suavizar a acidez inicial.'
  },
  { 
    id: 'f8', name: 'Melancia', category: 'FRUTAS', icon: '🍉', vitamins: 'A, C, Licopeno', seasonality: 'Novembro a Fevereiro', 
    blwInstructions: 'Corte em triângulos grandes mantendo a parte da casca para servir de "alça". Remova as sementes visíveis.',
    benefits: 'NUTRIENTES: Rica em Citrulina (aminoácido para circulação) e Licopeno.\n\nHIDRATAÇÃO: 92% de água, perfeita para evitar desidratação no verão.\n\nCORAÇÃO: Ajuda no desenvolvimento do sistema cardiovascular.\n\nSUPER PODER: Fornece eletrólitos naturais similares ao soro caseiro.',
    airfryerRecipe: 'Não recomendado o uso na Airfryer para este alimento devido ao excesso de água.'
  },
  { 
    id: 'f9', name: 'Uva', category: 'FRUTAS', icon: '🍇', vitamins: 'Antocianinas', seasonality: 'Janeiro a Março', 
    blwInstructions: 'CORTE OBRIGATÓRIO: Corte sempre no sentido do comprimento (vertical) em 4 partes. Nunca ofereça inteira.',
    benefits: 'NUTRIENTES: Flavonoides potentes para saúde das artérias.\n\nIMUNIDADE: Rica em Resveratrol (poderoso antioxidante celular).\n\nENERGIA: Açúcares naturais que sustentam a atividade física do bebê.\n\nSUPER PODER: Protege o DNA das células contra danos oxidativos.',
    airfryerRecipe: '1. Corte as uvas ao meio (sem semente).\n2. Coloque em um recipiente de cerâmica dentro da Airfryer.\n3. Asse por 15 min a 120°C para criar uvas passas caseiras e macias.'
  },
  { 
    id: 'f10', name: 'Morango', category: 'FRUTAS', icon: '🍓', vitamins: 'C, Ácido Fólico', seasonality: 'Agosto a Outubro', 
    blwInstructions: 'Se for grande, ofereça inteiro para o bebê morder. Se for pequeno, corte ao meio no comprimento.',
    benefits: 'NUTRIENTES: Ácido fólico (essencial para renovação celular) e Iodo.\n\nIMUNIDADE: Antocianinas que dão a cor vermelha e combatem inflamações.\n\nSAÚDE BUCAL: Vitamina C essencial para gengivas saudáveis.\n\nSUPER PODER: Ajuda na formação de hemoglobina no sangue do bebê.',
    airfryerRecipe: '1. Lave bem e remova as folhas.\n2. Coloque inteiros com a base para baixo.\n3. Asse por 5 min a 160°C. Eles ficam suculentos e doces como geleia.'
  },
  { 
    id: 'f11', name: 'Abacaxi', category: 'FRUTAS', icon: '🍍', vitamins: 'C, Bromelina', seasonality: 'Novembro a Janeiro', 
    blwInstructions: 'Corte em fatias largas e compridas. Remova a parte central (miolo) se estiver muito dura.',
    benefits: 'NUTRIENTES: Manganês (importante para enzimas ósseas) e Vitamina B1.\n\nDIGESTÃO: Bromelina que quebra as proteínas pesadas facilitando a digestão.\n\nRESPIRATÓRIO: Propriedades que ajudam a diluir secreções.\n\nSUPER PODER: Auxilia na cicatrização e recuperação pós-vacinas.',
    airfryerRecipe: '1. Corte em fatias circulares grossas.\n2. Polvilhe um pouco de hortelã picada.\n3. Asse a 180°C por 10 min até dourar as bordas. O calor quebra a acidez.'
  },
  { 
    id: 'f12', name: 'Laranja Lima', category: 'FRUTAS', icon: '🍊', vitamins: 'C, Fibras', seasonality: 'Maio a Agosto', 
    blwInstructions: 'Ofereça em gomos sem a pele (película) e sem sementes, ou em rodelas largas com casca.',
    benefits: 'NUTRIENTES: Vitamina C de altíssima absorção e potássio.\n\nSAÚDE INTESTINAL: O "bagaço" (se ingerido) ajuda a formar o bolo fecal.\n\nPREVENÇÃO: Ácido cítrico que previne formação de cristais nos rins.\n\nSUPER PODER: A menos ácida das laranjas, ideal para estômagos sensíveis.',
    airfryerRecipe: '1. Corte a laranja em rodelas com casca.\n2. Aqueça por apenas 5 min a 150°C.\n3. O aquecimento intensifica os óleos essenciais da casca e o aroma.'
  },
  { 
    id: 'f13', name: 'Ameixa', category: 'FRUTAS', icon: '🟣', vitamins: 'K, A, Fibras', seasonality: 'Dezembro a Fevereiro', 
    blwInstructions: 'Retire o caroço e ofereça cortada ao meio se estiver muito madura ou em gomos largos.',
    benefits: 'NUTRIENTES: Vitamina K para ossos fortes e minerais como Fósforo.\n\nSAÚDE INTESTINAL: Sorbitol natural que hidrata o cólon (efeito laxante).\n\nCORAÇÃO: Ajuda no controle da absorção de gorduras no intestino.\n\nSUPER PODER: Considerada o melhor regulador intestinal para bebês.',
    airfryerRecipe: '1. Corte ao meio e remova o caroço.\n2. Coloque com the polpa para cima.\n3. Asse por 6 min a 170°C até que borbulhe levemente. Textura de calda.'
  },
  { 
    id: 'f14', name: 'Pitaya', category: 'FRUTAS', icon: '🌵', vitamins: 'C, Antioxidantes', seasonality: 'Dezembro a Maio', 
    blwInstructions: 'Corte em fatias largas com casca (para segurar) ou em cubos grandes para pinça se o bebê já for maior.',
    benefits: 'NUTRIENTES: Ferro vegetal e magnésio em abundância.\n\nSAÚDE INTESTINAL: Sementes ricas em ácidos graxos que lubrificam o intestino.\n\nIMUNIDADE: Complexo de vitamina B para o metabolismo energético.\n\nSUPER PODER: Estimula a curiosidade visual do bebê pela cor vibrante.',
    airfryerRecipe: 'Não recomendado o uso na Airfryer.'
  },
  { 
    id: 'f15', name: 'Melão', category: 'FRUTAS', icon: '🍈', vitamins: 'A, C', seasonality: 'Setembro a Março', 
    blwInstructions: 'Corte em fatias em formato de "C" (meia lua) mantendo a casca para facilitar a pega.',
    benefits: 'NUTRIENTES: Beta-criptoxantina que protege as articulações.\n\nHIDRATAÇÃO: Fornece água e sais minerais fundamentais.\n\nPELE: Vitamina A para integridade da barreira cutânea do bebê.\n\nSUPER PODER: Baixíssimo índice glicêmico (não sobrecarrega o pâncreas).',
    airfryerRecipe: '1. Corte fatias grossas sem semente.\n2. Aqueça por 4 min a 160°C.\n3. O calor libera um aroma doce delicioso que estimula o olfato do bebê.'
  },
  { 
    id: 'f16', name: 'Cereja', category: 'FRUTAS', icon: '🍒', vitamins: 'C, Potássio', seasonality: 'Novembro a Janeiro', 
    blwInstructions: 'Retire o caroço e corte ao meio no sentido do comprimento. Nunca ofereça inteira.',
    benefits: 'NUTRIENTES: Melatonina natural (ajuda na regulação do ciclo circadiano).\n\nANTIOXIDANTE: Rica em quercetina e antocianidinas.\n\nCÉREBRO: Nutrientes que auxiliam na concentração e acuidade mental.\n\nSUPER PODER: Ajuda o bebê a relaxar e ter um sono mais reparador.',
    airfryerRecipe: '1. Remova o caroço e corte ao meio.\n2. Coloque em forma de silicone.\n3. Asse por 5 min a 160°C. Sirva com um pouco de iogurte natural.'
  },
  { 
    id: 'f17', name: 'Pêssego', category: 'FRUTAS', icon: '🍑', vitamins: 'A, C', seasonality: 'Dezembro a Fevereiro', 
    blwInstructions: 'Ofereça sem caroço, cortado em gomos largos. Deve estar bem macio ao toque.',
    benefits: 'NUTRIENTES: Zinco e Magnésio para o crescimento físico.\n\nSAÚDE INTESTINAL: Fibras que ajudam na eliminação de toxinas.\n\nVISÃO: Vitamina A fundamental para a retina infantil.\n\nSUPER PODER: Sabor suave que facilita a aceitação de novas frutas.',
    airfryerRecipe: '1. Corte ao meio e retire o caroço.\n2. Pincele the polpa with un pouco de azeite.\n3. Asse por 10 min a 180°C. Fica caramelizado e extremamente macio.'
  },
  { 
    id: 'f18', name: 'Figo', category: 'FRUTAS', icon: '🥙', vitamins: 'Cálcio, Magnésio', seasonality: 'Janeiro a Março', 
    blwInstructions: 'Corte ao meio ou em quatro partes. É uma fruta macia e excelente para o início da introdução.',
    benefits: 'NUTRIENTES: Melhor fonte frutal de Cálcio para ossos e dentes.\n\nSAÚDE INTESTINAL: Fibras prebióticas que alimentam a flora intestinal boa.\n\nENERGIA: Fonte de potássio e ferro para vitalidade.\n\nSUPER PODER: Fortalece o sistema esquelético durante os picos de crescimento.',
    airfryerRecipe: '1. Corte em quatro partes.\n2. Coloque no cesto por 5 min a 170°C.\n3. O calor quebra a densidade da casca tornando-a imperceptível para o bebê.'
  },
  { 
    id: 'f19', name: 'Nectarina', category: 'FRUTAS', icon: '🍎', vitamins: 'A, C, Fibras', seasonality: 'Dezembro a Fevereiro', 
    blwInstructions: 'Siga a mesma orientação do pêssego: gomos largos e fruta bem madura/macia.',
    benefits: 'NUTRIENTES: Luteína para saúde dos olhos e betacaroteno.\n\nIMUNIDADE: Vitamina C concentrada para defesa contra resfriados.\n\nSAÚDE INTESTINAL: Rica em pectina e potássio.\n\nSUPER PODER: Baixa densidade calórica e alta densidade de nutrientes.',
    airfryerRecipe: '1. Fatie em gomos largos (3cm).\n2. Asse a 180°C por 8 min.\n3. Textura interna de mousse e exterior firme para o bebê segurar com autonomia.'
  },
  { 
    id: 'f20', name: 'Coco', category: 'FRUTAS', icon: '🥥', vitamins: 'Ácido Láurico, Potássio', seasonality: 'O ano todo', 
    blwInstructions: 'Ofereça em lascas grandes e finas para o bebê roer, ou ralado em preparações.',
    benefits: 'NUTRIENTES: Ácido Láurico (mesmo composto protetor do leite materno).\n\nENERGIA: Gorduras saturadas de cadeia média (energy rápida).\n\nIMUNIDADE: Propriedades antivirais e antifúngicas naturais.\n\nSUPER PODER: Protege o estômago contra bactérias patogênicas.',
    airfryerRecipe: '1. Corte lascas finas e longas de coco fresco.\n2. Coloque no cesto a 160°C por 4-5 min.\n3. Mexa na metade: vira um chip crocante que derrete na boca.'
  },

  // VEGETAIS (20)
  { 
    id: 'v1', name: 'Cenoura Baby', category: 'VEGETAIS', icon: '🥕', vitamins: 'A (Betacaroteno)', seasonality: 'O ano todo', 
    blwInstructions: 'Cozinhe até que fique bem macia. Ofereça em palitos da largura de um dedo adulto.',
    benefits: 'NUTRIENTES: Rica em betacaroteno e fibras insolúveis.\n\nVISÃO: Essencial para adaptação à luz e prevenção de cegueira noturna.\n\nPELE: Ajuda na cicatrização e proteção contra raios solares.\n\nSUPER PODER: Estimula a mastigação e o fortalecimento da mandíbula.',
    airfryerRecipe: '1. Corte em palitos grossos e cozinhe 5 min no vapor.\n2. Pincele azeite e orégano.\n3. Asse por 12 min a 180°C até criar uma crosta doce e macia.'
  },
  { 
    id: 'v2', name: 'Brócolis Ninja', category: 'VEGETAIS', icon: '🥦', vitamins: 'C, K, Fibras', seasonality: 'Junho a Outubro', 
    blwInstructions: 'Ofereça o florete inteiro com um talo longo. Cozinhe no vapor para deixar bem macio.',
    benefits: 'NUTRIENTES: Fonte excepcional de Cálcio vegetal e Ferro.\n\nSAÚDE CELULAR: Sulforafano que protege as células contra mutações.\n\nSANGUE: Vitamina K necessária para a coagulação perfeita.\n\nSUPER PODER: O formato de "árvore" estimula o interesse lúdico do bebê.',
    airfryerRecipe: '1. Corte floretes médios com talos longos.\n2. Pincele azeite no topo dos floretes.\n3. Asse por 8 min a 160°C. O talo fica macio e o topo levemente crocante.'
  },
  { 
    id: 'v3', name: 'Abóbora Cabotiá', category: 'VEGETAIS', icon: '🎃', vitamins: 'A, Potássio', seasonality: 'Março a Junho', 
    blwInstructions: 'Corte em gomos (canoa) e asse ou cozinhe com casca. A polpa deve estar bem macia.',
    benefits: 'NUTRIENTES: Rica em vitamina E, C e betacaroteno.\n\nDIGESTÃO: Extremamente fácil de digerir, não causa gases.\n\nCRESCIMENTO: Fornece amido saudável para desenvolvimento muscular.\n\nSUPER PODER: Sua cor vibrante atrai o bebê e indica alta carga de vitaminas.',
    airfryerRecipe: '1. Corte em gomos largos com casca.\n2. Tempere com um fio de azeite e cúrcuma.\n3. Asse por 20 min a 180°C. Fica com textura de batata rústica.'
  },
  { 
    id: 'v4', name: 'Batata Docê', category: 'VEGETAIS', icon: '🍠', vitamins: 'A, C, B-Complex', seasonality: 'O ano todo', 
    blwInstructions: 'Corte em palitos largos e asse com um fio de azeite até dourar por fora e ficar macia por dentro.',
    benefits: 'NUTRIENTES: Carboidrato complexo de baixo índice glicêmico.\n\nENERGIA: Sustenta o bebê por longas horas de sono e brincadeiras.\n\nSAÚDE INTESTINAL: Fibras que alimentam bactérias probióticas.\n\nSUPER PODER: Rica em Ferro, essencial para bebês em crescimento rápido.',
    airfryerRecipe: '1. Corte em bastões de 1cm de espessura.\n2. Misture com azeite e páprica doce (sem pimenta).\n3. Asse por 15-18 min a 180°C. Vire na metade do tempo.'
  },
  { 
    id: 'v5', name: 'Chuchu', category: 'VEGETAIS', icon: '🥬', vitamins: 'C, B9', seasonality: 'Outubro a Março', 
    blwInstructions: 'Corte em palitos largos e cozinhe até ficar translúcido e macio.',
    benefits: 'NUTRIENTES: Rico em potássio e zinco para regulação celular.\n\nHIDRATAÇÃO: Composto quase totalmente por água e sais minerais.\n\nDIGESTÃO: Alimento neutro, ideal para fases de irritabilidade gástrica.\n\nSUPER PODER: Ajuda no controle de edemas e hidrata o organismo.',
    airfryerRecipe: '1. Corte em palitos largos (retire a casca).\n2. Pincele azeite e um pouco de salsinha desidratada.\n3. Asse por 10 min a 190°C para ganhar firmeza e sabor.'
  },
  { id: 'v6', name: 'Abobrinha', category: 'VEGETAIS', icon: '🥒', vitamins: 'C, A', seasonality: 'Outubro a Maio', blwInstructions: 'Corte em palitos largos e grelhe ou cozinhe no vapor.', benefits: 'NUTRIENTES: Magnésio e potássio.\n\nHIDRATAÇÃO: Alta carga hídrica.\n\nSAÚDE INTESTINAL: Fibras suaves.\n\nSUPER PODER: Ajuda no relaxamento muscular e sono.', airfryerRecipe: '1. Corte rodelas grossas (2cm).\n2. Pincele azeite e coloque a 180°C por 10 min.\n3. Fica suculenta por dentro.' },
  { id: 'v7', name: 'Berinjela', category: 'VEGETAIS', icon: '🍆', vitamins: 'B, Fibras', seasonality: 'Janeiro a Maio', blwInstructions: 'Corte em fatias ou palitos largos e asse. A textura interna fica bem macia.', benefits: 'NUTRIENTES: Antocianinas na casca (antioxidante).\n\nCORAÇÃO: Protege o sistema circulatório.\n\nCÉREBRO: Nasunin ajuda a proteger gorduras cerebrais.\n\nSUPER PODER: Combate radicais livres desde cedo.', airfryerRecipe: '1. Corte em bastões.\n2. Passe em farinha de aveia.\n3. Asse a 190°C por 12 min com fio de azeite.' },
  { id: 'v8', name: 'Beterraba', category: 'VEGETAIS', icon: '🔴', vitamins: 'C, Ferro, Manganês', seasonality: 'Agosto a Fevereiro', blwInstructions: 'Cozinhe inteira e depois corte em palitos largos.', benefits: 'NUTRIENTES: Nitratos naturais para oxigenação sanguínea.\n\nSANGUE: Previne anemia ferropriva.\n\nENERGIA: Açúcares de liberação lenta.\n\nSUPER PODER: Melhora a performance física do bebê.', airfryerRecipe: '1. Corte em rodelas muito finas.\n2. Asse a 160°C por 15 min (chips).\n3. Deixe esfriar para ficar crocante.' },
  { id: 'v9', name: 'Inhame', category: 'VEGETAIS', icon: '🥔', vitamins: 'B6, C, Potássio', seasonality: 'Junho a Setembro', blwInstructions: 'Cozinhe muito bem. Ofereça pedaços grandes ou amassado grosseiramente.', benefits: 'NUTRIENTES: Complexo B e Diosgenina.\n\nIMUNIDADE: Limpa o sangue de impurezas.\n\nENERGIA: Carboidrato de alta qualidade.\n\nSUPER PODER: Fortalece o sistema linfático do bebê.', airfryerRecipe: '1. Corte em cubos grandes e cozinhe antes.\n2. Tempere com azeite.\n3. Asse por 15 min a 180°C até dourar.' },
  { id: 'v10', name: 'Mandioquinha', category: 'VEGETAIS', icon: '🥕', vitamins: 'C, B3', seasonality: 'Maio a Setembro', blwInstructions: 'Cozinhe e ofereça em formato de palito.', benefits: 'NUTRIENTES: Vitamina B3 e potássio.\n\nDIGESTÃO: O vegetal de mais fácil digestão do mundo.\n\nSABOR: Doce natural que os bebês amam.\n\nSUPER PODER: Fornece energia rápida sem causar cólicas.', airfryerRecipe: '1. Cozinhe em palitos (al dente).\n2. Pincele manteiga ghee ou azeite.\n3. Asse a 180°C por 12 min. Fica perfeita.' },
  { id: 'v11', name: 'Couve-Flor', category: 'VEGETAIS', icon: '🥦', vitamins: 'C, K', seasonality: 'Julho a Outubro', blwInstructions: 'Floretes grandes com talos longos para facilitar a pega.', benefits: 'NUTRIENTES: Colina para memória e cérebro.\n\nSAÚDE CELULAR: Glucosinolatos protetores.\n\nCRESCIMENTO: Vitamina K para ossos.\n\nSUPER PODER: Ajuda na formação das conexões neuronais.', airfryerRecipe: '1. Separe floretes grandes.\n2. Pincele azeite e cúrcuma.\n3. Asse por 10 min a 180°C.' },
  { id: 'v12', name: 'Espinafre', category: 'VEGETAIS', icon: '🍃', vitamins: 'A, K, Ferro', seasonality: 'Agosto a Novembro', blwInstructions: 'Ofereça picadinho dentro de omeletes ou bolinhos.', benefits: 'NUTRIENTES: Magnésio e Ferro heme.\n\nSANGUE: Transporta oxigênio para os tecidos.\n\nVISÃO: Rico em luteína.\n\nSUPER PODER: O "combustível" do crescimento físico acelerado.', airfryerRecipe: '1. Use folhas bem secas.\n2. Tempere com gotinha de azeite.\n3. Asse por apenas 3 min a 160°C (supervisão!).' },
  { id: 'v13', name: 'Milho Verde', category: 'VEGETAIS', icon: '🌽', vitamins: 'B1, B5, Fibras', seasonality: 'Dezembro a Maio', blwInstructions: 'Ofereça a espiga cortada em rodelas largas (2-3 dedos) para o bebê roer.', benefits: 'NUTRIENTES: Ácido fólico e zeaxantina.\n\nENERGIA: Excelente carga de carboidratos.\n\nSAÚDE INTESTINAL: Fibras insolúveis.\n\nSUPER PODER: Exercita a coordenação motora fina do bebê.', airfryerRecipe: '1. Corte a espiga em rodelas de 2 dedos.\n2. Pincele azeite ou manteiga.\n3. Asse por 10 min a 180°C.' },
  { id: 'v14', name: 'Ervilha', category: 'VEGETAIS', icon: '🟢', vitamins: 'K, A, Proteína', seasonality: 'Junho a Setembro', blwInstructions: 'Amasse levemente cada ervilha antes de oferecer se for servir inteira.', benefits: 'NUTRIENTES: Proteína vegetal e Ferro.\n\nCRESCIMENTO: Ajuda na síntese proteica muscular.\n\nIMUNIDADE: Vitamina C e A.\n\nSUPER PODER: Pequena no tamanho, gigante no valor proteico.', airfryerRecipe: '1. Use ervilhas frescas (não de lata).\n2. Pincele azeite e asse 5 min a 160°C.\n3. Serve como snack nutritivo.' },
  { id: 'v15', name: 'Batata Inglesa', category: 'VEGETAIS', icon: '🥔', vitamins: 'C, B6, Potássio', seasonality: 'O ano todo', blwInstructions: 'Ofereça cozida em palitos ou em formato de purê rústico.', benefits: 'NUTRIENTES: Vitamina B6 para metabolismo.\n\nENERGIA: Fonte primária de amido.\n\nNEURO: Auxilia na produção de neurotransmissores.\n\nSUPER PODER: Alimento de conforto universal para bebês.', airfryerRecipe: '1. Corte em palitos, deixe 30 min na água.\n2. Seque muito bem.\n3. Asse por 18 min a 180°C com azeite.' },
  { id: 'v16', name: 'Vagem', category: 'VEGETAIS', icon: '🥢', vitamins: 'C, A, K', seasonality: 'Outubro a Março', blwInstructions: 'Escolha vargens largas e cozinhe muito bem.', benefits: 'NUTRIENTES: Silício para pele e unhas.\n\nIMUNIDADE: Flavonoides protetores.\n\nVISÃO: Betacaroteno em abundância.\n\nSUPER PODER: Ajuda na densidade mineral óssea.', airfryerRecipe: '1. Remova as pontas da vagem.\n2. Misture com azeite e sal (se >1 ano).\n3. Asse a 180°C por 8 min.' },
  { id: 'v17', name: 'Tomate', category: 'VEGETAIS', icon: '🍅', vitamins: 'C, Licopeno', seasonality: 'O ano todo', blwInstructions: 'Ofereça em gomos largos. Retire as sementes se forem muito duras.', benefits: 'NUTRIENTES: Licopeno (proteção celular).\n\nCORAÇÃO: Protege contra estresse oxidativo.\n\nIMUNIDADE: Alta carga de Vitamina C.\n\nSUPER PODER: Quando aquecido, libera 3x mais nutrientes.', airfryerRecipe: '1. Corte tomates cereja ao meio.\n2. Coloque com the polpa para cima.\n3. Asse por 6 min a 160°C com azeite.' },
  { id: 'v18', name: 'Pimentão', category: 'VEGETAIS', icon: '🌶️', vitamins: 'C, A', seasonality: 'O ano todo', blwInstructions: 'Ofereça em tiras largas, preferencialmente sem a pele.', benefits: 'NUTRIENTES: O rei da Vitamina C (mais que a laranja).\n\nVISÃO: Luteína e Zeaxantina.\n\nMETABOLISMO: Vitamina B6.\n\nSUPER PODER: Estimula a diferenciação de sabores cítricos.', airfryerRecipe: '1. Corte em tiras largas.\n2. Asse a 200°C por 8 min.\n3. A pele solta sozinha, retire-a antes de servir.' },
  { id: 'v19', name: 'Couve', category: 'VEGETAIS', icon: '🥬', vitamins: 'C, K, Cálcio', seasonality: 'O ano todo', blwInstructions: 'Pique bem fininho e refogue, ou faça o "charutinho" bem cozido.', benefits: 'NUTRIENTES: Ferro e Cálcio de alta absorção.\n\nSANGUE: Melhora a oxigenação cerebral.\n\nIMUNIDADE: Purifica o organismo.\n\nSUPER PODER: Um dos vegetais mais densos em nutrientes do planeta.', airfryerRecipe: '1. Rasgue as folhas (sem o talo).\n2. Misture com gotinha de azeite.\n3. Asse 4 min a 160°C. Cuidado: queima rápido!' },
  { id: 'v20', name: 'Repolho', category: 'VEGETAIS', icon: '🥗', vitamins: 'C, K', seasonality: 'Abril a Setembro', blwInstructions: 'Cozinhe gomos grandes de repolho até que as fibras estejam bem macias.', benefits: 'NUTRIENTES: Enxofre e Vitamina K.\n\nESTÔMAGO: Protege a mucosa gástrica.\n\nIMUNIDADE: Rico em vitamina C.\n\nSUPER PODER: Excelente anti-inflamatório natural.', airfryerRecipe: '1. Corte gomos como "fatias de pizza".\n2. Pincele azeite e coloque a 180°C.\n3. Asse por 10 min. As bordas ficam doces.' },

  // PROTEINAS (20)
  { 
    id: 'p1', name: 'Filé de Frango', category: 'PROTEINAS', icon: '🍗', vitamins: 'B3, B6, Proteína', seasonality: 'O ano todo', 
    blwInstructions: 'Corte em tiras largas no sentido oposto às fibras para o bebê desfiar.',
    benefits: 'NUTRIENTES: Aminoácidos essenciais para construção de tecidos.\n\nENERGIA: Vitaminas do complexo B para converter comida em força.\n\nCRESCIMENTO: Proteína magra de facílima absorção.\n\nSUPER PODER: Ajuda na manutenção de ossos e músculos fortes.',
    airfryerRecipe: '1. Corte em tiras de 2 dedos de largura.\n2. Marine com suco de laranja por 15 min.\n3. Asse a 180°C por 12 min. Não deixe ressecar.'
  },
  { 
    id: 'p2', name: 'Ovo Caipira', category: 'PROTEINAS', icon: '🥚', vitamins: 'B12, D, Colina', seasonality: 'O ano todo', 
    blwInstructions: 'Ofereça cozido em gomos ou em formato de omelete cortada em tiras.',
    benefits: 'NUTRIENTES: Colina, Selênio e Luteína.\n\nCÉREBRO: Colina é fundamental para memória e aprendizado.\n\nCRESCIMENTO: Vitamina D para fixar o cálcio nos ossos.\n\nSUPER PODER: Alimento padrão ouro em proteína (100% aproveitada).',
    airfryerRecipe: '1. Use forminhas de silicone untadas.\n2. Bata o ovo com salsinha e coloque na forma.\n3. Asse por 8 min a 160°C. Fica um muffin de ovo fofo.'
  },
  { 
    id: 'p3', name: 'Carne Moída', category: 'PROTEINAS', icon: '🥩', vitamins: 'Ferro, B12, Zinco', seasonality: 'O ano todo', 
    blwInstructions: 'Ofereça em formato de "hambúrguer" ou "quibe" caseiro para o bebê conseguir segurar.',
    benefits: 'NUTRIENTES: Ferro Heme (absorção imediata pelo corpo).\n\nSANGUE: Essencial para prevenir anemia e fadiga.\n\nCRESCIMENTO: Zinco para maturação do sistema imunológico.\n\nSUPER PODER: Maior densidade de ferro disponível na natureza.',
    airfryerRecipe: '1. Molde pequenos discos (mini hambúrguer).\n2. Coloque no cesto a 180°C.\n3. Asse por 10 min, virando na metade. Use cenoura na massa para dar umidade.'
  },
  { 
    id: 'p4', name: 'Peixe (Tilápia)', category: 'PROTEINAS', icon: '🐟', vitamins: 'D, B12, Ômega 3', seasonality: 'O ano todo', 
    blwInstructions: 'Verifique espinhas. Ofereça lascas grandes e suculentas.',
    benefits: 'NUTRIENTES: Ômega 3 (DHA) e Iodo.\n\nCÉREBRO: Essencial para o desenvolvimento cognitivo e visão.\n\nIMUNIDADE: Selênio para proteção das células.\n\nSUPER PODER: Gordura saudável que limpa as artérias desde cedo.',
    airfryerRecipe: '1. Tempere as iscas com limão.\n2. Passe em um pouco de fubá ou farinha de aveia.\n3. Asse por 8 min a 190°C para ficar crocante e úmido.'
  },
  { id: 'p5', name: 'Lentilha', category: 'PROTEINAS', icon: '🥣', vitamins: 'Ferro, Ácido Fólico', seasonality: 'Maio a Agosto', blwInstructions: 'Cozinhe bem e ofereça misturada ao arroz ou em bolinhos.', benefits: 'NUTRIENTES: Molibdênio e Cobre.\n\nSANGUE: Rico em ácido fólico para renovação celular.\n\nDIGESTÃO: Fibras solúveis que protegem o cólon.\n\nSUPER PODER: Fonte proteica vegetal que não causa alergias.', airfryerRecipe: '1. Use lentilha cozida e escorrida.\n2. Amasse com um pouco de batata doce.\n3. Molde bolinhos e asse a 180°C por 10 min.' },
  { id: 'p6', name: 'Grão de Bico', category: 'PROTEINAS', icon: '🥣', vitamins: 'Proteína, Fibras, Magnésio', seasonality: 'Maio a Agosto', blwInstructions: 'Cozinhe muito bem e amasse levemente, ou faça homus.', benefits: 'NUTRIENTES: Triptofano e Fibras.\n\nHUMOR: Triptofano ajuda o bebê a dormir melhor e ficar calmo.\n\nSANGUE: Rico em ferro vegetal.\n\nSUPER PODER: O grão da felicidade e do sono tranquilo.', airfryerRecipe: '1. Cozinhe bem o grão e seque.\n2. Misture com azeite e páprica.\n3. Asse por 15 min a 180°C para um snack crocante (>1 ano).' },
  { id: 'p7', name: 'Feijão Preto', category: 'PROTEINAS', icon: '🍲', vitamins: 'Ferro, Magnésio, Fibras', seasonality: 'O ano todo', blwInstructions: 'Ofereça os grãos bem macios. O bebê costuma pegar com o movimento de pinça.', benefits: 'NUTRIENTES: Magnésio e Fósforo.\n\nENERGIA: Sustenta o bebê em dias de muita atividade.\n\nIMUNIDADE: Rico em fitatos que limpam toxinas.\n\nSUPER PODER: Antioxidantes da casca protegem contra inflamações.', airfryerRecipe: '1. Bata feijão cozido sem caldo.\n2. Misture com farinha de milho e molde croquetes.\n3. Asse por 10 min a 180°C.' },
  { id: 'p8', name: 'Fígado', category: 'PROTEINAS', icon: '🥘', vitamins: 'A, B12, Ferro', seasonality: 'O ano todo', blwInstructions: 'Ofereça em tiras largas bem cozidas.', benefits: 'NUTRIENTES: A maior fonte de Vitamina B12 e A do mundo.\n\nSANGUE: Cura anemias em tempo recorde.\n\nVISÃO: Vitamina A pura para desenvolvimento ocular.\n\nSUPER PODER: O multivitamínico natural mais completo que existe.', airfryerRecipe: '1. Corte em tiras finas.\n2. Coloque com rodelas de cebola (cebola amacia a carne).\n3. Asse 8 min a 170°C. Cuidado: se passar de 8 min, fica duro.' },
  { id: 'p9', name: 'Porco (Lombo)', category: 'PROTEINAS', icon: '🥩', vitamins: 'B1, B6, Proteína', seasonality: 'O ano todo', blwInstructions: 'Tiras largas no sentido correto das fibras e carne bem suculenta.', benefits: 'NUTRIENTES: Tiamina (B1) para metabolismo energético.\n\nNEURO: Vitamina B6 essencial para formação de neurotransmissores.\n\nCRESCIMENTO: Proteína magra e rica em potássio.\n\nSUPER PODER: Estimula a produção de energia nas mitocôndrias.', airfryerRecipe: '1. Corte o lombo em iscas (formato de batata frita).\n2. Pincele azeite e limão.\n3. Asse por 12 min a 180°C com pedaços de maçã junto.' },
  { id: 'p10', name: 'Tofu', category: 'PROTEINAS', icon: '🧊', vitamins: 'Cálcio, Proteína', seasonality: 'O ano todo', blwInstructions: 'Corte em bastões largos e grelhe levemente.', benefits: 'NUTRIENTES: Proteína completa e cálcio.\n\nDIGESTÃO: Leve, não pesa no estômago.\n\nCRESCIMENTO: Aminoácidos para crescimento celular.\n\nSUPER PODER: O camaleão nutricional, absorve sabores de temperos naturais.', airfryerRecipe: '1. Corte em bastões de 2 dedos.\n2. Seque muito bem com papel toalha.\n3. Asse a 180°C por 10 min com uma gota de azeite.' },
  { id: 'p11', name: 'Quinoa', category: 'PROTEINAS', icon: '🌾', vitamins: 'Proteína, Magnésio', seasonality: 'O ano todo', blwInstructions: 'Deve ser bem cozida e pode ser oferecida em bolinhos.', benefits: 'NUTRIENTES: Todos os 9 aminoácidos essenciais.\n\nCÉREBRA: Rica em ômega 3 vegetal e magnésio.\n\nSAÚDE INTESTINAL: Fibras que não irritam a mucosa.\n\nSUPER PODER: O melhor grão para substituição de carboidratos pobres.', airfryerRecipe: '1. Misture quinoa cozida com frango desfiado.\n2. Faça bolinhas e asse por 12 min a 180°C.\n3. Vira um nugget saudável e nutritivo.' },
  { id: 'p12', name: 'Iogurte Natural', category: 'PROTEINAS', icon: '🍦', vitamins: 'Cálcio, Probióticos', seasonality: 'O ano todo', blwInstructions: 'Deixe o bebê explorar com as mãos ou ofereça em colher pré-carregada.', benefits: 'NUTRIENTES: Probióticos e Proteína.\n\nIMUNIDADE: Coloniza o intestino com bactérias protetoras.\n\nOSSOS: Cálcio biodisponível de alta absorção.\n\nSUPER PODER: O guardião da saúde digestiva do bebê.', airfryerRecipe: 'Não recomendado o uso na Airfryer.' },
  { id: 'p13', name: 'Queijo Cottage', category: 'PROTEINAS', icon: '🧀', vitamins: 'Proteína, Cálcio', seasonality: 'O ano todo', blwInstructions: 'Ofereça pequenas porções. Evite queijos salgados.', benefits: 'NUTRIENTES: Caseína e Vitaminas do grupo B.\n\nCRESCIMENTO: Fornece proteínas para reparo celular noturno.\n\nOSSOS: Magnésio e Cálcio balanceados.\n\nSUPER PODER: Proteína de absorção lenta, mantém a saciedade.', airfryerRecipe: 'Não recomendado o uso na Airfryer.' },
  { id: 'p14', name: 'Salmão', category: 'PROTEINAS', icon: '🍣', vitamins: 'Ômega 3, D, B12', seasonality: 'O ano todo', blwInstructions: 'Postas bem macias que se desfaçam em lascas grandes.', benefits: 'NUTRIENTES: Ácidos graxos EPA e DHA.\n\nCÉREBRO: Nutriente #1 para inteligência e memória infantil.\n\nVISÃO: Protege contra doenças degenerativas oculares.\n\nSUPER PODER: Anti-inflamatório sistêmico para o corpo todo.', airfryerRecipe: '1. Corte um pequeno lombo de salmão.\n2. Pincele azeite e sementes de gergelim trituradas.\n3. Asse por 10 min a 180°C. Fica um médio e brilhante.' },
  { id: 'p15', name: 'Peru', category: 'PROTEINAS', icon: '🦃', vitamins: 'B3, B6, Zinco', seasonality: 'O ano todo', blwInstructions: 'Tiras largas de carne bem cozida.', benefits: 'NUTRIENTES: Selênio e Zinco.\n\nIMUNIDADE: Fortalece a resposta contra viroses.\n\nHUMOR: Rico em triptofano (conforto emocional).\n\nSUPER PODER: Carne magra que apoia o sistema endócrino.', airfryerRecipe: '1. Corte o filé de peru em tiras.\n2. Marine no limão por 10 min.\n3. Asse a 180°C por 10 min junto com rodelas de abobrinha.' },
  { id: 'p16', name: 'Ervilha Partida', category: 'PROTEINAS', icon: '🟢', vitamins: 'K, Ácido Fólico', seasonality: 'Junho a Setembro', blwInstructions: 'Cozinhe até virar um purê grosso ou use em bolinhos.', benefits: 'NUTRIENTES: Cobre e Fósforo.\n\nRENOVAÇÃO: Ácido fólico para síntese de DNA celular.\n\nCORAÇÃO: Auxilia na manutenção do ritmo cardíaco.\n\nSUPER PODER: Excelente densidade calórica para ganho de peso.', airfryerRecipe: '1. Processe ervilha cozida com arroz.\n2. Faça discos estilo "falafel".\n3. Asse por 8 min a 180°C com fio de azeite.' },
  { id: 'p17', name: 'Feijão Carioca', category: 'PROTEINAS', icon: '🍲', vitamins: 'Ferro, Potássio, Fibras', seasonality: 'O ano todo', blwInstructions: 'Grãos bem macios e sem caldo excessivo.', benefits: 'NUTRIENTES: Molibdênio e Ferro vegetal.\n\nENERGIA: Sustenta o metabolismo basal.\n\nINTESTINO: Fibras que combatem o inchaço abdominal.\n\nSUPER PODER: O feijão da vitalidade diária brasileira.', airfryerRecipe: '1. Amasse o feijão cozido sem caldo.\n2. Misture com couve picada fininho.\n3. Molde bolinhos e asse a 180°C por 10 min.' },
  { id: 'p18', name: 'Gema de Ovo', category: 'PROTEINAS', icon: '🟡', vitamins: 'Luteína, D, A', seasonality: 'O ano todo', blwInstructions: 'Ofereça a gema cozida amassada ou dentro de preparações.', benefits: 'NUTRIENTES: Carotenoides e Vitamina D3.\n\nVISÃO: Luteína protege contra excesso de luz azul.\n\nOSSOS: Essencial para a mineralização correta do esqueleto.\n\nSUPER PODER: A gema concentra 90% dos nutrientes do ovo.', airfryerRecipe: '1. Corte uma rodela de pimentão de 2 dedos de altura.\n2. Coloque no centro apenas a gema crua.\n3. Asse por 6 min a 160°C. Fica cremosa e nutritiva.' },
  { id: 'p19', name: 'Semente de Girassol', category: 'PROTEINAS', icon: '🌻', vitamins: 'E, Selênio', seasonality: 'O ano todo', blwInstructions: 'Ofereça apenas triturada (farinha).', benefits: 'NUTRIENTES: Vitamina E e Selênio.\n\nTIREOIDE: Selênio ajuda na regulação hormonal.\n\nPELE: Protege as camadas da derme do bebê.\n\nSUPER PODER: O maior protetor antioxidante da natureza vegetal.', airfryerRecipe: '1. Triture a semente até virar farinha.\n2. Use para empanar palitos de cenoura.\n3. Asse a 180°C por 10 min para um empanado saudável.' },
  { id: 'p20', name: 'Amendoim (pasta)', category: 'PROTEINAS', icon: '🥜', vitamins: 'E, Proteína', seasonality: 'O ano todo', blwInstructions: 'Ofereça pasta pura diluída.', benefits: 'NUTRIENTES: Gorduras monoinsaturadas e B3.\n\nALERGIA: Ajuda na treinar o sistema imune (introdução precoce).\n\nCORAÇÃO: Nutrientes que protegem as veias.\n\nSUPER PODER: Concentração imensa de energia em pouca quantidade.', airfryerRecipe: '1. Corte uma banana ao meio.\n2. Recheie com uma colher de pasta pura.\n3. Asse 8 min a 180°C. Sobremesa energética imbatível.' },
];

export const MARCOS: Record<string, { emoji: string; title: string; era: string }> = {
  cam1_1: { emoji: "🤰", title: "O Teste Positivo",         era: "ERA 1" },
  cam1_2: { emoji: "🔬", title: "O Primeiro Ultrassom",      era: "ERA 1" },
  cam1_3: { emoji: "🛏️", title: "Cantinho do Bebê",          era: "ERA 1" },
  cam1_4: { emoji: "🧳", title: "Mala da Maternidade",       era: "ERA 1" },
  cam2_1: { emoji: "🏠", title: "Chegada em Casa",           era: "ERA 2" },
  cam2_2: { emoji: "😊", title: "Primeiro Sorriso",          era: "ERA 2" },
  cam2_3: { emoji: "🍎", title: "A Primeira Fruta",          era: "ERA 2" },
  cam2_4: { emoji: "👣", title: "O Grande Passo",            era: "ERA 2" },
  cam3_1: { emoji: "🚽", title: "Tchau Fralda",              era: "ERA 3" },
  cam3_2: { emoji: "🎒", title: "Primeiro Dia na Escola",    era: "ERA 3" },
  cam3_3: { emoji: "🎨", title: "Minha Primeira Arte",       era: "ERA 3" },
  cam4_1: { emoji: "✏️", title: "Minha Primeira Frase",     era: "ERA 4" },
  cam4_2: { emoji: "🐷", title: "Meu Primeiro Cofrinho",     era: "ERA 4" },
  cam4_3: { emoji: "🚲", title: "Andando de Bicicleta",      era: "ERA 4" },
  cam5_1: { emoji: "🧩", title: "Desafio Concluído",         era: "ERA 5" },
  cam5_2: { emoji: "🎯", title: "Minha Lista de Metas",      era: "ERA 5" },
  cam5_3: { emoji: "🤝", title: "Ajudando o Próximo",        era: "ERA 5" },
};

export const ERAS: Era[] = [
  {
    id: 'era1',
    title: 'PILAR 1: Gestação Saudável',
    description: 'Acompanhamento semanal, sintomas, checklist pré-natal e preparação para o parto.',
    color: 'indigo',
    steps: ['step_s1_1', 'step_s1_2', 'step_s1_3']
  },
  {
    id: 'era2',
    title: 'PILAR 2: Parto Humanizado',
    description: 'Direitos da gestante, Lei do Acompanhante, maternidades parceiras e bolsa da maternidade.',
    color: 'emerald',
    steps: ['step_s2_1', 'step_s2_2']
  },
  {
    id: 'era3',
    title: 'PILAR 3: Pós-Parto e Puerpério',
    description: 'Recuperação física e emocional, sinais de alerta de depressão pós-parto e autocuidado.',
    color: 'rose',
    steps: ['step_s3_1', 'step_s3_2']
  },
  {
    id: 'era4',
    title: 'PILAR 4: Amamentação & Pega Correta',
    description: 'Guia animado com simulador de pega profunda, posições, solução de fissuras e banco de leite.',
    color: 'pink',
    steps: ['step_s4_1', 'step_s4_2']
  },
  {
    id: 'era5',
    title: 'PILAR 5: Introdução Alimentar & Sabores (BLW)',
    description: '6m a 2 Anos: Aba Sabores 100% integrada, receitas BLW, cortes 3D e simulador de engasgo.',
    color: 'amber',
    steps: ['step_s5_1', 'step_s5_2']
  },
  {
    id: 'era6',
    title: 'PILAR 6: Segurança da Criança & RG Digital',
    description: 'Campanha "Seu Bebê Tem RG?", guia de emissão civil e Cartão de Emergência com foto e dados médicos.',
    color: 'sky',
    steps: ['step_s6_1', 'step_s6_2']
  },
  {
    id: 'era7',
    title: 'PILAR 7: Rede de Apoio & Madrinha Virtual',
    description: 'Fórum de mães, suporte de especialistas, chat com Madrinha Virtual e agenda de workshops.',
    color: 'purple',
    steps: ['step_s7_1', 'step_s7_2']
  },
  {
    id: 'era8',
    title: 'PILAR 8: Diferenciais Premium & Maturidade Parental',
    description: 'Rotina por IA, consultorias ilimitadas e Certificado de Maturidade Parental com Selo Ouro.',
    color: 'yellow',
    steps: ['step_s8_1', 'step_s8_2']
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  // PILAR 1: GESTAÇÃO SAUDÁVEL
  {
    id: 'step_s1_1',
    dayId: 10,
    title: 'Gestação Semanal & Pré-Natal',
    ageRange: 'Semanas 1-12',
    description: 'Acompanhamento semanal de sintomas, suplementação e consultas pré-natal.',
    icon: '🤰',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'indigo',
    minYears: -0.75,
    badges: ['Primeira Batida', 'Pré-Natal OK'],
    knowledgePillar: {
      title: 'O Primeiro Trimestre',
      content: 'Compreenda as transformações hormonais, cuide do sono e inicie o acompanhamento pré-natal com suplementação adequada.'
    },
    mission: {
      id: 'm1_1',
      title: 'Diário das Primeiras Semanas',
      description: 'Anote suas emoções e sintomas nesta fase inicial.',
      xpReward: 100
    },
    cameraTrigger: {
      id: 'cam1_1',
      title: 'O Primeiro Ultrassom',
      description: 'Guarde a imagem do primeiro registro do bebê no casulo.',
      blocked: false
    },
    modules: []
  },
  {
    id: 'step_s1_2',
    dayId: 100,
    title: 'Nutrição & Exercícios Seguros',
    ageRange: 'Semanas 13-26',
    description: 'Nutrição rica em ferro/cálcio, pilates gestacional e saúde mental.',
    icon: '✨',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'indigo',
    minYears: -0.5,
    badges: ['Conexão Profunda', 'Nutrição Materna'],
    knowledgePillar: {
      title: 'O Trimestre de Ouro',
      content: 'O bebê já tem digitais e começa a ouvir sons externos. Mantenha rotina de exercícios leves e boa hidratação.'
    },
    mission: {
      id: 'm1_2',
      title: 'Playlist de Conexão & Alongamento',
      description: 'Faça 15 min de alongamento leve e observe os movimentos.',
      xpReward: 150
    },
    cameraTrigger: {
      id: 'cam1_2',
      title: 'Ultrassom Morfológico',
      description: 'Registre a imagem do bebê no ultrassom morfológico.',
      blocked: true
    },
    miniGames: [
      { id: 'g1_2', title: 'Tamanho da Fruta', description: 'Veja a evolução do tamanho do bebê.', icon: '🍆' }
    ],
    modules: []
  },
  {
    id: 'step_s1_3',
    dayId: 200,
    title: 'Plano de Parto & Ninho',
    ageRange: 'Semanas 27-40',
    description: 'Elaboração do plano de parto, escolhas conscientes e organização final.',
    icon: '🏠',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'indigo',
    minYears: -0.25,
    badges: ['Plano de Parto Pronto'],
    knowledgePillar: {
      title: 'Maturação e Escolhas Conscientes',
      content: 'Monte o seu plano de parto com os procedimentos que deseja ou recusa no momento do nascimento.'
    },
    mission: {
      id: 'm1_3',
      title: 'Auditoria do Plano de Parto',
      description: 'Preencha os desejos do parto e imprima para a equipe médica.',
      xpReward: 200
    },
    cameraTrigger: {
      id: 'cam1_3',
      title: 'Cantinho do Bebê',
      description: 'Registre o ambiente preparado para a chegada.',
      blocked: true
    },
    miniGames: [
      { id: 'g1_3', title: 'Contador de Chutes', description: 'Registre a atividade e ritmo de movimentação do bebê.', icon: '🦶' }
    ],
    modules: []
  },

  // PILAR 2: PARTO HUMANIZADO
  {
    id: 'step_s2_1',
    dayId: 270,
    title: 'Direitos & Lei do Acompanhante',
    ageRange: 'Reta Final',
    description: 'Guia educativo sobre parto humanizado e a Lei 11.108/05.',
    icon: '📜',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'emerald',
    minYears: -0.1,
    badges: ['Gestante Informada'],
    knowledgePillar: {
      title: 'Direitos no Nascimento',
      content: 'A gestante tem direito constitucional a 1 acompanhante de sua escolha durante todo o trabalho de parto e pós-parto.'
    },
    mission: {
      id: 'm2_1',
      title: 'Escolha do Acompanhante',
      description: 'Cadastre o contato do seu acompanhante principal.',
      xpReward: 180
    },
    cameraTrigger: {
      id: 'cam2_1',
      title: 'Foto com Acompanhante',
      description: 'Registre vocês dois prontos para o grande dia.',
      blocked: true
    },
    modules: []
  },
  {
    id: 'step_s2_2',
    dayId: 275,
    title: 'Maternidade & Rede Parceira',
    ageRange: 'Preparo Maternidade',
    description: 'Checklist interativo da mala e lista de obstetrizes e maternidades humanizadas.',
    icon: '🧳',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'emerald',
    minYears: -0.05,
    badges: ['Mala Pronta'],
    knowledgePillar: {
      title: 'O Enxoval de Parto',
      content: 'Organize as trocas de roupa do bebê em saquinhos transparentes e garanta os documentos da mãe.'
    },
    mission: {
      id: 'm2_2',
      title: 'Checklist da Mala',
      description: 'Confira as 5 troquinhas e documentos no app.',
      xpReward: 200
    },
    cameraTrigger: {
      id: 'cam2_2',
      title: 'Mala Fechada na Porta',
      description: 'Guarde a foto da mala pronta para sair!',
      blocked: true
    },
    modules: []
  },

  // PILAR 3: PÓS-PARTO E PUERPÉRIO
  {
    id: 'step_s3_1',
    dayId: 281,
    title: 'Recuperação Física & Emocional',
    ageRange: '0 a 45 Dias (Puerpério)',
    description: 'Monitoramento da cicatrização, loquiação e oscilações hormonais.',
    icon: '🌸',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'rose',
    minYears: 0,
    badges: ['Acolhimento Materno'],
    knowledgePillar: {
      title: 'Entendendo o Puerpério',
      content: 'A queda hormonal repentina é normal. Peça ajuda para os afazeres domésticos e descanse junto com o bebê.'
    },
    mission: {
      id: 'm3_1',
      title: 'Registro de Humor Materno',
      description: 'Avalie como você se sente hoje no diário.',
      xpReward: 150
    },
    cameraTrigger: {
      id: 'cam3_1',
      title: 'Primeiro Abraço no Lar',
      description: 'Registre o aconchego nos primeiros dias em casa.',
      blocked: true
    },
    modules: []
  },
  {
    id: 'step_s3_2',
    dayId: 310,
    title: 'Sinais de Alerta & Autocuidado',
    ageRange: '1 a 3 Meses',
    description: 'Identificação de depressão pós-parto, infecções e cuidados pessoais.',
    icon: '🩺',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'rose',
    minYears: 0.1,
    badges: ['Mãe Cuidada'],
    knowledgePillar: {
      title: 'Prevenção da Depressão Pós-Parto',
      content: 'Tristeza profunda persistente por mais de 2 semanas necessita de apoio médico e psicológico especializado.'
    },
    mission: {
      id: 'm3_2',
      title: 'Pausa de 30 Minutos para Você',
      description: 'Deixe o bebê com o acompanhante e tome um banho relaxante.',
      xpReward: 200
    },
    cameraTrigger: {
      id: 'cam3_2',
      title: 'Momento de Autocuidado',
      description: 'Guarde a foto do seu momento de pausa merecido.',
      blocked: true
    },
    modules: []
  },

  // PILAR 4: AMAMENTAÇÃO & PEGA CORRETA
  {
    id: 'step_s4_1',
    dayId: 285,
    title: 'Simulador Animado de Pega Correta',
    ageRange: '0 a 6 Meses',
    description: 'Guia animado em 4 passos: eversão labial, abocanhamento amplo e posições.',
    icon: '🤱',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'pink',
    minYears: 0.02,
    badges: ['Pega Perfeita', 'Mestre da Amamentação'],
    knowledgePillar: {
      title: 'Pega Profunda Sem Dor',
      content: 'A amamentação não deve doer! O bebê deve abocanhar a maior parte da aréola inferior com queixo encostado.'
    },
    mission: {
      id: 'm4_1',
      title: 'Treinar o Simulador de Pega',
      description: 'Execute os 4 passos no simulador animado do app.',
      xpReward: 250
    },
    cameraTrigger: {
      id: 'cam4_1',
      title: 'Registro da Pega Perfeita',
      description: 'Guarde uma foto tranquila da mamada.',
      blocked: true
    },
    modules: []
  },
  {
    id: 'step_s4_2',
    dayId: 330,
    title: 'Solução de Dores & Banco de Leite',
    ageRange: '2 a 6 Meses',
    description: 'Tratamento de fissuras, mastite e localização de postos Fiocruz.',
    icon: '🥛',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'pink',
    minYears: 0.2,
    badges: ['Doadora de Leite'],
    knowledgePillar: {
      title: 'Alívio e Doação',
      content: 'Leite materno empedrado exige massagem circular antes de mamar e compressa fria após a mamada.'
    },
    mission: {
      id: 'm4_2',
      title: 'Consulta a Banco de Leite',
      description: 'Verifique os pontos de coleta no guia Fiocruz.',
      xpReward: 200
    },
    cameraTrigger: {
      id: 'cam4_2',
      title: 'Gotas de Ouro Liquid',
      description: 'Foto da ordenha de alívio ou doação.',
      blocked: true
    },
    modules: []
  },

  // PILAR 5: INTRODUÇÃO ALIMENTAR & SABORES (BLW)
  {
    id: 'step_s5_1',
    dayId: 465,
    title: 'Introdução Alimentar & Sabores Integrada',
    ageRange: '6 a 12 Meses',
    description: 'Central dos Sabores 100% integrada no mapa: receitas BLW, cortes 3D e alimentos.',
    icon: '🥑',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'amber',
    minYears: 0.5,
    badges: ['Explorador dos Sabores', 'Chef Mirim BLW'],
    knowledgePillar: {
      title: 'Sinais de Prontidão e Cortes',
      content: 'Sentar sem apoio e ter controle cervical são pré-requisitos. Sirva bastões de 2 dedos do bebê.'
    },
    mission: {
      id: 'm5_1',
      title: 'Experimentar 1º Alimento da Aba Sabores',
      description: 'Abra a Central de Sabores no mapa e marque a primeira fruta.',
      xpReward: 300
    },
    cameraTrigger: {
      id: 'cam5_1',
      title: 'Carinha Suja de Comida',
      description: 'Grave a bagunça gostosa da primeira refeição autônoma.',
      blocked: true
    },
    miniGames: [
      { id: 'g5_1', title: 'Mapa de Paladar', description: 'Marque vegetais experimentados para colorir seu mapa mundial.', icon: '🗺️' }
    ],
    modules: []
  },
  {
    id: 'step_s5_2',
    dayId: 540,
    title: 'Simulador de Engasgo x Gagging & Alertas',
    ageRange: '6 a 24 Meses',
    description: 'Animação didática de Reflexo de Gag vs Engasgo Real + Alimentos Proibidos.',
    icon: '🚨',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'amber',
    minYears: 0.6,
    badges: ['Guardião da Alimentação Segura'],
    knowledgePillar: {
      title: 'Gagging vs Engasgo Real',
      content: 'O reflexo de GAG faz o bebê tossir e ficar vermelho (proteção natural). O engasgo real é silencioso e requer manobra de tapotagem.'
    },
    mission: {
      id: 'm5_2',
      title: 'Assistir Animação de Tapotagem',
      description: 'Aprenda o passo a passo de primeiros socorros no app.',
      xpReward: 250
    },
    cameraTrigger: {
      id: 'cam5_2',
      title: 'Prato Colorido BLW',
      description: 'Foto do prato equilibrado com proteína, vegetal e fruta.',
      blocked: true
    },
    modules: []
  },

  // PILAR 6: SEGURANÇA DA CRIANÇA & RG DIGITAL
  {
    id: 'step_s6_1',
    dayId: 300,
    title: 'Campanha "Seu Bebê Tem RG?" & Emissão',
    ageRange: '0 a 24 Meses',
    description: 'Importância da emissão da identidade civil desde o nascimento e gratuidade da 1ª via.',
    icon: '📢',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'sky',
    minYears: 0.1,
    badges: ['Cidadão Mirim'],
    knowledgePillar: {
      title: 'Importância do Registro Civil',
      content: 'O RG do bebê evita furtos de identidade, facilita viagens estaduais e garante segurança em atendimentos hospitalares.'
    },
    mission: {
      id: 'm6_1',
      title: 'Agendar Emissão do RG',
      description: 'Confira a lista de documentos para o posto de atendimento.',
      xpReward: 200
    },
    cameraTrigger: {
      id: 'cam6_1',
      title: 'Documento na Mão',
      description: 'Guarde a foto do bebê segurando seu primeiro documento!',
      blocked: true
    },
    modules: []
  },
  {
    id: 'step_s6_2',
    dayId: 360,
    title: 'Carteirinha Digital RG & Emergência',
    ageRange: '0 a 2 Anos',
    description: 'Cadastro digital seguro com foto, sangue, alergias e envio de cartão de emergência em 1 clique.',
    icon: '🪪',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'sky',
    minYears: 0.3,
    badges: ['Segurança Total'],
    knowledgePillar: {
      title: 'Cartão de Emergência Rápido',
      content: 'Mantenha os contatos dos pais e do pediatra sempre atualizados na carteirinha digital.'
    },
    mission: {
      id: 'm6_2',
      title: 'Gerar Cartão de Emergência',
      description: 'Preencha a tipagem sanguínea e contatos no app.',
      xpReward: 250
    },
    cameraTrigger: {
      id: 'cam6_2',
      title: 'Foto de Perfil do RG Digital',
      description: 'Foto nítida do bebê para a carteirinha oficial.',
      blocked: true
    },
    modules: []
  },

  // PILAR 7: REDE DE APOIO & MADRINHA VIRTUAL
  {
    id: 'step_s7_1',
    dayId: 320,
    title: 'Madrinha Virtual & Fórum de Mães',
    ageRange: '0 a 2 Anos',
    description: 'Acolhimento de mãe para mãe nas madrugadas, desabafos e trocas de experiências.',
    icon: '💖',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'purple',
    minYears: 0.05,
    badges: ['Rede Conectada'],
    knowledgePillar: {
      title: 'Maternidade Sem Solidão',
      content: 'Você não precisa passar pelas madrugadas sozinha. A Madrinha Virtual oferece escuta empática e sem julgamentos.'
    },
    mission: {
      id: 'm7_1',
      title: 'Mandar Mensagem para a Madrinha',
      description: 'Inicie uma conversa no chat acolhedor do app.',
      xpReward: 150
    },
    cameraTrigger: {
      id: 'cam7_1',
      title: 'Encontro com Mães Parceiras',
      description: 'Foto de um momento de troca de apoio presencial ou virtual.',
      blocked: true
    },
    modules: []
  },
  {
    id: 'step_s7_2',
    dayId: 400,
    title: 'Especialistas & Agenda de Encontros',
    ageRange: '0 a 2 Anos',
    description: 'Plantão com Nutricionistas, Pediatras e Psicólogas + Workshops ao vivo.',
    icon: '🩺',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'purple',
    minYears: 0.2,
    badges: ['Acompanhamento Multidisciplinar'],
    knowledgePillar: {
      title: 'Equipe de Cuidados Integrados',
      content: 'Tire dúvidas com especialistas credenciadas e participe dos encontros semanais ao vivo.'
    },
    mission: {
      id: 'm7_2',
      title: 'Reservar Vaga em Workshop',
      description: 'Confira o tema da semana na agenda de encontros.',
      xpReward: 200
    },
    cameraTrigger: {
      id: 'cam7_2',
      title: 'Certificado de Participação',
      description: 'Guarde o selo de presença na aula do especialista.',
      blocked: true
    },
    modules: []
  },

  // PILAR 8: DIFERENCIAIS PREMIUM & MATURIDADE PARENTAL
  {
    id: 'step_s8_1',
    dayId: 500,
    title: 'IA de Rotina & Conteúdos Exclusivos',
    ageRange: '0 a 2 Anos',
    description: 'Gerador inteligente de horários de soneca e acesso à biblioteca de vídeos em HD.',
    icon: '🤖',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'yellow',
    minYears: 0.4,
    badges: ['Rotina Inteligente'],
    knowledgePillar: {
      title: 'Personalização com Inteligência Artificial',
      content: 'A IA ajusta as janelas de sono conforme o ritmo individual de despertar do seu bebê.'
    },
    mission: {
      id: 'm8_1',
      title: 'Gerar Rotina com IA',
      description: 'Informe os horários do bebê para calcular a rotina ideal.',
      xpReward: 300
    },
    cameraTrigger: {
      id: 'cam8_1',
      title: 'Rotina em Ação',
      description: 'Foto do bebê dormindo no horário previsto da janela de sono.',
      blocked: true
    },
    modules: []
  },
  {
    id: 'step_s8_2',
    dayId: 730,
    title: 'Curso de Maturidade Parental & Certificado Ouro',
    ageRange: '2 Anos Completo',
    description: 'Diploma oficial gamificado dos 1.000 Dias de Maturidade Parental com Selo de Excelência.',
    icon: '🎓',
    status: PhaseStatus.LOCKED,
    isPremium: false,
    color: 'yellow',
    minYears: 1.9,
    badges: ['Mestre em Maternidade', 'Diploma Selo Ouro'],
    knowledgePillar: {
      title: 'A Conquista dos 1.000 Dias',
      content: 'Você completou a fase mais importante da neuroplasticidade e formação do seu filho. Parabéns!'
    },
    mission: {
      id: 'm8_2',
      title: 'Gerar Certificado de Maturidade',
      description: 'Emita seu diploma oficial com selo dourado no app.',
      xpReward: 500
    },
    cameraTrigger: {
      id: 'cam8_2',
      title: 'Foto com o Diploma dos 2 Anos',
      description: 'Foto em família celebrando a conquista da Maturidade Parental!',
      blocked: true
    },
    modules: []
  }
];

export const RECIPES: Recipe[] = [
  { 
    id: 'r1', 
    name: 'Mingau de Aveia com Maçã', 
    age: '6 meses+', 
    category: 'CAFÉ DA MANHÃ', 
    ingredients: ['Aveia em Flocos', 'Maçã Fuji', 'Água'], 
    ingredientsDetailed: [
      { name: 'Aveia em Flocos', baseAmount: 2, unit: 'colheres de sopa', householdMeasure: '2 colheres cheias' },
      { name: 'Maçã Fuji', baseAmount: 0.5, unit: 'unidade', householdMeasure: 'Metade de uma maçã pequena' },
      { name: 'Água', baseAmount: 150, unit: 'ml', householdMeasure: '1 xícara de chá' }
    ], 
    instructions: 'Cozinhe a aveia com a maçã ralada até engrossar.', 
    instructionsDetailed: { 
      preparacao: ['Rale a maçã na parte fina do ralador.', 'Separe a aveia.'], 
      cozimento: ['Leve a água e a aveia ao fogo baixo.', 'Mexa até começar a engrossar.', 'Adicione a maçã ralada e cozinhe por mais 2 minutos.'], 
      finalizacao: ['Espere amornar antes de oferecer ao bebê.', 'Pode polvilhar um pouco de canela se o bebê já tiver mais de 1 ano.'] 
    }, 
    image: '', 
    prepTime: '10 min', 
    storageInfo: 'Consumir na hora.', 
    freezingTips: 'Não recomendado congelar.', 
    canFreeze: false, 
    nutrition: { calories: 120, protein: 3, carbs: 22, fats: 2 }, 
    isPremium: false 
  },
  { 
    id: 'r2', 
    name: 'Escondidinho de Abóbora com Frango', 
    age: '7 meses+', 
    category: 'ALMOÇO', 
    ingredients: ['Abóbora Cabotiá', 'Peito de Frango', 'Cebola', 'Azeite'], 
    ingredientsDetailed: [
      { name: 'Abóbora Cabotiá', baseAmount: 200, unit: 'g', householdMeasure: '1 fatia média' },
      { name: 'Peito de Frango', baseAmount: 100, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Cebola', baseAmount: 1, unit: 'colher de sopa', householdMeasure: 'Picadinha' },
      { name: 'Azeite', baseAmount: 1, unit: 'fio', householdMeasure: 'Para refogar' }
    ], 
    instructions: 'Faça um purê de abóbora e recheie com frango desfiado.', 
    instructionsDetailed: { 
      preparacao: ['Cozinhe a abóbora até ficar macia.', 'Cozinhe o frango e desfie bem fino.'], 
      cozimento: ['Refogue o frango com cebola e azeite.', 'Amasse a abóbora até virar purê.'], 
      finalizacao: ['Em um potinho, coloque o frango e cubra com o purê.', 'Sirva morno.'] 
    }, 
    image: '', 
    prepTime: '25 min', 
    storageInfo: 'Geladeira por 2 dias.', 
    freezingTips: 'Pode congelar por até 30 dias.', 
    canFreeze: true, 
    nutrition: { calories: 180, protein: 15, carbs: 18, fats: 5 }, 
    isPremium: false 
  },
  { 
    id: 'r3', 
    name: 'Panqueca de Banana e Cacau', 
    age: '9 meses+', 
    category: 'CAFÉ DA TARDE', 
    ingredients: ['Banana Madura', 'Ovo', 'Aveia', 'Cacau 100%'], 
    ingredientsDetailed: [
      { name: 'Banana Madura', baseAmount: 1, unit: 'unidade', householdMeasure: '1 banana prata média' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo pequeno' },
      { name: 'Aveia', baseAmount: 1, unit: 'colher de sopa', householdMeasure: 'Farinha ou flocos finos' },
      { name: 'Cacau 100%', baseAmount: 0.5, unit: 'colher de chá', householdMeasure: 'Apenas para cor' }
    ], 
    instructions: 'Misture tudo e grelhe na frigideira antiaderente.', 
    instructionsDetailed: { 
      preparacao: ['Amasse bem a banana.', 'Bata o ovo levemente.'], 
      cozimento: ['Misture todos os ingredientes.', 'Aqueça uma frigideira e coloque pequenas porções.', 'Vire quando soltar do fundo.'], 
      finalizacao: ['Corte em tiras para o bebê segurar.', 'Sirva com frutas frescas.'] 
    }, 
    image: '', 
    prepTime: '10 min', 
    storageInfo: 'Consumir na hora.', 
    freezingTips: 'Pode congelar a massa pronta por 15 dias.', 
    canFreeze: true, 
    nutrition: { calories: 150, protein: 7, carbs: 20, fats: 6 }, 
    isPremium: false 
  },
  { 
    id: 'r4', 
    name: 'Sopa de Inhame com Espinafre', 
    age: '6 meses+', 
    category: 'JANTAR', 
    ingredients: ['Inhame', 'Espinafre', 'Alho', 'Azeite'], 
    ingredientsDetailed: [
      { name: 'Inhame', baseAmount: 2, unit: 'unidades', householdMeasure: '2 inhames médios' },
      { name: 'Espinafre', baseAmount: 5, unit: 'folhas', householdMeasure: 'Folhas picadas' },
      { name: 'Alho', baseAmount: 0.5, unit: 'dente', householdMeasure: 'Amassado' },
      { name: 'Azeite', baseAmount: 1, unit: 'colher de chá', householdMeasure: 'Finalização' }
    ], 
    instructions: 'Cozinhe o inhame, bata e adicione o espinafre picadinho.', 
    instructionsDetailed: { 
      preparacao: ['Descasque e corte o inhame.', 'Lave e pique o espinafre.'], 
      cozimento: ['Cozinhe o inhame em água até desmanchar.', 'Bata no liquidificador ou amasse bem.', 'Adicione o espinafre e cozinhe por mais 3 min.'], 
      finalizacao: ['Adicione o azeite no pratinho.', 'Verifique a temperatura.'] 
    }, 
    image: '', 
    prepTime: '20 min', 
    storageInfo: 'Geladeira por 24h.', 
    freezingTips: 'Pode congelar por 30 dias.', 
    canFreeze: true, 
    nutrition: { calories: 110, protein: 2, carbs: 24, fats: 1 }, 
    isPremium: false 
  },
  { 
    id: 'r5', 
    name: 'Mousse de Manga com Iogurte', 
    age: '8 meses+', 
    category: 'SOBREMESA', 
    ingredients: ['Manga Palmer', 'Iogurte Natural'], 
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 1, unit: 'unidade', householdMeasure: '1 manga madura sem fiapo' },
      { name: 'Iogurte Natural', baseAmount: 1, unit: 'pote', householdMeasure: '170g (sem açúcar)' }
    ], 
    instructions: 'Bata a manga com o iogurte e leve à geladeira.', 
    instructionsDetailed: { 
      preparacao: ['Descasque e corte a manga em cubos.'], 
      cozimento: ['Não vai ao fogo.'], 
      finalizacao: ['Bata tudo no mixer ou liquidificador.', 'Deixe gelar por 1 hora para firmar.', 'Sirva geladinho.'] 
    }, 
    image: '', 
    prepTime: '5 min', 
    storageInfo: 'Geladeira por 2 dias.', 
    freezingTips: 'Pode virar picolé se congelado.', 
    canFreeze: true, 
    nutrition: { calories: 90, protein: 4, carbs: 15, fats: 2 }, 
    isPremium: true 
  }
];

