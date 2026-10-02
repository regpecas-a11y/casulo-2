// BANCO DE DADOS COMPLETO E DETALHADO DOS 20 EXERCÍCIOS DE YOGA & PILATES PRÉ-NATAL
// Correspondentes aos 20 vídeos gerados em alta fidelidade

export interface RichPrenatalExercise {
  id: string;
  name: string;
  sanskritName: string;
  phaseId: 'phase1' | 'phase2' | 'phase3' | 'phase4' | 'phase5';
  phaseBadge: string;
  videoNumber: number;
  difficulty: 'Suave / Iniciante' | 'Moderado / Seguro' | 'Relaxamento Profundo';
  icon: string;
  targetArea: string;
  primaryBenefit: string;
  clinicalPhysiology: string;
  movementAnimation: 'seatedGround' | 'sideStretch' | 'pelvicCircle' | 'gluteBridge' | 'squatHold' | 'catWave' | 'butterfly' | 'zipperAbs' | 'chestOpen' | 'babySling' | 'babyDance' | 'babyTree' | 'cobra' | 'candle' | 'boat' | 'legs' | 'standing' | 'child' | 'catcow' | 'hips' | 'squat' | 'wings' | string;
  steps: {
    title: string;
    description: string;
  }[];
  breathingSync: {
    inhale: string;
    hold?: string;
    exhale: string;
    tip: string;
  };
  recommendedDuration: string;
  safetyAlerts: string[];
  clinicalModifications: string[];
  musclesWorked: string[];
  videoUrl?: string;
  benefit?: string;
  duration?: string;
}

