
import { Recipe } from './types';

export const CHEF_BOOK_RECIPES: Recipe[] = [
  // CAFÉ DA MANHÃ (24 novas + 1 existente = 25)
  {
    id: 'cb_b1',
    name: 'Panqueca de Espinafre com Ricota',
    age: '9-12 meses',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Espinafre', 'Ovo', 'Farinha de Aveia', 'Ricota'],
    ingredientsDetailed: [
      { name: 'Folhas de Espinafre', baseAmount: 30, unit: 'g', householdMeasure: '1 xícara de chá' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo grande' },
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ricota Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o espinafre com o ovo e aveia, grelhe e recheie com ricota.',
    instructionsDetailed: {
      preparacao: ['Lave bem o espinafre e pique grosseiramente.', 'Amasse a ricota com um garfo.'],
      cozimento: ['Bata o ovo, o espinafre e a aveia no mixer.', 'Aqueça uma frigideira antiaderente e despeje a massa.', 'Vire quando as bordas soltarem.'],
      finalizacao: ['Coloque a ricota no centro, dobre e sirva em tiras.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar a massa pronta por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 145, protein: 9, carbs: 12, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_b2',
    name: 'Muffin de Maçã e Canela',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Maçã', 'Ovo', 'Farinha de Amêndoas', 'Canela'],
    ingredientsDetailed: [
      { name: 'Maçã Ralada', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Amêndoas', baseAmount: 50, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Canela em Pó', baseAmount: 2, unit: 'g', householdMeasure: '1 pitada' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas de muffin.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã e retire o excesso de líquido.', 'Bata o ovo levemente.'],
      cozimento: ['Misture a maçã, ovo, farinha e canela.', 'Coloque em forminhas de silicone.', 'Asse a 180°C por 15-20 min.'],
      finalizacao: ['Deixe esfriar antes de desenformar.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 6, carbs: 14, fats: 12 },
    isPremium: false
  },
  {
    id: 'cb_b3',
    name: 'Creme de Abacate com Chia',
    age: '6-12 meses',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abacate', 'Semente de Chia', 'Leite Materno ou Fórmula'],
    ingredientsDetailed: [
      { name: 'Abacate Maduro', baseAmount: 80, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Leite Materno/Fórmula', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Amasse o abacate com o leite e misture a chia.',
    instructionsDetailed: {
      preparacao: ['Hidrate a chia no leite por 10 minutos.', 'Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse o abacate e misture com o gel de chia. Sirva fresco.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir imediatamente.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 3, carbs: 8, fats: 14 },
    isPremium: false
  },
  {
    id: 'cb_b4',
    name: 'Omelete de Tomate e Manjericão',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Tomate Cereja', 'Manjericão Fresco', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Tomate Cereja', baseAmount: 30, unit: 'g', householdMeasure: '3 unidades picadas' },
      { name: 'Manjericão', baseAmount: 2, unit: 'g', householdMeasure: '3 folhas picadas' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Bata o ovo com tomate e manjericão e grelhe.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate e o manjericão bem fininho.', 'Bata o ovo com um garfo.'],
      cozimento: ['Aqueça a frigideira com azeite.', 'Despeje a mistura e cozinhe em fogo baixo.', 'Dobre ao meio quando firmar.'],
      finalizacao: ['Corte em pedaços adequados para a idade.']
    },
    image: '',
    prepTime: '8 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 95, protein: 7, carbs: 2, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_b5',
    name: 'Pudim de Chia com Manga',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Chia', 'Leite de Coco', 'Manga Palmer'],
    ingredientsDetailed: [
      { name: 'Semente de Chia', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Leite de Coco Caseiro', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Manga Palmer', baseAmount: 50, unit: 'g', householdMeasure: '1/4 de manga' }
    ],
    instructions: 'Misture chia e leite, deixe gelar e cubra com manga.',
    instructionsDetailed: {
      preparacao: ['Misture a chia com o leite de coco em um pote.', 'Deixe na geladeira por pelo menos 4 horas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata a manga no mixer e coloque por cima do pudim antes de servir.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 3, carbs: 15, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_b6',
    name: 'Cuscuz de Milho com Ovo',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Flocão de Milho', 'Água', 'Ovo', 'Manteiga Ghee'],
    ingredientsDetailed: [
      { name: 'Flocão de Milho', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Água', baseAmount: 30, unit: 'ml', householdMeasure: 'Para hidratar' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo mexido' },
      { name: 'Manteiga Ghee', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de café' }
    ],
    instructions: 'Hidrate o milho, cozinhe no vapor e sirva com ovo.',
    instructionsDetailed: {
      preparacao: ['Hidrate o flocão com água por 10 min.', 'Bata o ovo.'],
      cozimento: ['Cozinhe o cuscuz na cuscuzeira por 10 min.', 'Faça o ovo mexido com a ghee.'],
      finalizacao: ['Misture o cuscuz soltinho com o ovo e sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 9, carbs: 22, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_b7',
    name: 'Vitamina de Banana e Mamão',
    age: '6-12 meses',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana', 'Mamão', 'Água ou Leite'],
    ingredientsDetailed: [
      { name: 'Banana Prata', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Mamão Papaia', baseAmount: 50, unit: 'g', householdMeasure: '1 fatia pequena' },
      { name: 'Água/Leite', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Bata as frutas com o líquido até ficar homogêneo.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo no liquidificador e sirva em copo de transição.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar em forminhas de gelo.',
    canFreeze: true,
    nutrition: { calories: 85, protein: 1, carbs: 20, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_b8',
    name: 'Pão de Queijo de Frigideira (Fit)',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Tapioca', 'Queijo Cottage'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Goma de Tapioca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Queijo Cottage', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture tudo e grelhe como uma panqueca.',
    instructionsDetailed: {
      preparacao: ['Bata o ovo com a tapioca e o queijo.'],
      cozimento: ['Aqueça a frigideira antiaderente.', 'Despeje a massa e tampe.', 'Vire para dourar o outro lado.'],
      finalizacao: ['Corte em triângulos.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 155, protein: 10, carbs: 14, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_b9',
    name: 'Mingau de Milho Verde',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Milho Verde', 'Leite de Coco', 'Canela'],
    ingredientsDetailed: [
      { name: 'Milho Verde Fresco', baseAmount: 100, unit: 'g', householdMeasure: '1 espiga debulhada' },
      { name: 'Leite de Coco', baseAmount: 150, unit: 'ml', householdMeasure: '1 xícara' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Opcional' }
    ],
    instructions: 'Bata o milho com leite, coe e cozinhe até engrossar.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com o leite no liquidificador.', 'Peneire a mistura.'],
      cozimento: ['Leve ao fogo baixo mexendo sempre.', 'Cozinhe por 10 min após ferver.'],
      finalizacao: ['Sirva morno com canela por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 4, carbs: 28, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b10',
    name: 'Waffle de Batata Doce',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Batata Doce Cozida', 'Ovo', 'Farinha de Aveia'],
    ingredientsDetailed: [
      { name: 'Batata Doce Amassada', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture os ingredientes e asse na máquina de waffle ou frigideira.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a batata e amasse bem.', 'Misture com o ovo e a aveia.'],
      cozimento: ['Coloque na máquina de waffle untada.', 'Asse até ficar dourado e firme.'],
      finalizacao: ['Sirva com um fio de mel (se > 1 ano) ou frutas.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 8, carbs: 32, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b11',
    name: 'Iogurte com Farelo de Aveia e Morango',
    age: '8 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Iogurte Natural', 'Farelo de Aveia', 'Morango'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 120, unit: 'g', householdMeasure: '1 pote pequeno' },
      { name: 'Farelo de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' },
      { name: 'Morango Picado', baseAmount: 40, unit: 'g', householdMeasure: '3 unidades' }
    ],
    instructions: 'Misture o farelo no iogurte e adicione os morangos.',
    instructionsDetailed: {
      preparacao: ['Lave e pique os morangos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture tudo em uma tigela e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 115, protein: 6, carbs: 14, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_b12',
    name: 'Bolinho de Chuva Assado (Sem Açúcar)',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana Nanica', 'Ovo', 'Farinha de Trigo Integral', 'Fermento'],
    ingredientsDetailed: [
      { name: 'Banana Nanica Amassada', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha Integral', baseAmount: 60, unit: 'g', householdMeasure: '4 colheres de sopa' },
      { name: 'Fermento em Pó', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture tudo e asse em colheradas ou forminhas.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e misture com o ovo.', 'Adicione a farinha e o fermento.'],
      cozimento: ['Coloque colheradas em uma assadeira untada.', 'Asse a 180°C por 15 min.'],
      finalizacao: ['Pode passar em canela após assar.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 240, protein: 9, carbs: 42, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_b13',
    name: 'Mingau de Quinoa com Pêra',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Quinoa em Flocos', 'Leite Materno ou Água', 'Pêra'],
    ingredientsDetailed: [
      { name: 'Quinoa em Flocos', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite/Água', baseAmount: 150, unit: 'ml', householdMeasure: '1 xícara' },
      { name: 'Pêra Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 pêra' }
    ],
    instructions: 'Cozinhe a quinoa no líquido com a pêra ralada.',
    instructionsDetailed: {
      preparacao: ['Rale a pêra.'],
      cozimento: ['Leve a quinoa e o líquido ao fogo.', 'Adicione a pêra e mexa até engrossar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 5, carbs: 24, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_b14',
    name: 'Smoothie Verde do Hulk',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana Congelada', 'Couve', 'Maçã', 'Água de Coco'],
    ingredientsDetailed: [
      { name: 'Banana Congelada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Folha de Couve', baseAmount: 10, unit: 'g', householdMeasure: '1/2 folha sem talo' },
      { name: 'Maçã', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Água de Coco', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo pequeno' }
    ],
    instructions: 'Bata tudo no liquidificador até ficar bem cremoso.',
    instructionsDetailed: {
      preparacao: ['Retire o talo da couve.', 'Pique a maçã.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo e sirva imediatamente para não oxidar.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar em sacos de smoothie.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 2, carbs: 26, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_b15',
    name: 'Pãozinho de Batata Baroa (Mandioquinha)',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Mandioquinha Cozida', 'Polvilho Doce', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Mandioquinha Amassada', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Polvilho Doce', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Azeite', baseAmount: 15, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture os ingredientes, faça bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Cozinhe e amasse a mandioquinha morna.', 'Misture o polvilho e o azeite até soltar das mãos.'],
      cozimento: ['Faça bolinhas pequenas.', 'Asse a 200°C por 20 min.'],
      finalizacao: ['Sirva quentinho.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Pote fechado por 24h.',
    freezingTips: 'Pode congelar as bolinhas cruas por 60 dias.',
    canFreeze: true,
    nutrition: { calories: 280, protein: 2, carbs: 58, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_b16',
    name: 'Creme de Papaia com Iogurte',
    age: '6-12 meses',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Mamão Papaia', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: 'Metade de um papaia' },
      { name: 'Iogurte Natural', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata o mamão com o iogurte no mixer.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata até ficar um creme liso e sirva geladinho.']
    },
    image: '',
    prepTime: '3 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 3, carbs: 14, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b17',
    name: 'Panqueca de Mirtilo (Blueberry)',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Banana', 'Mirtilos', 'Aveia'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Banana Amassada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Mirtilos', baseAmount: 20, unit: 'g', householdMeasure: 'Pequena porção' },
      { name: 'Farinha de Aveia', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture ovo, banana e aveia, coloque na frigideira e adicione os mirtilos por cima.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e misture com o ovo e aveia.'],
      cozimento: ['Coloque a massa na frigideira.', 'Pressione os mirtilos na massa ainda crua.', 'Vire para finalizar.'],
      finalizacao: ['Sirva inteira ou cortada.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 7, carbs: 22, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b18',
    name: 'Mingau de Arroz Caseiro',
    age: '6 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Arroz Branco', 'Água', 'Leite Materno ou Fórmula'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido (sem sal)', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Água', baseAmount: 100, unit: 'ml', householdMeasure: 'Para bater' },
      { name: 'Leite Materno/Fórmula', baseAmount: 50, unit: 'ml', householdMeasure: 'Finalização' }
    ],
    instructions: 'Bata o arroz com água, cozinhe até engrossar e adicione o leite no final.',
    instructionsDetailed: {
      preparacao: ['Bata o arroz cozido com a água no liquidificador.'],
      cozimento: ['Leve ao fogo até ferver e engrossar mais.'],
      finalizacao: ['Desligue o fogo e misture o leite. Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 2, carbs: 22, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_b19',
    name: 'Muffin de Omelete com Legumes',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Cenoura Ralada', 'Abobrinha Ralada'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Cenoura Ralada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Abobrinha Ralada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture tudo e asse em forminhas de muffin.',
    instructionsDetailed: {
      preparacao: ['Rale os legumes e retire o excesso de água.'],
      cozimento: ['Bata o ovo e misture os legumes.', 'Coloque em forminhas de silicone.', 'Asse a 180°C por 12 min.'],
      finalizacao: ['Desenforme e sirva morno.']
    },
    image: '',
    prepTime: '18 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 85, protein: 7, carbs: 3, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b20',
    name: 'Creme de Milho com Banana',
    age: '8 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Milho Verde', 'Banana Nanica', 'Água'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 50, unit: 'g', householdMeasure: '1/2 espiga' },
      { name: 'Banana Nanica', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Água', baseAmount: 100, unit: 'ml', householdMeasure: 'Para cozinhar' }
    ],
    instructions: 'Cozinhe o milho, bata com a banana e coe.',
    instructionsDetailed: {
      preparacao: ['Debulhe o milho.'],
      cozimento: ['Cozinhe o milho na água até ficar macio.', 'Bata no liquidificador com a banana.'],
      finalizacao: ['Peneire para retirar as cascas do milho e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 125, protein: 2, carbs: 28, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_b21',
    name: 'Panqueca de Abóbora',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abóbora Cozida', 'Ovo', 'Farinha de Arroz'],
    ingredientsDetailed: [
      { name: 'Purê de Abóbora', baseAmount: 80, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Arroz', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Misture os ingredientes e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a abóbora e amasse.', 'Misture com o ovo e a farinha.'],
      cozimento: ['Aqueça a frigideira untada.', 'Coloque a massa e cozinhe dos dois lados.'],
      finalizacao: ['Corte em tiras.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 7, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b25',
    name: 'Panqueca de Aveia e Maçã',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Aveia', 'Maçã', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Misture a aveia, maçã e ovo e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã.', 'Misture com a aveia e o ovo.'],
      cozimento: ['Grelhe em frigideira antiaderente dos dois lados.'],
      finalizacao: ['Sirva em tiras.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 7, carbs: 20, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b26',
    name: 'Omelete de Queijo e Tomate',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Queijo Minas', 'Tomate'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Minas Frescal', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia pequena' },
      { name: 'Tomate Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o ovo, misture o queijo e tomate e grelhe.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate e o queijo.'],
      cozimento: ['Bata o ovo e misture os ingredientes.', 'Grelhe na frigideira.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '8 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 9, carbs: 2, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_b27',
    name: 'Vitamina de Morango e Banana',
    age: '8 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Morango', 'Banana', 'Leite'],
    ingredientsDetailed: [
      { name: 'Morango', baseAmount: 50, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Leite Materno/Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 2, carbs: 22, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_b28',
    name: 'Mingau de Milho com Coco',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Milho', 'Leite de Coco', 'Aveia'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite de Coco', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' },
      { name: 'Farinha de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o milho com leite de coco e aveia.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com o leite de coco.'],
      cozimento: ['Leve ao fogo com a aveia até engrossar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 3, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b29',
    name: 'Pão de Queijo de Batata Doce',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Batata Doce', 'Polvilho', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Batata Doce Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Parmesão Ralado', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture tudo, faça bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata doce.', 'Misture com o polvilho e queijo.'],
      cozimento: ['Asse a 180°C por 20 min.'],
      finalizacao: ['Sirva quente.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 4, carbs: 35, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_b30',
    name: 'Iogurte com Granola e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Iogurte', 'Granola', 'Mel'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Granola Caseira', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture a granola no iogurte e finalize com mel.',
    instructionsDetailed: {
      preparacao: ['Coloque o iogurte em uma tigela.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Adicione granola e mel.']
    },
    image: '',
    prepTime: '3 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 6, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_b31',
    name: 'Smoothie de Manga e Espinafre',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Manga', 'Espinafre', 'Água de Coco'],
    ingredientsDetailed: [
      { name: 'Manga', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Espinafre', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Água de Coco', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Lave o espinafre.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 90, protein: 2, carbs: 20, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_b32',
    name: 'Waffle de Aveia e Banana',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Aveia', 'Banana', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Bata tudo e asse na máquina de waffle.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana.', 'Misture com aveia e ovo.'],
      cozimento: ['Asse na máquina de waffle.'],
      finalizacao: ['Sirva com frutas.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 8, carbs: 22, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b33',
    name: 'Crepioca de Queijo e Presunto',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Tapioca', 'Ovo', 'Queijo', 'Presunto'],
    ingredientsDetailed: [
      { name: 'Goma de Tapioca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' },
      { name: 'Presunto Magro', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Bata o ovo com tapioca, grelhe e recheie.',
    instructionsDetailed: {
      preparacao: ['Bata o ovo com a tapioca.'],
      cozimento: ['Grelhe na frigideira.', 'Recheie com queijo e presunto.'],
      finalizacao: ['Dobre e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 12, carbs: 15, fats: 9 },
    isPremium: true
  },
  {
    id: 'cb_b34',
    name: 'Muffin de Cenoura e Maçã',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Cenoura', 'Maçã', 'Farinha Integral'],
    ingredientsDetailed: [
      { name: 'Cenoura Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Maçã Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Farinha de Trigo Integral', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Rale a cenoura e a maçã.'],
      cozimento: ['Misture com a farinha e asse a 180°C por 20 min.'],
      finalizacao: ['Deixe esfriar.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 4, carbs: 28, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b35',
    name: 'Mingau de Quinoa e Frutas Vermelhas',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Quinoa', 'Leite', 'Frutas Vermelhas'],
    ingredientsDetailed: [
      { name: 'Quinoa em Flocos', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Frutas Vermelhas', baseAmount: 20, unit: 'g', householdMeasure: 'Pequena porção' }
    ],
    instructions: 'Cozinhe a quinoa no leite e adicione as frutas.',
    instructionsDetailed: {
      preparacao: ['Lave as frutas.'],
      cozimento: ['Cozinhe a quinoa no leite até engrossar.'],
      finalizacao: ['Adicione as frutas por cima.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 5, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_b36',
    name: 'Panqueca de Beterraba e Ricota',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Beterraba', 'Ricota', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Beterraba Cozida', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ricota', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Bata a beterraba com ovo, grelhe e recheie com ricota.',
    instructionsDetailed: {
      preparacao: ['Bata a beterraba com o ovo.'],
      cozimento: ['Grelhe a panqueca.', 'Recheie com ricota.'],
      finalizacao: ['Dobre e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 8, carbs: 12, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_b37',
    name: 'Vitamina de Abacate e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abacate', 'Mel', 'Leite'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' },
      { name: 'Leite', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 4, carbs: 15, fats: 12 },
    isPremium: false
  },
  {
    id: 'cb_b38',
    name: 'Omelete de Cogumelos e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Cogumelos', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Cogumelo Paris Picado', baseAmount: 20, unit: 'g', householdMeasure: '2 unidades' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Refogue os cogumelos, adicione o ovo batido e o queijo.',
    instructionsDetailed: {
      preparacao: ['Pique os cogumelos.'],
      cozimento: ['Refogue os cogumelos.', 'Adicione o ovo e o queijo.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 10, carbs: 2, fats: 9 },
    isPremium: true
  },
  {
    id: 'cb_b39',
    name: 'Pão de Aveia e Banana',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Aveia', 'Banana', 'Canela'],
    ingredientsDetailed: [
      { name: 'Farinha de Aveia', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Banana Amassada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture os ingredientes e asse em formato de pãozinho.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana.', 'Misture com aveia e canela.'],
      cozimento: ['Asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 5, carbs: 32, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b40',
    name: 'Iogurte com Chia e Frutas',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Iogurte', 'Chia', 'Frutas Variadas'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Frutas Picadas', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture a chia no iogurte e adicione as frutas.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 7, carbs: 15, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b41',
    name: 'Smoothie de Frutas Amarelas',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Manga', 'Pêssego', 'Iogurte'],
    ingredientsDetailed: [
      { name: 'Manga', baseAmount: 50, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Pêssego', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 5, carbs: 20, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_b42',
    name: 'Waffle de Batata Baroa',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Batata Baroa', 'Ovo', 'Polvilho'],
    ingredientsDetailed: [
      { name: 'Batata Baroa Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Polvilho Doce', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata tudo e asse na máquina de waffle.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata baroa.', 'Misture com ovo e polvilho.'],
      cozimento: ['Asse na máquina de waffle.'],
      finalizacao: ['Sirva quentinho.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 7, carbs: 28, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_b43',
    name: 'Crepioca de Frango e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Tapioca', 'Ovo', 'Frango', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Goma de Tapioca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Frango Desfiado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Bata o ovo com tapioca, grelhe e recheie com frango e queijo.',
    instructionsDetailed: {
      preparacao: ['Bata o ovo com a tapioca.'],
      cozimento: ['Grelhe na frigideira.', 'Recheie com frango e queijo.'],
      finalizacao: ['Dobre e sirva.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 210, protein: 15, carbs: 15, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_b44',
    name: 'Muffin de Abobrinha e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abobrinha', 'Ovo', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Abobrinha Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Rale a abobrinha.'],
      cozimento: ['Misture com ovo e queijo e asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 9, carbs: 3, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_b45',
    name: 'Mingau de Arroz e Coco',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Arroz', 'Leite de Coco', 'Coco Ralado'],
    ingredientsDetailed: [
      { name: 'Farinha de Arroz', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite de Coco', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Coco Ralado', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a farinha de arroz no leite de coco.',
    instructionsDetailed: {
      preparacao: ['Misture a farinha no leite de coco.'],
      cozimento: ['Leve ao fogo até engrossar.'],
      finalizacao: ['Adicione o coco ralado por cima.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 2, carbs: 25, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b46',
    name: 'Panqueca de Espinafre e Queijo',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Espinafre', 'Ovo', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Bata o espinafre com ovo, grelhe e recheie com queijo.',
    instructionsDetailed: {
      preparacao: ['Bata o espinafre com o ovo.'],
      cozimento: ['Grelhe a panqueca.', 'Recheie com queijo.'],
      finalizacao: ['Dobre e sirva.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 10, carbs: 2, fats: 9 },
    isPremium: false
  },
  {
    id: 'cb_b47',
    name: 'Vitamina de Mamão e Aveia',
    age: '8 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Mamão', 'Aveia', 'Leite'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Farelo de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Leite Materno/Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 3, carbs: 22, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b48',
    name: 'Omelete de Abobrinha e Tomate',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Abobrinha', 'Tomate'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Abobrinha Ralada', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Tomate Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o ovo, misture os legumes e grelhe.',
    instructionsDetailed: {
      preparacao: ['Rale a abobrinha e pique o tomate.'],
      cozimento: ['Bata o ovo e misture os legumes.', 'Grelhe na frigideira.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 100, protein: 8, carbs: 3, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b49',
    name: 'Pão de Milho e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Milho', 'Farinha de Milho', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Fubá', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture os ingredientes e asse em formato de pãozinho.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com um pouco de água.', 'Misture com fubá e queijo.'],
      cozimento: ['Asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 5, carbs: 30, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_b50',
    name: 'Ovos Mexidos com Tomate e Manjericão',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Tomate', 'Manjericão'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Tomate Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Manjericão', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' }
    ],
    instructions: 'Mexa o ovo com tomate e manjericão na frigideira.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate.'],
      cozimento: ['Bata o ovo e leve à frigideira com o tomate e manjericão.', 'Mexa até cozinhar bem.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 7, carbs: 2, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b51',
    name: 'Mingau de Aveia com Maçã e Canela',
    age: '6 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Aveia', 'Maçã', 'Canela'],
    ingredientsDetailed: [
      { name: 'Flocos de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Cozinhe a aveia com água e a maçã ralada até engrossar.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã.'],
      cozimento: ['Leve a aveia e a maçã ao fogo com água.', 'Mexa até atingir a consistência de mingau.'],
      finalizacao: ['Polvilhe canela e sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 4, carbs: 22, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b52',
    name: 'Panqueca de Banana e Aveia',
    age: '8 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana', 'Ovo', 'Aveia'],
    ingredientsDetailed: [
      { name: 'Banana Madura', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Amasse a banana, misture com o ovo e a aveia, e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e bata com o ovo.', 'Misture a aveia.'],
      cozimento: ['Grelhe pequenas porções em frigideira antiaderente.'],
      finalizacao: ['Sirva em pedaços adequados para a idade.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 8, carbs: 25, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b53',
    name: 'Iogurte Natural com Manga Picada',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Iogurte Natural', 'Manga'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' },
      { name: 'Manga em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/4 unidade' }
    ],
    instructions: 'Misture a manga picada ao iogurte natural.',
    instructionsDetailed: {
      preparacao: ['Pique a manga em cubos pequenos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 5, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_b54',
    name: 'Pãozinho de Batata Doce',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Batata Doce', 'Polvilho Doce', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Batata Doce Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Azeite', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture a batata doce amassada com polvilho e azeite, faça bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata doce.', 'Misture com polvilho e azeite até soltar das mãos.'],
      cozimento: ['Faça bolinhas e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 2, carbs: 30, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_b55',
    name: 'Creme de Abacate com Limão',
    age: '6 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abacate', 'Limão'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Limão', baseAmount: 2, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Amasse o abacate e adicione gotas de limão.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse bem com um garfo e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 80, protein: 1, carbs: 4, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_b56',
    name: 'Omelete de Espinafre',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Espinafre'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o ovo com o espinafre e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre bem fininho.'],
      cozimento: ['Bata com o ovo e leve à frigideira antiaderente.'],
      finalizacao: ['Dobre e sirva em tiras.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 85, protein: 7, carbs: 1, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b57',
    name: 'Muffin de Banana e Canela',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana', 'Ovo', 'Farinha de Aveia', 'Canela'],
    ingredientsDetailed: [
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture tudo e asse em forminhas de muffin.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e misture com o ovo, aveia e canela.'],
      cozimento: ['Coloque em forminhas e asse a 180°C por 15 min.'],
      finalizacao: ['Deixe esfriar um pouco antes de servir.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 6, carbs: 20, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_b58',
    name: 'Cuscuz de Milho com Ovo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Flocão de Milho', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Flocão de Milho', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Prepare o cuscuz no vapor e sirva com ovo mexido.',
    instructionsDetailed: {
      preparacao: ['Hidrate o milho com água e sal.'],
      cozimento: ['Cozinhe no vapor por 10 min.', 'Prepare o ovo mexido separadamente.'],
      finalizacao: ['Misture o ovo ao cuscuz e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 9, carbs: 28, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b59',
    name: 'Vitamina de Banana e Mamão',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana', 'Mamão', 'Leite'],
    ingredientsDetailed: [
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Mamão', baseAmount: 50, unit: 'g', householdMeasure: '1 fatia pequena' },
      { name: 'Leite Materno ou Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Bata as frutas com o leite no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva imediatamente.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 3, carbs: 25, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b60',
    name: 'Tapioca com Queijo Branco',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Goma de Tapioca', 'Queijo Branco'],
    ingredientsDetailed: [
      { name: 'Goma de Tapioca', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Queijo Minas Frescal', baseAmount: 30, unit: 'g', householdMeasure: '1 fatia média' }
    ],
    instructions: 'Prepare a tapioca na frigideira e recheie com queijo.',
    instructionsDetailed: {
      preparacao: ['Peneire a goma.'],
      cozimento: ['Espalhe na frigideira quente.', 'Vire e adicione o queijo.'],
      finalizacao: ['Dobre e sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 5, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_b61',
    name: 'Biscoito de Polvilho e Batata',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Polvilho Doce', 'Batata Inglesa', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Polvilho Doce', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Batata Cozida e Amassada', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Azeite', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture a batata com polvilho e azeite, modele e asse.',
    instructionsDetailed: {
      preparacao: ['Misture os ingredientes até formar uma massa homogênea.'],
      cozimento: ['Modele em palitos ou bolinhas e asse a 180°C por 15 min.'],
      finalizacao: ['Deixe esfriar para ficar crocante.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 3 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 1, carbs: 35, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_b62',
    name: 'Creme de Pêra com Aveia',
    age: '6 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Pêra', 'Aveia'],
    ingredientsDetailed: [
      { name: 'Pêra Madura', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Farinha de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Cozinhe a pêra picada com um pouco de água e misture a aveia.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique a pêra.'],
      cozimento: ['Cozinhe a pêra até amaciar.', 'Adicione a aveia e mexa por 1 min.'],
      finalizacao: ['Amasse ou bata no mixer e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 95, protein: 2, carbs: 20, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_b63',
    name: 'Pão de Queijo de Frigideira',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Tapioca', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Goma de Tapioca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Bata o ovo com a tapioca e o queijo e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Misture bem todos os ingredientes.'],
      cozimento: ['Leve à frigideira antiaderente em fogo baixo.', 'Vire para dourar os dois lados.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 8, carbs: 12, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b64',
    name: 'Smoothie de Morango e Banana',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Morango', 'Banana', 'Iogurte'],
    ingredientsDetailed: [
      { name: 'Morangos', baseAmount: 50, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' }
    ],
    instructions: 'Bata tudo no liquidificador até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos e pique a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Sirva gelado ou fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 5, carbs: 22, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b65',
    name: 'Mingau de Milho Verde',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Milho Verde', 'Leite'],
    ingredientsDetailed: [
      { name: 'Milho Verde (Grãos)', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite Materno ou Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Bata o milho com o leite, coe e leve ao fogo até engrossar.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com o leite no liquidificador.'],
      cozimento: ['Passe pela peneira e leve ao fogo baixo.', 'Mexa sempre até engrossar.'],
      finalizacao: ['Deixe amornar e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 3, carbs: 20, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_b66',
    name: 'Bolinho de Maçã e Aveia',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Maçã', 'Aveia', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Maçã Picada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas pequenas.',
    instructionsDetailed: {
      preparacao: ['Pique a maçã em cubos pequenos.', 'Misture com o ovo e a aveia.'],
      cozimento: ['Asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 7, carbs: 22, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b67',
    name: 'Creme de Mamão com Chia',
    age: '8 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Mamão', 'Chia'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Amasse o mamão e misture a chia.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse bem e misture a chia. Deixe descansar por 5 min antes de servir.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 70, protein: 2, carbs: 12, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b68',
    name: 'Panqueca de Espinafre e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Espinafre', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Espinafre Cozido', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Bata o ovo com o espinafre, grelhe e recheie com queijo.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre cozido.'],
      cozimento: ['Bata com o ovo e leve à frigideira.', 'Adicione o queijo e dobre.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 10, carbs: 2, fats: 10 },
    isPremium: true
  },
  {
    id: 'cb_b69',
    name: 'Iogurte com Granola Caseira',
    age: '2 anos+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Iogurte Natural', 'Aveia', 'Mel'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Aveia em Flocos', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture a aveia tostada com mel ao iogurte.',
    instructionsDetailed: {
      preparacao: ['Toste a aveia na frigideira com o mel.'],
      cozimento: ['Deixe esfriar para ficar crocante.'],
      finalizacao: ['Misture ao iogurte e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 8, carbs: 28, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b70',
    name: 'Creme de Abóbora e Coco',
    age: '6 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abóbora', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Abóbora Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Leite de Coco', baseAmount: 20, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Amasse a abóbora com o leite de coco.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a abóbora até ficar bem macia.'],
      cozimento: ['Amasse bem com um garfo.'],
      finalizacao: ['Misture o leite de coco e sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 90, protein: 1, carbs: 12, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b71',
    name: 'Pãozinho de Mandioquinha',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Mandioquinha', 'Polvilho', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Mandioquinha Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Azeite', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture a mandioquinha amassada com polvilho e azeite, asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a mandioquinha.', 'Misture com polvilho e azeite.'],
      cozimento: ['Faça bolinhas e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 2, carbs: 32, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_b72',
    name: 'Vitamina de Abacate e Banana',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abacate', 'Banana', 'Leite'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Leite Materno ou Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Bata as frutas com o leite no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva imediatamente.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 3, carbs: 18, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_b73',
    name: 'Ovos Mexidos com Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Muçarela Picado', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Mexa o ovo com o queijo na frigideira.',
    instructionsDetailed: {
      preparacao: ['Bata o ovo levemente.'],
      cozimento: ['Leve à frigideira e adicione o queijo.', 'Mexa até cozinhar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 9, carbs: 1, fats: 9 },
    isPremium: false
  },
  {
    id: 'cb_b74',
    name: 'Mingau de Arroz com Coco',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Arroz', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Farinha de Arroz', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Leite de Coco', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Cozinhe a farinha de arroz com o leite de coco até engrossar.',
    instructionsDetailed: {
      preparacao: ['Misture a farinha no leite de coco frio.'],
      cozimento: ['Leve ao fogo mexendo sempre até engrossar.'],
      finalizacao: ['Deixe amornar e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 2, carbs: 25, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_b75',
    name: 'Crepioca de Frango',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Tapioca', 'Frango'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Goma de Tapioca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Frango Desfiado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o ovo com a tapioca, misture o frango e grelhe.',
    instructionsDetailed: {
      preparacao: ['Misture o ovo, a tapioca e o frango.'],
      cozimento: ['Grelhe na frigideira dos dois lados.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 12, carbs: 12, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_b22',
    name: 'Iogurte com Melancia e Hortelã',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Iogurte Natural', 'Melancia', 'Hortelã'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Melancia em Cubos', baseAmount: 50, unit: 'g', householdMeasure: 'Pequena porção' },
      { name: 'Hortelã Fresca', baseAmount: 1, unit: 'g', householdMeasure: '1 folha picada' }
    ],
    instructions: 'Misture a melancia e a hortelã no iogurte.',
    instructionsDetailed: {
      preparacao: ['Pique a melancia sem sementes e a hortelã.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture tudo e sirva bem fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 6, carbs: 12, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_b23',
    name: 'Mingau de Maçã com Canela (Sem Aveia)',
    age: '6 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Maçã', 'Água', 'Canela'],
    ingredientsDetailed: [
      { name: 'Maçã Fuji', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Água', baseAmount: 50, unit: 'ml', householdMeasure: 'Para cozinhar' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Cozinhe a maçã picada com água até desmanchar e amasse.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique a maçã.'],
      cozimento: ['Leve ao fogo com a água.', 'Cozinhe até ficar bem macia.', 'Amasse com um garfo.'],
      finalizacao: ['Polvilhe canela e sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 80, protein: 0.5, carbs: 20, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_b24',
    name: 'Tapioca com Ovo Mexido',
    age: '1-3 anos',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Goma de Tapioca', 'Ovo', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Goma de Tapioca', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Faça a tapioca na frigideira e recheie com o ovo mexido.',
    instructionsDetailed: {
      preparacao: ['Peneire a tapioca.', 'Bata o ovo.'],
      cozimento: ['Faça o disco de tapioca na frigideira quente.', 'Em outra panela, faça o ovo mexido com azeite.'],
      finalizacao: ['Recheie a tapioca, dobre e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 165, protein: 7, carbs: 18, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_b76',
    name: 'Pão de Queijo de Mandioquinha e Chia',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Mandioquinha', 'Polvilho Doce', 'Chia', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Mandioquinha Cozida', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Polvilho Doce', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Semente de Chia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Azeite Extra Virgem', baseAmount: 15, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture os ingredientes, molde bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a mandioquinha ainda morna.', 'Misture o polvilho, a chia e o azeite até soltar das mãos.'],
      cozimento: ['Faça bolinhas pequenas.', 'Asse a 180°C por 20-25 min até dourar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Pote fechado por 24h.',
    freezingTips: 'Pode congelar cru por 60 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 2, carbs: 42, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b77',
    name: 'Vitamina de Abacate com Pêra',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abacate', 'Pêra', 'Água ou Leite'],
    ingredientsDetailed: [
      { name: 'Abacate Maduro', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Pêra Williams', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Água ou Leite Materno/Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Bata as frutas com o líquido no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Descasque o abacate e a pêra.', 'Retire as sementes da pêra.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo até ficar homogêneo e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 2, carbs: 18, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_b78',
    name: 'Omelete de Abobrinha e Manjericão',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Abobrinha', 'Manjericão', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Abobrinha Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Manjericão Fresco', baseAmount: 2, unit: 'g', householdMeasure: '3 folhas' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Bata o ovo com a abobrinha e manjericão e grelhe.',
    instructionsDetailed: {
      preparacao: ['Rale a abobrinha e pique o manjericão.'],
      cozimento: ['Bata o ovo e misture os ingredientes.', 'Grelhe em frigideira antiaderente com azeite.'],
      finalizacao: ['Corte em tiras e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 105, protein: 7, carbs: 2, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_b79',
    name: 'Mingau de Milho com Banana e Canela',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Milho Verde', 'Banana', 'Água', 'Canela'],
    ingredientsDetailed: [
      { name: 'Milho Verde Fresco', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Banana Nanica', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Água', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Cozinhe o milho, bata com a banana e finalize com canela.',
    instructionsDetailed: {
      preparacao: ['Debulhe o milho.'],
      cozimento: ['Cozinhe o milho na água até ficar macio.', 'Bata no liquidificador com a banana e peneire.'],
      finalizacao: ['Polvilhe canela e sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 2, carbs: 28, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_b80',
    name: 'Panqueca de Maçã e Canela',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Maçã', 'Ovo', 'Farinha de Aveia', 'Canela'],
    ingredientsDetailed: [
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture os ingredientes e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã e misture com o ovo, aveia e canela.'],
      cozimento: ['Grelhe em frigideira antiaderente dos dois lados.'],
      finalizacao: ['Corte em tiras e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 7, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b81',
    name: 'Bowl de Iogurte com Manga e Chia',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Iogurte Natural', 'Manga', 'Chia'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 120, unit: 'g', householdMeasure: '1 pote pequeno' },
      { name: 'Manga Palmer Picada', baseAmount: 50, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture a chia no iogurte e adicione a manga.',
    instructionsDetailed: {
      preparacao: ['Pique a manga em cubinhos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture a chia no iogurte, deixe descansar 5 min e cubra com a manga.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 135, protein: 6, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b82',
    name: 'Muffin de Cenoura e Passas',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Cenoura', 'Ovo', 'Farinha Integral', 'Uva Passa'],
    ingredientsDetailed: [
      { name: 'Cenoura Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha Integral', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Uva Passa', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Rale a cenoura fininho.'],
      cozimento: ['Misture com o ovo, farinha e passas.', 'Asse a 180°C por 20 min.'],
      finalizacao: ['Deixe esfriar e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 7, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b83',
    name: 'Crepioca de Beterraba com Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Tapioca', 'Beterraba', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Goma de Tapioca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Beterraba Ralada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Queijo Minas Frescal', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia pequena' }
    ],
    instructions: 'Bata o ovo com tapioca e beterraba, grelhe e recheie com queijo.',
    instructionsDetailed: {
      preparacao: ['Rale a beterraba bem fino.'],
      cozimento: ['Bata o ovo com a tapioca e a beterraba.', 'Grelhe na frigideira e recheie com o queijo.'],
      finalizacao: ['Dobre e sirva morno.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 175, protein: 10, carbs: 16, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_b84',
    name: 'Smoothie de Morango e Banana com Aveia',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Morango', 'Banana', 'Aveia', 'Leite'],
    ingredientsDetailed: [
      { name: 'Morango', baseAmount: 50, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Farelo de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Leite Materno/Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Bata tudo no liquidificador e sirva.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos e descasque a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata todos os ingredientes e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 145, protein: 4, carbs: 28, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b85',
    name: 'Waffle de Batata Doce e Coco',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Batata Doce', 'Ovo', 'Coco Ralado'],
    ingredientsDetailed: [
      { name: 'Batata Doce Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Coco Ralado sem Açúcar', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture os ingredientes e asse na máquina de waffle.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata doce cozida.'],
      cozimento: ['Misture com o ovo e o coco.', 'Asse na máquina de waffle untada.'],
      finalizacao: ['Sirva com frutas frescas.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 220, protein: 8, carbs: 30, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_b86',
    name: 'Creme de Papaia com Farelo de Aveia',
    age: '6 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Mamão Papaia', 'Farelo de Aveia'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Farelo de Aveia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Amasse o mamão e misture a aveia.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse a polpa com um garfo e misture o farelo de aveia.']
    },
    image: '',
    prepTime: '3 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 85, protein: 2, carbs: 18, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_b87',
    name: 'Omelete de Tomate Cereja e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Tomate Cereja', 'Queijo', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Tomate Cereja', baseAmount: 30, unit: 'g', householdMeasure: '3 unidades' },
      { name: 'Queijo Muçarela Ralado', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Bata o ovo, adicione tomate e queijo e grelhe.',
    instructionsDetailed: {
      preparacao: ['Pique os tomates ao meio.'],
      cozimento: ['Bata o ovo e misture os ingredientes.', 'Grelhe na frigideira com azeite.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '8 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 155, protein: 10, carbs: 2, fats: 12 },
    isPremium: false
  },
  {
    id: 'cb_b88',
    name: 'Mingau de Milho Verde com Coco',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Milho Verde', 'Leite de Coco', 'Água'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 80, unit: 'g', householdMeasure: '1 espiga pequena' },
      { name: 'Leite de Coco', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' },
      { name: 'Água', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Bata o milho com água, coe e cozinhe com leite de coco.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com a água no liquidificador e peneire.'],
      cozimento: ['Leve o caldo ao fogo mexendo sempre.', 'Adicione o leite de coco e cozinhe até engrossar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 3, carbs: 22, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_b89',
    name: 'Panqueca de Abóbora e Aveia',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abóbora', 'Ovo', 'Farinha de Aveia'],
    ingredientsDetailed: [
      { name: 'Purê de Abóbora', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Misture os ingredientes e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a abóbora e amasse bem.'],
      cozimento: ['Misture com o ovo e the aveia.', 'Grelhe em frigideira antiaderente.'],
      finalizacao: ['Corte em tiras e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 135, protein: 7, carbs: 16, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b90',
    name: 'Vitamina de Manga e Espinafre',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Manga', 'Espinafre', 'Água de Coco'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 80, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Folhas de Espinafre', baseAmount: 15, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Água de Coco', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo pequeno' }
    ],
    instructions: 'Bata tudo no liquidificador e sirva.',
    instructionsDetailed: {
      preparacao: ['Lave bem o espinafre.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata todos os ingredientes até ficar bem homogêneo.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 95, protein: 2, carbs: 22, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_b91',
    name: 'Pãozinho de Batata e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Batata Inglesa', 'Polvilho Doce', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Batata Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Parmesão Ralado', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture os ingredientes, molde bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata cozida ainda quente.'],
      cozimento: ['Misture com o polvilho e o queijo.', 'Molde bolinhas e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Pote fechado por 24h.',
    freezingTips: 'Pode congelar cru por 60 dias.',
    canFreeze: true,
    nutrition: { calories: 240, protein: 4, carbs: 48, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_b92',
    name: 'Creme de Banana com Pasta de Amendoim',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana', 'Pasta de Amendoim'],
    ingredientsDetailed: [
      { name: 'Banana Madura', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Pasta de Amendoim Integral', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Amasse a banana e misture a pasta de amendoim.',
    instructionsDetailed: {
      preparacao: ['Amasse bem a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture a pasta de amendoim até ficar homogêneo.']
    },
    image: '',
    prepTime: '3 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 3, carbs: 25, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b93',
    name: 'Tapioca com Queijo e Tomate',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Goma de Tapioca', 'Queijo', 'Tomate'],
    ingredientsDetailed: [
      { name: 'Goma de Tapioca', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Queijo Minas Frescal', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia pequena' },
      { name: 'Tomate Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Faça a tapioca e recheie com queijo e tomate.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate e o queijo.'],
      cozimento: ['Faça o disco de tapioca na frigideira.', 'Recheie e deixe o queijo derreter levemente.'],
      finalizacao: ['Dobre e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 145, protein: 6, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b94',
    name: 'Muffin de Abobrinha e Milho',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Abobrinha', 'Milho Verde', 'Ovo', 'Farinha de Milho'],
    ingredientsDetailed: [
      { name: 'Abobrinha Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Milho Verde', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Milho (Fubá)', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Rale a abobrinha.'],
      cozimento: ['Misture todos os ingredientes.', 'Asse em forminhas de silicone por 20 min.'],
      finalizacao: ['Deixe esfriar e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 8, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b95',
    name: 'Creme de Manga com Iogurte',
    age: '8 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Manga', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 80, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata a manga com o iogurte no mixer.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata até ficar um creme liso e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 105, protein: 3, carbs: 18, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_b96',
    name: 'Panqueca de Banana e Chia',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana', 'Ovo', 'Chia'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture os ingredientes e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e misture com o ovo e a chia.'],
      cozimento: ['Grelhe em frigideira antiaderente dos dois lados.'],
      finalizacao: ['Corte em tiras e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 7, carbs: 15, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_b97',
    name: 'Mingau de Aveia com Maçã Ralada',
    age: '8 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Aveia', 'Leite', 'Maçã'],
    ingredientsDetailed: [
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite Materno/Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Maçã Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a aveia no leite e adicione a maçã.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã.'],
      cozimento: ['Leve a aveia e o leite ao fogo mexendo sempre até engrossar.'],
      finalizacao: ['Misture a maçã ralada e sirva morno.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 135, protein: 5, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_b98',
    name: 'Omelete de Espinafre e Ricota',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Ovo', 'Espinafre', 'Ricota', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Espinafre Picado', baseAmount: 15, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ricota Amassada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Bata o ovo com espinafre e ricota e grelhe.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre bem miúdo.'],
      cozimento: ['Bata o ovo e misture os ingredientes.', 'Grelhe na frigideira com azeite.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 10, carbs: 2, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_b99',
    name: 'Smoothie de Kiwi e Melão',
    age: '1 ano+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Kiwi', 'Melão', 'Água'],
    ingredientsDetailed: [
      { name: 'Kiwi Maduro', baseAmount: 50, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Melão Picado', baseAmount: 100, unit: 'g', householdMeasure: '1 fatia média' },
      { name: 'Água', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 copo' }
    ],
    instructions: 'Bata tudo no liquidificador e sirva.',
    instructionsDetailed: {
      preparacao: ['Descasque o kiwi e o melão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata todos os ingredientes até ficar homogêneo.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 80, protein: 1, carbs: 18, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_b100',
    name: 'Waffle de Banana e Aveia',
    age: '9 meses+',
    category: 'CAFÉ DA MANHÃ',
    ingredients: ['Banana', 'Ovo', 'Farinha de Aveia'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Misture os ingredientes e asse na máquina de waffle.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e misture com o ovo e a aveia.'],
      cozimento: ['Asse na máquina de waffle untada.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 155, protein: 8, carbs: 22, fats: 5 },
    isPremium: false
  },
  // ALMOÇO (24 novas)
  {
    id: 'cb_l1',
    name: 'Risoto de Beterraba com Frango',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Arroz Arbóreo ou Agulhinha', 'Beterraba', 'Frango Desfiado', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Arroz', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Beterraba Ralada', baseAmount: 40, unit: 'g', householdMeasure: '1/4 de unidade' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Refogue o arroz com cebola e beterraba, adicione água aos poucos e finalize com o frango.',
    instructionsDetailed: {
      preparacao: ['Rale a beterraba.', 'Cozinhe e desfie o frango.'],
      cozimento: ['Refogue cebola e arroz.', 'Adicione a beterraba e água quente aos poucos.', 'Mexa até o arroz ficar macio e cremoso.'],
      finalizacao: ['Misture o frango e sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 195, protein: 12, carbs: 32, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l2',
    name: 'Peixe ao Vapor com Purê de Mandioquinha',
    age: '7 meses+',
    category: 'ALMOÇO',
    ingredients: ['Filé de Tilápia', 'Mandioquinha', 'Azeite', 'Limão'],
    ingredientsDetailed: [
      { name: 'Filé de Tilápia', baseAmount: 80, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Mandioquinha', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' },
      { name: 'Limão', baseAmount: 2, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Cozinhe o peixe e a mandioquinha no vapor, amasse a mandioquinha e sirva com o peixe em lascas.',
    instructionsDetailed: {
      preparacao: ['Tempere o peixe com gotas de limão.', 'Descasque a mandioquinha.'],
      cozimento: ['Cozinhe ambos no vapor por 15 min.', 'Amasse a mandioquinha com azeite.'],
      finalizacao: ['Sirva o purê com o peixe desfiado (sem espinhas).']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar o purê separado.',
    canFreeze: true,
    nutrition: { calories: 175, protein: 16, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l3',
    name: 'Macarrão Integral com Molho de Tomate Caseiro',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Macarrão Integral', 'Tomate Maduro', 'Manjericão', 'Carne Moída'],
    ingredientsDetailed: [
      { name: 'Macarrão Integral', baseAmount: 40, unit: 'g', householdMeasure: 'Pequena porção' },
      { name: 'Tomate', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Manjericão', baseAmount: 2, unit: 'g', householdMeasure: 'Folhas' },
      { name: 'Carne Moída', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o macarrão, faça o molho com tomate e carne e misture.',
    instructionsDetailed: {
      preparacao: ['Bata o tomate no liquidificador e peneire.', 'Cozinhe o macarrão.'],
      cozimento: ['Refogue a carne, adicione o suco de tomate e manjericão.', 'Deixe apurar por 10 min.'],
      finalizacao: ['Misture o molho ao macarrão e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 14, carbs: 28, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_l4',
    name: 'Feijão Branco com Espinafre e Cenoura',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Feijão Branco', 'Espinafre', 'Cenoura', 'Alho'],
    ingredientsDetailed: [
      { name: 'Feijão Branco Cozido', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Cenoura em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Alho', baseAmount: 2, unit: 'g', householdMeasure: '1/2 dente' }
    ],
    instructions: 'Refogue os legumes e misture ao feijão cozido.',
    instructionsDetailed: {
      preparacao: ['Pique a cenoura e o espinafre.'],
      cozimento: ['Refogue o alho e a cenoura.', 'Adicione o feijão e um pouco de caldo.', 'No final, coloque o espinafre.'],
      finalizacao: ['Amasse levemente os grãos para bebês menores.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 135, protein: 7, carbs: 24, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_l5',
    name: 'Lentilha com Arroz Integral e Abóbora',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Lentilha', 'Arroz Integral', 'Abóbora Cabotiá'],
    ingredientsDetailed: [
      { name: 'Lentilha Cozida', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Arroz Integral Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abóbora em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Cozinhe a abóbora e misture com o arroz e a lentilha.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora.'],
      cozimento: ['Cozinhe a abóbora no vapor.', 'Misture com o arroz e a lentilha já cozidos.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 8, carbs: 30, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_l6',
    name: 'Polenta Cremosa com Carne Moída',
    age: '7 meses+',
    category: 'ALMOÇO',
    ingredients: ['Fubá', 'Água', 'Carne Moída', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Fubá de Milho', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Água', baseAmount: 200, unit: 'ml', householdMeasure: '1 xícara grande' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o fubá na água até engrossar e sirva com a carne refogada.',
    instructionsDetailed: {
      preparacao: ['Dissolva o fubá em um pouco de água fria.'],
      cozimento: ['Leve ao fogo com o restante da água, mexendo sempre.', 'Refogue a carne com cebola em outra panela.'],
      finalizacao: ['Coloque a polenta no prato e a carne por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar a polenta.',
    canFreeze: false,
    nutrition: { calories: 185, protein: 11, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l7',
    name: 'Frango com Batata Doce e Vagem',
    age: '7 meses+',
    category: 'ALMOÇO',
    ingredients: ['Peito de Frango', 'Batata Doce', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 60, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Batata Doce', baseAmount: 80, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Vagem Picada', baseAmount: 30, unit: 'g', householdMeasure: '5 unidades' }
    ],
    instructions: 'Cozinhe tudo junto com um pouco de água e azeite.',
    instructionsDetailed: {
      preparacao: ['Pique o frango, a batata e a vagem.'],
      cozimento: ['Coloque tudo na panela com água suficiente para cobrir.', 'Cozinhe até a batata estar bem macia.'],
      finalizacao: ['Amasse ou desfie conforme a idade.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 18, carbs: 26, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l8',
    name: 'Omelete de Forno com Brócolis',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Ovo', 'Brócolis', 'Ricota', 'Cebolinha'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 2, unit: 'unidades', householdMeasure: '2 ovos' },
      { name: 'Brócolis Picado', baseAmount: 40, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ricota', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebolinha', baseAmount: 2, unit: 'g', householdMeasure: 'A gosto' }
    ],
    instructions: 'Bata os ovos, misture os ingredientes e asse.',
    instructionsDetailed: {
      preparacao: ['Pique o brócolis e a cebolinha.', 'Bata os ovos.'],
      cozimento: ['Misture tudo e coloque em um refratário untado.', 'Asse a 180°C por 15 min.'],
      finalizacao: ['Corte em quadrados e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 14, carbs: 4, fats: 11 },
    isPremium: true
  },
  {
    id: 'cb_l9',
    name: 'Arroz com Brócolis e Carne em Iscas',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Brócolis', 'Carne Bovina (Alcatra)', 'Alho'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Brócolis Picadinho', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne em Iscas', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Alho', baseAmount: 2, unit: 'g', householdMeasure: '1/2 dente' }
    ],
    instructions: 'Refogue a carne com alho, misture o brócolis e o arroz.',
    instructionsDetailed: {
      preparacao: ['Pique o brócolis bem miúdo.', 'Corte a carne em tiras finas.'],
      cozimento: ['Refogue a carne com alho.', 'Adicione o brócolis e um pouco de água para cozinhar.', 'Misture o arroz no final.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 15, carbs: 24, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_l10',
    name: 'Purê de Grão de Bico com Frango',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Grão de Bico', 'Frango', 'Azeite', 'Cúrcuma'],
    ingredientsDetailed: [
      { name: 'Grão de Bico Cozido', baseAmount: 80, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' },
      { name: 'Cúrcuma', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Bata o grão de bico com um pouco de água e azeite, misture o frango.',
    instructionsDetailed: {
      preparacao: ['Retire a pele do grão de bico (opcional para melhor digestão).'],
      cozimento: ['Bata o grão de bico com azeite e cúrcuma até virar purê.', 'Aqueça o frango desfiado.'],
      finalizacao: ['Misture ambos e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 220, protein: 18, carbs: 26, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_l11',
    name: 'Quibe Assado de Abóbora (Vegetariano)',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Trigo para Quibe', 'Abóbora Cabotiá', 'Hortelã', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Trigo para Quibe', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Purê de Abóbora', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Hortelã', baseAmount: 2, unit: 'g', householdMeasure: 'Folhas picadas' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Hidrate o trigo, misture com a abóbora e temperos e asse.',
    instructionsDetailed: {
      preparacao: ['Hidrate o trigo por 30 min e esprema bem.', 'Cozinhe a abóbora e amasse.'],
      cozimento: ['Misture todos os ingredientes.', 'Coloque em uma forma pequena e asse a 180°C por 20 min.'],
      finalizacao: ['Corte em losangos.']
    },
    image: '',
    prepTime: '45 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 5, carbs: 34, fats: 1 },
    isPremium: true
  },
  {
    id: 'cb_l12',
    name: 'Sopa de Ervilha com Cubinhos de Frango',
    age: '7 meses+',
    category: 'ALMOÇO',
    ingredients: ['Ervilha Partida', 'Frango', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Ervilha Partida', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: 'Finalização' }
    ],
    instructions: 'Cozinhe a ervilha até desmanchar e sirva com o frango refogado.',
    instructionsDetailed: {
      preparacao: ['Deixe a ervilha de molho por 4h.', 'Pique o frango bem pequeno.'],
      cozimento: ['Cozinhe a ervilha em água até virar um creme.', 'Refogue o frango com cebola.'],
      finalizacao: ['Misture o frango na sopa de ervilha e adicione o azeite.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 195, protein: 16, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l13',
    name: 'Charutinho de Couve com Arroz e Carne',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Folha de Couve', 'Arroz Cozido', 'Carne Moída'],
    ingredientsDetailed: [
      { name: 'Folha de Couve', baseAmount: 1, unit: 'unidade', householdMeasure: '1 folha grande' },
      { name: 'Arroz Cozido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Moída', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Recheie a couve com arroz e carne e cozinhe no vapor.',
    instructionsDetailed: {
      preparacao: ['Retire o talo central da couve.', 'Misture o arroz com a carne refogada.'],
      cozimento: ['Coloque o recheio na couve e enrole.', 'Cozinhe no vapor por 10 min.'],
      finalizacao: ['Corte em rodelas para a criança.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 10, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l14',
    name: 'Espaguete de Abobrinha com Almôndegas',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Abobrinha', 'Carne Moída', 'Farelo de Aveia', 'Tomate'],
    ingredientsDetailed: [
      { name: 'Abobrinha', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Carne Moída', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Farelo de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' },
      { name: 'Tomate', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Faça tiras de abobrinha, almôndegas com aveia e sirva com molho de tomate.',
    instructionsDetailed: {
      preparacao: ['Fatie a abobrinha em tiras finas (estilo espaguete).', 'Molde as almôndegas com a carne e aveia.'],
      cozimento: ['Grelhe as almôndegas.', 'Refogue a abobrinha rapidamente (2 min).', 'Faça um molho rápido com o tomate.'],
      finalizacao: ['Monte o prato e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar as almôndegas.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 16, carbs: 12, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_l15',
    name: 'Arroz de Carreteiro Baby',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Carne Bovina Picadinha', 'Tomate', 'Cebola', 'Salsinha'],
    ingredientsDetailed: [
      { name: 'Arroz Cru', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Bovina', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Tomate Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebola/Salsinha', baseAmount: 5, unit: 'g', householdMeasure: 'A gosto' }
    ],
    instructions: 'Cozinhe a carne, adicione o arroz e legumes e cozinhe tudo junto.',
    instructionsDetailed: {
      preparacao: ['Pique a carne e o tomate bem pequenos.'],
      cozimento: ['Refogue a carne com cebola.', 'Adicione o arroz e o tomate.', 'Coloque água e cozinhe até secar.'],
      finalizacao: ['Finalize com salsinha picada.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 195, protein: 12, carbs: 28, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l16',
    name: 'Purê de Batata com Iscas de Fígado',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Batata Inglesa', 'Fígado de Boi', 'Leite Materno ou Água', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Batata', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Fígado de Boi', baseAmount: 40, unit: 'g', householdMeasure: '1 fatia pequena' },
      { name: 'Leite/Água', baseAmount: 20, unit: 'ml', householdMeasure: 'Para o purê' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: 'Para refogar' }
    ],
    instructions: 'Faça o purê de batata e sirva com o fígado acebolado bem picadinho.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a batata.', 'Pique o fígado em pedaços minúsculos.'],
      cozimento: ['Amasse a batata com o leite.', 'Refogue o fígado rapidamente com cebola para não endurecer.'],
      finalizacao: ['Sirva o purê com o fígado por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 14, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l17',
    name: 'Canja de Galinha com Legumes',
    age: '6 meses+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Frango', 'Cenoura', 'Batata'],
    ingredientsDetailed: [
      { name: 'Arroz', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Frango em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cenoura Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata Picada', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe tudo em bastante água até ficar bem macio e com caldo.',
    instructionsDetailed: {
      preparacao: ['Pique todos os ingredientes bem pequenos.'],
      cozimento: ['Coloque tudo na panela com água.', 'Cozinhe em fogo baixo até o arroz quase desmanchar.'],
      finalizacao: ['Amasse levemente com o garfo antes de servir.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 12, carbs: 20, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l18',
    name: 'Moqueca de Peixe Baby',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Peixe Branco', 'Tomate', 'Pimentão Amarelo', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Peixe em Cubos', baseAmount: 80, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Tomate Picado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Pimentão Amarelo', baseAmount: 10, unit: 'g', householdMeasure: 'Tiras finas' },
      { name: 'Leite de Coco', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Refogue os legumes, adicione o peixe e o leite de coco e cozinhe rapidamente.',
    instructionsDetailed: {
      preparacao: ['Pique o peixe e os legumes.'],
      cozimento: ['Refogue tomate e pimentão.', 'Adicione o peixe e o leite de coco.', 'Cozinhe por 8 min.'],
      finalizacao: ['Sirva com arroz branco.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 15, carbs: 6, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_l19',
    name: 'Escondidinho de Mandioca com Carne Seca (Dessalgada)',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Mandioca', 'Carne Seca', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Mandioca Cozida', baseAmount: 120, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Carne Seca (limpa)', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Faça o purê de mandioca e recheie com a carne seca bem desfiada e refogada.',
    instructionsDetailed: {
      preparacao: ['Dessalgue a carne seca por 24h trocando a água.', 'Cozinhe a mandioca e a carne separadamente.'],
      cozimento: ['Amasse a mandioca com um pouco da água do cozimento.', 'Refogue a carne desfiada com cebola.'],
      finalizacao: ['Monte as camadas e sirva morno.']
    },
    image: '',
    prepTime: '40 min (sem contar dessalga)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 230, protein: 10, carbs: 38, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l20',
    name: 'Arroz com Lentilha e Cebola Caramelizada',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Lentilha', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Lentilha Cozida', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola em Fatias', baseAmount: 20, unit: 'g', householdMeasure: '1/4 de unidade' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Misture o arroz e a lentilha e cubra com a cebola dourada no azeite.',
    instructionsDetailed: {
      preparacao: ['Fatie a cebola bem fininha.'],
      cozimento: ['Refogue a cebola no azeite em fogo baixo até ficar bem dourada.', 'Misture o arroz e a lentilha.'],
      finalizacao: ['Coloque a cebola por cima e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 7, carbs: 32, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l21',
    name: 'Nhoque de Batata Doce com Molho Branco',
    age: '1-3 anos',
    category: 'ALMOÇO',
    ingredients: ['Batata Doce', 'Farinha de Trigo', 'Leite', 'Manteiga'],
    ingredientsDetailed: [
      { name: 'Batata Doce', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Farinha de Trigo', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite', baseAmount: 50, unit: 'ml', householdMeasure: 'Para o molho' },
      { name: 'Manteiga', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de café' }
    ],
    instructions: 'Faça o nhoque com a batata e farinha, cozinhe e sirva com molho branco caseiro.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a batata e amasse.', 'Misture com a farinha até dar ponto de enrolar.'],
      cozimento: ['Faça rolinhos e corte.', 'Cozinhe em água fervente até subir.', 'Faça o molho com leite e manteiga.'],
      finalizacao: ['Misture o molho ao nhoque e sirva.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar o nhoque cru.',
    canFreeze: true,
    nutrition: { calories: 250, protein: 6, carbs: 48, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_l22',
    name: 'Frango com Quiabo e Angu',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Quiabo', 'Fubá', 'Água'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 60, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Quiabo Picado', baseAmount: 30, unit: 'g', householdMeasure: '3 unidades' },
      { name: 'Fubá', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Água', baseAmount: 150, unit: 'ml', householdMeasure: 'Para o angu' }
    ],
    instructions: 'Refogue o frango com quiabo e sirva com o angu cremoso.',
    instructionsDetailed: {
      preparacao: ['Lave e seque bem o quiabo para diminuir a baba.', 'Pique o frango.'],
      cozimento: ['Refogue o frango, adicione o quiabo e cozinhe com um pouco de água.', 'Faça o angu cozinhando o fubá na água.'],
      finalizacao: ['Sirva o frango com quiabo sobre o angu.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 16, carbs: 20, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l23',
    name: 'Arroz com Espinafre e Filé de Peixe',
    age: '7 meses+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Espinafre', 'Filé de Peixe', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Peixe em Lascas', baseAmount: 60, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: 'Finalização' }
    ],
    instructions: 'Misture o espinafre ao arroz quente e sirva com o peixe grelhado.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre bem fino.', 'Grelhe o peixe.'],
      cozimento: ['Misture o espinafre ao arroz recém cozido (o calor murcha o espinafre).'],
      finalizacao: ['Sirva o peixe desfiado com o arroz verde.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar o arroz com espinafre.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 15, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l24',
    name: 'Carne com Mandioca e Cenoura',
    age: '7 meses+',
    category: 'ALMOÇO',
    ingredients: ['Carne Bovina (Músculo)', 'Mandioca', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Carne em Cubos', baseAmount: 60, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Mandioca', baseAmount: 80, unit: 'g', householdMeasure: '1 pedaço médio' },
      { name: 'Cenoura', baseAmount: 40, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Cozinhe a carne na pressão com os legumes até tudo estar bem macio.',
    instructionsDetailed: {
      preparacao: ['Pique a carne, a mandioca e a cenoura.'],
      cozimento: ['Coloque tudo na panela de pressão com água por 30 min.', 'Deixe a água secar até virar um caldo grosso.'],
      finalizacao: ['Amasse a mandioca e a cenoura e desfie a carne.']
    },
    image: '',
    prepTime: '45 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 16, carbs: 28, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l25',
    name: 'Arroz com Frango e Cenoura',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Frango', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Arroz Branco', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cenoura em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o arroz com o frango e a cenoura.',
    instructionsDetailed: {
      preparacao: ['Pique o frango e a cenoura.'],
      cozimento: ['Refogue o frango.', 'Adicione o arroz e a cenoura e cozinhe com água.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 12, carbs: 25, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l26',
    name: 'Feijão com Carne e Abóbora',
    age: '7 meses+',
    category: 'ALMOÇO',
    ingredients: ['Feijão', 'Carne', 'Abóbora'],
    ingredientsDetailed: [
      { name: 'Feijão Carioca', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Abóbora Cabotiá', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o feijão com a carne e a abóbora.',
    instructionsDetailed: {
      preparacao: ['Pique a carne e a abóbora.'],
      cozimento: ['Cozinhe tudo na pressão por 30 min.'],
      finalizacao: ['Amasse a abóbora e sirva.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 14, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l27',
    name: 'Macarrão com Molho de Tomate e Carne',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Macarrão', 'Tomate', 'Carne Moída'],
    ingredientsDetailed: [
      { name: 'Macarrão Parafuso', baseAmount: 40, unit: 'g', householdMeasure: 'Pequena porção' },
      { name: 'Tomate Pelado', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Cozinhe o macarrão e misture ao molho de tomate com carne.',
    instructionsDetailed: {
      preparacao: ['Prepare o molho de tomate.'],
      cozimento: ['Cozinhe o macarrão.', 'Refogue a carne e misture ao molho.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar o molho.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 15, carbs: 30, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l28',
    name: 'Peixe Grelhado com Purê de Batata',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Batata', 'Leite'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 60, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Batata Inglesa', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Leite', baseAmount: 20, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Grelhe o peixe e sirva com purê de batata.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a batata.'],
      cozimento: ['Amasse a batata com leite.', 'Grelhe o peixe.'],
      finalizacao: ['Sirva o peixe em lascas com o purê.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 16, carbs: 22, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_l29',
    name: 'Risoto de Legumes e Queijo',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Legumes Variados', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Arroz Arbóreo', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Legumes Picados', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o arroz com os legumes e finalize com queijo.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe o arroz com caldo de legumes.', 'Adicione os legumes.'],
      finalizacao: ['Misture o queijo e sirva cremoso.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 6, carbs: 32, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l30',
    name: 'Carne Moída com Batata e Vagem',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Carne Moída', 'Batata', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Carne Moída', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Batata em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Refogue a carne e cozinhe com batata e vagem.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Refogue a carne.', 'Adicione os legumes e água e cozinhe.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 14, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l31',
    name: 'Frango com Quiabo e Polenta',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Quiabo', 'Fubá'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Quiabo Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 unidades' },
      { name: 'Fubá', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Refogue o frango com quiabo e sirva com polenta cremosa.',
    instructionsDetailed: {
      preparacao: ['Pique o frango e o quiabo.'],
      cozimento: ['Refogue o frango e o quiabo.', 'Prepare a polenta com água e sal.'],
      finalizacao: ['Sirva a polenta com o frango por cima.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 220, protein: 15, carbs: 28, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_l32',
    name: 'Lentilha com Arroz e Espinafre',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Lentilha', 'Arroz', 'Espinafre'],
    ingredientsDetailed: [
      { name: 'Lentilha Cozida', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Misture a lentilha, arroz e espinafre refogado.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre.'],
      cozimento: ['Refogue o espinafre.', 'Misture com arroz e lentilha.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 8, carbs: 30, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l33',
    name: 'Peixe ao Forno com Legumes',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Legumes Variados', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 80, unit: 'g', householdMeasure: '1 filé médio' },
      { name: 'Legumes Picados', baseAmount: 60, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Asse o peixe com os legumes e azeite.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Coloque tudo em uma assadeira e asse por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 18, carbs: 10, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_l34',
    name: 'Risoto de Frango e Ervilha',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Frango', 'Ervilha'],
    ingredientsDetailed: [
      { name: 'Arroz Arbóreo', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o arroz com frango e ervilha até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Desfie o frango.'],
      cozimento: ['Cozinhe o arroz com caldo de frango.', 'Adicione o frango e ervilha.'],
      finalizacao: ['Sirva cremoso.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 210, protein: 14, carbs: 32, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_l35',
    name: 'Carne com Batata Doce e Brócolis',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Carne', 'Batata Doce', 'Brócolis'],
    ingredientsDetailed: [
      { name: 'Carne em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata Doce em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Brócolis Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a carne com batata doce e brócolis.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na pressão ou panela comum.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 15, carbs: 24, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l36',
    name: 'Frango com Batata Doce e Brócolis',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Batata Doce', 'Brócolis'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata Doce em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Brócolis Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o frango com batata doce e brócolis.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na panela com água.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 14, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l37',
    name: 'Macarrão com Molho Branco e Frango',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Macarrão', 'Leite', 'Frango'],
    ingredientsDetailed: [
      { name: 'Macarrão Penne', baseAmount: 40, unit: 'g', householdMeasure: 'Pequena porção' },
      { name: 'Leite', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o macarrão e misture ao molho branco com frango.',
    instructionsDetailed: {
      preparacao: ['Prepare o molho branco com leite e um pouco de amido.'],
      cozimento: ['Cozinhe o macarrão.', 'Misture o frango ao molho.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 230, protein: 15, carbs: 32, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_l38',
    name: 'Peixe com Arroz e Salada',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Arroz', 'Salada Variada'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 80, unit: 'g', householdMeasure: '1 filé médio' },
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Alface e Tomate', baseAmount: 30, unit: 'g', householdMeasure: 'Pequena porção' }
    ],
    instructions: 'Grelhe o peixe e sirva com arroz e salada picadinha.',
    instructionsDetailed: {
      preparacao: ['Pique a salada.'],
      cozimento: ['Grelhe o peixe.'],
      finalizacao: ['Sirva o peixe com arroz e salada.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 18, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l39',
    name: 'Risoto de Abóbora e Carne',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Abóbora', 'Carne'],
    ingredientsDetailed: [
      { name: 'Arroz Arbóreo', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abóbora Cabotiá', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o arroz com abóbora e carne até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora e a carne.'],
      cozimento: ['Cozinhe o arroz com caldo de carne.', 'Adicione a abóbora e carne.'],
      finalizacao: ['Sirva cremoso.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 220, protein: 15, carbs: 30, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_l40',
    name: 'Carne com Batata e Cenoura',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Carne', 'Batata', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Carne em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Cenoura em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a carne com batata e cenoura.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na panela com água.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 14, carbs: 20, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l41',
    name: 'Frango com Arroz e Feijão',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Arroz', 'Feijão'],
    ingredientsDetailed: [
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Feijão Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Sirva o frango com arroz e feijão.',
    instructionsDetailed: {
      preparacao: ['Desfie o frango.'],
      cozimento: ['Aqueça os ingredientes.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 15, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l42',
    name: 'Lentilha com Batata e Cenoura',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Lentilha', 'Batata', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Lentilha Cozida', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Cenoura em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a lentilha com batata e cenoura.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe os legumes na lentilha.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 8, carbs: 28, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_l43',
    name: 'Peixe com Purê de Mandioquinha',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Mandioquinha', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 60, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Mandioquinha', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Grelhe o peixe e sirva com purê de mandioquinha.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a mandioquinha.'],
      cozimento: ['Amasse a mandioquinha com azeite.', 'Grelhe o peixe.'],
      finalizacao: ['Sirva o peixe em lascas com o purê.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 16, carbs: 25, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_l44',
    name: 'Risoto de Espinafre e Queijo',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Espinafre', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Arroz Arbóreo', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Espinafre Picado', baseAmount: 30, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Cozinhe o arroz com espinafre e finalize com queijo.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre.'],
      cozimento: ['Cozinhe o arroz com caldo de legumes.', 'Adicione o espinafre.'],
      finalizacao: ['Misture o queijo e sirva cremoso.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 200, protein: 8, carbs: 30, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_l45',
    name: 'Carne com Abóbora e Vagem',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Carne', 'Abóbora', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Carne em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Abóbora em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a carne com abóbora e vagem.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na panela com água.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 14, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l46',
    name: 'Frango com Batata e Brócolis',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Batata', 'Brócolis'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Brócolis Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o frango com batata e brócolis.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na panela com água.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 14, carbs: 20, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l47',
    name: 'Macarrão com Molho de Tomate e Frango',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Macarrão', 'Tomate', 'Frango'],
    ingredientsDetailed: [
      { name: 'Macarrão Parafuso', baseAmount: 40, unit: 'g', householdMeasure: 'Pequena porção' },
      { name: 'Tomate Pelado', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o macarrão e misture ao molho de tomate com frango.',
    instructionsDetailed: {
      preparacao: ['Prepare o molho de tomate.'],
      cozimento: ['Cozinhe o macarrão.', 'Misture o frango ao molho.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 200, protein: 14, carbs: 30, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l48',
    name: 'Peixe com Arroz e Legumes',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Arroz', 'Legumes Variados'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 80, unit: 'g', householdMeasure: '1 filé médio' },
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Legumes Picados', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Grelhe o peixe e sirva com arroz e legumes refogados.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Grelhe o peixe.', 'Refogue os legumes.'],
      finalizacao: ['Sirva o peixe com arroz e legumes.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 200, protein: 18, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l49',
    name: 'Risoto de Tomate e Queijo',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Tomate', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Arroz Arbóreo', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Tomate Picado', baseAmount: 40, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Cozinhe o arroz com tomate e finalize com queijo.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate.'],
      cozimento: ['Cozinhe o arroz com caldo de legumes.', 'Adicione o tomate.'],
      finalizacao: ['Misture o queijo e sirva cremoso.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 7, carbs: 30, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_l50',
    name: 'Frango com Mandioca e Vagem',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Mandioca', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Mandioca em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 pedaço pequeno' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o frango com mandioca e vagem.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na panela com água até a mandioca amaciar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 14, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l51',
    name: 'Peixe com Purê de Mandioquinha',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Mandioquinha', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe (Tilápia)', baseAmount: 50, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Mandioquinha', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o peixe no vapor e a mandioquinha na água. Amasse a mandioquinha com azeite.',
    instructionsDetailed: {
      preparacao: ['Limpe o peixe e pique a mandioquinha.'],
      cozimento: ['Cozinhe o peixe no vapor.', 'Cozinhe a mandioquinha até amaciar.'],
      finalizacao: ['Amasse a mandioquinha com azeite e sirva with o peixe desfiado.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l52',
    name: 'Carne com Grão-de-Bico e Cenoura',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Carne Bovina', 'Grão-de-Bico', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Carne Moída', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Grão-de-Bico Cozido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Refogue a carne e misture com o grão-de-Bico e a cenoura cozida.',
    instructionsDetailed: {
      preparacao: ['Deixe o grão-de-bico de molho e cozinhe.', 'Pique a cenoura.'],
      cozimento: ['Refogue a carne.', 'Cozinhe a cenoura.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 15, carbs: 22, fats: 7 },
    isPremium: true
  },
  {
    id: 'cb_l53',
    name: 'Macarrão Integral com Molho de Tomate Caseiro',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Macarrão Integral', 'Tomate', 'Manjericão'],
    ingredientsDetailed: [
      { name: 'Macarrão Integral', baseAmount: 40, unit: 'g', householdMeasure: '1 xícara pequena' },
      { name: 'Tomate Maduro', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Manjericão', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' }
    ],
    instructions: 'Cozinhe o macarrão e faça o molho batendo o tomate cozido com manjericão.',
    instructionsDetailed: {
      preparacao: ['Cozinhe o macarrão.', 'Cozinhe o tomate em água.'],
      cozimento: ['Bata o tomate no mixer com manjericão.'],
      finalizacao: ['Misture o molho ao macarrão e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar o molho separado.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 6, carbs: 35, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l54',
    name: 'Frango com Quiabo e Polenta',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Quiabo', 'Fubá'],
    ingredientsDetailed: [
      { name: 'Frango Desfiado', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Quiabo Picado', baseAmount: 30, unit: 'g', householdMeasure: '3 unidades' },
      { name: 'Fubá', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Refogue o frango com quiabo e prepare a polenta com o fubá e água.',
    instructionsDetailed: {
      preparacao: ['Pique o quiabo.', 'Prepare o frango.'],
      cozimento: ['Cozinhe o fubá em água mexendo sempre até engrossar.', 'Refogue o frango com quiabo.'],
      finalizacao: ['Sirva a polenta com o frango e quiabo por cima.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 12, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l55',
    name: 'Lentilha com Arroz Integral e Abóbora',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Lentilha', 'Arroz Integral', 'Abóbora'],
    ingredientsDetailed: [
      { name: 'Lentilha Cozida', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Arroz Integral Cozido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abóbora em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a lentilha, o arroz e a abóbora separadamente e misture.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora.'],
      cozimento: ['Cozinhe os grãos e a abóbora.'],
      finalizacao: ['Misture tudo e sirva morno.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 8, carbs: 30, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_l56',
    name: 'Omelete de Forno com Legumes',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Ovo', 'Seleta de Legumes', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 2, unit: 'unidade', householdMeasure: '2 ovos' },
      { name: 'Legumes Picados (Cenoura, Vagem)', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Queijo Ralado', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Bata os ovos, misture os legumes e o queijo, e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes e cozinhe levemente.'],
      cozimento: ['Bata os ovos e misture com os legumes.', 'Asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 4, fats: 10 },
    isPremium: true
  },
  {
    id: 'cb_l57',
    name: 'Risoto de Beterraba',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz Arbóreo', 'Beterraba', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Arroz Arbóreo', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Beterraba Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Refogue a cebola, adicione o arroz e a beterraba, e cozinhe adicionando água aos poucos.',
    instructionsDetailed: {
      preparacao: ['Rale a beterraba e pique a cebola.'],
      cozimento: ['Refogue a cebola.', 'Adicione o arroz e a beterraba.', 'Cozinhe mexendo sempre e adicionando água quente aos poucos.'],
      finalizacao: ['Sirva quando o arroz estiver macio.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 4, carbs: 38, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_l58',
    name: 'Carne com Batata e Brócolis',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Carne Bovina', 'Batata', 'Brócolis'],
    ingredientsDetailed: [
      { name: 'Carne em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Brócolis Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 buquês pequenos' }
    ],
    instructions: 'Cozinhe a carne com a batata e adicione o brócolis no final.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe a carne e a batata na pressão ou panela comum.', 'Adicione o brócolis nos últimos 5 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 14, carbs: 18, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_l59',
    name: 'Peixe Grelhado com Arroz de Coco',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Arroz', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 60, unit: 'g', householdMeasure: '1 filé médio' },
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Leite de Coco', baseAmount: 20, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Grelhe o peixe e misture o leite de coco ao arroz cozido.',
    instructionsDetailed: {
      preparacao: ['Tempere o peixe com limão.'],
      cozimento: ['Grelhe o peixe.', 'Aqueça o arroz com o leite de coco.'],
      finalizacao: ['Sirva o peixe com o arroz cremoso.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 220, protein: 14, carbs: 25, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_l60',
    name: 'Sopa de Ervilha com Bacon de Tofu',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Ervilha Seca', 'Tofu', 'Páprica'],
    ingredientsDetailed: [
      { name: 'Ervilha Seca', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Tofu em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Páprica Defumada', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Cozinhe a ervilha até desmanchar e sirva com tofu grelhado com páprica.',
    instructionsDetailed: {
      preparacao: ['Deixe a ervilha de molho.', 'Pique o tofu.'],
      cozimento: ['Cozinhe a ervilha na pressão.', 'Grelhe o tofu com páprica.'],
      finalizacao: ['Sirva a sopa com os cubinhos de tofu por cima.']
    },
    image: '',
    prepTime: '45 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 12, carbs: 28, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l61',
    name: 'Frango com Batata Doce e Espinafre',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Batata Doce', 'Espinafre'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata Doce em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o frango com a batata doce e adicione o espinafre no final.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe o frango e a batata.', 'Adicione o espinafre no final.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 14, carbs: 20, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l62',
    name: 'Escondidinho de Mandioca com Carne Seca (Dessalgada)',
    age: '2 anos+',
    category: 'ALMOÇO',
    ingredients: ['Mandioca', 'Carne Seca', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Mandioca Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Carne Seca Dessalgada e Desfiada', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Faça um purê de mandioca e monte camadas com a carne seca refogada.',
    instructionsDetailed: {
      preparacao: ['Dessalgue bem a carne seca.', 'Cozinhe a mandioca.'],
      cozimento: ['Refogue a carne com cebola.', 'Amasse a mandioca com um pouco de leite ou água.'],
      finalizacao: ['Monte o escondidinho e leve ao forno para dourar.']
    },
    image: '',
    prepTime: '50 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 250, protein: 12, carbs: 35, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_l63',
    name: 'Arroz com Lentilha e Cebola Caramelizada',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Lentilha', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Lentilha Cozida', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola em Fatias', baseAmount: 20, unit: 'g', householdMeasure: '1/4 unidade' }
    ],
    instructions: 'Misture o arroz com a lentilha e finalize com a cebola dourada no azeite.',
    instructionsDetailed: {
      preparacao: ['Fatie a cebola.'],
      cozimento: ['Doure a cebola no azeite em fogo baixo até caramelizar.', 'Aqueça o arroz e a lentilha.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 7, carbs: 35, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l64',
    name: 'Charutinho de Repolho com Carne e Arroz',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Repolho', 'Carne Moída', 'Arroz'],
    ingredientsDetailed: [
      { name: 'Folhas de Repolho', baseAmount: 2, unit: 'unidade', householdMeasure: '2 folhas' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Arroz Cozido', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Recheie as folhas de repolho com a carne e o arroz e cozinhe no molho de tomate.',
    instructionsDetailed: {
      preparacao: ['Escalde as folhas de repolho.', 'Misture a carne com o arroz.'],
      cozimento: ['Enrole os charutinhos e cozinhe no molho de tomate por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 10, carbs: 15, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_l65',
    name: 'Moqueca de Ovo com Banana da Terra',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Ovo', 'Banana da Terra', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Banana da Terra', baseAmount: 40, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Leite de Coco', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o ovo e a banana no leite de coco com tomate e cebola.',
    instructionsDetailed: {
      preparacao: ['Pique a banana e os temperos.'],
      cozimento: ['Leve ao fogo o leite de coco com os temperos e a banana.', 'Adicione o ovo e deixe cozinhar no molho.'],
      finalizacao: ['Sirva com arroz branco.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 210, protein: 8, carbs: 22, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_l66',
    name: 'Frango com Milho e Creme de Leite (Strogonoff Baby)',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Milho', 'Creme de Leite'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Milho Verde', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Creme de Leite', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Refogue o frango com milho e finalize com creme de leite e molho de tomate.',
    instructionsDetailed: {
      preparacao: ['Pique o frango.'],
      cozimento: ['Refogue o frango.', 'Adicione o milho e um pouco de molho de tomate.', 'Finalize com o creme de leite.'],
      finalizacao: ['Sirva com arroz e batata palha caseira.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 12, carbs: 8, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_l67',
    name: 'Peixe ao Forno com Batatas e Tomate',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Batata', 'Tomate'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 60, unit: 'g', householdMeasure: '1 filé médio' },
      { name: 'Batata em Rodelas', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Tomate em Rodelas', baseAmount: 30, unit: 'g', householdMeasure: '2 rodelas' }
    ],
    instructions: 'Asse o peixe sobre uma cama de batatas e tomates.',
    instructionsDetailed: {
      preparacao: ['Corte os legumes em rodelas.'],
      cozimento: ['Monte as camadas e asse a 180°C por 25 min.'],
      finalizacao: ['Sirva com um fio de azeite.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 14, carbs: 15, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_l68',
    name: 'Carne com Ervilha e Cenoura',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Carne Bovina', 'Ervilha Fresca', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Carne Moída', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cenoura em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Refogue a carne e adicione a ervilha e a cenoura cozida.',
    instructionsDetailed: {
      preparacao: ['Pique a cenoura.'],
      cozimento: ['Refogue a carne.', 'Cozinhe os legumes.'],
      finalizacao: ['Misture tudo e sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 14, carbs: 12, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_l69',
    name: 'Nhoque de Batata Doce com Molho Branco',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Batata Doce', 'Farinha de Trigo', 'Leite'],
    ingredientsDetailed: [
      { name: 'Batata Doce Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Farinha de Trigo', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' }
    ],
    instructions: 'Faça o nhoque com a batata doce e farinha, e sirva com molho branco caseiro.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata doce e misture com farinha até dar ponto.', 'Modele os nhoques.'],
      cozimento: ['Cozinhe em água fervente.', 'Prepare o molho branco com leite e um pouco de farinha.'],
      finalizacao: ['Sirva o nhoque com o molho.']
    },
    image: '',
    prepTime: '45 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar o nhoque cru.',
    canFreeze: true,
    nutrition: { calories: 220, protein: 6, carbs: 40, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_l70',
    name: 'Frango com Abobrinha e Arroz Integral',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Abobrinha', 'Arroz Integral'],
    ingredientsDetailed: [
      { name: 'Frango Desfiado', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abobrinha Picada', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Arroz Integral Cozido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Refogue o frango com abobrinha e misture ao arroz integral.',
    instructionsDetailed: {
      preparacao: ['Pique a abobrinha.'],
      cozimento: ['Refogue o frango com a abobrinha.', 'Aqueça o arroz.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 22, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l71',
    name: 'Peixe com Brócolis e Purê de Batata',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Peixe', 'Brócolis', 'Batata'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 50, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Brócolis Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 buquês' },
      { name: 'Batata Cozida', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Cozinhe tudo no vapor e amasse a batata.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe no vapor até ficarem macios.'],
      finalizacao: ['Amasse a batata e sirva com o peixe e brócolis.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 12, carbs: 15, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l72',
    name: 'Carne com Inhame e Vagem',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Carne Bovina', 'Inhame', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Carne Moída', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Inhame em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a carne com inhame e vagem.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na panela com água até o inhame amaciar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 14, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l73',
    name: 'Macarrão de Alfabeto com Legumes',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Macarrão de Alfabeto', 'Cenoura', 'Ervilha'],
    ingredientsDetailed: [
      { name: 'Macarrão de Alfabeto', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o macarrão com os legumes picados.',
    instructionsDetailed: {
      preparacao: ['Pique a cenoura.'],
      cozimento: ['Cozinhe o macarrão e os legumes juntos em água.'],
      finalizacao: ['Sirva com um pouco do caldo.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 5, carbs: 25, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_l74',
    name: 'Frango com Batata e Cenoura',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Batata', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Frango em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Cenoura em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o frango com batata e cenoura.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na panela com água até amolecer.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l75',
    name: 'Arroz com Feijão e Carne Moída',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Feijão', 'Carne Moída'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Feijão Cozido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture o arroz, o feijão e a carne moída refogada.',
    instructionsDetailed: {
      preparacao: ['Prepare os ingredientes separadamente.'],
      cozimento: ['Refogue a carne.', 'Aqueça o arroz e o feijão.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 14, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l76',
    name: 'Purê de Mandioquinha com Iscas de Tilápia',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Mandioquinha', 'Tilápia', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Mandioquinha', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Filé de Tilápia', baseAmount: 50, unit: 'g', householdMeasure: '1/2 filé' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Faça um purê com a mandioquinha e grelhe o peixe com cebola.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a mandioquinha até ficar macia.', 'Pique o peixe em iscas pequenas.'],
      cozimento: ['Amasse a mandioquinha com um pouco da água do cozimento.', 'Grelhe o peixe no azeite com a cebola.'],
      finalizacao: ['Sirva o purê com o peixe por cima.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 12, carbs: 26, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l77',
    name: 'Macarrão de Alfabeto com Molho de Cenoura',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Macarrão de Alfabeto', 'Cenoura', 'Tomate', 'Frango'],
    ingredientsDetailed: [
      { name: 'Macarrão de Alfabeto', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Tomate sem Pele', baseAmount: 40, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o macarrão e bata os vegetais para fazer o molho.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a cenoura e o tomate.'],
      cozimento: ['Bata a cenoura e o tomate no liquidificador para formar um molho laranja.', 'Cozinhe o macarrão conforme a embalagem.'],
      finalizacao: ['Misture o macarrão, o molho e o frango desfiado.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar o molho separadamente.',
    canFreeze: true,
    nutrition: { calories: 195, protein: 10, carbs: 32, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l78',
    name: 'Escondidinho de Abóbora com Carne Seca',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Abóbora Cabotiá', 'Carne Seca Dessalgada', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Abóbora Cozida', baseAmount: 120, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Carne Seca Desfiada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Faça um purê de abóbora e recheie com a carne refogada.',
    instructionsDetailed: {
      preparacao: ['Amasse a abóbora cozida.', 'Certifique-se que a carne seca está bem dessalgada e desfiada.'],
      cozimento: ['Refogue a carne com a cebola.', 'Em um refratário pequeno, coloque a carne e cubra com a abóbora.'],
      finalizacao: ['Leve ao forno por 5 min apenas para aquecer por igual.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 165, protein: 9, carbs: 22, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l79',
    name: 'Arroz Colorido com Ervilha e Ovo',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Ervilha Fresca', 'Ovo', 'Cúrcuma'],
    ingredientsDetailed: [
      { name: 'Arroz Agulhinha', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Cúrcuma', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Cozinhe o arroz com cúrcuma e ervilha e misture o ovo mexido.',
    instructionsDetailed: {
      preparacao: ['Lave o arroz.'],
      cozimento: ['Cozinhe o arroz com a ervilha e a cúrcuma.', 'Em outra panela, faça o ovo mexido bem picadinho.'],
      finalizacao: ['Misture tudo e sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 185, protein: 9, carbs: 28, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l80',
    name: 'Polenta Cremosa com Molho de Carne',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Fubá', 'Carne Moída', 'Tomate', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Fubá Mimoso', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Tomate Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a polenta e faça um molho com a carne e tomate.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate e a cebola.'],
      cozimento: ['Cozinhe o fubá em água mexendo sempre até engrossar.', 'Refogue a carne com cebola e tomate até formar um molho.'],
      finalizacao: ['Sirva a polenta com o molho por cima.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 11, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l81',
    name: 'Suflê de Chuchu e Queijo',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Chuchu', 'Ovo', 'Queijo', 'Farinha de Trigo'],
    ingredientsDetailed: [
      { name: 'Chuchu Cozido', baseAmount: 80, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo (separar clara e gema)', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Farinha de Trigo', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Misture o chuchu amassado com gema, queijo e farinha, e incorpore a clara em neve.',
    instructionsDetailed: {
      preparacao: ['Amasse o chuchu cozido.', 'Bata a clara em neve.'],
      cozimento: ['Misture o chuchu, a gema, o queijo e a farinha.', 'Incorpore a clara em neve delicadamente.', 'Asse em ramequim a 180°C por 15 min.'],
      finalizacao: ['Sirva imediatamente.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 135, protein: 8, carbs: 8, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_l82',
    name: 'Lentilha com Cenoura e Cubos de Frango',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Lentilha', 'Cenoura', 'Frango', 'Louro'],
    ingredientsDetailed: [
      { name: 'Lentilha Cozida', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura em Cubinhos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Peito de Frango em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Folha de Louro', baseAmount: 1, unit: 'unidade', householdMeasure: '1 folha' }
    ],
    instructions: 'Cozinhe a lentilha com cenoura e louro e adicione o frango grelhado.',
    instructionsDetailed: {
      preparacao: ['Pique a cenoura e o frango em cubos bem pequenos.'],
      cozimento: ['Cozinhe a lentilha com a cenoura e o louro.', 'Grelhe o frango separadamente.'],
      finalizacao: ['Misture tudo e sirva com o caldo.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 155, protein: 15, carbs: 18, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l83',
    name: 'Batata Recheada com Brócolis e Ricota',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Batata Inglesa', 'Brócolis', 'Ricota', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Batata Inglesa', baseAmount: 120, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Brócolis Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ricota Amassada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Asse a batata, retire parte da polpa e misture com brócolis e ricota.',
    instructionsDetailed: {
      preparacao: ['Lave bem a batata.', 'Pique o brócolis bem miúdo.'],
      cozimento: ['Asse a batata inteira com casca até ficar macia.', 'Misture a polpa da batata com o brócolis, ricota e azeite.'],
      finalizacao: ['Recheie a batata e sirva morna.']
    },
    image: '',
    prepTime: '50 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 7, carbs: 32, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l84',
    name: 'Arroz de Forno com Legumes e Ovo',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz Cozido', 'Seleta de Legumes', 'Ovo', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 60, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Legumes Variados (Cenoura, Milho, Vagem)', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo Batido', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Ralado', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture o arroz, legumes e ovo e leve ao forno.',
    instructionsDetailed: {
      preparacao: ['Misture o arroz cozido com os legumes picadinhos.'],
      cozimento: ['Adicione o ovo batido e misture bem.', 'Coloque em um refratário, polvilhe queijo e asse por 15 min.'],
      finalizacao: ['Sirva em quadrados.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 185, protein: 9, carbs: 26, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l85',
    name: 'Feijão Branco com Abóbora e Carne',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Feijão Branco', 'Abóbora Cabotiá', 'Carne em Cubos'],
    ingredientsDetailed: [
      { name: 'Feijão Branco Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abóbora em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Bovina em Cubos Pequenos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o feijão com a abóbora e a carne.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora e a carne em cubos pequenos.'],
      cozimento: ['Cozinhe tudo junto na pressão até ficar bem macio.'],
      finalizacao: ['Amasse levemente a abóbora para engrossar o caldo.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 175, protein: 14, carbs: 20, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l86',
    name: 'Nhoque de Batata Doce com Molho de Tomate',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Batata Doce', 'Farinha de Trigo', 'Tomate', 'Manjericão'],
    ingredientsDetailed: [
      { name: 'Batata Doce Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Farinha de Trigo', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Molho de Tomate Caseiro', baseAmount: 40, unit: 'ml', householdMeasure: '2 colheres de sopa' },
      { name: 'Manjericão', baseAmount: 1, unit: 'g', householdMeasure: '1 folha' }
    ],
    instructions: 'Faça o nhoque com a batata e farinha e sirva com molho.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata doce.', 'Misture a farinha até dar ponto de enrolar.'],
      cozimento: ['Faça rolinhos, corte e cozinhe em água fervente até subir.', 'Aqueça o molho de tomate.'],
      finalizacao: ['Misture o nhoque ao molho e decore com manjericão.']
    },
    image: '',
    prepTime: '45 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar o nhoque cru.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 4, carbs: 45, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_l87',
    name: 'Frango com Quiabo e Polenta',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Quiabo', 'Fubá', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Sobrecoxa de Frango Picada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Quiabo Picado', baseAmount: 30, unit: 'g', householdMeasure: '3 unidades' },
      { name: 'Fubá', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Refogue o frango com cebola e quiabo e sirva com polenta.',
    instructionsDetailed: {
      preparacao: ['Lave e seque bem o quiabo para diminuir a baba.'],
      cozimento: ['Refogue o frango e o quiabo.', 'Cozinhe o fubá com água até dar o ponto de polenta.'],
      finalizacao: ['Sirva o frango com quiabo sobre a polenta.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 195, protein: 14, carbs: 18, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_l88',
    name: 'Arroz com Lentilha e Cebola Caramelizada',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Lentilha', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Lentilha Cozida', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola em Fatias', baseAmount: 20, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Misture o arroz e a lentilha e cubra com a cebola refogada no azeite.',
    instructionsDetailed: {
      preparacao: ['Fatie a cebola bem fininho.'],
      cozimento: ['Refogue a cebola no azeite em fogo baixo até ficar bem dourada.', 'Aqueça o arroz e a lentilha juntos.'],
      finalizacao: ['Misture a cebola ao arroz com lentilha e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 8, carbs: 32, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l89',
    name: 'Peixe ao Forno com Batata e Tomate',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Filé de Peixe', 'Batata', 'Tomate', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe (Tilápia ou Pescada)', baseAmount: 60, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Batata em Rodelas', baseAmount: 80, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Tomate em Rodelas', baseAmount: 30, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Monte camadas de batata, peixe e tomate e asse.',
    instructionsDetailed: {
      preparacao: ['Corte a batata em rodelas bem finas para assar rápido.'],
      cozimento: ['Em um refratário, coloque a batata, o peixe e o tomate.', 'Regue com azeite e asse coberto com papel alumínio por 20 min.'],
      finalizacao: ['Retire o papel e deixe mais 5 min.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 14, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l90',
    name: 'Cuscuz Marroquino com Legumes e Frango',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Cuscuz Marroquino', 'Abobrinha', 'Cenoura', 'Frango'],
    ingredientsDetailed: [
      { name: 'Cuscuz Marroquino', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abobrinha em Cubinhos', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cenoura em Cubinhos', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Hidrate o cuscuz e misture com os legumes refogados e o frango.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes bem pequenos.'],
      cozimento: ['Refogue os legumes e o frango.', 'Hidrate o cuscuz com água quente por 5 min.'],
      finalizacao: ['Solte o cuscuz com um garfo e misture o restante.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 185, protein: 12, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_l91',
    name: 'Omelete de Forno com Vagem e Milho',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Ovo', 'Vagem', 'Milho Verde', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 2, unit: 'unidades', householdMeasure: '2 ovos' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '3 unidades' },
      { name: 'Milho Verde', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Queijo Ralado', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata os ovos, misture os vegetais e queijo e asse.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a vagem antes de picar.'],
      cozimento: ['Bata os ovos e misture os ingredientes.', 'Asse em forminhas de silicone por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 15, carbs: 6, fats: 12 },
    isPremium: false
  },
  {
    id: 'cb_l92',
    name: 'Arroz Integral com Brócolis e Carne Moída',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz Integral', 'Brócolis', 'Carne Moída', 'Alho'],
    ingredientsDetailed: [
      { name: 'Arroz Integral Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa cheias' },
      { name: 'Brócolis Picado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Alho Picado', baseAmount: 2, unit: 'g', householdMeasure: '1/2 dente' }
    ],
    instructions: 'Refogue a carne com alho, adicione o brócolis e misture ao arroz.',
    instructionsDetailed: {
      preparacao: ['Pique o brócolis bem miúdo.'],
      cozimento: ['Refogue a carne com alho.', 'Adicione o brócolis e deixe cozinhar levemente.', 'Misture o arroz cozido.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 195, protein: 13, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l93',
    name: 'Canja de Galinha com Arroz e Legumes',
    age: '8 meses+',
    category: 'ALMOÇO',
    ingredients: ['Frango', 'Arroz', 'Cenoura', 'Batata'],
    ingredientsDetailed: [
      { name: 'Peito de Frango Picado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Arroz Agulhinha', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cenoura Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata Picada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe todos os ingredientes em bastante água até ficarem bem macios.',
    instructionsDetailed: {
      preparacao: ['Pique todos os ingredientes em pedaços pequenos.'],
      cozimento: ['Leve tudo ao fogo com água e cozinhe até o arroz quase desmanchar.'],
      finalizacao: ['Sirva com o caldo morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 22, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l94',
    name: 'Purê de Batata Doce com Frango e Ervilha',
    age: '9 meses+',
    category: 'ALMOÇO',
    ingredients: ['Batata Doce', 'Frango Desfiado', 'Ervilha Fresca'],
    ingredientsDetailed: [
      { name: 'Batata Doce', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Faça um purê com a batata e misture com o frango e a ervilha.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a batata doce e a ervilha.'],
      cozimento: ['Amasse a batata doce.', 'Misture o frango desfiado e a ervilha cozida.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 13, carbs: 30, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l95',
    name: 'Macarrão com Molho Branco de Couve-Flor',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Macarrão', 'Couve-Flor', 'Leite', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Macarrão (Penne ou Fusilli)', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Couve-Flor Cozida', baseAmount: 60, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Leite Materno/Fórmula', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 copo' },
      { name: 'Queijo Parmesão', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata a couve-flor com leite para fazer o molho e misture ao macarrão.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a couve-flor até ficar bem macia.'],
      cozimento: ['Bata a couve-flor com o leite no liquidificador até ficar cremoso.', 'Cozinhe o macarrão.'],
      finalizacao: ['Misture o macarrão ao molho, polvilhe queijo e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 8, carbs: 28, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l96',
    name: 'Arroz com Carne e Vagem',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Carne Bovina', 'Vagem', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa cheias' },
      { name: 'Carne Bovina em Cubinhos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Vagem Picada', baseAmount: 30, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Refogue a carne com cebola e vagem e misture ao arroz.',
    instructionsDetailed: {
      preparacao: ['Pique a carne e a vagem em pedaços pequenos.'],
      cozimento: ['Refogue a carne com cebola.', 'Adicione a vagem e um pouco de água até cozinhar.', 'Misture o arroz cozido.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 185, protein: 13, carbs: 24, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_l97',
    name: 'Quibe de Abóbora com Frango',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Abóbora Cabotiá', 'Trigo para Quibe', 'Frango Desfiado'],
    ingredientsDetailed: [
      { name: 'Abóbora Cozida e Amassada', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Trigo para Quibe Hidratado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture os ingredientes e asse.',
    instructionsDetailed: {
      preparacao: ['Hidrate o trigo por 30 min e esprema bem.', 'Amasse a abóbora.'],
      cozimento: ['Misture a abóbora, o trigo e o frango.', 'Coloque em uma assadeira untada e asse por 25 min a 180°C.'],
      finalizacao: ['Corte em losangos e sirva.']
    },
    image: '',
    prepTime: '45 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 175, protein: 13, carbs: 28, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_l98',
    name: 'Arroz de Couve-Flor com Peixe',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Couve-Flor', 'Filé de Peixe', 'Tomate', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Couve-Flor Triturada', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Filé de Peixe Picado', baseAmount: 50, unit: 'g', householdMeasure: '1/2 filé' },
      { name: 'Tomate sem Semente Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Refogue a couve-flor com o peixe e tomate.',
    instructionsDetailed: {
      preparacao: ['Triture a couve-flor crua no processador até ficar com textura de arroz.'],
      cozimento: ['Refogue o peixe e o tomate no azeite.', 'Adicione a couve-flor e refogue por 5 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 12, carbs: 6, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_l99',
    name: 'Batata Doce Assada com Carne e Brócolis',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Batata Doce', 'Carne Bovina', 'Brócolis', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Batata Doce em Cubos', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Carne Bovina em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa cheias' },
      { name: 'Brócolis em Floretes', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Asse a batata, carne e brócolis com azeite.',
    instructionsDetailed: {
      preparacao: ['Pique tudo em cubos médios.'],
      cozimento: ['Coloque em uma assadeira, regue com azeite e asse por 30 min a 200°C.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 14, carbs: 30, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_l100',
    name: 'Risoto de Abóbora com Frango e Espinafre',
    age: '1 ano+',
    category: 'ALMOÇO',
    ingredients: ['Arroz', 'Abóbora', 'Frango', 'Espinafre'],
    ingredientsDetailed: [
      { name: 'Arroz Agulhinha', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abóbora Cozida e Batida', baseAmount: 60, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Espinafre Picado', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o arroz com o creme de abóbora, frango e espinafre.',
    instructionsDetailed: {
      preparacao: ['Bata a abóbora cozida com um pouco de água para fazer um creme.'],
      cozimento: ['Cozinhe o arroz no creme de abóbora.', 'Adicione o frango e o espinafre no final.'],
      finalizacao: ['Sirva bem cremoso.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 12, carbs: 30, fats: 2 },
    isPremium: false
  },
  // CAFÉ DA TARDE (24 novas)
  {
    id: 'cb_t1',
    name: 'Biscoito de Polvilho e Batata Doce',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Polvilho Azedo', 'Batata Doce Cozida', 'Azeite', 'Água'],
    ingredientsDetailed: [
      { name: 'Polvilho Azedo', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Batata Doce Amassada', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Azeite', baseAmount: 15, unit: 'ml', householdMeasure: '1 colher de sopa' },
      { name: 'Água Morna', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture tudo até formar uma massa, modele palitos e asse.',
    instructionsDetailed: {
      preparacao: ['Misture o polvilho com a batata doce morna e o azeite.', 'Adicione água aos poucos até a massa ficar homogênea e moldável.'],
      cozimento: ['Faça palitos finos.', 'Asse a 180°C por 15-20 min até ficarem crocantes.'],
      finalizacao: ['Deixe esfriar para endurecer.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote hermético por 3 dias.',
    freezingTips: 'Pode congelar cru por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 1, carbs: 38, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_t2',
    name: 'Espetinho de Frutas com Calda de Iogurte',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Uva sem Semente', 'Morango', 'Banana', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Uva sem Semente', baseAmount: 30, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Morango', baseAmount: 30, unit: 'g', householdMeasure: '2 unidades' },
      { name: 'Banana', baseAmount: 30, unit: 'g', householdMeasure: '1/3 de unidade' },
      { name: 'Iogurte Natural', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Monte os espetinhos (use palitos sem ponta) e sirva com o iogurte.',
    instructionsDetailed: {
      preparacao: ['Lave e corte as frutas em pedaços seguros.', 'Coloque nos palitos alternando as cores.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Sirva com o iogurte em um potinho para "chuchar".']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 75, protein: 2, carbs: 16, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_t3',
    name: 'Danoninho Caseiro de Inhame',
    age: '6 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Inhame', 'Morango', 'Banana'],
    ingredientsDetailed: [
      { name: 'Inhame Cozido', baseAmount: 100, unit: 'g', householdMeasure: '2 unidades pequenas' },
      { name: 'Morango', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Banana Madura', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Bata todos os ingredientes no liquidificador até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Cozinhe o inhame até ficar bem macio.', 'Lave os morangos.'],
      cozimento: ['Não vai ao fogo após bater.'],
      finalizacao: ['Bata o inhame ainda morno com as frutas. Deixe gelar antes de servir.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 3, carbs: 26, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t4',
    name: 'Bolo de Caneca de Banana (Micro-ondas)',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Ovo', 'Aveia', 'Fermento'],
    ingredientsDetailed: [
      { name: 'Banana Amassada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Fermento em Pó', baseAmount: 2, unit: 'g', householdMeasure: '1 pitada' }
    ],
    instructions: 'Misture tudo em uma caneca e leve ao micro-ondas por 1:30 min.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana na caneca.', 'Adicione o ovo, aveia e fermento e misture bem.'],
      cozimento: ['Leve ao micro-ondas em potência alta por 1 min e 30 segundos.'],
      finalizacao: ['Deixe esfriar um pouco e desenforme.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 7, carbs: 22, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t5',
    name: 'Chips de Maçã com Canela',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Maçã Fuji', 'Canela em Pó'],
    ingredientsDetailed: [
      { name: 'Maçã Fuji', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'A gosto' }
    ],
    instructions: 'Fatie a maçã bem fininha, polvilhe canela e asse em fogo baixo.',
    instructionsDetailed: {
      preparacao: ['Fatie a maçã em rodelas quase transparentes (use mandolina se tiver).', 'Retire as sementes.'],
      cozimento: ['Coloque em uma assadeira com papel manteiga.', 'Asse a 120°C por 45 min, virando na metade do tempo.'],
      finalizacao: ['Deixe esfriar para ficar crocante.']
    },
    image: '',
    prepTime: '1 hora',
    storageInfo: 'Pote bem fechado por 2 dias.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 80, protein: 0.5, carbs: 20, fats: 0.5 },
    isPremium: true
  },
  {
    id: 'cb_t6',
    name: 'Pão de Nuvem (Cloud Bread)',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Ovo', 'Cream Cheese ou Iogurte Grego', 'Fermento'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 2, unit: 'unidades', householdMeasure: '2 ovos' },
      { name: 'Cream Cheese', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Fermento em Pó', baseAmount: 2, unit: 'g', householdMeasure: '1 pitada' }
    ],
    instructions: 'Bata as claras em neve, misture as gemas com o queijo e asse em colheradas.',
    instructionsDetailed: {
      preparacao: ['Separe as claras das gemas.', 'Bata as claras em neve firme.', 'Misture as gemas com o cream cheese e o fermento.'],
      cozimento: ['Incorpore as claras delicadamente à mistura de gemas.', 'Coloque colheradas em uma assadeira untada.', 'Asse a 150°C por 15-20 min.'],
      finalizacao: ['Sirva puro ou com geleia de frutas sem açúcar.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 14, carbs: 2, fats: 14 },
    isPremium: true
  },
  {
    id: 'cb_t7',
    name: 'Gelatina de Suco de Uva Natural',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Suco de Uva Integral', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Suco de Uva Integral', baseAmount: 250, unit: 'ml', householdMeasure: '1 copo grande' },
      { name: 'Gelatina Incolor', baseAmount: 12, unit: 'g', householdMeasure: '1 envelope' }
    ],
    instructions: 'Hidrate a gelatina no suco e leve à geladeira.',
    instructionsDetailed: {
      preparacao: ['Hidrate a gelatina em 5 colheres de água.', 'Aqueça levemente para dissolver.'],
      cozimento: ['Misture a gelatina dissolvida no suco de uva frio.'],
      finalizacao: ['Coloque em potinhos e deixe na geladeira por 4 horas.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 10, carbs: 30, fats: 0 },
    isPremium: false
  },
  {
    id: 'cb_t8',
    name: 'Bolinho de Milho de Caneca',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Milho Verde', 'Ovo', 'Coco Ralado', 'Fermento'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 50, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Coco Ralado sem Açúcar', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Fermento em Pó', baseAmount: 2, unit: 'g', householdMeasure: '1 pitada' }
    ],
    instructions: 'Bata o milho com o ovo, misture o coco e fermento e asse no micro-ondas.',
    instructionsDetailed: {
      preparacao: ['Bata o milho e o ovo no mixer.', 'Misture o coco e o fermento.'],
      cozimento: ['Coloque em uma caneca e leve ao micro-ondas por 2 min.'],
      finalizacao: ['Desenforme e sirva morno.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 145, protein: 7, carbs: 12, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_t9',
    name: 'Picolé de Melancia e Kiwi',
    age: '6 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Melancia', 'Kiwi'],
    ingredientsDetailed: [
      { name: 'Melancia', baseAmount: 200, unit: 'g', householdMeasure: '1 fatia grande' },
      { name: 'Kiwi', baseAmount: 50, unit: 'g', householdMeasure: '1 unidade pequena' }
    ],
    instructions: 'Bata a melancia, coloque nas formas e adicione rodelas de kiwi.',
    instructionsDetailed: {
      preparacao: ['Bata a melancia no liquidificador e coe.', 'Fatie o kiwi em rodelas finas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Coloque o suco nas formas de picolé, insira o kiwi e leve ao freezer por 6 horas.']
    },
    image: '',
    prepTime: '15 min (+ espera)',
    storageInfo: 'Freezer por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 80, protein: 1, carbs: 18, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t10',
    name: 'Sanduíche de Maçã com Pasta de Amendoim',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Maçã', 'Pasta de Amendoim Integral', 'Granola Caseira'],
    ingredientsDetailed: [
      { name: 'Maçã', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Pasta de Amendoim', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sobremesa' },
      { name: 'Granola (sem açúcar)', baseAmount: 5, unit: 'g', householdMeasure: '1 pitada' }
    ],
    instructions: 'Corte a maçã em rodelas, passe pasta de amendoim e junte duas fatias.',
    instructionsDetailed: {
      preparacao: ['Corte a maçã em rodelas transversais e retire o miolo com um cortador circular.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Passe a pasta de amendoim em uma rodela, polvilhe granola e cubra com outra rodela.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 5, carbs: 18, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_t11',
    name: 'Muffin de Abóbora e Coco',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Abóbora Cozida', 'Ovo', 'Coco Ralado', 'Farinha de Aveia'],
    ingredientsDetailed: [
      { name: 'Purê de Abóbora', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Coco Ralado', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture tudo e asse em forminhas de muffin.',
    instructionsDetailed: {
      preparacao: ['Misture o purê de abóbora com o ovo.', 'Adicione o coco e a aveia.'],
      cozimento: ['Coloque em forminhas de silicone.', 'Asse a 180°C por 20 min.'],
      finalizacao: ['Deixe esfriar e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 7, carbs: 18, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_t12',
    name: 'Hummus de Beterraba com Palitos de Pepino',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Grão de Bico', 'Beterraba Cozida', 'Azeite', 'Pepino'],
    ingredientsDetailed: [
      { name: 'Grão de Bico Cozido', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Beterraba Cozida', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Azeite', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sobremesa' },
      { name: 'Pepino', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Bata o grão de bico com a beterraba e azeite. Sirva com o pepino em tiras.',
    instructionsDetailed: {
      preparacao: ['Bata o grão de bico, beterraba e azeite no processador até ficar liso.', 'Corte o pepino em palitos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Sirva o creme rosa com os palitos de pepino para mergulhar.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar o hummus por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 9, carbs: 28, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_t13',
    name: 'Vitamina de Abacate e Cacau',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Abacate', 'Leite ou Bebida Vegetal', 'Cacau em Pó', 'Banana'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Cacau 100%', baseAmount: 2, unit: 'g', householdMeasure: '1 colher de café' },
      { name: 'Banana Madura', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Bata tudo no liquidificador até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata todos os ingredientes e sirva gelado. Fica parecendo um milkshake saudável.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar em formas de picolé.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 4, carbs: 22, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_t14',
    name: 'Panqueca de Cenoura e Mel',
    age: '1-3 anos (Mel apenas > 1 ano)',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Cenoura', 'Ovo', 'Farinha de Trigo Integral', 'Mel'],
    ingredientsDetailed: [
      { name: 'Cenoura Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha Integral', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata a cenoura com o ovo, misture a farinha e grelhe. Finalize com mel.',
    instructionsDetailed: {
      preparacao: ['Bata a cenoura e o ovo no liquidificador.', 'Misture a farinha integral.'],
      cozimento: ['Grelhe pequenas porções em frigideira untada.'],
      finalizacao: ['Sirva com um fio de mel por cima.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar a massa pronta por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 165, protein: 8, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t15',
    name: 'Iogurte com Granola Caseira de Frutas Secas',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Iogurte Natural', 'Aveia em Flocos', 'Uva Passa', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Aveia em Flocos', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Uva Passa', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' },
      { name: 'Azeite', baseAmount: 2, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Toste a aveia com azeite e passas na frigideira e coloque sobre o iogurte.',
    instructionsDetailed: {
      preparacao: ['Misture a aveia com as passas.'],
      cozimento: ['Leve à frigideira com gotas de azeite e mexa até a aveia dourar levemente.'],
      finalizacao: ['Espere esfriar para ficar crocante e coloque sobre o iogurte.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Granola dura 7 dias em pote fechado.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 195, protein: 8, carbs: 28, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t16',
    name: 'Bolinho de Espinafre e Queijo',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Espinafre', 'Ricota', 'Ovo', 'Farinha de Rosca Integral'],
    ingredientsDetailed: [
      { name: 'Espinafre Cozido e Espremido', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ricota Amassada', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Rosca', baseAmount: 20, unit: 'g', householdMeasure: 'Para dar liga' }
    ],
    instructions: 'Misture tudo, faça bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Pique bem o espinafre.', 'Misture com ricota, ovo e farinha até conseguir modelar.'],
      cozimento: ['Faça bolinhas pequenas.', 'Asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 10, carbs: 12, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t17',
    name: 'Creme de Manga com Coco',
    age: '6 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Manga Palmer', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Leite de Coco Caseiro', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata a manga com o leite de coco até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no liquidificador ou mixer e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 1, carbs: 24, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t18',
    name: 'Pão de Queijo de Frigideira com Cenoura',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Ovo', 'Tapioca', 'Queijo Minas Padrão', 'Cenoura Ralada'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Goma de Tapioca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Queijo Minas', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia picada' },
      { name: 'Cenoura Ralada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture tudo e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Bata o ovo com a tapioca.', 'Misture o queijo e a cenoura.'],
      cozimento: ['Grelhe em frigideira antiaderente dos dois lados.'],
      finalizacao: ['Corte em tiras ou triângulos.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 9, carbs: 14, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_t19',
    name: 'Muffin de Banana e Mirtilo',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Ovo', 'Farinha de Aveia', 'Mirtilos'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Mirtilos', baseAmount: 20, unit: 'g', householdMeasure: 'Pequena porção' }
    ],
    instructions: 'Misture banana, ovo e aveia, coloque nas formas e adicione mirtilos.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e misture com o ovo e a aveia.'],
      cozimento: ['Coloque em forminhas de muffin.', 'Adicione 3 mirtilos em cada bolinho.', 'Asse a 180°C por 20 min.'],
      finalizacao: ['Deixe esfriar e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 8, carbs: 32, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t20',
    name: 'Creme de Abacate com Limão e Mel',
    age: '1-3 anos (Mel apenas > 1 ano)',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Abacate', 'Limão', 'Mel'],
    ingredientsDetailed: [
      { name: 'Abacate Maduro', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Suco de Limão', baseAmount: 5, unit: 'ml', householdMeasure: 'Algumas gotas' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Amasse o abacate com o limão e o mel.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse bem com um garfo e misture o limão e o mel. Sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 2, carbs: 14, fats: 14 },
    isPremium: false
  },
  {
    id: 'cb_t21',
    name: 'Biscoito de Aveia e Maçã (Sem Açúcar)',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Aveia em Flocos', 'Maçã Ralada', 'Canela'],
    ingredientsDetailed: [
      { name: 'Aveia em Flocos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Maçã Ralada', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: '1 pitada' }
    ],
    instructions: 'Misture a aveia com a maçã e canela, faça discos e asse.',
    instructionsDetailed: {
      preparacao: ['Misture a maçã ralada (com casca) com a aveia e canela até formar uma massa pegajosa.'],
      cozimento: ['Faça pequenos discos em uma assadeira untada.', 'Asse a 180°C por 15 min.'],
      finalizacao: ['Deixe esfriar para firmar.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 4, carbs: 30, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_t22',
    name: 'Smoothie de Morango e Banana',
    age: '8 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Morango', 'Banana', 'Água ou Leite'],
    ingredientsDetailed: [
      { name: 'Morango', baseAmount: 80, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Água/Leite', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos e descasque a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo e sirva em um copo com canudo.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar em formas de picolé.',
    canFreeze: true,
    nutrition: { calories: 95, protein: 2, carbs: 20, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_t23',
    name: 'Pãozinho de Mandioca e Chia',
    age: '1-3 anos',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Mandioca Cozida', 'Polvilho Doce', 'Chia', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Mandioca Amassada', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Polvilho Doce', baseAmount: 80, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Misture tudo, faça bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Misture a mandioca morna com o polvilho, chia e azeite.', 'Amasse até ficar liso.'],
      cozimento: ['Faça bolinhas.', 'Asse a 200°C por 20 min.'],
      finalizacao: ['Sirva quentinho.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Pote fechado por 24h.',
    freezingTips: 'Pode congelar cru por 60 dias.',
    canFreeze: true,
    nutrition: { calories: 260, protein: 2, carbs: 52, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_t24',
    name: 'Creme de Pêra com Canela',
    age: '6 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Pêra', 'Água', 'Canela'],
    ingredientsDetailed: [
      { name: 'Pêra Williams', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Água', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: '1 pitada' }
    ],
    instructions: 'Cozinhe a pêra com água e canela e amasse.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique a pêra.'],
      cozimento: ['Leve ao fogo com a água e canela.', 'Cozinhe até ficar bem macia.'],
      finalizacao: ['Amasse com um garfo ou bata no mixer para um creme liso.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 85, protein: 0.5, carbs: 22, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t25',
    name: 'Bolinho de Chuva de Aveia (Assado)',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Aveia', 'Banana', 'Ovo', 'Canela'],
    ingredientsDetailed: [
      { name: 'Farinha de Aveia', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Banana Amassada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture tudo e asse em forminhas pequenas.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana.', 'Misture com aveia, ovo e canela.'],
      cozimento: ['Asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 6, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t26',
    name: 'Vitamina de Abacate e Cacau',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Abacate', 'Cacau em Pó', 'Leite'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cacau 100%', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Leite', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 4, carbs: 12, fats: 12 },
    isPremium: false
  },
  {
    id: 'cb_t27',
    name: 'Pão de Queijo de Mandioquinha',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Mandioquinha', 'Polvilho', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Mandioquinha Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture tudo, faça bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a mandioquinha.', 'Misture com polvilho e queijo.'],
      cozimento: ['Asse a 180°C por 20 min.'],
      finalizacao: ['Sirva quente.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 4, carbs: 35, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_t28',
    name: 'Muffin de Maçã e Canela',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Maçã', 'Farinha Integral', 'Ovo', 'Canela'],
    ingredientsDetailed: [
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Farinha de Trigo Integral', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture tudo e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã.'],
      cozimento: ['Misture com os outros ingredientes e asse a 180°C por 20 min.'],
      finalizacao: ['Deixe esfriar.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 6, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t29',
    name: 'Iogurte com Manga e Chia',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Iogurte', 'Manga', 'Chia'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Manga Picada', baseAmount: 50, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture a manga e a chia no iogurte.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 7, carbs: 20, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t30',
    name: 'Smoothie de Frutas Vermelhas',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Frutas Vermelhas', 'Iogurte', 'Mel'],
    ingredientsDetailed: [
      { name: 'Frutas Vermelhas', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Lave as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 5, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t31',
    name: 'Biscoito de Polvilho Caseiro',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Polvilho Doce', 'Ovo', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Polvilho Doce', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Azeite', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture tudo, faça formatos e asse.',
    instructionsDetailed: {
      preparacao: ['Misture os ingredientes até formar uma massa.'],
      cozimento: ['Faça palitinhos e asse a 180°C por 15 min.'],
      finalizacao: ['Deixe esfriar para ficar crocante.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 5 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 200, protein: 4, carbs: 40, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_t32',
    name: 'Creme de Milho com Coco',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Milho', 'Leite de Coco', 'Coco Ralado'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite de Coco', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' },
      { name: 'Coco Ralado', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o milho batido com leite de coco.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com o leite de coco.'],
      cozimento: ['Leve ao fogo até engrossar.'],
      finalizacao: ['Adicione o coco ralado por cima.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 2, carbs: 18, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_t33',
    name: 'Panqueca de Banana e Cacau',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Ovo', 'Cacau em Pó'],
    ingredientsDetailed: [
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Cacau 100%', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture tudo e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana.', 'Misture com ovo e cacau.'],
      cozimento: ['Grelhe na frigideira antiaderente.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 7, carbs: 15, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t34',
    name: 'Muffin de Espinafre e Ricota',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Espinafre', 'Ricota', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Espinafre Picado', baseAmount: 30, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ricota', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Misture tudo e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre.'],
      cozimento: ['Misture com ricota e ovo e asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 10, carbs: 4, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_t35',
    name: 'Vitamina de Morango e Aveia',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Morango', 'Aveia', 'Leite'],
    ingredientsDetailed: [
      { name: 'Morango', baseAmount: 50, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Farinha de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Leite', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 4, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t36',
    name: 'Pão de Aveia e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Aveia', 'Mel', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Farinha de Aveia', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Misture tudo e asse em formato de pãozinho.',
    instructionsDetailed: {
      preparacao: ['Misture os ingredientes.'],
      cozimento: ['Asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 7, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t37',
    name: 'Iogurte com Granola e Frutas',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Iogurte', 'Granola', 'Frutas Picadas'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Granola', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frutas Picadas', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture a granola e as frutas no iogurte.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 7, carbs: 25, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t38',
    name: 'Smoothie de Manga e Maracujá',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Manga', 'Maracujá', 'Água de Coco'],
    ingredientsDetailed: [
      { name: 'Manga', baseAmount: 50, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Polpa de Maracujá', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Água de Coco', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador e coe.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do maracujá.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata, coe e sirva gelado.']
    },
    image: '',
    prepTime: '8 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 90, protein: 1, carbs: 22, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t39',
    name: 'Biscoito de Aveia e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Aveia', 'Mel', 'Manteiga'],
    ingredientsDetailed: [
      { name: 'Aveia em Flocos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '2 colheres de chá' },
      { name: 'Manteiga', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Misture tudo, faça discos e asse.',
    instructionsDetailed: {
      preparacao: ['Misture os ingredientes.'],
      cozimento: ['Asse a 180°C por 12 min.'],
      finalizacao: ['Deixe esfriar para firmar.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Pote fechado por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 4, carbs: 30, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t40',
    name: 'Creme de Abacate com Limão',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Abacate', 'Limão', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Limão', baseAmount: 2, unit: 'ml', householdMeasure: 'Gotas' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Amasse o abacate com limão e azeite.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse bem e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 2, carbs: 6, fats: 14 },
    isPremium: false
  },
  {
    id: 'cb_t41',
    name: 'Panqueca de Maçã e Canela',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Maçã', 'Ovo', 'Aveia', 'Canela'],
    ingredientsDetailed: [
      { name: 'Maçã Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture tudo e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã.'],
      cozimento: ['Misture com ovo, aveia e canela e grelhe.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 7, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t42',
    name: 'Muffin de Cenoura e Chocolate (70%)',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Cenoura', 'Ovo', 'Farinha Integral', 'Chocolate 70%'],
    ingredientsDetailed: [
      { name: 'Cenoura Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Trigo Integral', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Chocolate 70% Picado', baseAmount: 10, unit: 'g', householdMeasure: 'Pequena porção' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Rale a cenoura.'],
      cozimento: ['Misture tudo e asse a 180°C por 20 min.'],
      finalizacao: ['Deixe esfriar.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 6, carbs: 25, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_t43',
    name: 'Vitamina de Banana e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Mel', 'Leite'],
    ingredientsDetailed: [
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' },
      { name: 'Leite', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Descasque a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 4, carbs: 25, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t44',
    name: 'Pão de Queijo de Batata Baroa',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Batata Baroa', 'Polvilho', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Batata Baroa Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture tudo, faça bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata baroa.'],
      cozimento: ['Misture com polvilho e queijo e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva quente.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 4, carbs: 35, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_t45',
    name: 'Iogurte com Chia e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Iogurte', 'Chia', 'Mel'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture a chia e o mel no iogurte.',
    instructionsDetailed: {
      preparacao: ['Coloque o iogurte em uma tigela.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 7, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t46',
    name: 'Smoothie de Frutas Amarelas e Iogurte',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Manga', 'Pêssego', 'Iogurte'],
    ingredientsDetailed: [
      { name: 'Manga', baseAmount: 50, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Pêssego', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 5, carbs: 20, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t47',
    name: 'Biscoito de Polvilho e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Polvilho Doce', 'Ovo', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Polvilho Doce', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture tudo, faça formatos e asse.',
    instructionsDetailed: {
      preparacao: ['Misture os ingredientes.'],
      cozimento: ['Asse a 180°C por 15 min.'],
      finalizacao: ['Deixe esfriar para ficar crocante.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 5 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 210, protein: 5, carbs: 40, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_t48',
    name: 'Creme de Manga e Hortelã',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Manga', 'Hortelã', 'Água'],
    ingredientsDetailed: [
      { name: 'Manga', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Hortelã', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' },
      { name: 'Água', baseAmount: 20, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Bata a manga com hortelã no mixer.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 80, protein: 1, carbs: 20, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t49',
    name: 'Panqueca de Beterraba e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Beterraba', 'Ovo', 'Aveia', 'Mel'],
    ingredientsDetailed: [
      { name: 'Beterraba Cozida', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata tudo e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Bata a beterraba com ovo e mel.'],
      cozimento: ['Misture a aveia e grelhe.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 8, carbs: 20, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t50',
    name: 'Vitamina de Mamão e Chia',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Mamão', 'Chia', 'Leite'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Leite', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 5, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t51',
    name: 'Bolinho de Chuva de Forno (Sem Açúcar)',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Ovo', 'Farinha de Trigo', 'Canela'],
    ingredientsDetailed: [
      { name: 'Banana Madura', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Trigo', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture a banana amassada com o ovo e a farinha, e asse em colheradas.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e bata com o ovo.', 'Misture a farinha até formar uma massa cremosa.'],
      cozimento: ['Coloque colheradas em uma forma untada e asse a 180°C por 15 min.'],
      finalizacao: ['Polvilhe canela e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 5, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t52',
    name: 'Espetinho de Queijo e Tomate Cereja',
    age: '2 anos+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Queijo Branco', 'Tomate Cereja', 'Manjericão'],
    ingredientsDetailed: [
      { name: 'Queijo Minas Frescal', baseAmount: 30, unit: 'g', householdMeasure: '3 cubos pequenos' },
      { name: 'Tomate Cereja', baseAmount: 30, unit: 'g', householdMeasure: '3 unidades' },
      { name: 'Manjericão', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' }
    ],
    instructions: 'Intercale cubos de queijo, tomates e folhas de manjericão em palitos.',
    instructionsDetailed: {
      preparacao: ['Lave os tomates e o manjericão.', 'Corte o queijo em cubos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Monte os espetinhos e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 6, carbs: 2, fats: 7 },
    isPremium: true
  },
  {
    id: 'cb_t53',
    name: 'Iogurte com Maçã e Canela',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Iogurte Natural', 'Maçã', 'Canela'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' },
      { name: 'Maçã Cozida e Picada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture a maçã cozida e a canela ao iogurte.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a maçã até amaciar e pique.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture tudo e sirva fresco.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 5, carbs: 20, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t54',
    name: 'Pão de Queijo de Batata Doce',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Batata Doce', 'Polvilho Doce', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Batata Doce Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Parmesão Ralado', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture a batata amassada com polvilho e queijo, faça bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata doce.', 'Misture com polvilho e queijo até formar uma massa.'],
      cozimento: ['Faça bolinhas e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 6, carbs: 30, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_t55',
    name: 'Smoothie de Manga e Coco',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Manga', 'Leite de Coco', 'Iogurte'],
    ingredientsDetailed: [
      { name: 'Manga Picada', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Leite de Coco', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' },
      { name: 'Iogurte Natural', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata tudo no liquidificador até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 3, carbs: 22, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t56',
    name: 'Biscoito de Aveia e Mel',
    age: '2 anos+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Aveia', 'Mel', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Farinha de Aveia', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Misture os ingredientes, faça discos e asse.',
    instructionsDetailed: {
      preparacao: ['Misture a aveia, o mel e o ovo até formar uma massa.'],
      cozimento: ['Modele discos e asse a 180°C por 12 min.'],
      finalizacao: ['Deixe esfriar para ficar crocante.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Pote fechado por 5 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 6, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t57',
    name: 'Creme de Abacate com Cacau',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Abacate', 'Cacau em Pó', 'Mel'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cacau 100%', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata o abacate com o cacau e o mel no mixer.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata até ficar um creme homogêneo e sirva frio.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 2, carbs: 12, fats: 12 },
    isPremium: true
  },
  {
    id: 'cb_t58',
    name: 'Tapioca com Banana e Canela',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Goma de Tapioca', 'Banana', 'Canela'],
    ingredientsDetailed: [
      { name: 'Goma de Tapioca', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Banana Fatiada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Prepare a tapioca e recheie com banana e canela.',
    instructionsDetailed: {
      preparacao: ['Fatie a banana.'],
      cozimento: ['Prepare a tapioca na frigideira.', 'Adicione a banana e a canela.'],
      finalizacao: ['Dobre e sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 1, carbs: 38, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t59',
    name: 'Muffin de Maçã e Canela',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Maçã', 'Ovo', 'Aveia', 'Canela'],
    ingredientsDetailed: [
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture tudo e asse em forminhas de muffin.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã e misture com os outros ingredientes.'],
      cozimento: ['Asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno ou frio.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 6, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t60',
    name: 'Picolé de Melancia e Limão',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Melancia', 'Limão'],
    ingredientsDetailed: [
      { name: 'Melancia', baseAmount: 200, unit: 'g', householdMeasure: '1 fatia grande' },
      { name: 'Suco de Limão', baseAmount: 5, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Bata a melancia com o limão e congele em forminhas.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes da melancia.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata, coloque em formas de picolé e congele.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Congelador por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 60, protein: 1, carbs: 15, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t61',
    name: 'Cuscuz de Milho com Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Flocão de Milho', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Flocão de Milho', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Queijo Muçarela Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Prepare o cuscuz no vapor e misture o queijo no final.',
    instructionsDetailed: {
      preparacao: ['Hidrate o milho com água.'],
      cozimento: ['Cozinhe no vapor por 10 min.'],
      finalizacao: ['Misture o queijo enquanto estiver quente e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 7, carbs: 28, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t62',
    name: 'Vitamina de Morango e Banana',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Morango', 'Banana', 'Leite'],
    ingredientsDetailed: [
      { name: 'Morangos', baseAmount: 50, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Leite', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos e pique a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 5, carbs: 25, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_t63',
    name: 'Pãozinho de Mandioquinha e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Mandioquinha', 'Polvilho', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Mandioquinha Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Parmesão', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture a mandioquinha com polvilho e queijo, asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a mandioquinha e misture com os outros ingredientes.'],
      cozimento: ['Faça bolinhas e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 4, carbs: 35, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_t64',
    name: 'Creme de Papaia com Iogurte',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Mamão Papaia', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata o mamão com o iogurte no mixer.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata até ficar cremoso e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 4, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t65',
    name: 'Bolinho de Banana e Coco',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Coco Ralado', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Banana Madura', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Coco Ralado sem Açúcar', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Misture a banana amassada com o coco e o ovo, e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana e misture com o coco e o ovo.'],
      cozimento: ['Asse em forminhas a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 6, carbs: 20, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_t66',
    name: 'Tapioca com Queijo e Tomate',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Goma de Tapioca', 'Queijo', 'Tomate'],
    ingredientsDetailed: [
      { name: 'Goma de Tapioca', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Queijo Muçarela', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia' },
      { name: 'Tomate Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Prepare a tapioca e recheie com queijo e tomate.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate.'],
      cozimento: ['Prepare a tapioca na frigideira.', 'Adicione o queijo e o tomate.'],
      finalizacao: ['Dobre e sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 6, carbs: 25, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t67',
    name: 'Mingau de Aveia com Banana',
    age: '6 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Aveia', 'Banana', 'Água'],
    ingredientsDetailed: [
      { name: 'Flocos de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Banana Amassada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Água', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Cozinhe a aveia com água e misture a banana no final.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana.'],
      cozimento: ['Leve a aveia e a água ao fogo mexendo até engrossar.'],
      finalizacao: ['Misture a banana e sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 4, carbs: 25, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_t68',
    name: 'Panqueca de Maçã',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Ovo', 'Maçã', 'Aveia'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o ovo, misture a maçã e a aveia, e grelhe.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã.'],
      cozimento: ['Misture tudo e grelhe na frigideira antiaderente.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 7, carbs: 18, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_t69',
    name: 'Iogurte com Pêra e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Iogurte Natural', 'Pêra', 'Mel'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' },
      { name: 'Pêra Picada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture a pêra picada e o mel ao iogurte.',
    instructionsDetailed: {
      preparacao: ['Pique a pêra.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture tudo e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 5, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t70',
    name: 'Biscoito de Polvilho e Mandioca',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Polvilho Doce', 'Mandioca Cozida', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Polvilho Doce', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Mandioca Amassada', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Azeite', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture a mandioca com polvilho e azeite, asse.',
    instructionsDetailed: {
      preparacao: ['Misture os ingredientes até formar uma massa.'],
      cozimento: ['Modele palitos e asse a 180°C por 15 min.'],
      finalizacao: ['Deixe esfriar para ficar crocante.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 3 dias.',
    freezingTips: 'Pode congelar cru.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 1, carbs: 38, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t71',
    name: 'Creme de Manga com Chia',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Manga', 'Chia'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata a manga no mixer e misture a chia.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata a manga e misture a chia. Deixe descansar por 5 min.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 90, protein: 2, carbs: 18, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_t72',
    name: 'Bolinho de Espinafre e Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Espinafre', 'Queijo', 'Ovo', 'Farinha de Aveia'],
    ingredientsDetailed: [
      { name: 'Espinafre Cozido e Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Queijo Ralado', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture tudo e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Misture todos os ingredientes até formar uma massa cremosa.'],
      cozimento: ['Coloque em forminhas e asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 10, carbs: 12, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_t73',
    name: 'Vitamina de Abacate e Mel',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Abacate', 'Mel', 'Leite'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' },
      { name: 'Leite', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' }
    ],
    instructions: 'Bata tudo no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 5, carbs: 15, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_t74',
    name: 'Pãozinho de Milho',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Milho Verde', 'Ovo', 'Fubá'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Fubá', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata o milho com o ovo, misture o fubá e asse.',
    instructionsDetailed: {
      preparacao: ['Bata o milho e o ovo no liquidificador.', 'Misture o fubá.'],
      cozimento: ['Asse em forminhas a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 6, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t75',
    name: 'Crepioca de Queijo',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Ovo', 'Tapioca', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Goma de Tapioca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Bata o ovo com a tapioca, grelhe e recheie com queijo.',
    instructionsDetailed: {
      preparacao: ['Misture o ovo e a tapioca.'],
      cozimento: ['Grelhe na frigideira.', 'Adicione o queijo e dobre.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 8, carbs: 12, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_t76',
    name: 'Espetinho de Frutas com Coco',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Uva', 'Morango', 'Manga', 'Coco Ralado'],
    ingredientsDetailed: [
      { name: 'Uva sem Semente', baseAmount: 30, unit: 'g', householdMeasure: '5 unidades' },
      { name: 'Morango', baseAmount: 30, unit: 'g', householdMeasure: '2 unidades' },
      { name: 'Manga em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Coco Ralado sem Açúcar', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Monte as frutas em um palito e polvilhe coco.',
    instructionsDetailed: {
      preparacao: ['Lave as frutas e corte a manga em cubos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Monte os espetinhos alternando as frutas e polvilhe o coco por cima.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 75, protein: 1, carbs: 15, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_t77',
    name: 'Biscoitinho de Aveia e Maçã',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Aveia em Flocos', 'Maçã', 'Canela'],
    ingredientsDetailed: [
      { name: 'Aveia em Flocos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Maçã Ralada', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture a aveia com a maçã e canela, molde biscoitos e asse.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã no ralo fino.'],
      cozimento: ['Misture com a aveia e canela até formar uma massa.', 'Molde pequenos discos e asse a 180°C por 15 min.'],
      finalizacao: ['Deixe esfriar para ficar crocante por fora.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 3, carbs: 24, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_t78',
    name: 'Iogurte com Farelo de Aveia e Kiwi',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Iogurte Natural', 'Farelo de Aveia', 'Kiwi'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 120, unit: 'g', householdMeasure: '1 pote pequeno' },
      { name: 'Farelo de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Kiwi Picado', baseAmount: 50, unit: 'g', householdMeasure: '1 unidade pequena' }
    ],
    instructions: 'Misture a aveia no iogurte e adicione o kiwi.',
    instructionsDetailed: {
      preparacao: ['Pique o kiwi em cubinhos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture a aveia no iogurte e cubra com o kiwi fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 6, carbs: 16, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t79',
    name: 'Pãozinho de Mandioca',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Mandioca', 'Polvilho Doce', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Mandioca Cozida e Amassada', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Azeite Extra Virgem', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Misture os ingredientes, molde bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a mandioca ainda quente.'],
      cozimento: ['Misture com o polvilho e o azeite até soltar das mãos.', 'Molde bolinhas e asse a 200°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Pote fechado por 24h.',
    freezingTips: 'Pode congelar cru por 60 dias.',
    canFreeze: true,
    nutrition: { calories: 230, protein: 1, carbs: 48, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t80',
    name: 'Vitamina de Melão e Hortelã',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Melão', 'Hortelã', 'Água de Coco'],
    ingredientsDetailed: [
      { name: 'Melão', baseAmount: 150, unit: 'g', householdMeasure: '1 fatia grande' },
      { name: 'Hortelã', baseAmount: 1, unit: 'g', householdMeasure: '2 folhas' },
      { name: 'Água de Coco', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Bata tudo no liquidificador e sirva.',
    instructionsDetailed: {
      preparacao: ['Retire a casca e as sementes do melão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata todos os ingredientes e sirva bem geladinho.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 65, protein: 1, carbs: 15, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_t81',
    name: 'Muffin de Banana e Cacau',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Ovo', 'Farinha de Aveia', 'Cacau em Pó'],
    ingredientsDetailed: [
      { name: 'Banana Madura', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cacau em Pó 100%', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana.'],
      cozimento: ['Misture com o ovo, aveia e cacau.', 'Asse em forminhas de silicone por 20 min a 180°C.'],
      finalizacao: ['Deixe esfriar e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Pote fechado por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 185, protein: 8, carbs: 28, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t82',
    name: 'Creme de Abacate com Limão',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Abacate', 'Limão'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 80, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Suco de Limão', baseAmount: 5, unit: 'ml', householdMeasure: 'Algumas gotas' }
    ],
    instructions: 'Amasse o abacate e adicione gotas de limão.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse com um garfo e adicione o limão para não escurecer.']
    },
    image: '',
    prepTime: '3 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 1.5, carbs: 6, fats: 12 },
    isPremium: false
  },
  {
    id: 'cb_t83',
    name: 'Panqueca de Cenoura e Mel',
    age: '2 anos+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Cenoura', 'Ovo', 'Farinha de Trigo', 'Mel'],
    ingredientsDetailed: [
      { name: 'Cenoura Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Trigo', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Misture os ingredientes e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Rale a cenoura bem fininho.'],
      cozimento: ['Misture com o ovo e farinha.', 'Grelhe dos dois lados em frigideira antiaderente.'],
      finalizacao: ['Finalize com um fio de mel por cima.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 7, carbs: 20, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t84',
    name: 'Gelatina Natural de Uva',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Suco de Uva Integral', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Suco de Uva Integral', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Gelatina em Pó sem Sabor', baseAmount: 6, unit: 'g', householdMeasure: '1/2 sachê' }
    ],
    instructions: 'Hidrate a gelatina e misture ao suco de uva.',
    instructionsDetailed: {
      preparacao: ['Hidrate a gelatina conforme a embalagem.'],
      cozimento: ['Aqueça levemente o suco de uva e misture a gelatina hidratada.'],
      finalizacao: ['Coloque em potinhos e leve à geladeira até firmar.']
    },
    image: '',
    prepTime: '10 min + geladeira',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 5, carbs: 30, fats: 0 },
    isPremium: false
  },
  {
    id: 'cb_t85',
    name: 'Picolé de Manga e Iogurte',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Manga', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' }
    ],
    instructions: 'Bata a manga com o iogurte e congele em formas de picolé.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no liquidificador, coloque em formas de picolé e leve ao freezer.']
    },
    image: '',
    prepTime: '10 min + freezer',
    storageInfo: 'Freezer por 30 dias.',
    freezingTips: 'Já é um produto congelado.',
    canFreeze: true,
    nutrition: { calories: 135, protein: 5, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t86',
    name: 'Bolinho de Chuva Assado de Banana',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Ovo', 'Farinha de Trigo', 'Canela'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Trigo', baseAmount: 50, unit: 'g', householdMeasure: '4 colheres de sopa' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture os ingredientes e asse em pequenas porções.',
    instructionsDetailed: {
      preparacao: ['Amasse a banana.'],
      cozimento: ['Misture com o ovo, farinha e canela.', 'Coloque colheradas em uma assadeira untada e asse por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Pote fechado por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 220, protein: 8, carbs: 42, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t87',
    name: 'Creme de Milho Doce',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Milho Verde', 'Leite', 'Canela'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 100, unit: 'g', householdMeasure: '1 espiga' },
      { name: 'Leite Materno/Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Bata o milho com leite, coe e cozinhe até engrossar.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com o leite no liquidificador e peneire.'],
      cozimento: ['Leve ao fogo mexendo sempre até engrossar.'],
      finalizacao: ['Polvilhe canela e sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 5, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t88',
    name: 'Tapioca com Banana e Canela',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Goma de Tapioca', 'Banana', 'Canela'],
    ingredientsDetailed: [
      { name: 'Goma de Tapioca', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Banana em Rodelas', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Faça a tapioca e recheie com banana e canela.',
    instructionsDetailed: {
      preparacao: ['Corte a banana em rodelas.'],
      cozimento: ['Faça o disco de tapioca na frigideira.', 'Recheie com a banana e polvilhe canela.'],
      finalizacao: ['Dobre e sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 1, carbs: 34, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t89',
    name: 'Muffin de Espinafre e Ricota',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Espinafre', 'Ricota', 'Ovo', 'Farinha de Arroz'],
    ingredientsDetailed: [
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ricota Amassada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Arroz', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Misture os ingredientes e asse em forminhas.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre bem fininho.'],
      cozimento: ['Misture com o ovo, ricota e farinha.', 'Asse em forminhas de silicone por 20 min.'],
      finalizacao: ['Deixe esfriar e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 9, carbs: 12, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_t90',
    name: 'Smoothie de Pêra e Couve',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Pêra', 'Couve', 'Água'],
    ingredientsDetailed: [
      { name: 'Pêra Williams', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Couve', baseAmount: 10, unit: 'g', householdMeasure: '1/2 folha sem talo' },
      { name: 'Água', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Bata tudo no liquidificador e sirva.',
    instructionsDetailed: {
      preparacao: ['Retire o talo da couve.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata todos os ingredientes e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 70, protein: 1, carbs: 16, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_t91',
    name: 'Pão de Queijo de Batata Doce',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Batata Doce', 'Polvilho Doce', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Batata Doce Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Polvilho Doce', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Minas Ralado', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture os ingredientes, molde bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata doce ainda quente.'],
      cozimento: ['Misture com o polvilho e o queijo.', 'Molde bolinhas e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Pote fechado por 24h.',
    freezingTips: 'Pode congelar cru por 60 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 5, carbs: 38, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t92',
    name: 'Creme de Maçã com Chia',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Maçã', 'Chia'],
    ingredientsDetailed: [
      { name: 'Maçã', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Semente de Chia', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a maçã, amasse e misture a chia.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique a maçã.'],
      cozimento: ['Cozinhe a maçã com um pouco de água até amolecer.', 'Amasse com um garfo.'],
      finalizacao: ['Misture a chia e deixe descansar por 10 min antes de servir.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 1, carbs: 18, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_t93',
    name: 'Bolinho de Cenoura de Caneca',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Cenoura', 'Ovo', 'Farinha de Aveia'],
    ingredientsDetailed: [
      { name: 'Cenoura Ralada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Misture os ingredientes em uma caneca e asse no micro-ondas.',
    instructionsDetailed: {
      preparacao: ['Rale a cenoura bem fino.'],
      cozimento: ['Bata o ovo, misture a cenoura e a aveia.', 'Coloque em uma caneca e asse no micro-ondas por 2 min.'],
      finalizacao: ['Desenforme e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 135, protein: 8, carbs: 14, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t94',
    name: 'Vitamina de Morango e Iogurte',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Morango', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Morango', baseAmount: 60, unit: 'g', householdMeasure: '5 unidades' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' }
    ],
    instructions: 'Bata os morangos com o iogurte no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo até ficar homogêneo e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 5, carbs: 12, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_t95',
    name: 'Panqueca de Espinafre',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Ovo', 'Farinha de Trigo', 'Espinafre'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Trigo', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Espinafre Cozido e Picado', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata os ingredientes e grelhe na frigideira.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre bem miúdo.'],
      cozimento: ['Bata o ovo com a farinha e o espinafre.', 'Grelhe dos dois lados.'],
      finalizacao: ['Sirva em tiras.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 125, protein: 8, carbs: 14, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_t96',
    name: 'Mingau de Arroz com Maçã',
    age: '8 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Arroz Cozido', 'Leite', 'Maçã'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite Materno/Fórmula', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' },
      { name: 'Maçã Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata o arroz com leite e aqueça com a maçã.',
    instructionsDetailed: {
      preparacao: ['Bata o arroz com o leite no liquidificador.'],
      cozimento: ['Leve ao fogo com a maçã ralada e mexa até engrossar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 145, protein: 4, carbs: 26, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_t97',
    name: 'Waffle de Cenoura',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Cenoura', 'Ovo', 'Farinha de Aveia'],
    ingredientsDetailed: [
      { name: 'Cenoura Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture os ingredientes e asse na máquina de waffle.',
    instructionsDetailed: {
      preparacao: ['Rale a cenoura.'],
      cozimento: ['Misture com o ovo e aveia.', 'Asse na máquina de waffle untada.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 8, carbs: 18, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_t98',
    name: 'Creme de Banana com Coco',
    age: '6 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Banana', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Leite de Coco', baseAmount: 20, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Amasse a banana e misture o leite de coco.',
    instructionsDetailed: {
      preparacao: ['Amasse bem a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture o leite de coco até ficar cremoso.']
    },
    image: '',
    prepTime: '3 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 1, carbs: 25, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_t99',
    name: 'Omelete de Abobrinha',
    age: '9 meses+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Ovo', 'Abobrinha'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Abobrinha Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata o ovo com a abobrinha e grelhe.',
    instructionsDetailed: {
      preparacao: ['Rale a abobrinha.'],
      cozimento: ['Bata o ovo e misture a abobrinha.', 'Grelhe na frigideira antiaderente.'],
      finalizacao: ['Sirva em tiras.']
    },
    image: '',
    prepTime: '8 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 95, protein: 7, carbs: 2, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_t100',
    name: 'Pãozinho de Batata Inglesa',
    age: '1 ano+',
    category: 'CAFÉ DA TARDE',
    ingredients: ['Batata Inglesa', 'Polvilho Doce', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Batata Cozida e Amassada', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Polvilho Doce', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Misture os ingredientes, molde bolinhas e asse.',
    instructionsDetailed: {
      preparacao: ['Amasse a batata cozida.'],
      cozimento: ['Misture com o polvilho e azeite.', 'Molde bolinhas e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Pote fechado por 24h.',
    freezingTips: 'Pode congelar cru por 60 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 2, carbs: 38, fats: 3 },
    isPremium: false
  },
  // JANTAR (24 novas)
  {
    id: 'cb_d1',
    name: 'Sopa de Letrinhas com Legumes e Carne',
    age: '1-3 anos',
    category: 'JANTAR',
    ingredients: ['Macarrão de Letrinhas', 'Carne Moída', 'Cenoura', 'Chuchu'],
    ingredientsDetailed: [
      { name: 'Macarrão de Letrinhas', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Moída', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cenoura em Cubos', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Chuchu em Cubos', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a carne, adicione legumes e macarrão e cozinhe com bastante caldo.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes bem pequenos.'],
      cozimento: ['Refogue a carne.', 'Adicione água e legumes e cozinhe por 10 min.', 'Coloque o macarrão e cozinhe até ficar macio.'],
      finalizacao: ['Sirva com o caldo morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 10, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d2',
    name: 'Creme de Abóbora com Gengibre e Frango',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Abóbora Cabotiá', 'Gengibre', 'Frango Desfiado', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Abóbora', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Gengibre Ralado', baseAmount: 1, unit: 'g', householdMeasure: '1 pitada' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a abóbora com cebola e gengibre, bata e misture o frango.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora e rale o gengibre.'],
      cozimento: ['Cozinhe a abóbora com cebola e gengibre em água.', 'Bata no liquidificador até virar creme.'],
      finalizacao: ['Misture o frango desfiado e sirva. O gengibre ajuda na digestão noturna.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 145, protein: 12, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d3',
    name: 'Omelete de Espinafre e Milho',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Ovo', 'Espinafre', 'Milho Verde', 'Ricota'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Milho Verde', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ricota', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Bata o ovo, misture os ingredientes e grelhe.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre.', 'Bata o ovo.'],
      cozimento: ['Misture tudo e leve à frigideira untada.', 'Cozinhe em fogo baixo e vire.'],
      finalizacao: ['Corte em pedaços pequenos.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 9, carbs: 6, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_d4',
    name: 'Arroz Integral com Lentilha e Abobrinha',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Arroz Integral', 'Lentilha', 'Abobrinha', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Arroz Integral Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Lentilha Cozida', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abobrinha Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Refogue a abobrinha e misture ao arroz e lentilha.',
    instructionsDetailed: {
      preparacao: ['Rale a abobrinha.'],
      cozimento: ['Refogue a abobrinha no azeite rapidamente.', 'Misture o arroz e a lentilha já cozidos.'],
      finalizacao: ['Sirva morno. Refeição leve para a noite.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 165, protein: 7, carbs: 30, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d5',
    name: 'Purê de Batata Baroa com Iscas de Frango',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Batata Baroa', 'Frango', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Batata Baroa', baseAmount: 120, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Peito de Frango', baseAmount: 50, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Faça o purê de baroa e sirva com o frango picadinho e refogado.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a batata baroa.', 'Pique o frango bem pequeno.'],
      cozimento: ['Amasse a batata com um pouco da água do cozimento.', 'Refogue o frango com cebola.'],
      finalizacao: ['Sirva o purê com o frango por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 14, carbs: 32, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d6',
    name: 'Sopa de Mandioca com Carne Desfiada',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Mandioca', 'Carne Bovina (Músculo)', 'Alho', 'Salsinha'],
    ingredientsDetailed: [
      { name: 'Mandioca', baseAmount: 100, unit: 'g', householdMeasure: '1 pedaço médio' },
      { name: 'Carne Cozida e Desfiada', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Alho', baseAmount: 2, unit: 'g', householdMeasure: '1/2 dente' },
      { name: 'Salsinha', baseAmount: 2, unit: 'g', householdMeasure: 'A gosto' }
    ],
    instructions: 'Bata a mandioca com água, misture a carne e temperos e ferva.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a mandioca e a carne na pressão.', 'Desfie a carne.'],
      cozimento: ['Bata a mandioca no liquidificador com a água do cozimento.', 'Leve ao fogo com a carne e o alho refogado.'],
      finalizacao: ['Finalize com salsinha e sirva cremosa.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 12, carbs: 30, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d7',
    name: 'Macarrão de Arroz com Molho de Abóbora',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Macarrão de Arroz', 'Abóbora Cabotiá', 'Leite de Coco', 'Frango'],
    ingredientsDetailed: [
      { name: 'Macarrão de Arroz', baseAmount: 40, unit: 'g', householdMeasure: 'Pequena porção' },
      { name: 'Purê de Abóbora', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite de Coco', baseAmount: 20, unit: 'ml', householdMeasure: '1 colher de sopa' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o macarrão e misture ao molho feito com abóbora e leite de coco.',
    instructionsDetailed: {
      preparacao: ['Cozinhe o macarrão.', 'Prepare o purê de abóbora.'],
      cozimento: ['Misture o purê com leite de coco e frango no fogo baixo.'],
      finalizacao: ['Envolva o macarrão no molho laranja e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar o molho.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 10, carbs: 26, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_d8',
    name: 'Polenta com Molho de Tomate e Ricota',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Fubá', 'Tomate', 'Ricota', 'Manjericão'],
    ingredientsDetailed: [
      { name: 'Fubá', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Tomate Pelado Caseiro', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ricota Amassada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Manjericão', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' }
    ],
    instructions: 'Faça a polenta e cubra com molho de tomate e ricota.',
    instructionsDetailed: {
      preparacao: ['Amasse a ricota.'],
      cozimento: ['Cozinhe o fubá em água até ficar cremoso.', 'Aqueça o molho de tomate com manjericão.'],
      finalizacao: ['Coloque a polenta, o molho e salpique a ricota por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 155, protein: 6, carbs: 24, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d9',
    name: 'Creme de Ervilha com Hortelã',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Ervilha Partida', 'Hortelã', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Ervilha Partida', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Hortelã Fresca', baseAmount: 1, unit: 'g', householdMeasure: '2 folhas' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Cozinhe a ervilha com cebola, bata com hortelã e finalize com azeite.',
    instructionsDetailed: {
      preparacao: ['Deixe a ervilha de molho.'],
      cozimento: ['Cozinhe a ervilha em água até ficar macia.', 'Bata no liquidificador com as folhas de hortelã.'],
      finalizacao: ['Volte ao fogo para aquecer e sirva com azeite.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 8, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d10',
    name: 'Risoto de Cenoura e Frango',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Cenoura', 'Frango Desfiado', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Arroz', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura Ralada', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o arroz com a cenoura e cebola e misture o frango no final.',
    instructionsDetailed: {
      preparacao: ['Rale a cenoura.', 'Desfie o frango.'],
      cozimento: ['Refogue cebola, arroz e cenoura.', 'Adicione água aos poucos mexendo sempre para soltar o amido e ficar cremoso.'],
      finalizacao: ['Misture o frango e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 175, protein: 11, carbs: 28, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d11',
    name: 'Sopa de Feijão com Macarrão e Legumes',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Feijão Batido', 'Macarrão Ave Maria', 'Cenoura', 'Batata'],
    ingredientsDetailed: [
      { name: 'Feijão Cozido e Batido', baseAmount: 100, unit: 'ml', householdMeasure: '1 concha' },
      { name: 'Macarrão Ave Maria', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cenoura Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe os legumes e macarrão no caldo de feijão batido.',
    instructionsDetailed: {
      preparacao: ['Bata o feijão no liquidificador e peneire.'],
      cozimento: ['Leve o caldo ao fogo com os legumes picados.', 'Quando estiverem macios, adicione o macarrão e cozinhe.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 8, carbs: 32, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d12',
    name: 'Purê de Inhame com Carne Moída',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Inhame', 'Carne Moída', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Inhame', baseAmount: 120, unit: 'g', householdMeasure: '2 unidades pequenas' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Faça o purê de inhame e sirva com a carne moída refogada.',
    instructionsDetailed: {
      preparacao: ['Cozinhe o inhame até ficar bem macio.'],
      cozimento: ['Amasse o inhame com um pouco de água ou leite materno.', 'Refogue a carne com cebola.'],
      finalizacao: ['Sirva o purê com a carne por cima. Inhame é excelente para a imunidade.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 195, protein: 12, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d13',
    name: 'Cuscuz Marroquino com Frango e Legumes',
    age: '1-3 anos',
    category: 'JANTAR',
    ingredients: ['Cuscuz Marroquino', 'Água Quente', 'Frango Desfiado', 'Abobrinha'],
    ingredientsDetailed: [
      { name: 'Cuscuz Marroquino', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Água Quente', baseAmount: 30, unit: 'ml', householdMeasure: 'Para hidratar' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Abobrinha em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Hidrate o cuscuz, refogue a abobrinha e frango e misture tudo.',
    instructionsDetailed: {
      preparacao: ['Coloque o cuscuz em uma tigela, cubra com água quente e tampe por 5 min.', 'Pique a abobrinha.'],
      cozimento: ['Refogue a abobrinha e o frango.'],
      finalizacao: ['Solte o cuscuz com um garfo e misture o refogado.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 10, carbs: 22, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_d14',
    name: 'Sopa de Mandioquinha com Couve',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Mandioquinha', 'Couve', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Mandioquinha', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Couve Picadinha', baseAmount: 10, unit: 'g', householdMeasure: '1/2 folha' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: 'Finalização' }
    ],
    instructions: 'Cozinhe a mandioquinha, bata e adicione a couve bem picadinha.',
    instructionsDetailed: {
      preparacao: ['Pique a couve em tiras muito finas e depois em pedacinhos.'],
      cozimento: ['Cozinhe a mandioquinha com cebola.', 'Bata no liquidificador.', 'Leve ao fogo novamente, adicione a couve e cozinhe por 2 min.'],
      finalizacao: ['Sirva com um fio de azeite.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 2, carbs: 26, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d15',
    name: 'Arroz com Brócolis e Omelete Picadinho',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Brócolis', 'Ovo', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Brócolis Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Misture o brócolis ao arroz e sirva com o omelete picado.',
    instructionsDetailed: {
      preparacao: ['Pique o brócolis bem miúdo.', 'Bata o ovo.'],
      cozimento: ['Faça o omelete na frigideira e pique em pedacinhos.', 'Misture o brócolis ao arroz quente.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar o arroz com brócolis.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 8, carbs: 22, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_d16',
    name: 'Creme de Milho com Frango Desfiado',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Milho Verde', 'Leite Materno ou Fórmula', 'Frango Desfiado'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Leite/Fórmula', baseAmount: 50, unit: 'ml', householdMeasure: 'Para bater' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o milho com o leite, coe, cozinhe até engrossar e misture o frango.',
    instructionsDetailed: {
      preparacao: ['Debulhe o milho.', 'Cozinhe e desfie o frango.'],
      cozimento: ['Bata o milho com leite e peneire.', 'Leve ao fogo mexendo até engrossar.'],
      finalizacao: ['Misture o frango e sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 185, protein: 12, carbs: 24, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d17',
    name: 'Sopa de Lentilha com Batata e Cenoura',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Lentilha', 'Batata', 'Cenoura', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Lentilha', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata Picada', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura Picada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe tudo junto até os legumes e a lentilha estarem bem macios.',
    instructionsDetailed: {
      preparacao: ['Deixe a lentilha de molho.', 'Pique os legumes.'],
      cozimento: ['Coloque tudo na panela com água.', 'Cozinhe em fogo baixo por 25 min.'],
      finalizacao: ['Amasse levemente com o garfo e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 155, protein: 8, carbs: 28, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_d18',
    name: 'Purê de Abóbora com Iscas de Peixe',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Abóbora Cabotiá', 'Filé de Peixe', 'Azeite', 'Limão'],
    ingredientsDetailed: [
      { name: 'Abóbora', baseAmount: 120, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Filé de Peixe', baseAmount: 60, unit: 'g', householdMeasure: '1 filé pequeno' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' },
      { name: 'Limão', baseAmount: 2, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Faça o purê de abóbora e sirva com o peixe grelhado em lascas.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a abóbora.', 'Tempere o peixe com limão.'],
      cozimento: ['Amasse a abóbora com azeite.', 'Grelhe o peixe e desfie cuidadosamente.'],
      finalizacao: ['Sirva o purê com o peixe por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar o purê.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 14, carbs: 12, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d19',
    name: 'Macarrão de Alfabeto com Molho de Espinafre',
    age: '1-3 anos',
    category: 'JANTAR',
    ingredients: ['Macarrão de Alfabeto', 'Espinafre', 'Ricota', 'Leite'],
    ingredientsDetailed: [
      { name: 'Macarrão', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Espinafre', baseAmount: 30, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Ricota', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Leite', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata o espinafre com ricota e leite para fazer o molho e misture ao macarrão cozido.',
    instructionsDetailed: {
      preparacao: ['Cozinhe o macarrão.', 'Cozinhe o espinafre no vapor.'],
      cozimento: ['Bata o espinafre, ricota e leite no mixer até ficar um molho verde liso.'],
      finalizacao: ['Misture o molho ao macarrão quente e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 175, protein: 9, carbs: 24, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_d20',
    name: 'Canjiquinha com Frango e Cenoura',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Quirera de Milho (Canjiquinha)', 'Frango', 'Cenoura', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Canjiquinha', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cenoura Ralada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a canjiquinha com o frango e a cenoura até ficar bem macia.',
    instructionsDetailed: {
      preparacao: ['Lave bem a canjiquinha.', 'Pique o frango.'],
      cozimento: ['Refogue o frango com cebola.', 'Adicione a canjiquinha, a cenoura e água.', 'Cozinhe em fogo baixo mexendo de vez em quando até o milho estar macio.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 12, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d21',
    name: 'Sopa de Batata com Alho-Poró',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Batata', 'Alho-Poró', 'Cebola', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Batata', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Alho-Poró Picado', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Cozinhe a batata com alho-poró e cebola, bata e finalize com azeite.',
    instructionsDetailed: {
      preparacao: ['Pique a batata e o alho-poró (apenas a parte branca).'],
      cozimento: ['Refogue o alho-poró e cebola no azeite.', 'Adicione a batata e água e cozinhe.', 'Bata no liquidificador até ficar um creme liso.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 145, protein: 3, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d22',
    name: 'Arroz com Tomate e Carne Moída',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Tomate', 'Carne Moída', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Tomate Picado sem Pele', baseAmount: 40, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Refogue a carne com tomate e cebola e misture ao arroz.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate e a cebola.'],
      cozimento: ['Refogue a carne com cebola e tomate até o tomate desmanchar.', 'Misture o arroz cozido.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 12, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d23',
    name: 'Purê de Cenoura com Frango e Ervilha',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Cenoura', 'Frango Desfiado', 'Ervilha Fresca', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Cenoura', baseAmount: 120, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Faça o purê de cenoura e misture o frango e as ervilhas cozidas.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a cenoura e as ervilhas.'],
      cozimento: ['Amasse a cenoura com azeite.', 'Misture o frango desfiado e as ervilhas inteiras (ou amassadas para bebês menores).'],
      finalizacao: ['Sirva colorido e nutritivo.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 155, protein: 10, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d24',
    name: 'Sopa de Abóbora com Macarrão de Estrelinha',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Abóbora Cabotiá', 'Macarrão Estrelinha', 'Frango', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Purê de Abóbora', baseAmount: 100, unit: 'ml', householdMeasure: '1 concha' },
      { name: 'Macarrão Estrelinha', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Frango Picadinho', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o macarrão no caldo de abóbora com frango.',
    instructionsDetailed: {
      preparacao: ['Prepare o caldo de abóbora batido.'],
      cozimento: ['Leve o caldo ao fogo com o frango picado.', 'Adicione o macarrão e cozinhe até ficar macio.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 165, protein: 10, carbs: 24, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d25',
    name: 'Sopa de Mandioquinha com Carne',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Mandioquinha', 'Carne Moída', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Mandioquinha', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cenoura', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a mandioquinha e a cenoura e misture com a carne.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe os legumes até ficarem macios.', 'Refogue a carne separadamente.'],
      finalizacao: ['Amasse os legumes e misture com a carne e um pouco de caldo.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 12, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d26',
    name: 'Creme de Ervilha com Croutons de Pão Integral',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Ervilha Seca', 'Pão Integral', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Ervilha Partida', baseAmount: 60, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Pão Integral', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Cozinhe a ervilha até desmanchar e sirva com cubinhos de pão torrado.',
    instructionsDetailed: {
      preparacao: ['Deixe a ervilha de molho.', 'Pique o pão em cubos.'],
      cozimento: ['Cozinhe a ervilha na pressão por 15 min.', 'Torre o pão no forno ou frigideira.'],
      finalizacao: ['Bata a ervilha se preferir um creme liso e coloque os croutons por cima.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar o creme.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 10, carbs: 30, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d27',
    name: 'Canja de Galinha com Legumes',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Frango', 'Arroz', 'Cenoura', 'Batata'],
    ingredientsDetailed: [
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Arroz Branco', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cenoura', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata', baseAmount: 30, unit: 'g', householdMeasure: '1/2 unidade pequena' }
    ],
    instructions: 'Cozinhe tudo junto com bastante água até virar uma sopa espessa.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes e o frango.'],
      cozimento: ['Coloque tudo na panela com água e cozinhe até o arroz e legumes estarem bem macios.'],
      finalizacao: ['Amasse levemente com o garfo e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 20, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d28',
    name: 'Sopa de Feijão com Macarrão',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Feijão', 'Macarrão de Letrinhas', 'Legumes'],
    ingredientsDetailed: [
      { name: 'Caldo de Feijão', baseAmount: 150, unit: 'ml', householdMeasure: '1 concha cheia' },
      { name: 'Macarrão Letrinhas', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Legumes Picados', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o macarrão e os legumes no caldo de feijão.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe os legumes no caldo de feijão.', 'Adicione o macarrão e cozinhe até ficar macio.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 8, carbs: 28, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d29',
    name: 'Creme de Espinafre com Batata',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Espinafre', 'Batata', 'Leite'],
    ingredientsDetailed: [
      { name: 'Espinafre', baseAmount: 50, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Batata Inglesa', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Leite', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a batata e o espinafre e bata com um pouco de leite.',
    instructionsDetailed: {
      preparacao: ['Lave o espinafre e descasque a batata.'],
      cozimento: ['Cozinhe a batata até ficar macia.', 'Refogue o espinafre rapidamente.'],
      finalizacao: ['Bata tudo no mixer com o leite até formar um creme.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 4, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d30',
    name: 'Sopa de Legumes com Frango Desfiado',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Abobrinha', 'Chuchu', 'Cenoura', 'Frango'],
    ingredientsDetailed: [
      { name: 'Abobrinha', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Chuchu', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe os legumes e sirva com o frango desfiado e caldo.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe os legumes em água até ficarem bem macios.'],
      finalizacao: ['Amasse os legumes, misture o frango e sirva com o caldo do cozimento.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 12, carbs: 12, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d31',
    name: 'Creme de Abóbora com Gengibre (Suave)',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Abóbora', 'Gengibre', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Abóbora Cabotiá', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Gengibre Ralado', baseAmount: 1, unit: 'g', householdMeasure: 'Pequena pitada' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a abóbora com cebola e gengibre e bata no mixer.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora e a cebola.'],
      cozimento: ['Refogue a cebola, adicione a abóbora e água e cozinhe até amaciar.'],
      finalizacao: ['Adicione o gengibre e bata tudo até ficar cremoso.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 2, carbs: 20, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_d32',
    name: 'Sopa de Lentilha com Batata Doce',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Lentilha', 'Batata Doce', 'Espinafre'],
    ingredientsDetailed: [
      { name: 'Lentilha Cozida', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata Doce', baseAmount: 60, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Espinafre', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Cozinhe a batata doce na lentilha e finalize com espinafre.',
    instructionsDetailed: {
      preparacao: ['Pique a batata doce e o espinafre.'],
      cozimento: ['Cozinhe a batata doce no caldo da lentilha.', 'Adicione o espinafre ao final.'],
      finalizacao: ['Amasse a batata e sirva tudo misturado.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 8, carbs: 25, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_d33',
    name: 'Creme de Milho com Frango',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Milho Verde', 'Leite', 'Frango Desfiado'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o milho com leite, cozinhe até engrossar e misture o frango.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com o leite e coe.'],
      cozimento: ['Leve ao fogo mexendo até engrossar.', 'Adicione o frango desfiado.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 12, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d34',
    name: 'Sopa de Tomate com Macarrão de Letrinhas',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Tomate', 'Macarrão Letrinhas', 'Manjericão'],
    ingredientsDetailed: [
      { name: 'Tomate Maduro', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Macarrão Letrinhas', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Manjericão', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' }
    ],
    instructions: 'Prepare um caldo de tomate, cozinhe o macarrão e finalize com manjericão.',
    instructionsDetailed: {
      preparacao: ['Bata o tomate e coe.'],
      cozimento: ['Leve o caldo ao fogo, adicione o macarrão e cozinhe.'],
      finalizacao: ['Adicione as folhas de manjericão e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar o caldo.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 4, carbs: 22, fats: 1 },
    isPremium: true
  },
  {
    id: 'cb_d35',
    name: 'Creme de Mandioca com Carne Seca (Desfiada)',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Mandioca', 'Carne Seca', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Mandioca Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Carne Seca Desfiada', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata a mandioca com água do cozimento e misture a carne seca bem desfiada.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a mandioca e a carne seca (dessalgada).'],
      cozimento: ['Bata a mandioca com um pouco de água.', 'Refogue a carne seca com cebola.'],
      finalizacao: ['Misture tudo e sirva quente.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 210, protein: 10, carbs: 35, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d36',
    name: 'Sopa de Grão de Bico com Legumes',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Grão de Bico', 'Cenoura', 'Abobrinha'],
    ingredientsDetailed: [
      { name: 'Grão de Bico Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abobrinha', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe os legumes no caldo do grão de bico e amasse tudo.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe os legumes no caldo do grão de bico até amaciarem.'],
      finalizacao: ['Amasse bem o grão de bico e os legumes e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 6, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d37',
    name: 'Creme de Batata com Alho Poró',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Batata', 'Alho Poró', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Batata Inglesa', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Alho Poró Picado', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Refogue o alho poró, cozinhe com a batata e bata tudo.',
    instructionsDetailed: {
      preparacao: ['Pique o alho poró e a batata.'],
      cozimento: ['Refogue o alho poró no azeite, adicione a batata e água e cozinhe.'],
      finalizacao: ['Bata no mixer até ficar um creme liso.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 3, carbs: 28, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_d38',
    name: 'Sopa de Peixe com Arroz',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Peixe', 'Arroz', 'Tomate', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 50, unit: 'g', householdMeasure: '1/2 filé' },
      { name: 'Arroz Branco', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Tomate', baseAmount: 30, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o peixe com arroz e tomate até virar uma sopa.',
    instructionsDetailed: {
      preparacao: ['Pique o peixe e o tomate.'],
      cozimento: ['Cozinhe o arroz com o peixe, tomate e cebola em bastante água.'],
      finalizacao: ['Verifique se não há espinhas e sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 14, carbs: 20, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d39',
    name: 'Creme de Beterraba com Batata',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Beterraba', 'Batata', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Beterraba', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Batata Inglesa', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Iogurte Natural', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a beterraba e a batata e bata com um pouco de iogurte.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe até ficarem bem macios.'],
      finalizacao: ['Bata no mixer com o iogurte até ficar cremoso e rosa.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 4, carbs: 25, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d40',
    name: 'Sopa de Mandioquinha com Frango',
    age: '7 meses+',
    category: 'JANTAR',
    ingredients: ['Mandioquinha', 'Frango', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Mandioquinha', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cenoura', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe os legumes e misture com o frango e caldo.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe os legumes em água até amaciarem.'],
      finalizacao: ['Amasse os legumes e misture com o frango e o caldo.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 12, carbs: 20, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d41',
    name: 'Creme de Ervilha com Bacon de Peru (Opcional)',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Ervilha Seca', 'Bacon de Peru', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Ervilha Partida', baseAmount: 60, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Bacon de Peru', baseAmount: 10, unit: 'g', householdMeasure: 'Pequena porção' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a ervilha e sirva com o bacon de peru bem picadinho e grelhado.',
    instructionsDetailed: {
      preparacao: ['Deixe a ervilha de molho.', 'Pique o bacon.'],
      cozimento: ['Cozinhe a ervilha na pressão.', 'Grelhe o bacon até ficar crocante.'],
      finalizacao: ['Bata a ervilha e coloque o bacon por cima.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar o creme.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 12, carbs: 25, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_d42',
    name: 'Canja de Galinha com Arroz Integral',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Frango', 'Arroz Integral', 'Legumes Variados'],
    ingredientsDetailed: [
      { name: 'Frango Desfiado', baseAmount: 50, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Arroz Integral', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Legumes Picados', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe tudo junto até o arroz integral estar bem macio.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe o arroz integral na pressão por 15 min, adicione o resto e cozinhe mais.'],
      finalizacao: ['Sirva como uma sopa encorpada.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 14, carbs: 24, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d43',
    name: 'Sopa de Feijão com Legumes',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Feijão', 'Chuchu', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Caldo de Feijão', baseAmount: 150, unit: 'ml', householdMeasure: '1 concha' },
      { name: 'Chuchu Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura Picada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe os legumes no caldo de feijão e amasse.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe os legumes no caldo de feijão até amaciarem.'],
      finalizacao: ['Amasse os legumes e sirva com o caldo.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 6, carbs: 22, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d44',
    name: 'Creme de Espinafre com Ricota',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Espinafre', 'Ricota', 'Leite'],
    ingredientsDetailed: [
      { name: 'Espinafre', baseAmount: 60, unit: 'g', householdMeasure: '1 xícara cheia' },
      { name: 'Ricota Amassada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Refogue o espinafre, misture com ricota e leite e bata.',
    instructionsDetailed: {
      preparacao: ['Lave o espinafre.'],
      cozimento: ['Refogue o espinafre com um pouco de cebola.'],
      finalizacao: ['Bata no mixer com a ricota e o leite até ficar cremoso.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 8, carbs: 5, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_d45',
    name: 'Sopa de Legumes com Carne em Cubos',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Batata', 'Cenoura', 'Vagem', 'Carne'],
    ingredientsDetailed: [
      { name: 'Batata', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Cenoura', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Vagem', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Carne em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a carne com os legumes e sirva com caldo.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe tudo na pressão por 20 min.'],
      finalizacao: ['Amasse os legumes e desfie a carne levemente.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 14, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d46',
    name: 'Creme de Abóbora com Coco',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Abóbora', 'Leite de Coco', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Abóbora Cabotiá', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Leite de Coco', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a abóbora e bata com leite de coco.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora.'],
      cozimento: ['Cozinhe a abóbora em água até amaciar.'],
      finalizacao: ['Bata no mixer com o leite de coco até ficar cremoso.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 2, carbs: 18, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_d47',
    name: 'Sopa de Lentilha com Arroz',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Lentilha', 'Arroz', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Lentilha Cozida', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Arroz Cozido', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cenoura Picada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a cenoura no caldo da lentilha e misture com arroz.',
    instructionsDetailed: {
      preparacao: ['Pique a cenoura.'],
      cozimento: ['Cozinhe a cenoura no caldo da lentilha.'],
      finalizacao: ['Misture o arroz e sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 8, carbs: 28, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_d48',
    name: 'Creme de Milho com Queijo',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Milho Verde', 'Leite', 'Queijo Muçarela'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' },
      { name: 'Queijo Muçarela', baseAmount: 15, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Bata o milho com leite, cozinhe até engrossar e misture o queijo.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com o leite e coe.'],
      cozimento: ['Leve ao fogo mexendo até engrossar.'],
      finalizacao: ['Misture o queijo até derreter e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 8, carbs: 18, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_d49',
    name: 'Sopa de Tomate com Croutons',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Tomate', 'Pão Integral', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Tomate Maduro', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Pão Integral', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Prepare um creme de tomate e sirva com croutons de pão integral.',
    instructionsDetailed: {
      preparacao: ['Bata o tomate e coe.', 'Pique o pão em cubos.'],
      cozimento: ['Leve o caldo de tomate ao fogo até reduzir.', 'Torre o pão com azeite.'],
      finalizacao: ['Sirva o creme com os croutons por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar o creme.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 4, carbs: 25, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d50',
    name: 'Sopa de Abóbora com Carne Moída',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Abóbora', 'Carne Moída', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Abóbora Cabotiá', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a abóbora e misture com a carne moída refogada.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora.'],
      cozimento: ['Cozinhe a abóbora até amaciar.', 'Refogue a carne com cebola.'],
      finalizacao: ['Amasse a abóbora e misture with a carne e caldo.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d51',
    name: 'Canja de Galinha Integral',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Frango', 'Arroz Integral', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Frango Desfiado', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Arroz Integral', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o arroz com o frango e a cenoura até ficar bem macio.',
    instructionsDetailed: {
      preparacao: ['Pique a cenoura e o frango.'],
      cozimento: ['Cozinhe tudo na panela de pressão por 15 min após pegar pressão.'],
      finalizacao: ['Sirva com salsinha picada.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 14, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d52',
    name: 'Sopa de Feijão com Macarrão e Legumes',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Feijão', 'Macarrão de Sopa', 'Legumes Variados'],
    ingredientsDetailed: [
      { name: 'Feijão Cozido', baseAmount: 60, unit: 'g', householdMeasure: '1 concha pequena' },
      { name: 'Macarrão de Letrinhas', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Legumes Picados (Chuchu, Cenoura)', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata o feijão, coe e cozinhe o macarrão e os legumes no caldo.',
    instructionsDetailed: {
      preparacao: ['Bata o feijão no liquidificador e coe.'],
      cozimento: ['Cozinhe os legumes no caldo de feijão.', 'Adicione o macarrão e cozinhe até ficar macio.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 8, carbs: 32, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d53',
    name: 'Creme de Mandioca com Frango',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Mandioca', 'Frango', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Mandioca Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata a mandioca com água e misture com o frango refogado.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a mandioca e o frango.'],
      cozimento: ['Refogue o frango com cebola.', 'Bata a mandioca no mixer com um pouco da água do cozimento.'],
      finalizacao: ['Misture o creme ao frango e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 12, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d54',
    name: 'Sopa de Lentilha com Batata e Espinafre',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Lentilha', 'Batata', 'Espinafre'],
    ingredientsDetailed: [
      { name: 'Lentilha', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a lentilha com a batata e adicione o espinafre no final.',
    instructionsDetailed: {
      preparacao: ['Deixe a lentilha de molho.', 'Pique a batata e o espinafre.'],
      cozimento: ['Cozinhe a lentilha e a batata até amolecerem.', 'Adicione o espinafre nos últimos 2 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 10, carbs: 25, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_d55',
    name: 'Creme de Milho com Ovo Cozido',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Milho Verde', 'Leite', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 100, unit: 'g', householdMeasure: '1 espiga ou 1 xícara' },
      { name: 'Leite', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' },
      { name: 'Ovo Cozido', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Bata o milho com leite, cozinhe até engrossar e sirva com ovo picado.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com leite e peneire.', 'Cozinhe o ovo.'],
      cozimento: ['Leve o creme ao fogo mexendo até engrossar.'],
      finalizacao: ['Sirva o creme com o ovo picado por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 210, protein: 10, carbs: 22, fats: 10 },
    isPremium: true
  },
  {
    id: 'cb_d56',
    name: 'Sopa de Tomate com Torradinhas de Pão Integral',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Tomate', 'Cebola', 'Pão Integral'],
    ingredientsDetailed: [
      { name: 'Tomate Maduro', baseAmount: 150, unit: 'g', householdMeasure: '2 unidades' },
      { name: 'Cebola Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Pão Integral', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Cozinhe os tomates com cebola, bata no mixer e sirva com cubinhos de pão torrado.',
    instructionsDetailed: {
      preparacao: ['Retire a pele dos tomates.', 'Pique o pão em cubos.'],
      cozimento: ['Refogue a cebola e cozinhe os tomates.', 'Torre o pão no forno ou frigideira.'],
      finalizacao: ['Bata a sopa e sirva com os croutons.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar a sopa.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 4, carbs: 25, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d57',
    name: 'Creme de Ervilha com Cubinhos de Frango',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Ervilha Fresca', 'Frango', 'Hortelã'],
    ingredientsDetailed: [
      { name: 'Ervilha Fresca', baseAmount: 80, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Frango em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Hortelã', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' }
    ],
    instructions: 'Cozinhe a ervilha com hortelã, bata e misture com o frango grelhado.',
    instructionsDetailed: {
      preparacao: ['Pique o frango.'],
      cozimento: ['Cozinhe a ervilha.', 'Grelhe o frango.', 'Bata a ervilha com um pouco de água.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 14, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d58',
    name: 'Sopa de Inhame com Carne e Vagem',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Inhame', 'Carne Moída', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Inhame', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o inhame com a vagem e misture com a carne refogada.',
    instructionsDetailed: {
      preparacao: ['Pique o inhame e a vagem.'],
      cozimento: ['Cozinhe os legumes.', 'Refogue a carne.', 'Amasse o inhame.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 12, carbs: 20, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d59',
    name: 'Creme de Chuchu com Peixe Desfiado',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Chuchu', 'Peixe', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Chuchu', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Filé de Peixe', baseAmount: 40, unit: 'g', householdMeasure: '1/2 filé' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o chuchu e o peixe, bata o chuchu e misture com o peixe desfiado.',
    instructionsDetailed: {
      preparacao: ['Pique o chuchu.'],
      cozimento: ['Cozinhe o chuchu e o peixe no vapor.'],
      finalizacao: ['Bata o chuchu com azeite e misture o peixe desfiado.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 10, carbs: 6, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_d60',
    name: 'Sopa de Grão-de-Bico com Cenoura',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Grão-de-Bico', 'Cenoura', 'Cúrcuma'],
    ingredientsDetailed: [
      { name: 'Grão-de-Bico Cozido', baseAmount: 60, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Cenoura em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cúrcuma', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Bata o grão-de-bico com cenoura cozida e uma pitada de cúrcuma.',
    instructionsDetailed: {
      preparacao: ['Cozinhe o grão-de-bico e a cenoura.'],
      cozimento: ['Bata tudo no mixer com um pouco de água do cozimento.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 7, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d61',
    name: 'Creme de Batata Doce com Frango e Couve',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Batata Doce', 'Frango', 'Couve'],
    ingredientsDetailed: [
      { name: 'Batata Doce', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Couve Picada bem Fina', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Bata a batata doce cozida e misture com o frango e a couve.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a batata e o frango.', 'Pique a couve bem fininha.'],
      cozimento: ['Bata a batata doce.', 'Refogue a couve rapidamente.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 12, carbs: 25, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d62',
    name: 'Sopa de Macarrão com Ovos Estalados',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Macarrão de Sopa', 'Ovo', 'Caldo de Legumes Caseiro'],
    ingredientsDetailed: [
      { name: 'Macarrão Ave Maria', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Caldo de Legumes', baseAmount: 200, unit: 'ml', householdMeasure: '1 xícara grande' }
    ],
    instructions: 'Cozinhe o macarrão no caldo e estale o ovo por cima no final.',
    instructionsDetailed: {
      preparacao: ['Aqueça o caldo.'],
      cozimento: ['Cozinhe o macarrão no caldo.', 'Quebre o ovo com cuidado e deixe cozinhar no vapor da sopa.'],
      finalizacao: ['Sirva com cuidado para não quebrar a gema.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 10, carbs: 25, fats: 6 },
    isPremium: true
  },
  {
    id: 'cb_d63',
    name: 'Creme de Abóbora com Gengibre e Frango',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Abóbora', 'Gengibre', 'Frango'],
    ingredientsDetailed: [
      { name: 'Abóbora Cabotiá', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Gengibre Ralado', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe a abóbora com gengibre, bata e misture com o frango.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora.'],
      cozimento: ['Cozinhe a abóbora com o gengibre.', 'Bata no mixer.', 'Adicione o frango.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 12, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d64',
    name: 'Sopa de Mandioquinha com Carne e Alho-Poró',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Mandioquinha', 'Carne Moída', 'Alho-Poró'],
    ingredientsDetailed: [
      { name: 'Mandioquinha', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Alho-Poró Picado', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Refogue o alho-poró e a carne, e cozinhe com a mandioquinha.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Refogue o alho-poró e a carne.', 'Adicione a mandioquinha e água.', 'Cozinhe até amaciar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 12, carbs: 22, fats: 5 },
    isPremium: true
  },
  {
    id: 'cb_d65',
    name: 'Creme de Beterraba com Batata e Iogurte',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Beterraba', 'Batata', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Beterraba', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Batata', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a beterraba e a batata, bata e finalize com iogurte.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe até ficarem bem macios.', 'Bata no mixer.'],
      finalizacao: ['Adicione o iogurte no prato e sirva.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar sem o iogurte.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 4, carbs: 25, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d66',
    name: 'Sopa de Ervilha com Croutons de Tofu',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Ervilha Seca', 'Tofu', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Ervilha Seca', baseAmount: 50, unit: 'g', householdMeasure: '1/4 xícara' },
      { name: 'Tofu em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Azeite', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe a ervilha até desmanchar e sirva com tofu grelhado.',
    instructionsDetailed: {
      preparacao: ['Deixe a ervilha de molho.', 'Pique o tofu.'],
      cozimento: ['Cozinhe a ervilha na pressão.', 'Grelhe o tofu com azeite.'],
      finalizacao: ['Sirva a sopa com o tofu por cima.']
    },
    image: '',
    prepTime: '45 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 12, carbs: 25, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d67',
    name: 'Creme de Abobrinha com Ricota',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Abobrinha', 'Ricota', 'Cebolinha'],
    ingredientsDetailed: [
      { name: 'Abobrinha', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Ricota Amassada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebolinha Picada', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Cozinhe a abobrinha, bata e misture com a ricota e cebolinha.',
    instructionsDetailed: {
      preparacao: ['Pique a abobrinha.'],
      cozimento: ['Cozinhe a abobrinha com pouca água.', 'Bata no mixer.'],
      finalizacao: ['Misture a ricota e a cebolinha e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 8, carbs: 8, fats: 7 },
    isPremium: true
  },
  {
    id: 'cb_d68',
    name: 'Sopa de Milho com Frango Desfiado',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Milho Verde', 'Frango', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cebola', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata o milho, coe e cozinhe com o frango refogado.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com água e coe.'],
      cozimento: ['Refogue o frango com cebola.', 'Adicione o caldo de milho e cozinhe até engrossar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 12, carbs: 22, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d69',
    name: 'Creme de Batata com Carne e Brócolis',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Batata', 'Carne Moída', 'Brócolis'],
    ingredientsDetailed: [
      { name: 'Batata', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Brócolis Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 buquês' }
    ],
    instructions: 'Cozinhe a batata e o brócolis, bata a batata e misture com a carne e o brócolis.',
    instructionsDetailed: {
      preparacao: ['Pique os ingredientes.'],
      cozimento: ['Cozinhe a batata e o brócolis.', 'Refogue a carne.'],
      finalizacao: ['Amasse a batata e misture com o restante.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 12, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d70',
    name: 'Sopa de Feijão Branco com Espinafre',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Feijão Branco', 'Espinafre', 'Alho'],
    ingredientsDetailed: [
      { name: 'Feijão Branco Cozido', baseAmount: 60, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Alho', baseAmount: 2, unit: 'g', householdMeasure: '1/2 dente' }
    ],
    instructions: 'Bata o feijão, refogue o alho e o espinafre, e misture.',
    instructionsDetailed: {
      preparacao: ['Bata o feijão com um pouco de água.'],
      cozimento: ['Refogue o alho e o espinafre.', 'Adicione o creme de feijão e aqueça.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 8, carbs: 25, fats: 2 },
    isPremium: true
  },
  {
    id: 'cb_d71',
    name: 'Creme de Cará com Frango e Cenoura',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Cará', 'Frango', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Cará', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura Ralada', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o cará e a cenoura, bata o cará e misture com o frango e a cenoura.',
    instructionsDetailed: {
      preparacao: ['Pique o cará e rale a cenoura.'],
      cozimento: ['Cozinhe os legumes.', 'Bata o cará no mixer.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d72',
    name: 'Sopa de Macarrão com Carne e Vagem',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Macarrão de Sopa', 'Carne Moída', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Macarrão Argolinha', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o macarrão com a vagem e misture com a carne refogada.',
    instructionsDetailed: {
      preparacao: ['Pique a vagem.'],
      cozimento: ['Cozinhe o macarrão e a vagem.', 'Refogue a carne.'],
      finalizacao: ['Misture tudo e sirva com caldo.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 12, carbs: 20, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d73',
    name: 'Creme de Abóbora com Carne e Couve-Flor',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Abóbora', 'Carne Moída', 'Couve-Flor'],
    ingredientsDetailed: [
      { name: 'Abóbora', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Couve-Flor Picada', baseAmount: 30, unit: 'g', householdMeasure: '2 buquês' }
    ],
    instructions: 'Cozinhe a abóbora e a couve-flor, bata a abóbora e misture com o restante.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Cozinhe até amolecer.', 'Refogue a carne.'],
      finalizacao: ['Amasse a abóbora e misture com a carne e couve-flor.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 12, carbs: 15, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d74',
    name: 'Sopa de Arroz com Frango e Chuchu',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Frango', 'Chuchu'],
    ingredientsDetailed: [
      { name: 'Arroz', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Chuchu em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o arroz com o frango e o chuchu até ficar bem macio.',
    instructionsDetailed: {
      preparacao: ['Pique o chuchu.'],
      cozimento: ['Cozinhe tudo na panela com bastante água.'],
      finalizacao: ['Sirva com caldo.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 12, carbs: 18, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d75',
    name: 'Creme de Batata com Carne e Ervilha',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Batata', 'Carne Moída', 'Ervilha Fresca'],
    ingredientsDetailed: [
      { name: 'Batata', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a batata e a ervilha, bata a batata e misture com a carne e ervilha.',
    instructionsDetailed: {
      preparacao: ['Pique a batata.'],
      cozimento: ['Cozinhe os legumes.', 'Refogue a carne.'],
      finalizacao: ['Amasse a batata e misture com o restante.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d76',
    name: 'Arroz de Forno com Espinafre e Ricota',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Arroz Cozido', 'Espinafre', 'Ricota', 'Ovo'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 60, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Espinafre Picado', baseAmount: 30, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Ricota Amassada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Ovo Batido', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' }
    ],
    instructions: 'Misture o arroz, espinafre, ricota e ovo e asse.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre e amasse a ricota.'],
      cozimento: ['Misture todos os ingredientes.', 'Coloque em um refratário e asse por 15 min a 180°C.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 175, protein: 10, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d77',
    name: 'Creme de Mandioquinha com Frango e Milho',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Mandioquinha', 'Frango Desfiado', 'Milho Verde'],
    ingredientsDetailed: [
      { name: 'Mandioquinha', baseAmount: 120, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Frango Desfiado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Milho Verde', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Faça um creme com a mandioquinha e misture o frango e milho.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a mandioquinha até ficar bem macia.'],
      cozimento: ['Bata a mandioquinha com um pouco da água do cozimento.', 'Adicione o frango e o milho.'],
      finalizacao: ['Aqueça tudo junto e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 12, carbs: 32, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d78',
    name: 'Macarrão com Molho de Abóbora e Carne',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Macarrão', 'Abóbora Cabotiá', 'Carne Moída'],
    ingredientsDetailed: [
      { name: 'Macarrão (Parafuso)', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Abóbora Cozida e Batida', baseAmount: 60, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe o macarrão e sirva com molho de abóbora e carne.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a abóbora e bata no liquidificador com um pouco de água.'],
      cozimento: ['Refogue a carne moída.', 'Adicione o creme de abóbora à carne.', 'Cozinhe o macarrão.'],
      finalizacao: ['Misture o macarrão ao molho e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar o molho.',
    canFreeze: true,
    nutrition: { calories: 185, protein: 13, carbs: 28, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d79',
    name: 'Omelete de Forno com Tomate e Manjericão',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Ovo', 'Tomate', 'Manjericão', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Ovo', baseAmount: 2, unit: 'unidades', householdMeasure: '2 ovos' },
      { name: 'Tomate Picado', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Manjericão Fresco', baseAmount: 1, unit: 'g', householdMeasure: '2 folhas' },
      { name: 'Queijo Ralado', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata os ovos, misture o tomate, manjericão e queijo e asse.',
    instructionsDetailed: {
      preparacao: ['Pique o tomate e o manjericão.'],
      cozimento: ['Bata os ovos e misture os ingredientes.', 'Asse em forminhas de silicone por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 14, carbs: 4, fats: 12 },
    isPremium: false
  },
  {
    id: 'cb_d80',
    name: 'Canja de Arroz Integral com Frango',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Arroz Integral', 'Frango', 'Cenoura', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Arroz Integral', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Peito de Frango Picado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o arroz integral com frango e legumes em bastante água.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes e o frango.'],
      cozimento: ['Cozinhe o arroz integral na pressão por 15 min.', 'Adicione o frango e legumes e cozinhe por mais 15 min.'],
      finalizacao: ['Sirva com o caldo.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 13, carbs: 24, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d81',
    name: 'Purê de Batata Doce com Carne e Ervilha',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Batata Doce', 'Carne Moída', 'Ervilha Fresca'],
    ingredientsDetailed: [
      { name: 'Batata Doce', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Faça um purê com a batata e misture com a carne e ervilha.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a batata doce e a ervilha.'],
      cozimento: ['Amasse a batata doce.', 'Refogue a carne moída.', 'Misture tudo.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 195, protein: 13, carbs: 30, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d82',
    name: 'Sopa de Feijão com Macarrão e Legumes',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Feijão Cozido', 'Macarrão (Paiol)', 'Cenoura', 'Chuchu'],
    ingredientsDetailed: [
      { name: 'Feijão Cozido com Caldo', baseAmount: 100, unit: 'ml', householdMeasure: '1 concha' },
      { name: 'Macarrão Pequeno', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cenoura Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Chuchu Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o feijão e cozinhe com o macarrão e legumes.',
    instructionsDetailed: {
      preparacao: ['Pique os legumes.'],
      cozimento: ['Bata o feijão no liquidificador e peneire.', 'Leve ao fogo com os legumes e o macarrão até cozinhar.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 165, protein: 7, carbs: 32, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_d83',
    name: 'Risoto de Beterraba com Frango',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Beterraba', 'Frango Desfiado', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Arroz Agulhinha', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Beterraba Cozida e Batida', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Queijo Parmesão', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o arroz com o creme de beterraba e misture o frango.',
    instructionsDetailed: {
      preparacao: ['Bata a beterraba cozida com um pouco de água.'],
      cozimento: ['Cozinhe o arroz no creme de beterraba.', 'Adicione o frango desfiado no final.'],
      finalizacao: ['Finalize com o queijo e sirva bem rosa.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 12, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d84',
    name: 'Suflê de Abobrinha e Queijo',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Abobrinha', 'Ovo', 'Queijo Minas', 'Farinha de Trigo'],
    ingredientsDetailed: [
      { name: 'Abobrinha Ralada', baseAmount: 60, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo (separar clara e gema)', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Queijo Minas Frescal', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia pequena' },
      { name: 'Farinha de Trigo', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Misture abobrinha, gema, queijo e farinha, e incorpore a clara em neve.',
    instructionsDetailed: {
      preparacao: ['Rale a abobrinha e esprema para tirar o excesso de água.', 'Bata a clara em neve.'],
      cozimento: ['Misture os outros ingredientes.', 'Incorpore a clara em neve.', 'Asse por 15 min a 180°C.'],
      finalizacao: ['Sirva imediatamente.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 9, carbs: 8, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_d85',
    name: 'Arroz com Lentilha e Abóbora',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Lentilha', 'Abóbora Cabotiá'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Lentilha Cozida', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Abóbora em Cubinhos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture o arroz e a lentilha e adicione a abóbora assada.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora em cubos pequenos.'],
      cozimento: ['Asse a abóbora com um fio de azeite.', 'Aqueça o arroz e a lentilha.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 170, protein: 8, carbs: 30, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d86',
    name: 'Peixe ao Molho de Tomate com Purê de Batata',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Filé de Peixe', 'Tomate', 'Batata Inglesa', 'Leite'],
    ingredientsDetailed: [
      { name: 'Filé de Peixe', baseAmount: 50, unit: 'g', householdMeasure: '1/2 filé' },
      { name: 'Molho de Tomate Caseiro', baseAmount: 40, unit: 'ml', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata Cozida', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Leite Materno/Fórmula', baseAmount: 20, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o peixe no molho de tomate e sirva com purê de batata.',
    instructionsDetailed: {
      preparacao: ['Faça o purê com a batata e o leite.'],
      cozimento: ['Cozinhe o peixe no molho de tomate em fogo baixo por 10 min.'],
      finalizacao: ['Sirva o peixe sobre o purê.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 13, carbs: 24, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d87',
    name: 'Sopa de Abóbora com Gengibre e Frango',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Abóbora Cabotiá', 'Gengibre', 'Frango Desfiado'],
    ingredientsDetailed: [
      { name: 'Abóbora', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Gengibre Ralado', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Cozinhe a abóbora com gengibre, bata e adicione o frango.',
    instructionsDetailed: {
      preparacao: ['Descasque a abóbora.'],
      cozimento: ['Cozinhe a abóbora com o gengibre até amolecer.', 'Bata no liquidificador.', 'Adicione o frango desfiado.'],
      finalizacao: ['Aqueça e sirva.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 145, protein: 10, carbs: 22, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d88',
    name: 'Arroz com Carne Moída e Vagem',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Carne Moída', 'Vagem', 'Cebola'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa cheias' },
      { name: 'Carne Moída', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Vagem Picada', baseAmount: 30, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Cebola Picada', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Refogue a carne com cebola e vagem e misture ao arroz.',
    instructionsDetailed: {
      preparacao: ['Pique a vagem bem pequena.'],
      cozimento: ['Refogue a carne com a cebola.', 'Adicione a vagem e cozinhe até ficar macia.', 'Misture o arroz.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 185, protein: 13, carbs: 24, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d89',
    name: 'Polenta com Molho de Espinafre e Queijo',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Fubá', 'Espinafre', 'Queijo Minas', 'Leite'],
    ingredientsDetailed: [
      { name: 'Fubá', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Espinafre Picado', baseAmount: 30, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Queijo Minas Frescal', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia pequena' },
      { name: 'Leite Materno/Fórmula', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Faça a polenta e cubra com molho de espinafre e queijo.',
    instructionsDetailed: {
      preparacao: ['Pique o espinafre.'],
      cozimento: ['Cozinhe o fubá com água até dar o ponto.', 'Refogue o espinafre com o leite e o queijo até derreter.'],
      finalizacao: ['Sirva a polenta com o molho verde por cima.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 8, carbs: 22, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_d90',
    name: 'Sopa de Letrinhas com Frango e Legumes',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Macarrão de Letrinhas', 'Frango', 'Cenoura', 'Batata'],
    ingredientsDetailed: [
      { name: 'Macarrão de Letrinhas', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Peito de Frango em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Cenoura em Cubos', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Batata em Cubos', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe o macarrão com frango e legumes em caldo caseiro.',
    instructionsDetailed: {
      preparacao: ['Pique tudo em cubos bem pequenos.'],
      cozimento: ['Leve tudo ao fogo com água e cozinhe até os legumes estarem macios.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 165, protein: 11, carbs: 26, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d91',
    name: 'Arroz com Ovo Mexido e Ervilha',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Ovo', 'Ervilha Fresca'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa cheias' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Ervilha Fresca', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture o arroz com ovo mexido e ervilha cozida.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a ervilha.'],
      cozimento: ['Faça o ovo mexido bem picadinho.', 'Aqueça o arroz.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 175, protein: 9, carbs: 24, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d92',
    name: 'Creme de Chuchu com Carne e Arroz',
    age: '8 meses+',
    category: 'JANTAR',
    ingredients: ['Chuchu', 'Carne Moída', 'Arroz'],
    ingredientsDetailed: [
      { name: 'Chuchu', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Carne Moída', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Arroz Cozido', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Faça um creme com o chuchu e misture a carne e o arroz.',
    instructionsDetailed: {
      preparacao: ['Cozinhe o chuchu até ficar bem macio.'],
      cozimento: ['Bata o chuchu com um pouco de água.', 'Refogue a carne moída.', 'Misture o creme de chuchu, a carne e o arroz.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 10, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d93',
    name: 'Macarrão de Arroz com Frango e Abobrinha',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Macarrão de Arroz', 'Frango', 'Abobrinha', 'Azeite'],
    ingredientsDetailed: [
      { name: 'Macarrão de Arroz', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Peito de Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Abobrinha em Tiras', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Azeite Extra Virgem', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Cozinhe o macarrão e misture com o frango e abobrinha refogados.',
    instructionsDetailed: {
      preparacao: ['Corte a abobrinha em tiras finas.'],
      cozimento: ['Refogue a abobrinha e o frango no azeite.', 'Cozinhe o macarrão de arroz.'],
      finalizacao: ['Misture tudo e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 11, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d94',
    name: 'Risoto de Milho com Carne',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Milho Verde', 'Carne Moída', 'Queijo'],
    ingredientsDetailed: [
      { name: 'Arroz Agulhinha', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Milho Verde Batido', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Carne Moída', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Queijo Ralado', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o arroz no creme de milho e misture a carne.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com um pouco de água e peneire.'],
      cozimento: ['Cozinhe o arroz no creme de milho.', 'Adicione a carne moída refogada no final.'],
      finalizacao: ['Finalize com o queijo e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 185, protein: 11, carbs: 26, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_d95',
    name: 'Sopa de Lentilha com Batata e Cenoura',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Lentilha', 'Batata', 'Cenoura'],
    ingredientsDetailed: [
      { name: 'Lentilha', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Cenoura em Cubos', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Cozinhe a lentilha com a batata e a cenoura.',
    instructionsDetailed: {
      preparacao: ['Deixe a lentilha de molho por 8h.'],
      cozimento: ['Leve tudo ao fogo com água e cozinhe até ficar bem macio.'],
      finalizacao: ['Amasse levemente os legumes e sirva.']
    },
    image: '',
    prepTime: '35 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 155, protein: 9, carbs: 28, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_d96',
    name: 'Arroz de Couve com Frango',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Couve', 'Frango Desfiado', 'Alho'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa cheias' },
      { name: 'Couve Picada', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Alho Picado', baseAmount: 2, unit: 'g', householdMeasure: '1/2 dente' }
    ],
    instructions: 'Refogue a couve com alho, adicione o frango e o arroz.',
    instructionsDetailed: {
      preparacao: ['Pique a couve bem fininho.'],
      cozimento: ['Refogue a couve com alho.', 'Adicione o frango e o arroz e misture bem.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 15 dias.',
    canFreeze: true,
    nutrition: { calories: 165, protein: 12, carbs: 24, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_d97',
    name: 'Purê de Abóbora com Peixe e Brócolis',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Abóbora Cabotiá', 'Filé de Peixe', 'Brócolis'],
    ingredientsDetailed: [
      { name: 'Abóbora', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Filé de Peixe', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Brócolis Picado', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Faça um purê com a abóbora e misture com o peixe e brócolis.',
    instructionsDetailed: {
      preparacao: ['Cozinhe a abóbora e o brócolis.'],
      cozimento: ['Amasse a abóbora.', 'Grelhe o peixe e pique bem miúdo.', 'Misture tudo.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 145, protein: 11, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d98',
    name: 'Sopa de Mandioca com Carne e Espinafre',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Mandioca', 'Carne em Cubos', 'Espinafre'],
    ingredientsDetailed: [
      { name: 'Mandioca', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Carne Bovina em Cubos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Espinafre Picado', baseAmount: 20, unit: 'g', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Cozinhe a mandioca e a carne até ficarem macias e adicione o espinafre.',
    instructionsDetailed: {
      preparacao: ['Pique a carne em cubos pequenos.'],
      cozimento: ['Cozinhe a mandioca e a carne na pressão.', 'No final, adicione o espinafre e deixe murchar.'],
      finalizacao: ['Sirva com o caldo grosso.']
    },
    image: '',
    prepTime: '40 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 14, carbs: 28, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_d99',
    name: 'Arroz de Tomate com Ovo e Vagem',
    age: '1 ano+',
    category: 'JANTAR',
    ingredients: ['Arroz', 'Tomate', 'Ovo', 'Vagem'],
    ingredientsDetailed: [
      { name: 'Arroz Cozido', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa cheias' },
      { name: 'Tomate sem Pele Picado', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Ovo Pochê', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Vagem Picada', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Refogue o arroz com tomate e vagem e sirva com ovo pochê.',
    instructionsDetailed: {
      preparacao: ['Pique a vagem.'],
      cozimento: ['Refogue o arroz com o tomate e a vagem.', 'Faça o ovo pochê em água fervente.'],
      finalizacao: ['Sirva o arroz com o ovo por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 175, protein: 9, carbs: 26, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_d100',
    name: 'Creme de Ervilha com Batata e Frango',
    age: '9 meses+',
    category: 'JANTAR',
    ingredients: ['Ervilha Fresca', 'Batata Inglesa', 'Frango Desfiado'],
    ingredientsDetailed: [
      { name: 'Ervilha Fresca', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Batata', baseAmount: 80, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Frango Desfiado', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa cheia' }
    ],
    instructions: 'Cozinhe a ervilha e a batata, bata e adicione o frango.',
    instructionsDetailed: {
      preparacao: ['Cozinhe os vegetais até ficarem macios.'],
      cozimento: ['Bata os vegetais com um pouco de água.', 'Adicione o frango desfiado.'],
      finalizacao: ['Aqueça e sirva.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 12, carbs: 22, fats: 2 },
    isPremium: false
  },
  // SOBREMESA (24 novas)
  {
    id: 'cb_s1',
    name: 'Mousse de Manga e Coco',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Manga Palmer', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Leite de Coco Caseiro', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata a manga com o leite de coco até ficar cremoso e leve à geladeira.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no liquidificador ou mixer e sirva bem geladinho.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 1, carbs: 24, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_s2',
    name: 'Sorvete de Banana e Morango (Nice Cream)',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Banana Congelada', 'Morangos Congelados'],
    ingredientsDetailed: [
      { name: 'Banana Nanica Congelada', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Morangos Congelados', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Bata as frutas congeladas no processador até virar um creme gelado.',
    instructionsDetailed: {
      preparacao: ['Congele as frutas picadas por pelo menos 6 horas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no processador ou liquidificador potente (pode precisar de um fio de água) e sirva na hora.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 1.5, carbs: 28, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s3',
    name: 'Pudim de Chia com Leite de Coco e Frutas Vermelhas',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Chia', 'Leite de Coco', 'Frutas Vermelhas'],
    ingredientsDetailed: [
      { name: 'Semente de Chia', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Leite de Coco', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Frutas Vermelhas (Amora, Framboesa)', baseAmount: 30, unit: 'g', householdMeasure: 'Pequena porção' }
    ],
    instructions: 'Misture chia e leite, deixe gelar e cubra com as frutas batidas.',
    instructionsDetailed: {
      preparacao: ['Misture a chia com o leite em um pote.', 'Deixe na geladeira por 4 horas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse as frutas e coloque por cima antes de servir.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 3, carbs: 12, fats: 9 },
    isPremium: true
  },
  {
    id: 'cb_s4',
    name: 'Gelatina de Melancia Natural',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Melancia', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Suco de Melancia Coado', baseAmount: 250, unit: 'ml', householdMeasure: '1 copo grande' },
      { name: 'Gelatina Incolor', baseAmount: 12, unit: 'g', householdMeasure: '1 envelope' }
    ],
    instructions: 'Dissolva a gelatina no suco de melancia e leve à geladeira.',
    instructionsDetailed: {
      preparacao: ['Bata a melancia e coe.', 'Hidrate e dissolva a gelatina conforme instruções da embalagem.'],
      cozimento: ['Misture a gelatina dissolvida no suco frio.'],
      finalizacao: ['Coloque em formas e leve à geladeira por 4 horas.']
    },
    image: '',
    prepTime: '15 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 10, carbs: 18, fats: 0 },
    isPremium: false
  },
  {
    id: 'cb_s5',
    name: 'Docinho de Tâmara com Coco',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Tâmaras', 'Coco Ralado', 'Água'],
    ingredientsDetailed: [
      { name: 'Tâmaras sem Caroço', baseAmount: 50, unit: 'g', householdMeasure: '5 unidades' },
      { name: 'Coco Ralado sem Açúcar', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Água Morna', baseAmount: 10, unit: 'ml', householdMeasure: 'Para hidratar' }
    ],
    instructions: 'Bata as tâmaras hidratadas, faça bolinhas e passe no coco.',
    instructionsDetailed: {
      preparacao: ['Deixe as tâmaras de molho na água morna por 15 min.', 'Bata no processador até virar uma pasta.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Faça bolinhas e passe no coco ralado.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 5 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 2, carbs: 36, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_s6',
    name: 'Pêra Cozida com Suco de Laranja e Cravo',
    age: '8 meses+',
    category: 'SOBREMESA',
    ingredients: ['Pêra', 'Suco de Laranja', 'Cravo da Índia'],
    ingredientsDetailed: [
      { name: 'Pêra Williams', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Suco de Laranja Natural', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Cravo da Índia', baseAmount: 1, unit: 'unidade', householdMeasure: 'Apenas para sabor' }
    ],
    instructions: 'Cozinhe a pêra no suco de laranja com o cravo até ficar macia.',
    instructionsDetailed: {
      preparacao: ['Descasque a pêra e retire as sementes.'],
      cozimento: ['Leve ao fogo com o suco e o cravo.', 'Cozinhe em fogo baixo até a pêra estar macia e o suco reduzir.'],
      finalizacao: ['Retire o cravo e sirva a pêra morna ou fria.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 1, carbs: 26, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s7',
    name: 'Creme de Abacate com Banana e Limão',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Abacate', 'Banana', 'Limão'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Banana Madura', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Limão', baseAmount: 2, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Amasse as frutas e misture as gotas de limão.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate e descasque a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse bem com um garfo e sirva fresco. O limão evita que escureça.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 2, carbs: 16, fats: 9 },
    isPremium: false
  },
  {
    id: 'cb_s8',
    name: 'Maçã Assada com Canela e Passas',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Maçã', 'Canela', 'Uva Passa'],
    ingredientsDetailed: [
      { name: 'Maçã Fuji', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' },
      { name: 'Uva Passa', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Retire o miolo da maçã, coloque passas e canela e asse.',
    instructionsDetailed: {
      preparacao: ['Retire o miolo da maçã sem atravessar o fundo.', 'Coloque as passas no buraco.'],
      cozimento: ['Polvilhe canela.', 'Asse a 180°C por 20-25 min até ficar macia.'],
      finalizacao: ['Sirva morna.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 0.5, carbs: 30, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s9',
    name: 'Picolé de Iogurte com Manga',
    age: '8 meses+',
    category: 'SOBREMESA',
    ingredients: ['Iogurte Natural', 'Manga Palmer'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Manga Palmer', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Bata o iogurte com a manga e leve ao freezer em formas de picolé.',
    instructionsDetailed: {
      preparacao: ['Bata tudo no liquidificador.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Coloque nas formas e leve ao freezer por 6 horas.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Freezer por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 6, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_s10',
    name: 'Creme de Papaia com Maçã',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Mamão Papaia', 'Maçã'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Maçã', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Bata o mamão com a maçã (sem casca) no mixer.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão e a casca da maçã.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata até ficar um creme liso e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 1, carbs: 22, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s11',
    name: 'Muffin de Cenoura e Maçã',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Cenoura', 'Maçã', 'Ovo', 'Farinha de Aveia'],
    ingredientsDetailed: [
      { name: 'Cenoura Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 40, unit: 'g', householdMeasure: '3 colheres de sopa' }
    ],
    instructions: 'Misture tudo e asse em forminhas de muffin.',
    instructionsDetailed: {
      preparacao: ['Misture os ingredientes ralados com o ovo e a aveia.'],
      cozimento: ['Coloque em forminhas de silicone.', 'Asse a 180°C por 20 min.'],
      finalizacao: ['Deixe esfriar e sirva como um bolinho doce natural.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 180, protein: 7, carbs: 24, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_s12',
    name: 'Pudim de Banana com Cacau',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Banana Nanica Madura', 'Cacau em Pó', 'Leite de Coco'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Cacau 100%', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de sobremesa' },
      { name: 'Leite de Coco', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata tudo no liquidificador e leve à geladeira.',
    instructionsDetailed: {
      preparacao: ['Use bananas bem maduras para ficar doce.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata até ficar homogêneo e deixe gelar por 2 horas para firmar.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 2, carbs: 28, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_s13',
    name: 'Compota de Frutas Amarelas',
    age: '8 meses+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Pêssego', 'Damasco Seco'],
    ingredientsDetailed: [
      { name: 'Manga em Cubos', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Pêssego Picado', baseAmount: 50, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Damasco Seco', baseAmount: 20, unit: 'g', householdMeasure: '2 unidades picadas' }
    ],
    instructions: 'Cozinhe as frutas com um pouco de água até ficarem macias.',
    instructionsDetailed: {
      preparacao: ['Pique todas as frutas.'],
      cozimento: ['Leve ao fogo com 50ml de água.', 'Cozinhe em fogo baixo até formar uma calda espessa natural.'],
      finalizacao: ['Sirva morna ou fria.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 1.5, carbs: 32, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s14',
    name: 'Iogurte com Geleia de Morango Caseira',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Iogurte Natural', 'Morangos', 'Suco de Maçã'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Morangos', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Suco de Maçã Concentrado', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Cozinhe os morangos com o suco de maçã até virar geleia e coloque sobre o iogurte.',
    instructionsDetailed: {
      preparacao: ['Lave e pique os morangos.'],
      cozimento: ['Leve os morangos e o suco de maçã ao fogo baixo.', 'Cozinhe mexendo até reduzir e virar uma geleia pedaçuda.'],
      finalizacao: ['Deixe esfriar e sirva sobre o iogurte.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geleia dura 5 dias na geladeira.',
    freezingTips: 'Pode congelar a geleia.',
    canFreeze: true,
    nutrition: { calories: 160, protein: 6, carbs: 24, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_s15',
    name: 'Espetinho de Melão e Presunto (Opção Salgada/Doce)',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Melão', 'Presunto Magro ou Peito de Peru'],
    ingredientsDetailed: [
      { name: 'Melão em Cubos', baseAmount: 100, unit: 'g', householdMeasure: '1 fatia grande' },
      { name: 'Presunto Magro', baseAmount: 20, unit: 'g', householdMeasure: '1 fatia fina' }
    ],
    instructions: 'Enrole o presunto no melão e sirva.',
    instructionsDetailed: {
      preparacao: ['Corte o melão em cubos.', 'Corte o presunto em tiras.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Enrole as tiras de presunto nos cubos de melão. Combinação clássica refrescante.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 85, protein: 5, carbs: 12, fats: 2 },
    isPremium: true
  },
  {
    id: 'cb_s16',
    name: 'Creme de Coco com Abacaxi',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Leite de Coco', 'Amido de Milho', 'Abacaxi'],
    ingredientsDetailed: [
      { name: 'Leite de Coco', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo pequeno' },
      { name: 'Amido de Milho', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' },
      { name: 'Abacaxi Picado', baseAmount: 50, unit: 'g', householdMeasure: '1 fatia' }
    ],
    instructions: 'Cozinhe o leite de coco com amido até engrossar e sirva com abacaxi.',
    instructionsDetailed: {
      preparacao: ['Dissolva o amido no leite de coco frio.', 'Pique o abacaxi.'],
      cozimento: ['Leve o leite de coco ao fogo mexendo até engrossar.', 'Refogue o abacaxi rapidamente em outra panela.'],
      finalizacao: ['Coloque o creme em uma taça e o abacaxi por cima.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 170, protein: 1, carbs: 18, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_s17',
    name: 'Salada de Frutas com Suco de Laranja',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Maçã', 'Mamão', 'Laranja'],
    ingredientsDetailed: [
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Maçã', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Mamão', baseAmount: 50, unit: 'g', householdMeasure: '1 fatia' },
      { name: 'Suco de Laranja', baseAmount: 50, unit: 'ml', householdMeasure: '1/2 laranja' }
    ],
    instructions: 'Pique as frutas e misture com o suco de laranja.',
    instructionsDetailed: {
      preparacao: ['Pique todas as frutas em tamanhos adequados para a idade.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture o suco de laranja para as frutas não escurecerem e sirva.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 12h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 1, carbs: 26, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s18',
    name: 'Banana Grelhada com Canela',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Banana Nanica', 'Canela', 'Azeite ou Ghee'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' },
      { name: 'Manteiga Ghee', baseAmount: 2, unit: 'g', householdMeasure: 'Ponta de faca' }
    ],
    instructions: 'Grelhe a banana na frigideira e polvilhe canela.',
    instructionsDetailed: {
      preparacao: ['Corte a banana ao meio no sentido do comprimento.'],
      cozimento: ['Aqueça a frigideira com a ghee.', 'Grelhe a banana dos dois lados até dourar.'],
      finalizacao: ['Polvilhe canela e sirva morna.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 115, protein: 1, carbs: 24, fats: 2 },
    isPremium: false
  },
  {
    id: 'cb_s19',
    name: 'Creme de Milho Verde Doce',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Milho Verde', 'Leite de Coco', 'Canela'],
    ingredientsDetailed: [
      { name: 'Milho Verde Fresco', baseAmount: 100, unit: 'g', householdMeasure: '1 espiga' },
      { name: 'Leite de Coco', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Bata o milho com leite, coe e cozinhe até engrossar.',
    instructionsDetailed: {
      preparacao: ['Debulhe o milho e bata com o leite de coco.'],
      cozimento: ['Peneire e leve ao fogo baixo mexendo sempre até engrossar.'],
      finalizacao: ['Sirva em potinhos com canela por cima.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 3, carbs: 24, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_s20',
    name: 'Picolé de Manga e Morango (Bicolor)',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Morango'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Morango', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' }
    ],
    instructions: 'Bata as frutas separadamente e coloque em camadas na forma de picolé.',
    instructionsDetailed: {
      preparacao: ['Bata a manga (sem água) e reserve.', 'Bata o morango (sem água) e reserve.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Coloque uma camada de manga na forma, leve ao freezer por 30 min, depois coloque a de morango e o palito. Deixe por 6 horas.']
    },
    image: '',
    prepTime: '20 min (+ espera)',
    storageInfo: 'Freezer por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 90, protein: 1, carbs: 22, fats: 0.5 },
    isPremium: true
  },
  {
    id: 'cb_s21',
    name: 'Abóbora em Calda de Laranja',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Abóbora de Pescoço', 'Suco de Laranja', 'Canela em Pau'],
    ingredientsDetailed: [
      { name: 'Abóbora em Cubos', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Suco de Laranja', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Canela em Pau', baseAmount: 1, unit: 'unidade', householdMeasure: '1 pau' }
    ],
    instructions: 'Cozinhe a abóbora no suco de laranja com canela até ficar macia.',
    instructionsDetailed: {
      preparacao: ['Corte a abóbora em cubos pequenos.'],
      cozimento: ['Leve ao fogo com o suco e a canela.', 'Cozinhe em fogo baixo até a abóbora estar macia e o suco reduzir pela metade.'],
      finalizacao: ['Retire a canela e sirva fria.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar por 30 dias.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 2, carbs: 28, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s22',
    name: 'Mousse de Abacate e Banana',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Abacate', 'Banana Nanica Madura'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 80, unit: 'g', householdMeasure: '3 colheres de sopa' },
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' }
    ],
    instructions: 'Bata as frutas no mixer até ficar um creme bem liso.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate e descasque a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata bem e sirva gelado. A banana madura adoça naturalmente o abacate.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 190, protein: 2, carbs: 24, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_s23',
    name: 'Gelatina de Manga Natural',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Manga Palmer', 'Gelatina Incolor', 'Água'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 200, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Gelatina Incolor', baseAmount: 12, unit: 'g', householdMeasure: '1 envelope' },
      { name: 'Água', baseAmount: 100, unit: 'ml', householdMeasure: 'Para bater' }
    ],
    instructions: 'Bata a manga com água, misture a gelatina dissolvida e gele.',
    instructionsDetailed: {
      preparacao: ['Bata a manga com a água e coe.', 'Dissolva a gelatina conforme a embalagem.'],
      cozimento: ['Misture a gelatina no suco de manga.'],
      finalizacao: ['Coloque em potinhos e leve à geladeira por 4 horas.']
    },
    image: '',
    prepTime: '15 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 10, carbs: 26, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s24',
    name: 'Bolinho de Maçã e Canela de Caneca',
    age: '1-3 anos',
    category: 'SOBREMESA',
    ingredients: ['Maçã Ralada', 'Ovo', 'Farinha de Aveia', 'Canela'],
    ingredientsDetailed: [
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 ovo' },
      { name: 'Farinha de Aveia', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Canela', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Misture tudo na caneca e asse no micro-ondas.',
    instructionsDetailed: {
      preparacao: ['Rale a maçã e misture com o ovo, aveia e canela na caneca.'],
      cozimento: ['Leve ao micro-ondas por 1 min e 40 segundos.'],
      finalizacao: ['Sirva morno. Sobremesa rápida e saudável.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado congelar.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 7, carbs: 18, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_s25',
    name: 'Gelatina de Frutas Natural (Ágar-Ágar)',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Suco de Fruta Natural', 'Ágar-Ágar', 'Frutas Picadas'],
    ingredientsDetailed: [
      { name: 'Suco de Laranja', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Ágar-Ágar', baseAmount: 2, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Morangos Picados', baseAmount: 30, unit: 'g', householdMeasure: '2 unidades' }
    ],
    instructions: 'Ferva o suco com ágar-ágar, adicione as frutas e deixe gelar.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas.'],
      cozimento: ['Ferva o suco com o ágar-ágar por 2 min.'],
      finalizacao: ['Coloque as frutas em potinhos, despeje o suco e leve à geladeira.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 1, carbs: 20, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s26',
    name: 'Mousse de Manga e Coco',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Leite de Coco', 'Coco Ralado'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Leite de Coco', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' },
      { name: 'Coco Ralado', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata a manga com leite de coco e finalize com coco ralado.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no mixer até ficar cremoso e polvilhe o coco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 1, carbs: 18, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_s27',
    name: 'Picolé de Melancia e Hortelã',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Melancia', 'Hortelã'],
    ingredientsDetailed: [
      { name: 'Melancia', baseAmount: 200, unit: 'g', householdMeasure: '1 fatia grande' },
      { name: 'Hortelã', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' }
    ],
    instructions: 'Bata a melancia com hortelã e congele em forminhas.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes da melancia.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata com hortelã, coloque em formas de picolé e congele.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Congelador por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 60, protein: 1, carbs: 15, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s28',
    name: 'Creme de Papaia com Cassis (Sem Álcool)',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Mamão Papaia', 'Iogurte Natural', 'Suco de Uva Integral'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Suco de Uva Integral', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Bata o mamão com iogurte e finalize com um fio de suco de uva.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata o mamão com iogurte e coloque o suco de uva por cima para decorar.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 4, carbs: 18, fats: 3 },
    isPremium: true
  },
  {
    id: 'cb_s29',
    name: 'Doce de Leite de Coco com Ameixa',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Leite de Coco', 'Ameixa Seca', 'Mel'],
    ingredientsDetailed: [
      { name: 'Leite de Coco', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Ameixa Seca sem Caroço', baseAmount: 30, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe o leite de coco com as ameixas até reduzir e bata.',
    instructionsDetailed: {
      preparacao: ['Pique as ameixas.'],
      cozimento: ['Leve ao fogo com leite de coco e mel até engrossar.'],
      finalizacao: ['Bata no mixer para um creme liso e sirva frio.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 2, carbs: 25, fats: 10 },
    isPremium: false
  },
  {
    id: 'cb_s30',
    name: 'Sorbet de Frutas Amarelas',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Pêssego', 'Banana'],
    ingredientsDetailed: [
      { name: 'Manga Congelada', baseAmount: 50, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Pêssego Congelado', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Banana Congelada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Bata as frutas congeladas no processador até virar sorvete.',
    instructionsDetailed: {
      preparacao: ['Pique e congele as frutas previamente.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo no processador até ficar cremoso e sirva imediatamente.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 1, carbs: 32, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s31',
    name: 'Pudim de Chia com Leite de Amêndoas',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Semente de Chia', 'Leite de Amêndoas', 'Mel', 'Frutas'],
    ingredientsDetailed: [
      { name: 'Semente de Chia', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Leite de Amêndoas', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' },
      { name: 'Frutas Picadas', baseAmount: 20, unit: 'g', householdMeasure: 'Pequena porção' }
    ],
    instructions: 'Misture a chia no leite com mel e deixe hidratar na geladeira.',
    instructionsDetailed: {
      preparacao: ['Misture a chia, o leite e o mel em um pote.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Deixe na geladeira por 4h e sirva com frutas por cima.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 140, protein: 4, carbs: 15, fats: 8 },
    isPremium: true
  },
  {
    id: 'cb_s32',
    name: 'Espetinho de Frutas com Mel',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Uva', 'Morango', 'Manga', 'Mel'],
    ingredientsDetailed: [
      { name: 'Uva sem Semente', baseAmount: 30, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Morango', baseAmount: 30, unit: 'g', householdMeasure: '2 unidades' },
      { name: 'Manga em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '2 cubos' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 fio' }
    ],
    instructions: 'Monte os espetinhos com as frutas e finalize com mel.',
    instructionsDetailed: {
      preparacao: ['Lave e pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Coloque as frutas em palitos próprios e regue com mel.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 80, protein: 1, carbs: 20, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s33',
    name: 'Creme de Abacate com Cacau e Mel',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Abacate', 'Cacau em Pó', 'Mel'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 60, unit: 'g', householdMeasure: '2 colheres de sopa cheias' },
      { name: 'Cacau 100%', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata tudo no mixer até virar um creme de chocolate saudável.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata com cacau e mel até ficar homogêneo e sirva frio.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 2, carbs: 12, fats: 14 },
    isPremium: false
  },
  {
    id: 'cb_s34',
    name: 'Maçã Assada com Canela e Nozes',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Maçã', 'Canela', 'Nozes Picadas'],
    ingredientsDetailed: [
      { name: 'Maçã', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' },
      { name: 'Nozes', baseAmount: 5, unit: 'g', householdMeasure: '1 unidade picada' }
    ],
    instructions: 'Asse a maçã com canela e finalize com nozes.',
    instructionsDetailed: {
      preparacao: ['Retire o miolo da maçã.'],
      cozimento: ['Coloque canela no centro e asse a 180°C por 20 min.'],
      finalizacao: ['Polvilhe as nozes picadas e sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 1, carbs: 22, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_s35',
    name: 'Pêra ao Suco de Uva',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Pêra', 'Suco de Uva Integral', 'Cravo'],
    ingredientsDetailed: [
      { name: 'Pêra Williams', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Suco de Uva Integral', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo pequeno' },
      { name: 'Cravo da Índia', baseAmount: 1, unit: 'unidade', householdMeasure: '1 unidade' }
    ],
    instructions: 'Cozinhe a pêra no suco de uva com cravo até ficar macia.',
    instructionsDetailed: {
      preparacao: ['Descasque a pêra mantendo o cabinho.'],
      cozimento: ['Leve ao fogo com o suco e o cravo até a pêra amaciar e o suco reduzir.'],
      finalizacao: ['Sirva a pêra com a calda de uva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 1, carbs: 35, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s36',
    name: 'Mousse de Morango com Iogurte',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Morango', 'Iogurte Natural', 'Mel'],
    ingredientsDetailed: [
      { name: 'Morango', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata tudo no liquidificador e deixe gelar.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo, coloque em taças e leve à geladeira por 2h.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 120, protein: 5, carbs: 18, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_s37',
    name: 'Picolé de Manga e Iogurte',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' }
    ],
    instructions: 'Bata a manga com iogurte e congele em forminhas.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata com o iogurte, coloque em formas de picolé e congele.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Congelador por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 130, protein: 4, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_s38',
    name: 'Creme de Banana com Pasta de Amendoim',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Pasta de Amendoim', 'Cacau'],
    ingredientsDetailed: [
      { name: 'Banana Madura', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Pasta de Amendoim Integral', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Cacau em Pó', baseAmount: 2, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Amasse a banana e misture com a pasta de amendoim e cacau.',
    instructionsDetailed: {
      preparacao: ['Amasse bem a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture a pasta de amendoim e polvilhe cacau.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 4, carbs: 22, fats: 7 },
    isPremium: true
  },
  {
    id: 'cb_s39',
    name: 'Doce de Abóbora com Coco (Sem Açúcar)',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Abóbora', 'Coco Ralado', 'Canela em Pau'],
    ingredientsDetailed: [
      { name: 'Abóbora de Pescoço', baseAmount: 200, unit: 'g', householdMeasure: '1 xícara grande' },
      { name: 'Coco Ralado sem Açúcar', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Canela em Pau', baseAmount: 1, unit: 'unidade', householdMeasure: '1 unidade' }
    ],
    instructions: 'Cozinhe a abóbora com canela até desmanchar e misture o coco.',
    instructionsDetailed: {
      preparacao: ['Pique a abóbora em cubos.'],
      cozimento: ['Leve ao fogo com um pouco de água e canela até secar e a abóbora amolecer.'],
      finalizacao: ['Amasse com o garfo e misture o coco ralado.']
    },
    image: '',
    prepTime: '30 min',
    storageInfo: 'Geladeira por 5 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 2, carbs: 18, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_s40',
    name: 'Sorbet de Melancia',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Melancia Congelada', 'Limão'],
    ingredientsDetailed: [
      { name: 'Melancia em Cubos Congelada', baseAmount: 200, unit: 'g', householdMeasure: '1 xícara grande' },
      { name: 'Suco de Limão', baseAmount: 5, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Bata a melancia congelada com limão no processador.',
    instructionsDetailed: {
      preparacao: ['Congele os cubos de melancia sem semente.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no processador com limão até ficar cremoso e sirva.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 70, protein: 1, carbs: 16, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s41',
    name: 'Pudim de Leite de Coco e Tapioca',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Leite de Coco', 'Tapioca Granulada', 'Mel'],
    ingredientsDetailed: [
      { name: 'Leite de Coco', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo pequeno' },
      { name: 'Tapioca Granulada', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '2 colheres de chá' }
    ],
    instructions: 'Misture a tapioca no leite de coco quente com mel e deixe firmar.',
    instructionsDetailed: {
      preparacao: ['Aqueça o leite de coco com mel.'],
      cozimento: ['Misture a tapioca e mexa bem.'],
      finalizacao: ['Coloque em uma forma e leve à geladeira por 4h.']
    },
    image: '',
    prepTime: '15 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 1, carbs: 28, fats: 9 },
    isPremium: true
  },
  {
    id: 'cb_s42',
    name: 'Espetinho de Uva e Queijo (Suave)',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Uva sem Semente', 'Queijo Minas Frescal'],
    ingredientsDetailed: [
      { name: 'Uva Itália', baseAmount: 50, unit: 'g', householdMeasure: '6 unidades' },
      { name: 'Queijo Minas em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '3 cubos pequenos' }
    ],
    instructions: 'Intercale uvas e cubos de queijo em palitos.',
    instructionsDetailed: {
      preparacao: ['Lave as uvas e pique o queijo.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Monte os espetinhos e sirva como lanche ou sobremesa.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 5, carbs: 10, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_s43',
    name: 'Creme de Manga com Hortelã e Mel',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Hortelã', 'Mel'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Hortelã', baseAmount: 1, unit: 'g', householdMeasure: 'Folhas' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata a manga com hortelã e mel no mixer.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo até ficar cremoso e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 100, protein: 1, carbs: 24, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s44',
    name: 'Maçã Cozida com Cravo e Canela',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Maçã', 'Cravo', 'Canela em Pau'],
    ingredientsDetailed: [
      { name: 'Maçã', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Cravo da Índia', baseAmount: 1, unit: 'unidade', householdMeasure: '1 unidade' },
      { name: 'Canela em Pau', baseAmount: 1, unit: 'unidade', householdMeasure: '1 unidade' }
    ],
    instructions: 'Cozinhe a maçã em fatias com cravo e canela em pouca água.',
    instructionsDetailed: {
      preparacao: ['Descasque e fatie a maçã.'],
      cozimento: ['Leve ao fogo com as especiarias e água até a maçã ficar bem macia.'],
      finalizacao: ['Retire as especiarias e sirva morno ou frio.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 90, protein: 0.5, carbs: 22, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s45',
    name: 'Pêra Assada com Mel',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Pêra', 'Mel', 'Canela'],
    ingredientsDetailed: [
      { name: 'Pêra Williams', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Corte a pêra ao meio, regue com mel e canela e asse.',
    instructionsDetailed: {
      preparacao: ['Corte a pêra e retire as sementes.'],
      cozimento: ['Regue com mel e canela e asse a 180°C por 15 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 1, carbs: 28, fats: 0.5 },
    isPremium: true
  },
  {
    id: 'cb_s46',
    name: 'Mousse de Maracujá com Iogurte',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Maracujá', 'Iogurte Natural', 'Mel'],
    ingredientsDetailed: [
      { name: 'Polpa de Maracujá', baseAmount: 30, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '2 colheres de chá' }
    ],
    instructions: 'Bata o iogurte com maracujá e mel e deixe gelar.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do maracujá e coe se preferir.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo, coloque em taças e leve à geladeira por 2h.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 7, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_s47',
    name: 'Picolé de Coco e Abacaxi',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Abacaxi', 'Leite de Coco', 'Coco Ralado'],
    ingredientsDetailed: [
      { name: 'Abacaxi Picado', baseAmount: 100, unit: 'g', householdMeasure: '1 fatia média' },
      { name: 'Leite de Coco', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 xícara' },
      { name: 'Coco Ralado', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata o abacaxi com leite de coco e congele com coco ralado.',
    instructionsDetailed: {
      preparacao: ['Pique o abacaxi.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata o abacaxi com leite de coco, misture o coco ralado e congele em formas.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Congelador por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 1, carbs: 12, fats: 7 },
    isPremium: false
  },
  {
    id: 'cb_s48',
    name: 'Creme de Papaia com Iogurte',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Mamão Papaia', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Bata o mamão com iogurte no mixer.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo até ficar cremoso e sirva fresco.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 100, protein: 4, carbs: 15, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_s49',
    name: 'Doce de Banana com Canela',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Banana Madura', 'Canela em Pau', 'Água'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Canela em Pau', baseAmount: 1, unit: 'unidade', householdMeasure: '1 unidade' },
      { name: 'Água', baseAmount: 20, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Cozinhe a banana com canela e um pouco de água até desmanchar.',
    instructionsDetailed: {
      preparacao: ['Pique a banana.'],
      cozimento: ['Leve ao fogo com a canela e água até a banana ficar bem macia e escura.'],
      finalizacao: ['Amasse com o garfo e sirva frio.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 100, protein: 1, carbs: 25, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s50',
    name: 'Mousse de Abacate com Mel',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Abacate', 'Mel', 'Limão'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '2 colheres de chá' },
      { name: 'Limão', baseAmount: 2, unit: 'ml', householdMeasure: 'Gotas' }
    ],
    instructions: 'Bata o abacate com mel e limão no mixer.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo até ficar cremoso e sirva frio.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 2, carbs: 15, fats: 14 },
    isPremium: true
  },
  {
    id: 'cb_s51',
    name: 'Pudim de Chia com Leite de Coco e Manga',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Chia', 'Leite de Coco', 'Manga'],
    ingredientsDetailed: [
      { name: 'Semente de Chia', baseAmount: 20, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Leite de Coco', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 xícara' },
      { name: 'Manga Picada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 xícara' }
    ],
    instructions: 'Misture a chia com o leite de coco e deixe descansar. Sirva com manga.',
    instructionsDetailed: {
      preparacao: ['Misture a chia e o leite de coco.', 'Deixe na geladeira por pelo menos 4 horas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Adicione a manga picada por cima e sirva.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 4, carbs: 15, fats: 12 },
    isPremium: false
  },
  {
    id: 'cb_s52',
    name: 'Gelatina de Suco de Uva Natural com Ágar-Ágar',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Suco de Uva Integral', 'Ágar-Ágar'],
    ingredientsDetailed: [
      { name: 'Suco de Uva Integral', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Ágar-Ágar', baseAmount: 2, unit: 'g', householdMeasure: '1 colher de chá rasa' }
    ],
    instructions: 'Ferva o suco com o ágar-ágar e deixe esfriar.',
    instructionsDetailed: {
      preparacao: ['Misture o pó no suco frio.'],
      cozimento: ['Leve ao fogo e ferva por 2 minutos.'],
      finalizacao: ['Coloque em taças e deixe firmar (não precisa de geladeira para firmar).']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 1, carbs: 30, fats: 0 },
    isPremium: true
  },
  {
    id: 'cb_s53',
    name: 'Banana Assada com Canela e Mel',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Canela', 'Mel'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Asse a banana inteira ou fatiada com canela e mel.',
    instructionsDetailed: {
      preparacao: ['Descasque a banana.'],
      cozimento: ['Leve ao forno ou micro-ondas por 2 minutos.', 'Finalize com mel e canela.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 1, carbs: 28, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s54',
    name: 'Creme de Maçã e Pêra Cozidas',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Maçã', 'Pêra'],
    ingredientsDetailed: [
      { name: 'Maçã', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Pêra', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' }
    ],
    instructions: 'Cozinhe as frutas no vapor e amasse ou bata.',
    instructionsDetailed: {
      preparacao: ['Descasque e tire as sementes.'],
      cozimento: ['Cozinhe no vapor até ficarem bem macias.'],
      finalizacao: ['Amasse com um garfo ou bata no mixer para um creme liso.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar.',
    canFreeze: true,
    nutrition: { calories: 100, protein: 0.5, carbs: 25, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s55',
    name: 'Espetinho de Frutas Variadas',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Uva', 'Morango', 'Manga'],
    ingredientsDetailed: [
      { name: 'Uva sem Semente', baseAmount: 30, unit: 'g', householdMeasure: '3 unidades' },
      { name: 'Morango', baseAmount: 30, unit: 'g', householdMeasure: '2 unidades' },
      { name: 'Manga em Cubos', baseAmount: 30, unit: 'g', householdMeasure: '3 cubos' }
    ],
    instructions: 'Monte as frutas em palitos coloridos.',
    instructionsDetailed: {
      preparacao: ['Lave bem as frutas.', 'Corte a manga em cubos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Monte os espetinhos e sirva imediatamente.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 50, protein: 0.5, carbs: 12, fats: 0.2 },
    isPremium: true
  },
  {
    id: 'cb_s56',
    name: 'Sorbet de Melancia',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Melancia'],
    ingredientsDetailed: [
      { name: 'Melancia Congelada em Cubos', baseAmount: 200, unit: 'g', householdMeasure: '1 xícara grande' }
    ],
    instructions: 'Bata a melancia congelada no processador até virar um creme.',
    instructionsDetailed: {
      preparacao: ['Corte a melancia, tire as sementes e congele por 4 horas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no processador ou liquidificador potente e sirva na hora.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 60, protein: 1, carbs: 15, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s57',
    name: 'Pêra ao Suco de Laranja',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Pêra', 'Suco de Laranja'],
    ingredientsDetailed: [
      { name: 'Pêra', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Suco de Laranja Natural', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Cozinhe a pêra no suco de laranja até ficar macia.',
    instructionsDetailed: {
      preparacao: ['Descasque a pêra mantendo o cabinho.'],
      cozimento: ['Leve ao fogo com o suco de laranja e cozinhe em fogo baixo até a pêra amaciar.'],
      finalizacao: ['Sirva a pêra com a calda que se formou.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 1, carbs: 26, fats: 0.5 },
    isPremium: true
  },
  {
    id: 'cb_s58',
    name: 'Danoninho Caseiro de Inhame',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Inhame', 'Morango', 'Mel'],
    ingredientsDetailed: [
      { name: 'Inhame Cozido', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade média' },
      { name: 'Morangos', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o inhame cozido com os morangos e o mel.',
    instructionsDetailed: {
      preparacao: ['Cozinhe o inhame até ficar bem macio.'],
      cozimento: ['Não vai ao fogo (após o inhame cozido).'],
      finalizacao: ['Bata tudo no liquidificador até ficar bem liso e leve à geladeira.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 140, protein: 3, carbs: 30, fats: 1 },
    isPremium: true
  },
  {
    id: 'cb_s59',
    name: 'Compota de Figo Fresco (Sem Açúcar)',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Figo Fresco', 'Suco de Maçã'],
    ingredientsDetailed: [
      { name: 'Figos Frescos', baseAmount: 150, unit: 'g', householdMeasure: '3 unidades' },
      { name: 'Suco de Maçã Integral', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' }
    ],
    instructions: 'Cozinhe os figos no suco de maçã até ficarem macios.',
    instructionsDetailed: {
      preparacao: ['Lave os figos e corte ao meio.'],
      cozimento: ['Leve ao fogo com o suco de maçã e cozinhe em fogo baixo até reduzir o líquido.'],
      finalizacao: ['Sirva frio.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 5 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 1.5, carbs: 32, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s60',
    name: 'Mousse de Maracujá com Iogurte',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Suco de Maracujá', 'Iogurte Natural', 'Mel'],
    ingredientsDetailed: [
      { name: 'Suco de Maracujá Concentrado', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' },
      { name: 'Iogurte Natural', baseAmount: 150, unit: 'g', householdMeasure: '1 pote' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Misture o suco de maracujá com o iogurte e o mel.',
    instructionsDetailed: {
      preparacao: ['Extraia o suco do maracujá.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture bem todos os ingredientes e leve à geladeira por 1 hora.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 150, protein: 6, carbs: 20, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_s61',
    name: 'Salada de Frutas com Calda de Laranja',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Maçã', 'Laranja'],
    ingredientsDetailed: [
      { name: 'Banana', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Maçã', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Suco de Laranja', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 copo' }
    ],
    instructions: 'Pique as frutas e cubra com o suco de laranja.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas em cubos pequenos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture as frutas com o suco e sirva fresco.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 80, protein: 1, carbs: 20, fats: 0.3 },
    isPremium: false
  },
  {
    id: 'cb_s62',
    name: 'Creme de Manga com Hortelã',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Hortelã'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Hortelã', baseAmount: 1, unit: 'g', householdMeasure: '2 folhas' }
    ],
    instructions: 'Bata a manga com hortelã no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Pique a manga e as folhas de hortelã.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata até ficar um creme bem homogêneo e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 90, protein: 1, carbs: 22, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s63',
    name: 'Abacaxi Grelhado com Raspas de Limão',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Abacaxi', 'Limão'],
    ingredientsDetailed: [
      { name: 'Fatia de Abacaxi', baseAmount: 80, unit: 'g', householdMeasure: '1 fatia média' },
      { name: 'Limão (Raspas)', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Grelhe o abacaxi na frigideira e finalize com raspas de limão.',
    instructionsDetailed: {
      preparacao: ['Descasque e corte o abacaxi.'],
      cozimento: ['Grelhe em frigideira antiaderente até dourar dos dois lados.'],
      finalizacao: ['Coloque as raspas de limão por cima e sirva morno.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 45, protein: 0.4, carbs: 11, fats: 0.1 },
    isPremium: true
  },
  {
    id: 'cb_s64',
    name: 'Pudim de Leite Materno ou Fórmula (Para Bebês)',
    age: '7 meses+',
    category: 'SOBREMESA',
    ingredients: ['Leite Materno/Fórmula', 'Gema de Ovo', 'Amido de Milho'],
    ingredientsDetailed: [
      { name: 'Leite Materno ou Fórmula Preparada', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' },
      { name: 'Gema de Ovo', baseAmount: 1, unit: 'unidade', householdMeasure: '1 gema' },
      { name: 'Amido de Milho', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Cozinhe os ingredientes em fogo baixo até engrossar.',
    instructionsDetailed: {
      preparacao: ['Misture a gema e o amido no leite frio.'],
      cozimento: ['Leve ao fogo baixo mexendo sempre até engrossar (não deixe ferver muito se for leite materno).'],
      finalizacao: ['Deixe esfriar e sirva.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 120, protein: 4, carbs: 10, fats: 7 },
    isPremium: true
  },
  {
    id: 'cb_s65',
    name: 'Creme de Caqui bem Madurinho',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Caqui'],
    ingredientsDetailed: [
      { name: 'Caqui Rama Forte bem Maduro', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' }
    ],
    instructions: 'Retire a polpa do caqui e amasse.',
    instructionsDetailed: {
      preparacao: ['Lave bem o caqui.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Retire a casca e as sementes, amasse a polpa com um garfo e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 70, protein: 0.5, carbs: 18, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s66',
    name: 'Gelatina de Melancia Natural',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Melancia', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Suco de Melancia', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Gelatina em Pó Incolor', baseAmount: 6, unit: 'g', householdMeasure: '1/2 envelope' }
    ],
    instructions: 'Dissolva a gelatina no suco de melancia e leve à geladeira.',
    instructionsDetailed: {
      preparacao: ['Bata a melancia e coe para obter o suco.'],
      cozimento: ['Hidrate e dissolva a gelatina conforme a embalagem e misture ao suco.'],
      finalizacao: ['Coloque em potinhos e leve à geladeira até firmar.']
    },
    image: '',
    prepTime: '15 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 80, protein: 5, carbs: 15, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s67',
    name: 'Maçã Assada com Passas',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Maçã', 'Uva Passa'],
    ingredientsDetailed: [
      { name: 'Maçã', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Uva Passa sem Semente', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Retire o miolo da maçã, preencha com passas e asse.',
    instructionsDetailed: {
      preparacao: ['Retire o miolo da maçã com um extrator ou faca.'],
      cozimento: ['Coloque as passas no centro e asse a 180°C por 20 min.'],
      finalizacao: ['Sirva morno.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 0.5, carbs: 22, fats: 0.3 },
    isPremium: true
  },
  {
    id: 'cb_s68',
    name: 'Creme de Milho Doce (Pamonha de Colher)',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Milho Verde', 'Leite de Coco', 'Mel'],
    ingredientsDetailed: [
      { name: 'Milho Verde', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Leite de Coco', baseAmount: 30, unit: 'ml', householdMeasure: '2 colheres de sopa' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata o milho com leite de coco, coe e cozinhe com mel.',
    instructionsDetailed: {
      preparacao: ['Bata o milho com o leite de coco e peneire.'],
      cozimento: ['Leve ao fogo mexendo sempre até engrossar. Adicione o mel no final.'],
      finalizacao: ['Sirva morno ou frio.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 3, carbs: 25, fats: 6 },
    isPremium: false
  },
  {
    id: 'cb_s69',
    name: 'Picolé de Iogurte com Frutas Picadas',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Iogurte Natural', 'Frutas Variadas'],
    ingredientsDetailed: [
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' },
      { name: 'Frutas Picadas (Kiwi, Morango)', baseAmount: 30, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Coloque as frutas nas formas de picolé, complete com iogurte e congele.',
    instructionsDetailed: {
      preparacao: ['Pique as frutas bem pequenas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Monte os picolés e leve ao freezer por 6 horas.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Congelador por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 5, carbs: 12, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_s70',
    name: 'Creme de Banana com Pasta de Amendoim',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Pasta de Amendoim'],
    ingredientsDetailed: [
      { name: 'Banana Madura', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Pasta de Amendoim Integral', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata a banana congelada com a pasta de amendoim.',
    instructionsDetailed: {
      preparacao: ['Congele a banana em rodelas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no processador até virar um sorvete cremoso.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 150, protein: 3, carbs: 25, fats: 5 },
    isPremium: false
  },
  {
    id: 'cb_s71',
    name: 'Pêra Cozida com Raspas de Laranja',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Pêra', 'Laranja'],
    ingredientsDetailed: [
      { name: 'Pêra', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Suco de Laranja', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 copo' }
    ],
    instructions: 'Cozinhe a pêra no suco de laranja e finalize com raspas.',
    instructionsDetailed: {
      preparacao: ['Descasque a pêra.'],
      cozimento: ['Cozinhe a pêra no suco até ficar macia.'],
      finalizacao: ['Coloque raspas da casca da laranja por cima e sirva.']
    },
    image: '',
    prepTime: '20 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 0.5, carbs: 22, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s72',
    name: 'Mousse de Morango com Tofu',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Tofu Soft', 'Morango', 'Mel'],
    ingredientsDetailed: [
      { name: 'Tofu Soft (Macio)', baseAmount: 100, unit: 'g', householdMeasure: '1/2 xícara' },
      { name: 'Morangos', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata o tofu com os morangos e o mel no liquidificador.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo até ficar um creme aveludado e leve à geladeira.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 8, carbs: 18, fats: 4 },
    isPremium: true
  },
  {
    id: 'cb_s73',
    name: 'Gelatina de Abacaxi com Hortelã Natural',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Abacaxi', 'Hortelã', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Suco de Abacaxi Natural', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Hortelã', baseAmount: 1, unit: 'g', householdMeasure: '3 folhas' },
      { name: 'Gelatina Incolor', baseAmount: 6, unit: 'g', householdMeasure: '1/2 envelope' }
    ],
    instructions: 'Bata o abacaxi com hortelã, coe, misture a gelatina e congele.',
    instructionsDetailed: {
      preparacao: ['Bata o abacaxi com hortelã e coe.'],
      cozimento: ['Dissolva a gelatina e misture ao suco.'],
      finalizacao: ['Coloque em taças e leve à geladeira até firmar.']
    },
    image: '',
    prepTime: '20 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 5, carbs: 18, fats: 0.1 },
    isPremium: false
  },
  {
    id: 'cb_s74',
    name: 'Creme de Abacate com Banana',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Abacate', 'Banana'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 50, unit: 'g', householdMeasure: '2 colheres de sopa' },
      { name: 'Banana Madura', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Amasse o abacate com a banana.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa das frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse bem com um garfo até formar um creme e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 1.5, carbs: 15, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_s75',
    name: 'Picolé de Manga e Maracujá',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Maracujá'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 150, unit: 'g', householdMeasure: '1 unidade pequena' },
      { name: 'Polpa de Maracujá', baseAmount: 20, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Bata a manga, misture o maracujá e congele.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata a manga, misture a polpa de maracujá (com sementes se a criança já comer) e congele.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Congelador por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 100, protein: 1, carbs: 24, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s76',
    name: 'Gelatina de Melancia Natural',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Melancia', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Suco de Melancia Natural', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Gelatina em Pó sem Sabor', baseAmount: 6, unit: 'g', householdMeasure: '1/2 sachê' }
    ],
    instructions: 'Bata a melancia, coe e misture a gelatina hidratada.',
    instructionsDetailed: {
      preparacao: ['Bata a melancia no liquidificador e peneire.'],
      cozimento: ['Hidrate e dissolva a gelatina conforme a embalagem.', 'Misture ao suco de melancia.'],
      finalizacao: ['Coloque em potinhos e leve à geladeira por 4h.']
    },
    image: '',
    prepTime: '15 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 80, protein: 5, carbs: 15, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s77',
    name: 'Creme de Papaia com Maçã',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Mamão Papaia', 'Maçã'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 80, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Maçã Ralada', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Amasse o mamão e misture com a maçã ralada.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.', 'Rale a maçã no ralo fino.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture as duas frutas até formar um creme homogêneo.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 85, protein: 1, carbs: 20, fats: 0.3 },
    isPremium: false
  },
  {
    id: 'cb_s78',
    name: 'Pudim de Chia com Leite de Coco e Manga',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Semente de Chia', 'Leite de Coco', 'Manga'],
    ingredientsDetailed: [
      { name: 'Semente de Chia', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa cheia' },
      { name: 'Leite de Coco', baseAmount: 100, unit: 'ml', householdMeasure: '1/2 copo' },
      { name: 'Manga em Cubinhos', baseAmount: 40, unit: 'g', householdMeasure: '2 colheres de sopa' }
    ],
    instructions: 'Misture a chia no leite de coco e deixe descansar, depois adicione a manga.',
    instructionsDetailed: {
      preparacao: ['Misture a chia no leite de coco.'],
      cozimento: ['Deixe na geladeira por pelo menos 4h para a chia hidratar.'],
      finalizacao: ['Cubra com os cubinhos de manga fresca antes de servir.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 160, protein: 4, carbs: 18, fats: 9 },
    isPremium: false
  },
  {
    id: 'cb_s79',
    name: 'Banana Assada com Canela',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Canela em Pó'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Canela em Pó', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Asse a banana inteira ou em fatias e polvilhe canela.',
    instructionsDetailed: {
      preparacao: ['Descasque a banana e corte ao meio no sentido do comprimento.'],
      cozimento: ['Leve ao forno ou airfryer por 10 min até dourar.'],
      finalizacao: ['Polvilhe canela e sirva morna.']
    },
    image: '',
    prepTime: '12 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 95, protein: 1, carbs: 24, fats: 0.3 },
    isPremium: false
  },
  {
    id: 'cb_s80',
    name: 'Sorbet de Melão e Hortelã',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Melão', 'Hortelã'],
    ingredientsDetailed: [
      { name: 'Melão Congelado em Cubos', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Hortelã', baseAmount: 1, unit: 'g', householdMeasure: '2 folhas' }
    ],
    instructions: 'Bata o melão congelado com hortelã até virar um creme.',
    instructionsDetailed: {
      preparacao: ['Congele o melão sem casca e sem sementes por 6h.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no processador com a hortelã até ficar com textura de sorvete.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 55, protein: 1, carbs: 13, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s81',
    name: 'Creme de Pêra com Baunilha Natural',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Pêra', 'Extrato de Baunilha'],
    ingredientsDetailed: [
      { name: 'Pêra Williams', baseAmount: 120, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Extrato de Baunilha', baseAmount: 1, unit: 'ml', householdMeasure: '2 gotas' }
    ],
    instructions: 'Cozinhe a pêra, amasse e adicione a baunilha.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique a pêra.'],
      cozimento: ['Cozinhe com um pouco de água até ficar bem macia.', 'Amasse com um garfo.'],
      finalizacao: ['Misture a baunilha e sirva morno ou frio.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 75, protein: 0.5, carbs: 18, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s82',
    name: 'Espetinho de Frutas com Calda de Cacau',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Uva', 'Morango', 'Banana', 'Cacau em Pó'],
    ingredientsDetailed: [
      { name: 'Frutas Variadas', baseAmount: 100, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Cacau em Pó 100%', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Água Quente', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sobremesa' }
    ],
    instructions: 'Monte as frutas no palito e faça uma calda com cacau e água.',
    instructionsDetailed: {
      preparacao: ['Lave e pique as frutas.'],
      cozimento: ['Misture o cacau com a água quente até formar uma calda espessa.'],
      finalizacao: ['Monte os espetinhos e regue com a calda de cacau.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 2, carbs: 18, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_s83',
    name: 'Gelatina de Laranja com Pedaços de Fruta',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Suco de Laranja', 'Gelatina Incolor', 'Gomos de Laranja'],
    ingredientsDetailed: [
      { name: 'Suco de Laranja Natural', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Gelatina em Pó sem Sabor', baseAmount: 6, unit: 'g', householdMeasure: '1/2 sachê' },
      { name: 'Gomos de Laranja sem Pele', baseAmount: 30, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Misture a gelatina ao suco e adicione os pedaços de laranja.',
    instructionsDetailed: {
      preparacao: ['Retire a pele e as sementes dos gomos de laranja.'],
      cozimento: ['Dissolva a gelatina no suco aquecido.'],
      finalizacao: ['Coloque os pedaços de fruta nos potinhos, despeje o suco e leve à geladeira.']
    },
    image: '',
    prepTime: '20 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 5, carbs: 22, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s84',
    name: 'Creme de Manga com Iogurte',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Manga Palmer', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' }
    ],
    instructions: 'Bata a manga com o iogurte até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Pique a manga.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no liquidificador e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 135, protein: 5, carbs: 22, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_s85',
    name: 'Maçã Cozida com Suco de Uva',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Maçã', 'Suco de Uva Integral'],
    ingredientsDetailed: [
      { name: 'Maçã', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Suco de Uva Integral', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 copo' }
    ],
    instructions: 'Cozinhe a maçã no suco de uva até ficar macia.',
    instructionsDetailed: {
      preparacao: ['Descasque e fatie a maçã.'],
      cozimento: ['Leve ao fogo com o suco de uva e cozinhe em fogo baixo até o suco reduzir e a maçã amolecer.'],
      finalizacao: ['Sirva morno ou frio.']
    },
    image: '',
    prepTime: '15 min',
    storageInfo: 'Geladeira por 2 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 110, protein: 0.5, carbs: 26, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s86',
    name: 'Picolé de Melancia e Limão',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Melancia', 'Limão'],
    ingredientsDetailed: [
      { name: 'Melancia', baseAmount: 200, unit: 'g', householdMeasure: '1 fatia grande' },
      { name: 'Suco de Limão', baseAmount: 5, unit: 'ml', householdMeasure: 'Algumas gotas' }
    ],
    instructions: 'Bata a melancia com limão e congele em formas de picolé.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes da melancia.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata a melancia com o limão, coloque em formas e leve ao freezer.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Freezer por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 65, protein: 1, carbs: 15, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s87',
    name: 'Creme de Abacate com Cacau',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Abacate', 'Cacau em Pó', 'Mel'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Cacau em Pó 100%', baseAmount: 5, unit: 'g', householdMeasure: '1 colher de chá' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' }
    ],
    instructions: 'Bata o abacate com cacau e mel até ficar um creme aveludado.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo no mixer ou liquidificador e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 2, carbs: 12, fats: 14 },
    isPremium: false
  },
  {
    id: 'cb_s88',
    name: 'Gelatina de Morango Natural',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Morango', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Morangos', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Gelatina em Pó sem Sabor', baseAmount: 6, unit: 'g', householdMeasure: '1/2 sachê' }
    ],
    instructions: 'Bata os morangos, coe e misture a gelatina hidratada.',
    instructionsDetailed: {
      preparacao: ['Lave e bata os morangos com um pouco de água.'],
      cozimento: ['Dissolva a gelatina e misture ao suco de morango.'],
      finalizacao: ['Coloque em potinhos e leve à geladeira.']
    },
    image: '',
    prepTime: '15 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 75, protein: 5, carbs: 12, fats: 0.4 },
    isPremium: false
  },
  {
    id: 'cb_s89',
    name: 'Pêra Assada com Mel e Nozes',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Pêra', 'Mel', 'Nozes'],
    ingredientsDetailed: [
      { name: 'Pêra Williams', baseAmount: 120, unit: 'g', householdMeasure: '1 unidade grande' },
      { name: 'Mel', baseAmount: 5, unit: 'ml', householdMeasure: '1 colher de chá' },
      { name: 'Nozes Picadas', baseAmount: 5, unit: 'g', householdMeasure: '1 unidade' }
    ],
    instructions: 'Asse a pêra com mel e finalize com nozes picadas.',
    instructionsDetailed: {
      preparacao: ['Corte a pêra ao meio e retire as sementes.'],
      cozimento: ['Regue com mel e asse por 20 min a 180°C.'],
      finalizacao: ['Polvilhe as nozes picadas por cima e sirva morna.']
    },
    image: '',
    prepTime: '25 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 130, protein: 1, carbs: 22, fats: 4 },
    isPremium: false
  },
  {
    id: 'cb_s90',
    name: 'Sorbet de Manga e Gengibre',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Manga', 'Gengibre'],
    ingredientsDetailed: [
      { name: 'Manga Congelada em Cubos', baseAmount: 150, unit: 'g', householdMeasure: '1 xícara' },
      { name: 'Gengibre Ralado', baseAmount: 1, unit: 'g', householdMeasure: 'Pitada' }
    ],
    instructions: 'Bata a manga congelada com o gengibre até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Congele a manga por 6h.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no processador com o gengibre até atingir a textura de sorvete.']
    },
    image: '',
    prepTime: '5 min (+ espera)',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 95, protein: 1, carbs: 24, fats: 0.5 },
    isPremium: false
  },
  {
    id: 'cb_s91',
    name: 'Creme de Banana com Farelo de Aveia',
    age: '9 meses+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Farelo de Aveia'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Farelo de Aveia', baseAmount: 10, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Amasse a banana e misture o farelo de aveia.',
    instructionsDetailed: {
      preparacao: ['Amasse bem a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture a aveia e sirva imediatamente.']
    },
    image: '',
    prepTime: '3 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 125, protein: 2, carbs: 28, fats: 1 },
    isPremium: false
  },
  {
    id: 'cb_s92',
    name: 'Gelatina de Maçã Natural',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Suco de Maçã', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Suco de Maçã Natural', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Gelatina em Pó sem Sabor', baseAmount: 6, unit: 'g', householdMeasure: '1/2 sachê' }
    ],
    instructions: 'Misture a gelatina ao suco de maçã e leve à geladeira.',
    instructionsDetailed: {
      preparacao: ['Bata a maçã com água e coe para obter o suco.'],
      cozimento: ['Dissolva a gelatina no suco aquecido.'],
      finalizacao: ['Coloque em potinhos e leve à geladeira.']
    },
    image: '',
    prepTime: '20 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 90, protein: 5, carbs: 18, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s93',
    name: 'Picolé de Kiwi e Água de Coco',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Kiwi', 'Água de Coco'],
    ingredientsDetailed: [
      { name: 'Kiwi em Rodelas', baseAmount: 50, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Água de Coco', baseAmount: 150, unit: 'ml', householdMeasure: '1 copo pequeno' }
    ],
    instructions: 'Coloque as rodelas de kiwi nas formas e complete com água de coco.',
    instructionsDetailed: {
      preparacao: ['Descasque e fatie o kiwi.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Coloque as frutas nas formas, adicione a água de coco e leve ao freezer.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Freezer por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 60, protein: 1, carbs: 14, fats: 0.3 },
    isPremium: false
  },
  {
    id: 'cb_s94',
    name: 'Creme de Mamão com Iogurte',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Mamão Papaia', 'Iogurte Natural'],
    ingredientsDetailed: [
      { name: 'Mamão Papaia', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Iogurte Natural', baseAmount: 100, unit: 'g', householdMeasure: '1/2 pote' }
    ],
    instructions: 'Bata o mamão com o iogurte até ficar cremoso.',
    instructionsDetailed: {
      preparacao: ['Retire as sementes do mamão.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata no liquidificador e sirva gelado.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Pode congelar como picolé.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 5, carbs: 15, fats: 3 },
    isPremium: false
  },
  {
    id: 'cb_s95',
    name: 'Banana com Pasta de Amendoim',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Pasta de Amendoim Integral'],
    ingredientsDetailed: [
      { name: 'Banana Nanica', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Pasta de Amendoim', baseAmount: 15, unit: 'g', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Corte a banana e cubra com pasta de amendoim.',
    instructionsDetailed: {
      preparacao: ['Fatie a banana.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Passe a pasta de amendoim sobre as fatias de banana e sirva.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 180, protein: 5, carbs: 26, fats: 8 },
    isPremium: false
  },
  {
    id: 'cb_s96',
    name: 'Gelatina de Melão Natural',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Melão', 'Gelatina Incolor'],
    ingredientsDetailed: [
      { name: 'Suco de Melão Natural', baseAmount: 200, unit: 'ml', householdMeasure: '1 copo' },
      { name: 'Gelatina em Pó sem Sabor', baseAmount: 6, unit: 'g', householdMeasure: '1/2 sachê' }
    ],
    instructions: 'Bata o melão, coe e misture a gelatina hidratada.',
    instructionsDetailed: {
      preparacao: ['Bata o melão no liquidificador e peneire.'],
      cozimento: ['Dissolva a gelatina e misture ao suco.'],
      finalizacao: ['Coloque em potinhos e leve à geladeira.']
    },
    image: '',
    prepTime: '20 min (+ espera)',
    storageInfo: 'Geladeira por 3 dias.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 70, protein: 5, carbs: 12, fats: 0.2 },
    isPremium: false
  },
  {
    id: 'cb_s97',
    name: 'Creme de Morango com Banana',
    age: '6 meses+',
    category: 'SOBREMESA',
    ingredients: ['Morango', 'Banana'],
    ingredientsDetailed: [
      { name: 'Morangos', baseAmount: 50, unit: 'g', householdMeasure: '4 unidades' },
      { name: 'Banana Madura', baseAmount: 50, unit: 'g', householdMeasure: '1/2 unidade' }
    ],
    instructions: 'Amasse o morango com a banana.',
    instructionsDetailed: {
      preparacao: ['Lave os morangos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse bem as duas frutas até formar um purê homogêneo.']
    },
    image: '',
    prepTime: '5 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 70, protein: 1, carbs: 16, fats: 0.3 },
    isPremium: false
  },
  {
    id: 'cb_s98',
    name: 'Picolé de Pêra e Maçã',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Pêra', 'Maçã'],
    ingredientsDetailed: [
      { name: 'Pêra', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' },
      { name: 'Maçã', baseAmount: 100, unit: 'g', householdMeasure: '1 unidade' }
    ],
    instructions: 'Bata as frutas com um pouco de água e congele.',
    instructionsDetailed: {
      preparacao: ['Descasque e pique as frutas.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Bata tudo no liquidificador, coloque em formas de picolé e congele.']
    },
    image: '',
    prepTime: '10 min (+ espera)',
    storageInfo: 'Freezer por 30 dias.',
    freezingTips: 'Já é um congelado.',
    canFreeze: true,
    nutrition: { calories: 110, protein: 1, carbs: 28, fats: 0.4 },
    isPremium: false
  },
  {
    id: 'cb_s99',
    name: 'Creme de Abacate com Mel',
    age: '2 anos+',
    category: 'SOBREMESA',
    ingredients: ['Abacate', 'Mel'],
    ingredientsDetailed: [
      { name: 'Abacate', baseAmount: 100, unit: 'g', householdMeasure: '1/2 unidade pequena' },
      { name: 'Mel', baseAmount: 10, unit: 'ml', householdMeasure: '1 colher de sopa' }
    ],
    instructions: 'Amasse o abacate e misture o mel.',
    instructionsDetailed: {
      preparacao: ['Retire a polpa do abacate.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Amasse bem e misture o mel até ficar cremoso.']
    },
    image: '',
    prepTime: '3 min',
    storageInfo: 'Consumir na hora.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 190, protein: 1.5, carbs: 18, fats: 14 },
    isPremium: false
  },
  {
    id: 'cb_s100',
    name: 'Salada de Frutas com Suco de Laranja',
    age: '1 ano+',
    category: 'SOBREMESA',
    ingredients: ['Banana', 'Maçã', 'Mamão', 'Suco de Laranja'],
    ingredientsDetailed: [
      { name: 'Banana', baseAmount: 30, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Maçã', baseAmount: 30, unit: 'g', householdMeasure: '1/4 unidade' },
      { name: 'Mamão', baseAmount: 30, unit: 'g', householdMeasure: '1 colher de sopa' },
      { name: 'Suco de Laranja Natural', baseAmount: 50, unit: 'ml', householdMeasure: '1/4 copo' }
    ],
    instructions: 'Pique as frutas e misture com o suco de laranja.',
    instructionsDetailed: {
      preparacao: ['Pique todas as frutas em cubos pequenos.'],
      cozimento: ['Não vai ao fogo.'],
      finalizacao: ['Misture as frutas em uma tigela e adicione o suco de laranja fresco.']
    },
    image: '',
    prepTime: '10 min',
    storageInfo: 'Geladeira por 24h.',
    freezingTips: 'Não recomendado.',
    canFreeze: false,
    nutrition: { calories: 85, protein: 1, carbs: 20, fats: 0.3 },
    isPremium: false
  },
];