export const RICH_PRENATAL_EXERCISES: RichPrenatalExercise[] = [
  // ==========================================
  // FASE 1: 1º TRIMESTRE (SEMENTE & ADAPTAÇÃO)
  // ==========================================
  {
    id: 'seated-tadasana',
    name: 'Aterramento & Postura Consciente na Cadeira',
    sanskritName: 'Tadasana Sentada',
    phaseId: 'phase1',
    phaseBadge: '1º Trimestre',
    videoNumber: 11,
    videoUrl: 'https://drive.google.com/file/d/1E4_gYIKpdAavTX8k7DlKgWIq0UarLqhq/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🪑',
    targetArea: 'Coluna Vertebral, Diafragma e Estabilidade Postural',
    primaryBenefit: 'Alinha os eixos ósseos sem sobrecarga articular, ancorando o centro de gravidade e aliviando a fadiga precoce.',
    clinicalPhysiology: 'No 1º trimestre, o aumento expressivo da progesterona e da relaxina amolece precocemente os ligamentos e causa instabilidade e hipotensão postural. Sentar com apoio nas coxas e pés firmes estabiliza o retorno venoso e protege a lombar.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Posicionamento Inicial', description: 'Sente-se no terço anterior de uma cadeira firme de madeira, mantendo os ísquios (ossos do bumbum) bem apoiados e a coluna longa.' },
      { title: '2. Base dos Pés', description: 'Plante os pés descalços paralelos no chão, na largura dos quadris, sentindo os 4 cantos da sola do pé tocando o solo firme.' },
      { title: '3. Acomodação das Mãos', description: 'Pouse as palmas das mãos suavemente sobre as coxas ou envolva o baixo ventre, relaxando os cotovelos junto ao tronco.' },
      { title: '4. Crescimento Axial', description: 'Imagine um fio suave puxando o topo da cabeça em direção ao teto, recolhendo ligeiramente o queixo para alongar a cervical.' }
    ],
    breathingSync: {
      inhale: 'Inale em 4 segundos pelo nariz, sentindo as costelas laterais se abrirem suavemente.',
      exhale: 'Exale em 6 segundos soltando o ar pela boca suave como quem assopra uma vela, relaxando os ombros.',
      tip: 'Não prenda a respiração; a expiração mais longa acalma o nervo vago e diminui episódios de enjoo matinal.'
    },
    recommendedDuration: '5 a 8 ciclos respiratórios lentos (aprox. 2 minutos)',
    safetyAlerts: [
      'Não incline o tronco para trás colapsando a lombar contra o encosto da cadeira.',
      'Evite cruzar as pernas para não comprimir os vasos sanguíneos femorais.'
    ],
    clinicalModifications: [
      'Se os pés não tocarem o chão com facilidade, coloque um bloco de yoga ou livro grosso sob as solas.',
      'Em caso de tontura matinal, mantenha os olhos abertos fixando um ponto neutro à frente.'
    ],
    musclesWorked: ['Multífidos Lombares', 'Eretores da Espinha', 'Transverso Abdominal (suporte estático)', 'Pernas']
  },
  {
    id: 'heart-womb-connection',
    name: 'Toque do Coração sobre o Ventre (Conexão com a Sementinha)',
    sanskritName: 'Hridaya Garbha Mudra',
    phaseId: 'phase1',
    phaseBadge: '1º Trimestre',
    videoNumber: 14,
    videoUrl: 'https://drive.google.com/file/d/1rSUboa9Oq0dh0et1LmAIS7rCRzsHxPOo/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '💚',
    targetArea: 'Sistema Nervoso Parassimpático, Útero e Vínculo Afetivo',
    primaryBenefit: 'Desperta a vinculação mãe-bebê precoce, reduz o cortisol materno e inunda a circulação fetal com ocitocina.',
    clinicalPhysiology: 'A estimulação tátil calorosa sobre o plexo solar e o baixo ventre estimula a liberação de ocitocina e neurotransmissores calmantes. Isso modula a resposta ao estresse da gestante, melhorando a perfusão sanguínea uteroplacentária.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Postura de Meditação', description: 'Sente-se confortavelmente em uma cadeira ou com pernas cruzadas sobre uma almofada, com a coluna ereta e cabeça alinhada.' },
      { title: '2. Formato do Coração', description: 'Junte os polegares e os indicadores formando um coração suave com as duas mãos.' },
      { title: '3. Repouso sobre o Ventre', description: 'Acomode o coração formado pelas mãos logo abaixo do umbigo, na região do útero que agora abriga o embrião.' },
      { title: '4. Presença e Afeto', description: 'Feche os olhos ou baixe suavemente o olhar, direcionando pensamentos acolhedores e calor térmico das mãos para o bebê.' }
    ],
    breathingSync: {
      inhale: 'Puxe o ar profundamente pelo nariz enviando luz e calor para as palmas das mãos.',
      exhale: 'Solte o ar suavemente com um leve suspiro inaudível, imaginando que você envolve seu bebê num abraço seguro.',
      tip: 'Sinta o pulsar sutil sob as pontas dos dedos e sincronize com a sua paz mental.'
    },
    recommendedDuration: '8 a 10 respirações profundas (3 minutos de ancoramento)',
    safetyAlerts: [
      'Não exerça nenhuma pressão forte sobre o abdômen; o toque deve ser tão macio quanto uma carícia.',
      'Não force a respiração se sentir falta de ar; volte ao ritmo natural.'
    ],
    clinicalModifications: [
      'Pode ser praticado recostada em 45 graus com travesseiros fofos atrás das costas se sentir fadiga.',
      'Coloque uma música instrumental de fundo a 432Hz para amplificar o relaxamento.'
    ],
    musclesWorked: ['Diafragma', 'Trapézio Superior (relaxamento)', 'Músculos da Mímica Facial']
  },
  {
    id: 'seated-piriformis-chair',
    name: 'Alongamento do Piriforme na Cadeira (Alívio do Ciático)',
    sanskritName: 'Eka Pada Rajakapotasana na Cadeira',
    phaseId: 'phase1',
    phaseBadge: '1º Trimestre',
    videoNumber: 15,
    videoUrl: 'https://drive.google.com/file/d/1uvzENsYbjvx1RRumr0roNF3LAgOTLn-J/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🦵',
    targetArea: 'Nervo Ciático, Músculo Piriforme e Articulação Sacroilíaca',
    primaryBenefit: 'Descomprime o trajeto do nervo ciático sob o glúteo e alivia dores agudas que irradiam para a perna.',
    clinicalPhysiology: 'O aumento da relaxina somado à rotação anterior da bacia pode sobrecarregar o músculo piriforme em espasmo protetor. Este alongamento em formato de 4 abre o canal ciático sem pressionar a parede abdominal.',
    movementAnimation: 'sideStretch',
    steps: [
      { title: '1. Posição Sentada Firme', description: 'Sente-se com a coluna reta na ponta de uma cadeira firme com os dois pés apoiados.' },
      { title: '2. Formato do Número 4', description: 'Dobre a perna direita e pouse suavemente o tornozelo direito sobre a coxa esquerda, logo acima do joelho.' },
      { title: '3. Flexão do Pé de Cima', description: 'Mantenha o pé direito ativado (dorsiflexão suave) para proteger os ligamentos do joelho dobrado.' },
      { title: '4. Inclinação do Eixo', description: 'Mantendo o peito aberto e a coluna longa, incline o tronco apenas alguns centímetros para a frente a partir do quadril até sentir o alongamento no glúteo.' }
    ],
    breathingSync: {
      inhale: 'Inale crescendo o topo da cabeça e mantendo o espaço entre o esterno e o umbigo.',
      exhale: 'Exale enviando o ar mentalmente para a lateral do quadril que está alongando, soltando a tensão.',
      tip: 'Nunca curve as costas para tentar descer mais; o alongamento vem do giro da bacia, não de encurvar as costas.'
    },
    recommendedDuration: 'Permaneça por 5 respirações completas (aprox. 45s) em cada lado',
    safetyAlerts: [
      'Não force o joelho para baixo com as mãos; deixe a gravidade agir.',
      'Interrompa se sentir dor no púbis anterior (sínfise púbica).'
    ],
    clinicalModifications: [
      'Se não conseguir cruzar o tornozelo sobre o joelho, cruze a perna mais abaixo, na altura da canela.',
      'Segure suavemente no assento da cadeira para manter o equilíbrio estável.'
    ],
    musclesWorked: ['Piriforme', 'Glúteo Médio', 'Gêmeo Superior e Inferior', 'Rotadores Externos do Quadril']
  },
  {
    id: 'cervical-shoulder-release',
    name: 'Descompressão Cervical & Trapézio Leve',
    sanskritName: 'Greeva Sanchalana',
    phaseId: 'phase1',
    phaseBadge: '1º Trimestre',
    videoNumber: 13,
    videoUrl: 'https://drive.google.com/file/d/1NL4l7aHRDCXMjf_h2cw6OGAiPYAQeccc/preview',
    difficulty: 'Suave / Iniciante',
    icon: '💆‍♀️',
    targetArea: 'Músculos Escalenos, Trapézio Superior e Coluna Cervical',
    primaryBenefit: 'Elimina pontos de gatilho que causam dores de cabeça tensionais e rigidez no pescoço devido às oscilações hormonais.',
    clinicalPhysiology: 'Durante as primeiras semanas, o cansaço excessivo leva a uma anteriorização da cabeça (foward head posture), tensionando a fáscia suboccipital. A mobilidade suave restaura o fluxo sanguíneo arterial vertebral.',
    movementAnimation: 'chestOpen',
    steps: [
      { title: '1. Posição Alinhada', description: 'Sente-se ereta com o rabo de cavalo ou cabelo livre alinhado ao centro das costas.' },
      { title: '2. Escapulas Conectadas', description: 'Gire os ombros uma vez para trás e para baixo, relaxando as clavículas.' },
      { title: '3. Inclinação Lateral', description: 'Lentamente, leve a orelha direita em direção ao ombro direito, sem subir o ombro oposto.' },
      { title: '4. Peso Suave do Braço', description: 'Se for confortável, apoie a ponta dos dedos da mão direita sobre o topo da cabeça apenas como peso suave, sem puxar.' }
    ],
    breathingSync: {
      inhale: 'Inale enchendo os pulmões e sentindo o ar expandir a lateral do pescoço.',
      exhale: 'Exale soltando a mandíbula, destravando os dentes e relaxando a língua no céu da boca.',
      tip: 'Mantenha um sorriso suave no rosto para inibir a contração involuntária do músculo platisma.'
    },
    recommendedDuration: '3 a 4 respirações lentas para a direita, retorne ao centro e repita para a esquerda',
    safetyAlerts: [
      'Nunca rode a cabeça para trás com compressão da nuca.',
      'Não realize o movimento com solavancos bruscos.'
    ],
    clinicalModifications: [
      'Pode estender o braço oposto em direção ao chão para intensificar levemente a descompressão.',
      'Se sentir estalos indolores, diminua a amplitude da inclinação.'
    ],
    musclesWorked: ['Esternocleidomastoideo', 'Trapézio Superior', 'Elevador da Escápula', 'Escalenos']
  },

  // ==========================================
  // FASE 2: 2º TRIMESTRE (ENERGIA & CRESCIMENTO)
  // ==========================================
  {
    id: 'standing-mountain-prayer',
    name: 'Postura da Montanha com Prece no Peito',
    sanskritName: 'Tadasana Namaskarasana',
    phaseId: 'phase2',
    phaseBadge: '2º Trimestre',
    videoNumber: 8,
    videoUrl: 'https://drive.google.com/file/d/16RoIFJU_FGT9F45pngq51pp2xKklvLPv/preview',
    difficulty: 'Moderado / Seguro',
    icon: '🏔️',
    targetArea: 'Arcos Plantares, Assoalho Pélvico, Glúteos e Centro de Gravidade',
    primaryBenefit: 'Fortalece os apoios dos pés, redistribui o peso do útero na bacia e combate a hiperlordose lombar precoce.',
    clinicalPhysiology: 'Conforme a barriga se projeta para a frente no 2º trimestre, o centro de gravidade avança. A postura da montanha ativa a cadeia posterior e o músculo tibial anterior, prevenindo o achatamento do arco do pé e fascites plantares.',
    movementAnimation: 'standing',
    steps: [
      { title: '1. Distância dos Pés', description: 'Fique em pé com os pés descalços afastados na largura do quadril (um palmo entre eles) para acomodar a pelve.' },
      { title: '2. Enraizamento dos Pés', description: 'Distribua o peso igualmente entre o dedão, o dedinho e o calcanhar, destravando levemente os joelhos (sem hiperextensão).' },
      { title: '3. Pelve Neutra', description: 'Ajuste a bacia imaginando que sua pelve é uma tigela cheia de água que não pode derramar nem para frente nem para trás.' },
      { title: '4. Anjali Mudra (Prece)', description: 'Una as palmas das mãos no centro do peito, com os antebraços paralelos ao chão e escápulas recolhidas.' }
    ],
    breathingSync: {
      inhale: 'Inspire sentindo a expansão tridimensional da caixa torácica e a coluna crescendo para o alto.',
      exhale: 'Expire sentindo as raízes dos pés afundando no chão e ativando suavemente a base pélvica.',
      tip: 'Olhe para um ponto fixo na parede à altura dos olhos para aprimorar o equilíbrio neurológico.'
    },
    recommendedDuration: '1 a 2 minutos de permanência estável com respiração fluida',
    safetyAlerts: [
      'Não tranque os joelhos para trás (bloqueio articular); mantenha-os sempre macios.',
      'Não projete a barriga para frente relaxando o abdômen; mantenha um tônus postural sereno.'
    ],
    clinicalModifications: [
      'Pratique a um palmo de distância de uma parede caso sinta oscilações de equilíbrio.',
      'Pode apoiar as costas suavemente na parede com os calcanhares a 10cm de distância do rodapé.'
    ],
    musclesWorked: ['Gastrocnêmio', 'Quadríceps', 'Glúteo Médio', 'Transverso Abdominal', 'Rombóides']
  },
  {
    id: 'easy-seated-sukhasana',
    name: 'Postura Fácil com Coluna Longa (Lotus Consciente)',
    sanskritName: 'Sukhasana Pré-Natal',
    phaseId: 'phase2',
    phaseBadge: '2º Trimestre',
    videoNumber: 6,
    videoUrl: 'https://drive.google.com/file/d/16AH-UP6_QafwrNmLUisc4-mBte5lRjPp/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🧘‍♀️',
    targetArea: 'Músculos Adutores, Diafragma, Cadeia Posterior e Mente',
    primaryBenefit: 'Aumenta a capacidade pulmonar comprimida pelo crescimento uterino e abre suavemente a articulação coxo-femoral.',
    clinicalPhysiology: 'O útero em expansão empurra o diafragma até 4cm para cima. Sentar com a coluna longa em Sukhasana permite a excursão diafragmática plena e a expansão costal lateral, elevando a saturação de oxigênio materno-fetal.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Apoio Elevado', description: 'Sente-se sobre o bordo de uma almofada firme ou cobertor dobrado para que os quadris fiquem mais altos que os joelhos.' },
      { title: '2. Cruzamento Macio', description: 'Cruze as pernas de forma suave, sem prender os tornozelos sob as coxas, permitindo que os joelhos relaxem em direção ao solo.' },
      { title: '3. Repouso dos Braços', description: 'Pouse as mãos sobre os joelhos com as palmas voltadas para cima ou para baixo, ombros afastados das orelhas.' },
      { title: '4. Elevação do Olhar', description: 'Eleve o olhar com o queixo paralelo ao chão, sentindo a leveza e a dignidade da postura.' }
    ],
    breathingSync: {
      inhale: 'Puxe o ar pelo nariz visualizando a respiração subindo da base da coluna até o topo da cabeça.',
      exhale: 'Solte o ar relaxando a virilha e sentindo a estabilidade e o conforto no tapete.',
      tip: 'Mantenha o peito aberto sem arquear a lombar.'
    },
    recommendedDuration: '2 a 3 minutos com foco respiratório sereno',
    safetyAlerts: [
      'Se os joelhos ficarem muito elevados e desconfortáveis, nunca force para baixo.',
      'Mude o cruzamento das pernas na metade do tempo para manter a simetria na bacia.'
    ],
    clinicalModifications: [
      'Coloque dois blocos ou almofadas sob os joelhos para sustentá-los se houver tensão na virilha.',
      'Pode encostar as costas numa parede para diminuir o cansaço dos eretores da coluna.'
    ],
    musclesWorked: ['Adutores Curtos', 'Sartório', 'Eretores da Coluna', 'Intercostais Externos']
  },
  {
    id: 'tabletop-pelvic-toetaps',
    name: 'Ativação do Zíper & Fortalecimento do Transverso',
    sanskritName: 'Ativação do Transverso & Assoalho Pélvico',
    phaseId: 'phase2',
    phaseBadge: '2º Trimestre',
    videoNumber: 4,
    videoUrl: 'https://drive.google.com/file/d/1zWc2KrhD_SQc8NzPj_DECnTLZcgE4RdN/preview',
    difficulty: 'Moderado / Seguro',
    icon: '🦶',
    targetArea: 'Transverso Abdominal Profundo, Períneo e Assoalho Pélvico',
    primaryBenefit: 'Fortalece o "cinturão natural" do abdômen prevenindo a diástase patológica e a incontinência urinária de esforço.',
    clinicalPhysiology: 'O clássico exercício de Pilates tabletop adaptado com apoio de cabeça previne a pressão intra-abdominal excessiva. O toque suave do calcanhar desafia a estabilização lombo-pélvica sem sobrecarregar a linha alba.',
    movementAnimation: 'candle',
    steps: [
      { title: '1. Decúbito com Suporte', description: 'Deite-se no tapete com a cabeça e nuca confortavelmente apoiadas em um travesseiro rolinho, garantindo o conforto cervical.' },
      { title: '2. Elevação a 90 Graus', description: 'Eleve as duas pernas dobradas em ângulo reto de 90° (posição de mesa/cadeirinha no ar), joelhos na linha do quadril.' },
      { title: '3. Ativação do Zíper', description: 'Acione suavemente o abdômen profundo imaginando que fecha um zíper do púbis até o umbigo.' },
      { title: '4. Toque Alternado', description: 'Descenda suavemente uma das pernas tocando a ponta do pé no solo e retorne, alternando com a outra perna de forma lenta e controlada.' }
    ],
    breathingSync: {
      inhale: 'Inale com as duas pernas estáticas no ar a 90 graus.',
      exhale: 'Exale ao descer a ponta do pé no solo, ativando e recolhendo o assoalho pélvico.',
      tip: 'O movimento deve ser suave como uma dança na água, sem prender a respiração.'
    },
    recommendedDuration: '6 a 8 toques controlados para cada perna (2 séries)',
    safetyAlerts: [
      'Não deixe a lombar descolar do solo formando um túnel oco; mantenha o sacro pesado no chão.',
      'Se sentir a barriga formar uma ponta ("cone" na linha média), reduza a amplitude do movimento imediatamente.'
    ],
    clinicalModifications: [
      'Faça com uma perna só apoiada no chão enquanto a outra realiza os movimentos se estiver sem condicionamento prévio.',
      'Eleve o tronco em cunha a 30° se tiver azia ou refluxo ao deitar de costas.'
    ],
    musclesWorked: ['Transverso Abdominal', 'Pubococcígeo', 'Iliococcígeo', 'Psoas Ilíaco', 'Reto Femoral']
  },
  {
    id: 'seated-hamstring-stretch',
    name: 'Postura da Borboleta Sentada (Baddha Konasana)',
    sanskritName: 'Baddha Konasana Pré-Natal',
    phaseId: 'phase2',
    phaseBadge: '2º Trimestre',
    videoNumber: 12,
    videoUrl: 'https://drive.google.com/file/d/1Zr4YPE8Xeq5Se500I3b0ZCgfXcdkXz_v/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🦋',
    targetArea: 'Adutores da Coxa, Pelve, Assoalho Pélvico e Cadeia Posterior',
    primaryBenefit: 'Abre suavemente a articulação dos quadris, melhora a circulação pélvica e alivia tensões e câimbras.',
    clinicalPhysiology: 'A posição sentada com solas dos pés unidas e joelhos abertos relaxa os adutores e cria espaço na cavidade pélvica, facilitando o retorno venoso e a flexibilidade para o parto.',
    movementAnimation: 'sideStretch',
    steps: [
      { title: '1. Posição Sentada Confortável', description: 'Sente-se no tapete com a coluna longa e ereta, se preferir encoste em uma almofada.' },
      { title: '2. Unir as Solas dos Pés', description: 'Dobre os joelhos para os lados e una as solas dos pés a uma distância confortável da virilha.' },
      { title: '3. Apoio nas Pernas', description: 'Segure suavemente os tornozelos ou os pés com as duas mãos sem puxar com força.' },
      { title: '4. Respiração e Abertura', description: 'Mantenha o peito aberto e respire deixando o peso dos joelhos ceder suavemente em direção ao solo.' }
    ],
    breathingSync: {
      inhale: 'Inale crescendo a coluna e expandindo a caixa torácica.',
      exhale: 'Exale relaxando a virilha e permitindo que as pernas se abram sem forçar.',
      tip: 'Não force os joelhos para o chão; o movimento deve ser natural e sem dor.'
    },
    recommendedDuration: 'Mantenha por 5 a 8 respirações profundas e lentas',
    safetyAlerts: [
      'Não dobre a coluna comprimindo o abdômen sobre a coxa.',
      'Cuidado para a cadeira não escorregar no piso; certifique-se de que está estável.'
    ],
    clinicalModifications: [
      'Use uma toalha ou faixa de yoga envolvendo a sola do pé para puxar suavemente sem precisar inclinar o tronco.',
      'Dobre levemente o joelho estendido se sentir repuxamento agudo atrás do joelho.'
    ],
    musclesWorked: ['Bíceps Femoral', 'Semitendíneo', 'Semimembranáceo', 'Gastrocnêmio', 'Sóleo']
  },

  // ==========================================
  // FASE 3: 3º TRIMESTRE (PREPARAÇÃO PARA O PARTO)
  // ==========================================
  {
    id: 'deep-malasana-squat',
    name: 'Deusa em Cócoras com Mãos em Prece (Malasana Profunda)',
    sanskritName: 'Malasana',
    phaseId: 'phase3',
    phaseBadge: '3º Trimestre',
    videoNumber: 2,
    videoUrl: 'https://drive.google.com/file/d/1vDOJMkyv0qQ3mIchLeeWYaC8fQc3BmlO/preview',
    difficulty: 'Moderado / Seguro',
    icon: '👑',
    targetArea: 'Diâmetro Pélvico, Articulação Sacroilíaca e Assoalho Pélvico',
    primaryBenefit: 'Aumenta o diâmetro da saída pélvica em até 30%, facilitando a descida e a rotação da cabeça do bebê no canal de parto.',
    clinicalPhysiology: 'O agachamento profundo estimula a abdução dos fêmures e a nutação do sacro, abrindo o estreito inferior da pelve. O apoio das mãos em prece no esterno mantém a coluna ereta, alinhando o eixo mecânico do útero com o canal de parto.',
    movementAnimation: 'squatHold',
    steps: [
      { title: '1. Abertura da Base', description: 'Fique em pé com os pés um pouco mais largos que os ombros, com as pontas dos pés abertas em ângulo de 45 graus.' },
      { title: '2. Descida Controlada', description: 'Flexione os joelhos e desça os quadris em direção ao solo, mantendo a barriga confortável e com espaço livre entre as coxas.' },
      { title: '3. Palmas em Prece', description: 'Junte as mãos em prece na altura do peito e apoie suavemente os cotovelos contra a face interna dos joelhos.' },
      { title: '4. Crescimento da Coluna', description: 'Pressione levemente os cotovelos para fora abrindo o peito e permitindo que o cóccix pese em direção ao chão.' }
    ],
    breathingSync: {
      inhale: 'Puxe o ar fundo sentindo o abdômen e os pulmões se encherem de oxigênio e força.',
      exhale: 'Solte o ar imaginando o assoalho pélvico relaxando completamente, suave como uma flor se abrindo na primavera.',
      tip: 'Mantenha a mandíbula relaxada: na fisiologia do parto, mandíbula relaxada reflete diretamente em colo de útero e períneo relaxados.'
    },
    recommendedDuration: '30 segundos a 1 minuto (ou 5 a 6 respirações profundas)',
    safetyAlerts: [
      'Contraindicado em caso de bebê em posição pélvica após 36 semanas (para não encaixar o bumbum).',
      'Se tiver pubalgia severa ou hemorróidas ativas dolorosas, faça a versão sentada na cadeira (Goddess Chair).'
    ],
    clinicalModifications: [
      'Coloque 1 ou 2 blocos de yoga ou livros grossos sob o bumbum para descansar o peso corporal sem fadiga.',
      'Coloque uma toalha enrolada sob os calcanhares se eles saírem do chão.'
    ],
    musclesWorked: ['Obturador Interno', 'Piriforme', 'Levantador do Ânus', 'Quadríceps', 'Glúteo Máximo']
  },
  {
    id: 'goddess-chair-opening',
    name: 'Guerreiro II Apoiado na Cadeira (Abertura Pélvica)',
    sanskritName: 'Virabhadrasana II na Cadeira',
    phaseId: 'phase3',
    phaseBadge: '3º Trimestre',
    videoNumber: 10,
    videoUrl: 'https://drive.google.com/file/d/1YJqwScTlYeIsL7kpLhIhvRN8386TkRo2/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🪑',
    targetArea: 'Assoalho Pélvico, Pelve Anterior e Mobilidade Sacral',
    primaryBenefit: 'Proporciona todos os benefícios de abertura da bacia sem o cansaço nas pernas do agachamento tradicional.',
    clinicalPhysiology: 'Permite que a gestante permaneça com a bacia livre e relaxada por períodos mais longos durante os pródromos e a fase latente do trabalho de parto, poupando energia materna enquanto a gravidade ajuda o bebê.',
    movementAnimation: 'squatHold',
    steps: [
      { title: '1. Sentar na Ponta da Cadeira', description: 'Sente-se na beirada de uma cadeira estável de madeira sem braços.' },
      { title: '2. Abertura Ampla das Pernas', description: 'Afaste as pernas amplamente em V, com joelhos e pés apontando para as diagonais externas na mesma direção.' },
      { title: '3. Pés Aterrados', description: 'Plante as solas dos pés inteiras no solo, sentindo firmeza no apoio do chão.' },
      { title: '4. Postura da Deusa', description: 'Apoie as mãos sobre os joelhos em gesto de meditação (Chin Mudra) com coluna ereta e queixo paralelo ao solo.' }
    ],
    breathingSync: {
      inhale: 'Inale sentindo a expansão das costelas e do peito com dignidade.',
      exhale: 'Exale com um som de "Aaaaah" suave e prolongado, soltando o períneo em direção ao assento da cadeira.',
      tip: 'A vocalização aberta durante a exalação libera a glote e facilita a dilatação cervical.'
    },
    recommendedDuration: '2 a 3 minutos com balanços milimétricos confortáveis',
    safetyAlerts: [
      'Certifique-se de que a cadeira não desliza ou vira ao abrir as pernas.',
      'Não force a abertura dos joelhos além da amplitude natural indolor.'
    ],
    clinicalModifications: [
      'Coloque uma almofada macia sobre o assento da cadeira para maior conforto dos ísquios.',
      'Pode inclinar o tronco ligeiramente à frente apoiando os cotovelos nas coxas para descansar a lombar.'
    ],
    musclesWorked: ['Grácil', 'Pectíneo', 'Adutor Magno', 'Psoas', 'Músculos Profundos do Assoalho Pélvico']
  },
  {
    id: 'birth-ball-pelvic-circles',
    name: 'Mobilidade, Encaixe & Círculos na Bola de Parto',
    sanskritName: 'Círculos & Encaixe Pélvico na Fitball',
    phaseId: 'phase3',
    phaseBadge: '3º Trimestre',
    videoNumber: 7,
    videoUrl: 'https://drive.google.com/file/d/1PtfMmKu-r6N8L5LbX0Kg6IZ8v6LZ0AAR/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🔴',
    targetArea: 'Articulações Sacroilíacas, Sínfise Púbica e Espinha Isquiática',
    primaryBenefit: 'Auxilia na rotação do bebê da posição posterior para anterior (LOA/LOT) e alivia as dores agudas nas costas.',
    clinicalPhysiology: 'O movimento circular tridimensional na bola elimina a fricção gravitacional rígida. A oscilação estimula a circulação do líquido sinovial na articulação sacroilíaca e promove o afrouxamento da fáscia toracolombar.',
    movementAnimation: 'pelvicCircle',
    steps: [
      { title: '1. Assento Seguro na Bola', description: 'Sente-se no centro de uma bola de pilates (65cm ou 75cm) com a bacia nivelada ou ligeiramente acima dos joelhos.' },
      { title: '2. Pés Bem Afastados', description: 'Abra os pés no solo mais largos que a bola, garantindo estabilidade e equilíbrio total.' },
      { title: '3. Mãos no Ventre', description: 'Acomode as mãos amorosamente sobre a barriga sentindo o bebê seguro.' },
      { title: '4. Círculos Contínuos', description: 'Desenhe círculos lentos, amplos e contínuos com o quadril, como se estivesse rebolando num ritmo calmo no sentido horário.' }
    ],
    breathingSync: {
      inhale: 'Inale enquanto o quadril desliza pela metade frontal do círculo.',
      exhale: 'Exale enquanto o quadril completa a metade de trás do círculo, soltando a lombar.',
      tip: 'Mantenha o tronco superior imóvel; o movimento deve nascer exclusivamente da bacia.'
    },
    recommendedDuration: '8 círculos no sentido horário, depois inverta para 8 círculos no sentido anti-horário (aprox. 3 minutos)',
    safetyAlerts: [
      'Nunca realize descalça em piso escorregadio; use tapete antiderrapante sob os pés.',
      'Tenha uma cadeira ou sofá próximo para segurar caso perca o equilíbrio.'
    ],
    clinicalModifications: [
      'Pode alternar com movimentos em formato de "8" (infinito) ou balanços suaves para frente e para trás.',
      'O parceiro ou acompanhante de parto pode ficar atrás oferecendo massagem sacral durante o movimento.'
    ],
    musclesWorked: ['Pélvicos Profundos', 'Transverso Abdominal', 'Oblíquos Externos e Internos', 'Glúteo Máximo']
  },
  {
    id: 'open-child-pose',
    name: 'Postura da Criança Aberta com Acomodação',
    sanskritName: 'Balasana Aberta Pré-Natal',
    phaseId: 'phase3',
    phaseBadge: '3º Trimestre',
    videoNumber: 3,
    videoUrl: 'https://drive.google.com/file/d/1EwFeaGNAnodngfktZ9b_vAPgzwDsOxKW/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '👶',
    targetArea: 'Região Lombar, Sacro, Fáscia Toracolombar e Mente',
    primaryBenefit: 'Descarrega 100% da pressão do peso do bebê para o solo, gerando alívio imediato nas vértebras lombares L4-L5 e S1.',
    clinicalPhysiology: 'Ao ajoelhar com joelhos bem abertos e tronco inclinado à frente, o abdômen pende livre sem compressão. A tração gravitacional suave descomprime os discos intervertebrais lombares e abre as espinhas isquiáticas.',
    movementAnimation: 'child',
    steps: [
      { title: '1. Ajoelhar com Espaço', description: 'Ajoelhe-se no tapete macio e abra os joelhos o mais largo que for confortável, mantendo os dois dedões dos pés se tocando atrás.' },
      { title: '2. Sentar nos Calcanhares', description: 'Leve o quadril para trás descansando em direção aos calcanhares.' },
      { title: '3. Caminhada com as Mãos', description: 'Deslize as palmas das mãos à frente no tapete com os braços alongados e cotovelos macios.' },
      { title: '4. Repouso do Peito', description: 'Desça o peito e a testa em direção ao tapete ou almofada, permitindo que a barriga fique solta e acomodada no espaço entre as coxas.' }
    ],
    breathingSync: {
      inhale: 'Puxe o ar visualizando suas costas se alargando como uma concha protetora.',
      exhale: 'Solte o ar derretendo a tensão da lombar no chão, sentindo o peso do corpo sendo acolhido pela terra.',
      tip: 'Mantenha o foco em respirar nas costelas posteriores e na lombar.'
    },
    recommendedDuration: '2 a 4 minutos de repouso restaurador',
    safetyAlerts: [
      'Se sentir dor aguda nos joelhos, coloque um cobertor dobrado sob eles para amortecer.',
      'Nunca aperte a barriga contra as coxas; abra os joelhos o suficiente para deixar espaço livre.'
    ],
    clinicalModifications: [
      'Apoie o peito e a cabeça sobre um travesseiro de corpo longo (bolster) para não precisar descer até o chão.',
      'Coloque uma toalha enrolada entre a panturrilha e a coxa se sentir pressão nas articulações dos joelhos.'
    ],
    musclesWorked: ['Latíssimo do Dorso', 'Eretores Espinhais', 'Glúteo Médio', 'Quadrado Lombar']
  },

  // ==========================================
  // FASE 4: PUERPÉRIO & RESTAURAÇÃO (PÓS-PARTO)
  // ==========================================
  {
    id: 'cobra-cat-wave',
    name: 'Postura da Cobra & Ondulação Pélvica',
    sanskritName: 'Bhujangasana / Marjaryasana Ondulante',
    phaseId: 'phase4',
    phaseBadge: 'Puerpério',
    videoNumber: 1,
    videoUrl: 'https://drive.google.com/file/d/1Piz2rqPHC7WixFAgVHTXnCrUDmVPXIDE/preview',
    difficulty: 'Moderado / Seguro',
    icon: '🐍',
    targetArea: 'Cadeia Anterior, Peitoral, Mobilidade Torácica e Quadril',
    primaryBenefit: 'Reverte a postura encurvada da amamentação, expande os pulmões e estimula o retorno dos órgãos à posição anatômica.',
    clinicalPhysiology: 'O ato prolongado de segurar o recém-nascido e amamentar projeta os ombros para frente e encurta o peitoral maior. A extensão suave em Bhujangasana reestabelece a lordose cervical natural e fortalece os músculos interscapulares.',
    movementAnimation: 'cobra',
    steps: [
      { title: '1. Posição em 4 Apoios', description: 'Comece de joelhos no tapete com mãos alinhadas sob os ombros.' },
      { title: '2. Descida nos Antebraços', description: 'Dobre os cotovelos e desça os antebraços suavemente no tapete, relaxando a nuca e a lombar.' },
      { title: '3. Elevação Ondulante', description: 'Empurre o chão com as mãos, estenda os braços abrindo o peito para frente e eleve suavemente a cabeça com olhar sereno.' },
      { title: '4. Arco Suave', description: 'Sinta o arco gracioso da coluna, mantendo os ombros bem afastados das orelhas e o queixo elevado.' }
    ],
    breathingSync: {
      inhale: 'Inale fundo ao empurrar o tapete e elevar o peito, abrindo o centro do coração.',
      exhale: 'Exale ao descer suavemente nos antebraços relaxando a cabeça e a coluna.',
      tip: 'O movimento é uma onda contínua e suave, sem trancos.'
    },
    recommendedDuration: '6 a 8 ciclos ondulatórios fluidos (aprox. 2 minutos)',
    safetyAlerts: [
      'No pós-parto imediato de cesárea, aguarde liberação médica e não estique bruscamente a incisão cirúrgica.',
      'Não comprima a lombar; a extensão deve acontecer na coluna torácica alta.'
    ],
    clinicalModifications: [
      'Faça a versão da Esfinge (apoiada nos antebraços sem esticar os braços inteiros) para menor intensidade.',
      'Pode apoiar as mãos na parede em pé para gestantes ou puérperas com desconforto no chão.'
    ],
    musclesWorked: ['Peitoral Maior e Menor', 'Rombóides', 'Trapézio Médio e Inferior', 'Eretores Torácicos']
  },
  {
    id: 'supported-glute-bridge-knee-pillow',
    name: 'Ponte Pélvica Restauradora com Suporte nos Joelhos',
    sanskritName: 'Setu Bandha Sarvangasana com Bolster',
    phaseId: 'phase4',
    phaseBadge: 'Puerpério',
    videoNumber: 17,
    videoUrl: 'https://drive.google.com/file/d/1pT4XcI1SC7zF4AZFfDElkxgygDoOOSJ0/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🛌',
    targetArea: 'Glúteos, Assoalho Pélvico e Fechamento da Diástase',
    primaryBenefit: 'Fortalece a musculatura do períneo sem pressão intra-abdominal e aproxima os feixes do reto abdominal.',
    clinicalPhysiology: 'O aperto suave de uma almofada entre os joelhos durante a elevação pélvica recruta os adutores e o transverso do abdômen por coativação fascial, acelerando a reabilitação da diástase e prevenindo incontinência pós-parto.',
    movementAnimation: 'gluteBridge',
    steps: [
      { title: '1. Deitada Confortável', description: 'Deite-se no tapete com os joelhos dobrados e os pés plantados no solo na largura dos quadris.' },
      { title: '2. Almofada entre os Joelhos', description: 'Posicione um travesseirinho macio ou bloco de espuma entre os joelhos.' },
      { title: '3. Braços ao Longo do Corpo', description: 'Apoie as palmas das mãos e braços firmes no solo ao lado do tronco.' },
      { title: '4. Elevação da Bacia', description: 'Pressione os calcanhares no chão e eleve suavemente o quadril alguns centímetros, apertando de leve a almofada.' }
    ],
    breathingSync: {
      inhale: 'Inale com o quadril apoiado no solo relaxando o corpo.',
      exhale: 'Exale ativando o zíper abdominal, apertando suavemente a almofada e elevando a bacia no ar.',
      tip: 'Sincronize a subida com a expiração para não gerar pressão descendente sobre a bexiga.'
    },
    recommendedDuration: '8 a 10 repetições lentas com pausa de 2 segundos no topo',
    safetyAlerts: [
      'Não eleve o quadril em excesso arqueando as costelas; mantenha uma linha reta dos ombros aos joelhos.',
      'Não prenda a respiração durante o esforço.'
    ],
    clinicalModifications: [
      'Coloque um bloco ou almofada fixa sob o sacro e permaneça em repouso passivo sem esforço muscular.',
      'Se tiver tontura ao deitar plana, incline o tronco em uma cunha de travesseiros.'
    ],
    musclesWorked: ['Glúteo Máximo', 'Adutor Magno', 'Músculos do Assoalho Pélvico', 'Isquiotibiais']
  },
  {
    id: 'savasana-side-bolster',
    name: 'Savasana Restaurador Lateral com Bolster',
    sanskritName: 'Parsva Savasana',
    phaseId: 'phase4',
    phaseBadge: 'Puerpério',
    videoNumber: 9,
    videoUrl: 'https://drive.google.com/file/d/1t1m10BfIdlp2mTOOnwOi_zgLAxEUITZn/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '😴',
    targetArea: 'Sistema Circulatório, Veia Cava, Fadiga Pós-Parto e Sono Reparador',
    primaryBenefit: 'Elimina a compressão da veia cava inferior, acelera a recuperação física e proporciona um sono de cura profundo.',
    clinicalPhysiology: 'O decúbito lateral esquerdo com suporte de almofada entre as pernas alinha a coluna lombar e o fêmur em eixo neutro. Essa posição maximiza o débito cardíaco materno e a drenagem dos edemas de membros inferiores acumulados no parto.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Deitar de Lado', description: 'Deite-se preferencialmente sobre o lado esquerdo do corpo sobre o tapete ou cama firme.' },
      { title: '2. Suporte na Cabeça', description: 'Acomode um travesseiro macio sob a cabeça de modo que o pescoço fique alinhado horizontalmente com a coluna.' },
      { title: '3. Almofada entre os Joelhos', description: 'Coloque um travesseiro ou bolster longo entre os dois joelhos e tornozelos flexionados, mantendo as pernas paralelas.' },
      { title: '4. Abraço e Entrega', description: 'Abrace a ponta superior da almofada com o braço de cima e solte todo o peso do corpo no acolhimento.' }
    ],
    breathingSync: {
      inhale: 'Puxe o ar devagar sentindo o aroma de tranquilidade e proteção.',
      exhale: 'Solte o ar profundamente, liberando o cansaço acumulado das noites mal dormidas.',
      tip: 'Permita que seus olhos afundem nas órbitas e solte a língua do céu da boca.'
    },
    recommendedDuration: '5 a 15 minutos (ideal para a soneca da mãe enquanto o bebê descansa)',
    safetyAlerts: [
      'Mantenha um cobertor leve por cima para não resfriar durante o relaxamento profundo.',
      'Certifique-se de que o travesseiro entre os joelhos apoia também os pés para a bacia não torcer.'
    ],
    clinicalModifications: [
      'Pode alternar para o lado direito se sentir desconforto no quadril esquerdo.',
      'Pode usar máscara de olhos de lavanda para bloquear a luz diurna.'
    ],
    musclesWorked: ['Relaxamento Total de Todas as Cadeias Musculares']
  },
  {
    id: 'zafu-mindful-breathing',
    name: 'Meditação e Respiração Diafragmática no Zafu',
    sanskritName: 'Pranayama no Zafu',
    phaseId: 'phase4',
    phaseBadge: 'Puerpério',
    videoNumber: 5,
    videoUrl: 'https://drive.google.com/file/d/1mGqINHwI_SHZcIxwABNDc7JC71zgorM-/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '🧘‍♀️',
    targetArea: 'Eixo Hipotálamo-Hipófise-Adrenal, Diafragma e Emoções',
    primaryBenefit: 'Acalma o baby blues e a ansiedade puerperal, estabilizando as emoções e equilibrando a produção de prolactina e ocitocina.',
    clinicalPhysiology: 'A respiração com exalação prolongada ativa o nervo vago ventral, desacelerando a frequência cardíaca e induzindo o estado de "segurança e descanso". O assento elevado no zafu permite que a bacia pós-parto repouse sem dor no períneo.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Sentar no Zafu', description: 'Sente-se sobre a almofada circular ou almofada firme, cruzando as pernas confortavelmente com a bacia elevada.' },
      { title: '2. Mãos no Ventre em Cura', description: 'Pouse as mãos amorosamente sobre o abdômen que gerou seu bebê, com gratidão pela sua força.' },
      { title: '3. Olhos Suaves', description: 'Feche suavemente os olhos ou mantenha um foco difuso para o chão à sua frente.' },
      { title: '4. Respiração Consciente', description: 'Apenas observe o ar entrando fresco pelas narinas e saindo morno, sentindo a barriga se mover suavemente sob suas mãos.' }
    ],
    breathingSync: {
      inhale: 'Inale em 4 segundos nutrindo cada célula do seu corpo maternal com paz.',
      exhale: 'Exale em 6 segundos desfazendo qualquer culpa, dúvida ou sobrecarga mental.',
      tip: 'Você não precisa ser perfeita; você é exatamente o que seu bebê precisa.'
    },
    recommendedDuration: '5 minutos diários de autocuidado sagrado',
    safetyAlerts: [
      'Se sentir tontura ou sonolência excessiva, abra os olhos e beba um copo de água.',
      'Não force a coluna a ficar rígida como um mastro; o corpo deve estar ereto, porém macio.'
    ],
    clinicalModifications: [
      'Pode fazer sentada na beirada da poltrona de amamentação com pés apoiados.',
      'Pode colocar um aroma suave de camomila ou lavanda no ambiente.'
    ],
    musclesWorked: ['Diafragma Torácico', 'Músculos Intercostais', 'Músculos da Mastigação']
  },

  // ==========================================
  // FASE 5: MÃE + BEBÊ (SLING, CONEXÃO & MOVIMENTO)
  // ==========================================
  {
    id: 'mother-baby-heart-connection',
    name: 'Respiração Amorosa & Vinculação Afetuosa',
    sanskritName: 'Maitri Garbha Sangha',
    phaseId: 'phase5',
    phaseBadge: 'Mãe + Bebê',
    videoNumber: 16,
    videoUrl: 'https://drive.google.com/file/d/12eD4kPKRIZtPgvdBrBE81kUV3ad3pWgL/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '🥰',
    targetArea: 'Coração, Sistema Nervoso do Bebê e Vínculo de Apego Seguro',
    primaryBenefit: 'Harmoniza a frequência cardíaca do bebê com a respiração da mãe, acalmando crises de choro e cólicas.',
    clinicalPhysiology: 'A proximidade pele com pele ou rosto a rosto com contato visual amoroso desencadeia uma onda de ocitocina tanto na mãe quanto no bebê. Essa biorressonância sincroniza os ritmos biológicos do recém-nascido e estimula a lactogênese.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Acomodação Confortável', description: 'Sente-se com as costas bem apoiadas, segurando o bebê aconchegado no colo ou envolvido com segurança no sling.' },
      { title: '2. Contato Visual e Sorriso', description: 'Olhe nos olhos do seu filho com um sorriso terno, emitindo calma e segurança.' },
      { title: '3. Mão no Coração e no Bebê', description: 'Coloque uma mão no seu próprio coração e a outra nas costas do bebê, sentindo os dois batimentos.' },
      { title: '4. Respiração Conjunta', description: 'Respire profunda e suavemente, permitindo que o ritmo da sua respiração embale o tórax do bebê.' }
    ],
    breathingSync: {
      inhale: 'Puxe o ar suavemente sentindo o cheirinho do seu bebê.',
      exhale: 'Solte o ar com um som suave "shhhhhhh" prolongado e acolhedor.',
      tip: 'O ruído branco suave da exalação lembra ao bebê os sons intrauterinos reconfortantes.'
    },
    recommendedDuration: '3 a 5 minutos (ou pelo tempo que o bebê estiver tranquilo)',
    safetyAlerts: [
      'Certifique-se sempre de que as vias aéreas do bebê (nariz e boca) estão livres e desobstruídas.',
      'Nunca faça movimentos bruscos enquanto segura o recém-nascido.'
    ],
    clinicalModifications: [
      'Pode ser praticado em pé balançando suavemente de um lado para o outro se o bebê estiver inquieto.',
      'Pode cantarolar uma cantiga de ninar suave durante a expiração.'
    ],
    musclesWorked: ['Músculos Rombóides', 'Diafragma', 'Trapézio Inferior', 'Bíceps e Antebraço']
  },
  {
    id: 'baby-sling-squat',
    name: 'Agachamento Suave com Bebê no Sling',
    sanskritName: 'Malasana com Sling',
    phaseId: 'phase5',
    phaseBadge: 'Mãe + Bebê',
    videoNumber: 10,
    videoUrl: 'https://drive.google.com/file/d/10t8oL0yNSMs_RQ0kDeMU91wSNpuOjczn/preview',
    difficulty: 'Moderado / Seguro',
    icon: '👶',
    targetArea: 'Quadríceps, Glúteos, Assoalho Pélvico e Conforto do Bebê',
    primaryBenefit: 'Fortalece as pernas da mãe usando o peso natural progressivo do bebê, enquanto o balanço acalma o pequeno.',
    clinicalPhysiology: 'O peso do bebê acoplado ao centro de massa da mãe estimula a propriocepção e a sobrecarga progressiva nos glúteos e quadríceps. A flexão e extensão rítmica acalma o sistema vestibular do bebê pelo movimento vestibular.',
    movementAnimation: 'babySling',
    steps: [
      { title: '1. Verificação do Sling', description: 'Garanta que o bebê está bem amarrado no carregador ergonômico, com a coluna em C e pernas em formato de M (sapinho), pertinho do seu queixo.' },
      { title: '2. Postura em Pé', description: 'Afaste os pés um pouco além da largura dos quadris, com os dedos dos pés ligeiramente voltados para fora.' },
      { title: '3. Mini Agachamento Suave', description: 'Dobre os joelhos descendo apenas um terço do caminho, empurrando o quadril para trás como se fosse sentar num banco alto.' },
      { title: '4. Subida Firme', description: 'Empurre o chão com os calcanhares e retorne à posição inicial, mantendo o peito ereto e a coluna longa.' }
    ],
    breathingSync: {
      inhale: 'Inale ao descer no agachamento mantendo a coluna ereta.',
      exhale: 'Exale ao subir ativando glúteos e assoalho pélvico com carinho.',
      tip: 'Olhe para a cabecinha do bebê e sorria ao subir.'
    },
    recommendedDuration: '8 a 10 mini agachamentos suaves e pausados',
    safetyAlerts: [
      'Não agache até o chão; faça apenas um agachamento raso e confortável.',
      'Mantenha uma mão apoiando as costas do bebê por segurança extra.'
    ],
    clinicalModifications: [
      'Pode encostar as costas numa parede para deslizar com mais estabilidade.',
      'Pode fazer sentando e levantando de uma cadeira.'
    ],
    musclesWorked: ['Quadríceps', 'Glúteo Máximo', 'Sóleo', 'Eretores da Coluna']
  },
  {
    id: 'baby-sway-dance',
    name: 'Dança Pélvica Rítmica com Bebê (Sway Dance)',
    sanskritName: 'Balanço Pélvico Mãe & Filho',
    phaseId: 'phase5',
    phaseBadge: 'Mãe + Bebê',
    videoNumber: 7,
    videoUrl: 'https://drive.google.com/file/d/1YUxCjSI6LPEIOEXT46arz5NWp8dWsjhi/preview',
    difficulty: 'Suave / Iniciante',
    icon: '💃',
    targetArea: 'Pélvis, Lombar, Sistema Vestibular do Bebê e Liberação de Ocitocina',
    primaryBenefit: 'Solta a rigidez lombar da mãe e induz o bebê ao sono profundo através do balanço rítmico familiar.',
    clinicalPhysiology: 'O balanço lateral oscilatório estimula o labirinto no ouvido interno do bebê, promovendo a regulação vagal e cessando o choro. Na mãe, relaxa as fáscias paravertebrais e a musculatura sacroilíaca.',
    movementAnimation: 'babyDance',
    steps: [
      { title: '1. Abraço Seguro', description: 'Com o bebê confortável no sling ou aconchegado nos braços, fique em pé com pés paralelos e joelhos macios.' },
      { title: '2. Balanço Lateral', description: 'Transfira o peso suavemente do pé direito para o pé esquerdo em um balanço rítmico de embalo.' },
      { title: '3. Movimento em Infinito', description: 'Adicione um desenho de 8 (infinito deitado) com os quadris, soltando a bacia de forma fluida e dançante.' },
      { title: '4. Respiração Musical', description: 'Acompanhe o ritmo com respiração suave ou um sussurro rítmico calmo.' }
    ],
    breathingSync: {
      inhale: 'Inale em 4 tempos enquanto balança para um lado.',
      exhale: 'Exale em 4 tempos enquanto balança para o outro lado.',
      tip: 'Mantenha os ombros soltos e relaxe os trapézios.'
    },
    recommendedDuration: '3 a 5 minutos contínuos',
    safetyAlerts: [
      'Pés sempre bem apoiados no chão; não faça meias pontas ou giros rápidos.',
      'Cuidado com tapetes soltos no piso para não tropeçar.'
    ],
    clinicalModifications: [
      'Pode ser feito sentada na bola de pilates fazendo pequenos saltos suaves ou círculos.',
      'Coloque uma música suave de ninar no ambiente.'
    ],
    musclesWorked: ['Glúteo Médio', 'Quadrado Lombar', 'Oblíquos', 'Músculos da Postura']
  },
  {
    id: 'baby-supported-tree-pose',
    name: 'Postura da Árvore com Apoio e Conexão',
    sanskritName: 'Vrikshasana com Bebê',
    phaseId: 'phase5',
    phaseBadge: 'Mãe + Bebê',
    videoNumber: 8,
    videoUrl: 'https://drive.google.com/file/d/1LZP7kdw_vEvuD2Osnm4FuysSCxIbV-Z1/preview',
    difficulty: 'Moderado / Seguro',
    icon: '🌳',
    targetArea: 'Equilíbrio, Propriocepção, Tornozelos e Foco Mental',
    primaryBenefit: 'Restaura a propriocepção corporal e a estabilidade das pernas, ancorando o centro de gravidade no pós-parto.',
    clinicalPhysiology: 'O pós-parto altera subitamente o centro de gravidade e os receptores sensoriais articulares. A postura da árvore unipodal estimula a co-contração dos estabilizadores do quadril e tornozelo, fortalecendo a coluna contra quedas.',
    movementAnimation: 'babyTree',
    steps: [
      { title: '1. Posição Inicial', description: 'Fique em pé próximo a uma parede, com o bebê seguro contra o peito.' },
      { title: '2. Enraizamento', description: 'Firme o pé esquerdo no chão sentindo os arcos plantares ativos.' },
      { title: '3. Apoio da Árvore', description: 'Dobre o joelho direito para fora e apoie a sola do pé direito na parte interna da canela ou tornozelo esquerdo (nunca no joelho).' },
      { title: '4. Estabilidade e Serenidade', description: 'Fixe o olhar em um ponto imóvel à frente, sustentando o bebê com ternura e firmeza.' }
    ],
    breathingSync: {
      inhale: 'Inale sentindo a firmeza de uma árvore centenária com raízes profundas.',
      exhale: 'Exale enviando estabilidade e serenidade para o corpo do seu bebê.',
      tip: 'Mantenha a perna de apoio levemente destravada no joelho.'
    },
    recommendedDuration: '3 a 5 respirações lentas em cada perna',
    safetyAlerts: [
      'Nunca apoie o pé diretamente sobre a articulação do joelho oposto.',
      'Fique a no máximo um palmo de uma parede para poder apoiar a mão a qualquer momento.'
    ],
    clinicalModifications: [
      'Mantenha a pontinha dos dedos do pé dobrado tocando o chão como uma "rodinha de bicicleta" para segurança máxima.',
      'Pode fazer encostando o ombro ou quadril suavemente na parede.'
    ],
    musclesWorked: ['Tibial Anterior e Posterior', 'Fibular Longo', 'Glúteo Médio', 'Quadríceps', 'Psoas']
  },
  {
    id: 'low-lunge-psoas',
    name: 'Alongamento do Psoas em Estocada Baixa',
    sanskritName: 'Anjaneyasana Pré-Natal Apoiada',
    phaseId: 'phase2',
    phaseBadge: '2º Trimestre',
    videoNumber: 21,
    videoUrl: 'https://drive.google.com/file/d/1oEYApwTLF468sOfvoPpyXGgHq_bU7V2a/preview',
    difficulty: 'Moderado / Seguro',
    icon: '🧘‍♀️',
    targetArea: 'Músculo Psoas-Ilíaco, Flexores do Quadril, Pelve e Coluna Lombar',
    primaryBenefit: 'Descomprime o encurtamento do psoas causado pela hiperlordose gestacional e abre espaço na bacia anterior.',
    clinicalPhysiology: 'O crescimento uterino anterioriza a pelve, mantendo o psoas em contração isométrica crônica. A estocada baixa suave com apoio relaxa a fáscia iliopsoas, reduzindo dores lombares e preparando o canal do parto.',
    movementAnimation: 'sideStretch',
    steps: [
      { title: '1. Quatro Apoios Almofadados', description: 'Inicie de joelhos sobre um tapete macio ou almofada para proteger a patela.' },
      { title: '2. Passo Seguro à Frente', description: 'Traga o pé direito à frente entre as mãos, mantendo o joelho alinhado exatamente sobre o tornozelo (90°).' },
      { title: '3. Apoio nas Mãos ou Bloco', description: 'Apoie as mãos no joelho da frente ou em blocos de yoga ao lado do corpo para não curvar a coluna.' },
      { title: '4. Avanço Suave da Pelve', description: 'Desloque suavemente o quadril à frente e para baixo até sentir o alongamento reconfortante na frente da coxa esquerda.' }
    ],
    breathingSync: {
      inhale: 'Inale abrindo o peito e crescendo a coluna até o topo da cabeça.',
      exhale: 'Exale relaxando os ombros e aprofundando suavemente a abertura do quadril.',
      tip: 'Não deixe o joelho da frente passar da ponta do pé; mantenha a base ampla.'
    },
    recommendedDuration: '4 a 6 respirações lentas em cada lado',
    safetyAlerts: [
      'Evite descer excessivamente se tiver histórico de dor na sínfise púbica.',
      'Use almofada sob o joelho de trás para evitar impacto ósseo.'
    ],
    clinicalModifications: [
      'Pode ser feito apoiando as mãos no assento de uma cadeira para maior estabilidade.',
      'Mantenha os dedos do pé de trás ativos no solo para maior equilíbrio.'
    ],
    musclesWorked: ['Psoas Maior', 'Ilíaco', 'Reto Femoral', 'Glúteo Máximo da perna de apoio']
  },
  {
    id: 'cat-pose-pelvic-wave',
    name: 'Balanço do Gato & Ondulação Pélvica',
    sanskritName: 'Marjaryasana Onda Pélvica',
    phaseId: 'phase4',
    phaseBadge: 'Puerpério',
    videoNumber: 22,
    videoUrl: 'https://drive.google.com/file/d/1PpFGshBsp6PCej2vEFWmg8-w08E3PB1r/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🐈',
    targetArea: 'Coluna Lombar, Articulação Sacroilíaca, Pelve e Assoalho Pélvico',
    primaryBenefit: 'Descomprime as vértebras lombares através de ondulações rítmicas circulares e acalma o sistema nervoso no pós-parto.',
    clinicalPhysiology: 'O movimento ondulatório de quatro apoios redistribui o líquido sinovial entre as facetas articulares e alivia a pressão nos discos intervertebrais sem exigir esforço dos retos abdominais.',
    movementAnimation: 'catWave',
    steps: [
      { title: '1. Posição de Quatro Apoios', description: 'Coloque as mãos sob os ombros e os joelhos sob os quadris, com a coluna neutra e nuca longa.' },
      { title: '2. Início do Balanço', description: 'Desloque o quadril suavemente para trás em direção aos calcanhares em movimento circular.' },
      { title: '3. Ondulação da Coluna', description: 'Arredonde suavemente a coluna lombar subindo como uma onda suave de volta à posição inicial.' },
      { title: '4. Fluidez Contínua', description: 'Repita em ritmo lento, integrando a respiração e soltando qualquer rigidez do quadril e costas.' }
    ],
    breathingSync: {
      inhale: 'Inale ao avançar o tronco com a coluna neutra e o peito aberto.',
      exhale: 'Exale ao recuar o quadril e arredondar as costas, relaxando a cabeça.',
      tip: 'Imagine que sua coluna se move como uma onda do mar calma e constante.'
    },
    recommendedDuration: '8 a 10 ciclos circulares lentos (aprox. 3 minutos)',
    safetyAlerts: [
      'Não force a extensão lombar excessiva (não afunde a barriga com impacto).',
      'Se sentir desconforto nos punhos, apoie os antebraços em almofadas.'
    ],
    clinicalModifications: [
      'Pode ser feito em pé com as mãos apoiadas em uma mesa ou encosto de cadeira.',
      'Coloque uma toalha dobrada sob os joelhos para amortecimento extra.'
    ],
    musclesWorked: ['Multífidos Lombares', 'Eretores da Espinha', 'Trapézio Inferior', 'Transverso Abdominal']
  },
  {
    id: 'supported-butterfly-bolster',
    name: 'Borboleta Apoiada com Almofada',
    sanskritName: 'Supta Baddha Konasana Apoiada',
    phaseId: 'phase3',
    phaseBadge: '3º Trimestre',
    videoNumber: 23,
    videoUrl: 'https://drive.google.com/file/d/17QNCjOq_B25PN6YGenzqF5aVcTqWa8K_/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '🦋',
    targetArea: 'Articulações do Quadril, Adutores, Diafragma e Assoalho Pélvico',
    primaryBenefit: 'Proporciona abertura pélvica profunda e passiva com suporte de almofada, aliviando o peso fetal na sínfise púbica.',
    clinicalPhysiology: 'A gravidade suave com apoio sob as coxas e tronco elevado a 45° promove relaxamento involuntário dos músculos do assoalho pélvico, estimulando a descida e o encaixe harmônico do bebê.',
    movementAnimation: 'butterfly',
    steps: [
      { title: '1. Montagem do Apoio', description: 'Posicione almofadas ou um bolster firme atrás das costas em inclinação de 45 graus.' },
      { title: '2. Acomodação do Tronco', description: 'Recoste suavemente as costas e a cabeça no suporte inclinado, garantindo total conforto.' },
      { title: '3. Solas dos Pés Unidas', description: 'Una as solas dos pés deixando os joelhos caírem para os lados, com almofadas sob as coxas para sustentação.' },
      { title: '4. Entrega e Respiração', description: 'Abra os braços suavemente ao lado do corpo com as palmas voltadas para cima e respire profundamente.' }
    ],
    breathingSync: {
      inhale: 'Inale profundamente sentindo o abdômen e o peito expandirem no acolhimento da almofada.',
      exhale: 'Exale soltando todo o peso do corpo e permitindo que a pelve se abra sem resistência.',
      tip: 'Mantenha a expiração suave como um suspiro relaxante.'
    },
    recommendedDuration: '5 a 8 minutos de repouso restaurador',
    safetyAlerts: [
      'Não fique completamente deitada de costas (supina) no 3º trimestre; mantenha a elevação a 45° para não comprimir a veia cava.',
      'Sempre apoie almofadas sob os joelhos para não forçar os ligamentos da virilha.'
    ],
    clinicalModifications: [
      'Aumente a altura do travesseiro sob a cabeça se houver refluxo gastroesofágico.',
      'Afaste os pés da virilha se sentir qualquer puxão nos ligamentos internos.'
    ],
    musclesWorked: ['Adutores da Coxa', 'Diafragma', 'Peitoral Maior (abertura passiva)', 'Assoalho Pélvico']
  },
  {
    id: 'seated-gentle-twist',
    name: 'Torção Suave Sentada na Cadeira',
    sanskritName: 'Ardha Matsyendrasana Sentada',
    phaseId: 'phase1',
    phaseBadge: '1º Trimestre',
    videoNumber: 24,
    videoUrl: 'https://drive.google.com/file/d/1vdmtX5PyZ1-LCyA0PTHIBm8zPXnoiK8B/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🪑',
    targetArea: 'Caixa Torácica, Músculos Intercostais e Coluna Torácica',
    primaryBenefit: 'Alivia a sensação de falta de ar e rigidez na parte média das costas através de uma rotação torácica suave e segura.',
    clinicalPhysiology: 'Torções abdominais fechadas são contraindicadas na gravidez, mas a rotação torácica aberta na cadeira preserva o espaço uterino e melhora a mobilidade costal para expansão pulmonar plena.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Posição Sentada Neutra', description: 'Sente-se com a coluna longa em uma cadeira firme, pés paralelos no solo.' },
      { title: '2. Crescimento Axial', description: 'Inale e imagine um fio invisível puxando o topo da cabeça em direção ao teto.' },
      { title: '3. Giro Torácico Aberto', description: 'Ao exalar, gire suavemente os ombros e a parte superior das costas para a direita, apoiando a mão esquerda na perna direita e a mão direita na cadeira.' },
      { title: '4. Respiração Ampla', description: 'Permaneça respirando normalmente sem forçar a região do baixo ventre.' }
    ],
    breathingSync: {
      inhale: 'Inale crescendo a coluna e abrindo espaço entre as vértebras.',
      exhale: 'Exale aprofundando sutilmente a rotação pelos ombros, mantendo o abdômen relaxado.',
      tip: 'O giro acontece no peito e nos ombros, nunca comprimindo a barriga.'
    },
    recommendedDuration: '4 a 5 respirações profundas de cada lado',
    safetyAlerts: [
      'Não use a força dos braços para girar além do limite natural do corpo.',
      'Mantenha os joelhos e quadris apontados para a frente sem desalinhar a bacia.'
    ],
    clinicalModifications: [
      'Se estiver no início de enjoo, mantenha a cabeça olhando para a frente sem girar o pescoço.',
      'Mantenha as pernas mais afastadas para acomodar com folga a região abdominal.'
    ],
    musclesWorked: ['Oblíquos Externos e Internos (torácicos)', 'Intercostais', 'Romboides', 'Multífidos Torácicos']
  },
  {
    id: 'nausea-relief-breath',
    name: 'Respiração Circular para Redução de Enjoo',
    sanskritName: 'Pranayama Diafragmático Suave',
    phaseId: 'phase1',
    phaseBadge: '1º Trimestre',
    videoNumber: 25,
    videoUrl: 'https://drive.google.com/file/d/1BevfOzmg3Mf8iru1wgtIqb8CdCvy4Sg6/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '🍃',
    targetArea: 'Nervo Vago, Diafragma, Estômago e Sistema Nervoso Autônomo',
    primaryBenefit: 'Estimula o tônus vagal e reduz a motilidade gástrica alterada por picos de HCG, aliviando náuseas matinais e tonturas.',
    clinicalPhysiology: 'O aumento abrupto de HCG e progesterona retarda o esvaziamento gástrico. A respiração diafragmática de tempo expiratório prolongado (4s inalação / 6s expiração) ativa o ramo parassimpático vagal, inibindo o centro do vômito.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Acomodação Confortável', description: 'Sente-se recostada com as costas apoiadas e as mãos descansando suavemente sobre as costelas inferiores.' },
      { title: '2. Inalação Lenta pelo Nariz', description: 'Inspire pelo nariz em 4 segundos, sentindo a expansão lateral das costelas sem forçar a barriga.' },
      { title: '3. Pausa Suave', description: 'Faça uma pausa de 1 segundo mantendo a garganta e a mandíbula relaxadas.' },
      { title: '4. Expiração Prolongada', description: 'Solte o ar pela boca suavemente entre os lábios entreabertos em 6 a 7 segundos, como um suspiro de alívio.' }
    ],
    breathingSync: {
      inhale: 'Puxe o ar contando mentalmente: 1, 2, 3, 4.',
      exhale: 'Solte o ar suavemente contando: 1, 2, 3, 4, 5, 6, esvaziando as tensões.',
      tip: 'Deixe os dentes entreabertos e a língua relaxada no assoalho da boca para inibir o reflexo nauseoso.'
    },
    recommendedDuration: '8 a 10 ciclos respiratórios lentos (aprox. 3 minutos)',
    safetyAlerts: [
      'Nunca faça retenções prolongadas com pulmões cheios que aumentem a pressão arterial.',
      'Se sentir tontura, volte à respiração espontânea e beba um gole de água fresca.'
    ],
    clinicalModifications: [
      'Pode ser feito segurando uma rodela de limão fresco ou óleo essencial de hortelã-pimenta próximo ao nariz.',
      'Pode ser praticado na cama antes de levantar pela manhã.'
    ],
    musclesWorked: ['Diafragma Torácico', 'Intercostais Internos e Externos', 'Músculos Faciais e Mandíbula']
  },
  {
    id: 'viparita-karani',
    name: 'Postura da Meia-Vela Suportada (Elevação de Pernas)',
    sanskritName: 'Viparita Karani na Parede com Almofada',
    phaseId: 'phase2',
    phaseBadge: '2º Trimestre',
    videoNumber: 26,
    videoUrl: 'https://drive.google.com/file/d/1G_0G5N44o62xURj87-RIKzBNwvLXg-d9/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '🦵',
    targetArea: 'Veias Ilíacas, Safenas, Panturrilhas e Drenagem Linfática',
    primaryBenefit: 'Drena o acúmulo de líquido nos tornozelos, previne varizes e combate o peso e cansaço nas pernas.',
    clinicalPhysiology: 'A elevação passiva dos membros inferiores com suporte lombar lateralizado estimula o retorno venoso gravitacional sem comprimir a veia cava inferior, reduzindo o edema periférico gestacional.',
    movementAnimation: 'candle',
    steps: [
      { title: '1. Preparo do Apoio', description: 'Posicione um tapete perto de uma parede com uma almofada firme sob o quadril lateral.' },
      { title: '2. Elevação das Pernas', description: 'Deite-se de lado e eleve suavemente as pernas apoiando os calcanhares na parede, mantendo os joelhos destravados.' },
      { title: '3. Inclinação Suave', description: 'Mantenha o tronco levemente lateralizado ou elevado com almofadas para não ficar 100% deitada de costas.' },
      { title: '4. Descanso Circulatório', description: 'Descanse os braços ao lado do tronco e deixe a gravidade drenar os pés e pernas.' }
    ],
    breathingSync: {
      inhale: 'Inale sentindo a sensação de leveza subindo das pontas dos dedos dos pés até os quadris.',
      exhale: 'Exale relaxando as panturrilhas e o assoalho pélvico.',
      tip: 'Mova suavemente os dedos dos pés em círculos lentos para ativar a bomba muscular da panturrilha.'
    },
    recommendedDuration: '5 a 8 minutos de elevação confortável',
    safetyAlerts: [
      'Se sentir tontura, palpitação ou sensação de falta de ar, vire-se imediatamente para o lado esquerdo.',
      'Não faça sem almofada de elevação ou inclinação após a 20ª semana.'
    ],
    clinicalModifications: [
      'Pode apoiar as pernas dobradas sobre o assento de um sofá ou cadeira em vez da parede.',
      'Coloque uma toalhinha morna sobre os olhos para intensificar a calma mental.'
    ],
    musclesWorked: ['Gastrocnêmio e Sóleo (relaxamento)', 'Isquiotibiais', 'Psoas (descompressão)']
  },
  {
    id: 'shoulder-elbow-circles',
    name: 'Círculos de Cotovelos para Escápulas',
    sanskritName: 'Skandha Chakra Pré e Pós-Natal',
    phaseId: 'phase5',
    phaseBadge: 'Mãe + Bebê',
    videoNumber: 27,
    videoUrl: 'https://drive.google.com/file/d/1E8oIMhMUu6Mfk6gTLBq6tr-r8WfN0t9a/preview',
    difficulty: 'Suave / Iniciante',
    icon: '💆‍♀️',
    targetArea: 'Trapézio, Romboides, Peitoral Menor e Coluna Cervical',
    primaryBenefit: 'Alivia imediatamente a queimação nas costas provocada pela postura inclinada durante a amamentação e o colo prolongado.',
    clinicalPhysiology: 'A rotação escapular em círculo com as mãos nos ombros restaura o deslizamento da fáscia torácica, descomprime o plexo braquial e evita a contratura crônica dos trapézios.',
    movementAnimation: 'chestOpen',
    steps: [
      { title: '1. Posição Sentada Confortável', description: 'Sente-se com a coluna reta, com o bebê dormindo no berço ou apoiado no colo com auxílio de uma almofada.' },
      { title: '2. Dedos nos Ombros', description: 'Dobre os braços e apoie suavemente as pontas dos dedos sobre os ombros correspondentes.' },
      { title: '3. Desenho de Círculos Amplos', description: 'Gire os cotovelos para a frente, para cima, para trás e para baixo, desenhando círculos amplos no ar.' },
      { title: '4. Inversão do Sentido', description: 'Após 5 rotações, inverta suavemente o sentido dos círculos respirando profundamente.' }
    ],
    breathingSync: {
      inhale: 'Inale ao elevar os cotovelos abrindo amplamente o peitoral.',
      exhale: 'Exale ao descer os cotovelos aproximando as escápulas atrás das costas.',
      tip: 'Mantenha o queixo paralelo ao chão sem empurrar a cabeça para a frente.'
    },
    recommendedDuration: '10 repetições em cada sentido (aprox. 2 minutos)',
    safetyAlerts: [
      'Não eleve os ombros tensionando o pescoço; mantenha as orelhas longe dos ombros.',
      'Faça movimentos suaves sem estalos forçados.'
    ],
    clinicalModifications: [
      'Pode ser feito no chuveiro com água morna caindo sobre as costas para relaxamento dobrado.',
      'Pode ser praticado em pé ou sentada na beirada da poltrona de amamentação.'
    ],
    musclesWorked: ['Trapézio Médio e Inferior', 'Romboides', 'Serrátil Anterior', 'Deltoide']
  },
  {
    id: 'ball-gentle-circles',
    name: 'Círculos Pélvicos na Bola Suave',
    sanskritName: 'Pelvic Circles na Bola Suíça',
    phaseId: 'phase3',
    phaseBadge: '3º Trimestre',
    videoNumber: 28,
    videoUrl: 'https://drive.google.com/file/d/1qG7JSihj5BlC0XLlyv-A16oT1FPkBw97/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🔴',
    targetArea: 'Articulação Sacroilíaca, Bacia, Períneo e Espaço do Bebê',
    primaryBenefit: 'Favorece o alinhamento pélvico assíncrono para orientar a cabeça do bebê na pelve verdadeira.',
    clinicalPhysiology: 'A movimentação tridimensional circular na bola elástica distribui os vetores de gravidade, relaxando o assoalho pélvico e os ligamentos sacrociáticos para o parto natural.',
    movementAnimation: 'pelvicCircle',
    steps: [
      { title: '1. Assento Firme na Bola', description: 'Sente-se no centro da bola de parto com os pés afastados na largura dos ombros e bem plantados no chão.' },
      { title: '2. Mãos no Ventre ou Joelhos', description: 'Apoie as mãos sobre os joelhos ou envolva suavemente o baixo ventre.' },
      { title: '3. Círculos em Sentido Horário', description: 'Desenhe círculos suaves e fluidos com o quadril, imaginando desenhar uma espiral no chão.' },
      { title: '4. Inversão Harmoniosa', description: 'Alterne o sentido dos círculos suavemente, mantendo a respiração ritmada e o tronco alto.' }
    ],
    breathingSync: {
      inhale: 'Inale quando a pelve contornar a parte anterior do círculo.',
      exhale: 'Exale quando a pelve contornar a parte posterior, soltando o ar pela boca.',
      tip: 'Solte a mandíbula enquanto gira a pelve; a boca relaxada relaxa o períneo.'
    },
    recommendedDuration: '3 a 5 minutos contínuos',
    safetyAlerts: [
      'Certifique-se de usar a bola sobre tapete antiderrapante (nunca em piso liso molhado).',
      'Tenha uma parede, sofá ou parceiro de apoio por perto para garantir equilíbrio.'
    ],
    clinicalModifications: [
      'Substitua os círculos por movimentos de "oito" (sinal do infinito) se preferir.',
      'Faça pequenas quicadinhas suaves para acalmar o bebê e aprofundar o relaxamento.'
    ],
    musclesWorked: ['Músculos do Assoalho Pélvico', 'Obturador Interno', 'Glúteo Médio', 'Transverso Abdominal']
  },
  {
    id: 'supported-glute-bridge',
    name: 'Ponte Pélvica Apoiada (Estabilidade Sacral)',
    sanskritName: 'Setu Bandhasana com Bloco de Suporte',
    phaseId: 'phase4',
    phaseBadge: 'Puerpério',
    videoNumber: 29,
    videoUrl: 'https://drive.google.com/file/d/1CDAC8Tb_C9NTc5nuaYXA_RBvWV_mFAXc/preview',
    difficulty: 'Moderado / Seguro',
    icon: '🌉',
    targetArea: 'Glúteo Máximo, Isquiotibiais, Sacro e Parede Abdominal',
    primaryBenefit: 'Reativa a cadeia posterior e reposiciona a bacia após o parto sem sobrecarregar a região lombar.',
    clinicalPhysiology: 'A elevação dos quadris em ponte com apoio estático restaura a sinergia entre os glúteos e os estabilizadores profundos do core, acelerando a recuperação funcional da bacia.',
    movementAnimation: 'gluteBridge',
    steps: [
      { title: '1. Posição Deitada', description: 'Deite-se no tapete com os joelhos dobrados e os pés apoiados na largura dos quadris, braços ao lado do corpo.' },
      { title: '2. Elevação Pélvica', description: 'Pressione os calcanhares no chão e eleve a pelve desenrolando a coluna vértebra por vértebra.' },
      { title: '3. Acomodação do Bloco', description: 'Posicione um bloco de yoga ou almofada firme sob o osso sacro (base da coluna) para sustentação passiva.' },
      { title: '4. Respiração e Estabilidade', description: 'Repouse a pelve sobre o suporte e respire profundamente, sentindo o alívio na coluna lombar.' }
    ],
    breathingSync: {
      inhale: 'Inale expandindo as costelas e sentindo o abdômen acolhido.',
      exhale: 'Exale ativando levemente o assoalho pélvico e os glúteos.',
      tip: 'Não aperte os dentes nem coloque peso na nuca; o apoio fica nos ombros e pés.'
    },
    recommendedDuration: '3 a 5 minutos na posição suportada',
    safetyAlerts: [
      'Nunca vire a cabeça para os lados enquanto a pelve estiver elevada.',
      'O bloco deve apoiar exatamente o sacro ósseo, nunca na região lombar macia.'
    ],
    clinicalModifications: [
      'Pode ser feito sem o bloco, realizando 8 elevações ativas dinâmicas e suaves.',
      'Coloque uma almofada entre os joelhos para ativar os adutores simultaneamente.'
    ],
    musclesWorked: ['Glúteo Máximo', 'Isquiotibiais', 'Eretores da Espinha', 'Assoalho Pélvico']
  },
  {
    id: 'restorative-side-lying',
    name: 'Descanso Restaurador Lateral com Almofadas',
    sanskritName: 'Anantasana de Repouso Restaurativo',
    phaseId: 'phase1',
    phaseBadge: '1º Trimestre',
    videoNumber: 30,
    videoUrl: 'https://drive.google.com/file/d/1wh97F1avJh4yhr1hwkQkIWuFj2ik4jfN/preview',
    difficulty: 'Relaxamento Profundo',
    icon: '🛌',
    targetArea: 'Coluna Total, Pelve, Diafragma e Sistema Nervoso',
    primaryBenefit: 'Descanso fisiológico completo em decúbito lateral esquerdo, otimizando o fluxo de oxigênio para a placenta e aliviando a fadiga precoce.',
    clinicalPhysiology: 'O decúbito lateral esquerdo descomprime a veia cava inferior e a aorta abdominal, maximizando a perfusão renal e placentária e induzindo o sono profundo restaurador.',
    movementAnimation: 'seatedGround',
    steps: [
      { title: '1. Acomodação no Lado Esquerdo', description: 'Deite-se confortavelmente sobre o lado esquerdo do corpo sobre um colchonete macio.' },
      { title: '2. Suporte sob a Cabeça', description: 'Use um travesseiro de altura adequada sob a cabeça para manter o pescoço alinhado com a coluna.' },
      { title: '3. Almofada Entre os Joelhos', description: 'Dobre suavemente os joelhos e coloque uma almofada comprida entre eles para manter os quadris nivelados.' },
      { title: '4. Abraço na Almofada', description: 'Apoie o braço de cima sobre uma almofada macia à frente do peito e feche os olhos serenamente.' }
    ],
    breathingSync: {
      inhale: 'Inale sentindo o ar expandir a lateral direita livre do tórax.',
      exhale: 'Exale descarregando todo o cansaço do dia no colchão macio.',
      tip: 'Abrace a almofada como se abraçasse seu bebê com aconchego.'
    },
    recommendedDuration: '10 a 15 minutos ou tempo livre de repouso',
    safetyAlerts: [
      'Evite deitar sobre o braço de baixo a ponto de prender a circulação dos dedos.',
      'Mantenha a temperatura do ambiente agradável e use uma manta leve.'
    ],
    clinicalModifications: [
      'Pode colocar um pequeno apoio de toalha sob o baixo ventre para suporte suave.',
      'Pratique durante o período de maior cansaço da tarde para recarregar as energias.'
    ],
    musclesWorked: ['Diafragma', 'Trapézio (relaxamento)', 'Fáscia Toracolombar', 'Musculatura Facial']
  },
  {
    id: 'loving-neck-stretch',
    name: 'Alongamento de Pescoço Olhando para o Bebê',
    sanskritName: 'Kantha Sanchalana com Vínculo Afetivo',
    phaseId: 'phase5',
    phaseBadge: 'Mãe + Bebê',
    videoNumber: 31,
    videoUrl: 'https://drive.google.com/file/d/1NeMCa4ZMF8G9mSnn8MLxkkfFgrmoCH6f/preview',
    difficulty: 'Suave / Iniciante',
    icon: '👶',
    targetArea: 'Trapézio Superior, Esternocleidomastóideo, Cervical e Olhar Afetuoso',
    primaryBenefit: 'Desfaz a tensão na nuca acumulada pelas horas de amamentação e colo, transformando o alívio muscular em momento de carinho visual com o bebê.',
    clinicalPhysiology: 'A inclinação repetitiva da cabeça para olhar o bebê no seio gera sobrecarga estática na musculatura suboccipital e cervical posterior. A inclinação lateral suave aliada ao sorriso e contato visual estimula a liberação de ocitocina e relaxa o plexo braquial.',
    movementAnimation: 'neckRelease',
    steps: [
      { title: '1. Acomodação Confortável', description: 'Sente-se com a coluna longa e o bebê seguro em seu colo ou deitado de frente para você sobre uma almofada.' },
      { title: '2. Contato Visual Amoroso', description: 'Olhe nos olhinhos do bebê com suavidade, relaxando os ombros para baixo e para trás.' },
      { title: '3. Inclinação Lateral Suave', description: 'Incline a orelha direita em direção ao ombro direito suavemente, sem girar a cabeça, mantendo o olhar amoroso no bebê.' },
      { title: '4. Respiração e Troca', description: 'Respire 3 vezes profundamente sentindo a lateral do pescoço abrir com leveza, e repita para o outro lado.' }
    ],
    breathingSync: {
      inhale: 'Inale trazendo a cabeça ao centro com amor e leveza.',
      exhale: 'Exale inclinando a orelha suavemente para o ombro, soltando um suspiro carinhoso para o bebê.',
      tip: 'Sorria suavemente enquanto respira: o sorriso ativa os neurônios-espelho do bebê e relaxa sua mandíbula.'
    },
    recommendedDuration: '4 a 5 respirações lentas de cada lado',
    safetyAlerts: [
      'Não puxe a cabeça com a mão com força; o peso natural da cabeça é suficiente.',
      'Não jogue a cabeça para trás bruscamente.'
    ],
    clinicalModifications: [
      'Pode cantarolar baixinho para o bebê enquanto inclina a cabeça.',
      'Pode apoiar a mão livre na base do pescoço para sentir a musculatura relaxar.'
    ],
    musclesWorked: ['Esternocleidomastóideo', 'Trapézio Superior', 'Escalenos', 'Levantador da Escápula']
  },
  {
    id: 'doorway-chest-stretch',
    name: 'Alongamento de Peitoral Apoiado no Batente',
    sanskritName: 'Abertura Torácica Apoiada',
    phaseId: 'phase2',
    phaseBadge: '2º Trimestre',
    videoNumber: 32,
    videoUrl: 'https://drive.google.com/file/d/1bkDt72aW4r-aneGxmeouahl87gNQNQT6/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🚪',
    targetArea: 'Peitoral Maior e Menor, Fáscia Clavipeitoral, Postura Torácica e Pulmões',
    primaryBenefit: 'Abre a caixa torácica, combate a postura curvada para a frente pelo aumento das mamas e devolve a capacidade de respirar com amplitude.',
    clinicalPhysiology: 'O aumento de peso mamário acentua a cifose torácica e encurta a fáscia anterior dos peitorais. O apoio no batente da porta proporciona alavanca mecânica segura para expandir a cavidade torácica sem exigir contração dos retos abdominais.',
    movementAnimation: 'chestOpen',
    steps: [
      { title: '1. Posição no Vão da Porta', description: 'Fique de pé no centro do batente de uma porta aberta com os pés paralelos e postura ereta.' },
      { title: '2. Apoio dos Antebraços', description: 'Apoie o antebraço ou a palma da mão na lateral do batente na altura dos ombros, cotovelo a 90 graus.' },
      { title: '3. Passo Suave à Frente', description: 'Dê um pequeno passo suave à frente com um dos pés até sentir o alongamento confortável e restaurador no peitoral e ombro.' },
      { title: '4. Respiração Plena', description: 'Permaneça com a coluna neutra e sinta o peito se abrir, desfrutando do espaço para respirar.' }
    ],
    breathingSync: {
      inhale: 'Inale profundamente abrindo as costelas e sentindo o coração se elevar.',
      exhale: 'Exale relaxando as escápulas em direção à cintura e soltando qualquer queimação nos ombros.',
      tip: 'Mantenha o queixo alinhado com o horizonte para não sobrecarregar o pescoço.'
    },
    recommendedDuration: '5 respirações lentas de cada lado (aprox. 1 minuto por braço)',
    safetyAlerts: [
      'Não incline o tronco excessivamente arqueando a lombar; a pelve permanece neutra.',
      'Não force se tiver histórico de frouxidão ligamentar excessiva nos ombros.'
    ],
    clinicalModifications: [
      'Pode posicionar o cotovelo mais alto ou mais baixo no batente para atingir diferentes feixes do peitoral.',
      'Pode ser feito apoiando a mão na quina de uma parede ou armário firme.'
    ],
    musclesWorked: ['Peitoral Maior', 'Peitoral Menor', 'Deltoide Anterior', 'Bíceps Braquial']
  },
  {
    id: 'supported-squat-malasana',
    name: 'Cócoras Guiadas com Apoio (Malasana Suave)',
    sanskritName: 'Malasana com Suporte na Cadeira ou Parede',
    phaseId: 'phase3',
    phaseBadge: '3º Trimestre',
    videoNumber: 33,
    videoUrl: 'https://drive.google.com/file/d/1jHqkHbWg3VHtxcZA1RYBBT8wss3qf0ZU/preview',
    difficulty: 'Suave / Iniciante',
    icon: '🪑',
    targetArea: 'Assoalho Pélvico, Articulação Sacroilíaca, Pelve Verdadeira e Quadríceps',
    primaryBenefit: 'Permite desfrutar de toda a abertura pélvica do agachamento de parto com apoio seguro e estável, poupando joelhos e coluna.',
    clinicalPhysiology: 'O apoio firme das mãos em uma cadeira ou suporte remove até 40% da carga sobre as articulações dos joelhos e a sínfise púbica, mantendo a expansão ideal do diâmetro bi-isquiático para o encaixe da cabeça fetal.',
    movementAnimation: 'squatHold',
    steps: [
      { title: '1. Posição Frente ao Apoio', description: 'Posicione-se em frente ao encosto de uma cadeira firme ou suporte fixo estável.' },
      { title: '2. Afastamento dos Pés', description: 'Afaste os pés além da largura dos quadris, pontas voltadas para fora em 45 graus para acolher o ventre.' },
      { title: '3. Descida Apoiada', description: 'Segurando firme no apoio, flexione os joelhos e desça os quadris até uma altura confortável onde os pés fiquem bem plantados no chão.' },
      { title: '4. Respiração e Abertura', description: 'Mantenha o peito aberto, olhe para a frente e sinta a bacia se acomodar com espaço e calma.' }
    ],
    breathingSync: {
      inhale: 'Inale enchendo os pulmões e sentindo a estabilidade das mãos no apoio.',
      exhale: 'Exale soltando o ar pela boca suavemente e relaxando o períneo e a bacia.',
      tip: 'Solte a mandíbula e relaxe os lábios ao exalar para favorecer a dilatação e o relaxamento pélvico.'
    },
    recommendedDuration: '3 a 5 ciclos de 30 a 45 segundos de permanência',
    safetyAlerts: [
      'Certifique-se de que a cadeira ou apoio não desliza (use sobre tapete antiderrapante).',
      'Se os calcanhares saírem do chão, coloque uma toalha dobrada sob eles para apoio.'
    ],
    clinicalModifications: [
      'Pode colocar blocos de yoga ou uma almofada sob o quadril para se sentar confortavelmente nas cócoras.',
      'Pode ser feito com o parceiro segurando firmemente as mãos da gestante.'
    ],
    musclesWorked: ['Assoalho Pélvico', 'Glúteo Máximo e Médio', 'Quadríceps', 'Adutores']
  }
];

