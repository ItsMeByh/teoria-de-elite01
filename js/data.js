// Para adicionar uma aula: preencha "corpo", "resumo" e "quiz" na aula correspondente
// (ou inclua um novo objeto em LESSONS). Nada mais precisa mudar.
const MODULOS = [
  {
    id: 1,
    nome: "Fundamentos Musicais",
    descricao: "Introdução à teoria, leitura e ritmo musical.",
    disciplinas: [
      "Fundamentos da Música",
      "Leitura Musical",
      "Ritmo e Compasso"
    ],
    etapas: [1, 2, 3]
  },
  {
    id: 2,
    nome: "Harmonia e Percepção",
    descricao: "Estudo das escalas, acordes e percepção auditiva.",
    disciplinas: [
      "Melodia e Escalas",
      "Harmonia Musical",
      "Percepção Musical"
    ],
    etapas: [4, 5, 6]
  },
  {
    id: 3,
    nome: "Composição e Análise",
    descricao: "Estudo da composição e da estrutura musical.",
    disciplinas: [
      "História da Música",
      "Análise Musical",
      "Composição e Arranjos"
    ],
    etapas: [7]
  },
  {
    id: 4,
    nome: "Prática Profissional",
    descricao: "Aplicação dos conhecimentos musicais.",
    disciplinas: [
      "Produção Musical",
      "Prática Musical",
      "Projeto Final"
    ],
    etapas: []
  }
];
const STAGES = [
  { id: 1, nome: "Fundamentos", desc: "O som, o silêncio e os elementos da música." },
  { id: 2, nome: "Leitura Musical", desc: "Notas, pentagrama e claves." },
  { id: 3, nome: "Ritmo", desc: "Figuras, pulso e compasso." },
  { id: 4, nome: "Melodia", desc: "Em breve." },
  { id: 5, nome: "Harmonia", desc: "Em breve." },
  { id: 6, nome: "Percepção", desc: "Em breve." },
  { id: 7, nome: "História da Música", desc: "Em breve." }
];

const LESSONS = [
  { id: 1, etapa: 1, titulo: "Som, Silêncio e Tempo",
    objetivo: "Entender que a música é feita de som, silêncio e tempo.",
    corpo: ["Som é a vibração que o ouvido percebe. Silêncio é a ausência de som — e na música ele também é escrito e medido.", "Tempo organiza os dois: a música acontece quando sons e silêncios se sucedem em uma ordem que percebemos passar."],
    resumo: "Música = som + silêncio organizados no tempo.",
    quiz: [{ q: "O que é o silêncio na música?", o: ["Um erro de execução", "Uma ausência de som que também é medida", "Um som muito fraco"], c: 1 },
           { q: "O que organiza sons e silêncios?", o: ["O tempo", "A cor", "O volume"], c: 0 }] },
  { id: 2, etapa: 1, titulo: "Propriedades do Som",
    objetivo: "Reconhecer as quatro propriedades do som.",
    corpo: ["Altura: grave ou agudo. Duração: curto ou longo. Intensidade: fraco ou forte. Timbre: a 'cor' que diferencia uma voz ou instrumento de outro.", "Um piano e um violino tocando a mesma nota, com a mesma força, ainda soam diferentes: essa diferença é o timbre."],
    resumo: "Altura, duração, intensidade e timbre.",
    quiz: [{ q: "Qual propriedade diferencia um piano de um violino tocando a mesma nota?", o: ["Altura", "Timbre", "Duração"], c: 1 },
           { q: "Grave e agudo descrevem a…", o: ["Intensidade", "Altura", "Duração"], c: 1 }] },
  { id: 3, etapa: 1, titulo: "Música e seus Elementos",
    objetivo: "Distinguir ritmo, melodia e harmonia.",
    corpo: ["Ritmo é a organização dos sons no tempo. Melodia é uma sequência de sons de alturas diferentes. Harmonia é a combinação de sons simultâneos.", "Ao cantar 'Parabéns pra você', você faz melodia. Ao bater palmas no ritmo, faz ritmo. Um violão acompanhando faz harmonia."],
    resumo: "Ritmo (tempo), melodia (sons em sequência), harmonia (sons juntos).",
    quiz: [{ q: "Sons tocados ao mesmo tempo formam…", o: ["Harmonia", "Melodia", "Pulso"], c: 0 },
           { q: "Uma sequência de alturas diferentes é…", o: ["Ritmo", "Melodia", "Timbre"], c: 1 }] },
  { id: 4, etapa: 2, titulo: "Notas Musicais",
    objetivo: "Conhecer as sete notas e sua ordem.",
    corpo: ["As notas são Dó, Ré, Mi, Fá, Sol, Lá e Si. Depois do Si, a sequência recomeça no Dó, uma oitava acima.", "Nas cifras, as mesmas notas aparecem como C, D, E, F, G, A e B."],
    resumo: "Sete notas em ciclo: Dó Ré Mi Fá Sol Lá Si.",
    quiz: [{ q: "Qual nota vem depois do Si?", o: ["Lá", "Dó (uma oitava acima)", "Fá"], c: 1 },
           { q: "Na cifra, Sol é representado por…", o: ["G", "C", "A"], c: 0 }] },
{ id: 5, etapa: 2, titulo: "Pentagrama",
  objetivo: "Entender o que é o pentagrama e como ele é usado para escrever música.",
  corpo: [
    "O pentagrama, também chamado de pauta musical, é o conjunto de cinco linhas horizontais e quatro espaços onde escrevemos as notas e outros símbolos musicais.",
    "As linhas e os espaços são contados sempre de baixo para cima.",
    "Cada linha e cada espaço pode representar uma nota diferente. Para saber exatamente quais notas eles representam, usamos uma clave, como a Clave de Sol ou a Clave de Fá.",
    "Quando uma nota é muito grave ou muito aguda para caber no pentagrama, podemos usar pequenas linhas extras chamadas linhas suplementares."
  ],
  resumo: "O pentagrama possui 5 linhas e 4 espaços, contados de baixo para cima, e serve como base para a escrita musical.",
  quiz: [
    { q: "Quantas linhas possui um pentagrama?", o: ["4", "5", "6", "7"], c: 1 },
    { q: "Quantos espaços existem entre as linhas do pentagrama?", o: ["3", "4", "5", "6"], c: 1 },
    { q: "Como contamos as linhas e os espaços do pentagrama?", o: ["De cima para baixo", "Da direita para a esquerda", "De baixo para cima", "Não existe uma ordem"], c: 2 }
  ]
},
 { id: 6, etapa: 2, titulo: "Clave de Sol",
  objetivo: "Entender o que é a Clave de Sol e como ela ajuda a identificar as notas no pentagrama.",
  corpo: [
    "A Clave de Sol é um símbolo colocado no início do pentagrama. Ela indica a posição das notas e é muito utilizada para representar sons médios e agudos.",
    "O centro da Clave de Sol envolve a segunda linha do pentagrama. Essa linha representa a nota Sol.",
    "A partir do Sol podemos descobrir as outras notas seguindo a sequência: Dó, Ré, Mi, Fá, Sol, Lá e Si.",
    "Nas linhas do pentagrama, de baixo para cima, encontramos: Mi, Sol, Si, Ré e Fá. Nos espaços encontramos: Fá, Lá, Dó e Mi."
  ],
  resumo: "A Clave de Sol indica que a segunda linha do pentagrama representa a nota Sol e é muito usada para sons médios e agudos.",
  quiz: [
    { q: "Qual linha do pentagrama representa a nota Sol na Clave de Sol?", o: ["Primeira", "Segunda", "Terceira", "Quinta"], c: 1 },
    { q: "Quais são as notas das linhas na Clave de Sol, de baixo para cima?", o: ["Mi, Sol, Si, Ré, Fá", "Fá, Lá, Dó, Mi, Sol", "Dó, Ré, Mi, Fá, Sol", "Sol, Lá, Si, Dó, Ré"], c: 0 },
    { q: "A Clave de Sol é muito utilizada para representar sons...", o: ["Somente graves", "Médios e agudos", "Somente percussivos", "Sem altura definida"], c: 1 }
  ]
},
{ id: 7, etapa: 2, titulo: "Clave de Fá",
  objetivo: "Compreender a Clave de Fá e identificar as notas no pentagrama.",
  corpo: [
    "A Clave de Fá é um símbolo musical usado principalmente para representar sons graves, como os produzidos pelo contrabaixo, violoncelo e pela mão esquerda do piano.",
    "A Clave de Fá mais utilizada é colocada na quarta linha do pentagrama. Essa linha representa a nota Fá.",
    "Os dois pontos da Clave de Fá ficam um acima e outro abaixo da quarta linha, indicando a posição da nota Fá.",
    "Na Clave de Fá, as notas das linhas, de baixo para cima, são: Sol, Si, Ré, Fá e Lá.",
    "As notas dos espaços, de baixo para cima, são: Lá, Dó, Mi e Sol.",
    "A principal diferença entre a Clave de Sol e a Clave de Fá é a posição das notas no pentagrama. A Clave de Sol indica o Sol na segunda linha, enquanto a Clave de Fá indica o Fá na quarta linha."
  ],
  resumo: "A Clave de Fá é utilizada principalmente para sons graves. Ela indica a nota Fá na quarta linha do pentagrama. Linhas: Sol, Si, Ré, Fá e Lá. Espaços: Lá, Dó, Mi e Sol.",
  quiz: [
    { q: "Em qual linha do pentagrama fica a nota Fá na Clave de Fá?", o: ["Primeira", "Segunda", "Terceira", "Quarta"], c: 3 },
    { q: "A Clave de Fá é utilizada principalmente para representar quais sons?", o: ["Agudos", "Graves", "Somente rápidos", "Somente fortes"], c: 1 },
    { q: "Quais são as notas das linhas na Clave de Fá, de baixo para cima?", o: ["Mi, Sol, Si, Ré, Fá", "Sol, Si, Ré, Fá, Lá", "Lá, Dó, Mi, Sol, Si", "Dó, Ré, Mi, Fá, Sol"], c: 1 }
  ]
},
 { id: 8, etapa: 2, titulo: "Leitura das Notas",
  objetivo: "Aprender a identificar e ler as notas musicais no pentagrama utilizando as claves.",
  corpo: [
    "A leitura das notas musicais é a habilidade de identificar os sons escritos no pentagrama. Cada nota ocupa uma linha ou um espaço.",
    "Para descobrir o nome de uma nota, primeiro precisamos observar a clave que aparece no início do pentagrama.",
    "Na Clave de Sol, as notas das linhas, de baixo para cima, são: Mi, Sol, Si, Ré e Fá.",
    "Na Clave de Sol, as notas dos espaços, de baixo para cima, são: Fá, Lá, Dó e Mi.",
    "Na Clave de Fá, as notas das linhas, de baixo para cima, são: Sol, Si, Ré, Fá e Lá.",
    "Na Clave de Fá, as notas dos espaços, de baixo para cima, são: Lá, Dó, Mi e Sol.",
    "Para melhorar sua leitura musical, pratique identificando as notas de baixo para cima e depois em diferentes ordens.",
    "Exercício: imagine uma nota na terceira linha do pentagrama. Na Clave de Sol, ela será Si. Na Clave de Fá, será Ré."
  ],
  resumo: "Para ler notas musicais, identificamos a clave e a posição da nota nas linhas ou espaços do pentagrama. Cada clave determina os nomes das notas.",
  quiz: [
    { q: "Qual é a nota da primeira linha na Clave de Sol?", o: ["Dó", "Mi", "Sol", "Fá"], c: 1 },
    { q: "Qual é a nota do terceiro espaço na Clave de Sol?", o: ["Lá", "Si", "Dó", "Ré"], c: 2 },
    { q: "Qual é a nota da terceira linha na Clave de Fá?", o: ["Si", "Ré", "Fá", "Sol"], c: 1 },
    { q: "O que precisamos observar primeiro para identificar uma nota no pentagrama?", o: ["A velocidade", "A intensidade", "A clave", "O instrumento"], c: 2 }
  ]
},
 { id: 9, etapa: 3, titulo: "Figuras Musicais",
  objetivo: "Conhecer as figuras musicais e compreender como elas representam a duração dos sons.",
  corpo: [
    "As figuras musicais são símbolos utilizados na escrita musical para representar a duração dos sons.",
    "Cada figura indica quanto tempo uma nota deve durar em relação às outras figuras.",
    "As principais figuras musicais são: semibreve, mínima, semínima, colcheia, semicolcheia, fusa e semifusa.",
    "A semibreve é a figura de maior duração entre essas sete. Em uma divisão binária, ela equivale a duas mínimas, quatro semínimas ou oito colcheias.",
    "A mínima vale metade de uma semibreve e equivale a duas semínimas.",
    "A semínima vale metade de uma mínima e equivale a duas colcheias.",
    "A colcheia vale metade de uma semínima e equivale a duas semicolcheias.",
    "A semicolcheia equivale a duas fusas, e cada fusa equivale a duas semifusas.",
    "Em um compasso 4/4, tomando a semínima como unidade de tempo, a semibreve dura quatro tempos, a mínima dois tempos, a semínima um tempo e a colcheia meio tempo.",
    "Exercício: bata quatro palmas com intervalos iguais. Cada intervalo representa um tempo. Agora imagine uma semibreve sustentada durante os quatro tempos."
  ],
  resumo: "As figuras musicais representam a duração dos sons. Cada figura vale o dobro da figura seguinte: semibreve, mínima, semínima, colcheia, semicolcheia, fusa e semifusa.",
  quiz: [
    { q: "Qual é a função das figuras musicais?", o: ["Indicar somente a altura", "Representar a duração dos sons", "Indicar o nome do instrumento", "Determinar a clave"], c: 1 },
    { q: "Quantas semínimas equivalem a uma semibreve?", o: ["2", "4", "6", "8"], c: 1 },
    { q: "Quantas colcheias equivalem a uma semínima?", o: ["1", "2", "3", "4"], c: 1 },
    { q: "Em um compasso 4/4, quantos tempos dura uma mínima?", o: ["1", "2", "3", "4"], c: 1 },
    { q: "Qual figura possui metade da duração de uma colcheia?", o: ["Mínima", "Semibreve", "Semicolcheia", "Semínima"], c: 2 }
  ]
},
 { id: 10, etapa: 3, titulo: "Pausas Musicais",
  objetivo: "Compreender o que são as pausas musicais, suas durações e sua importância na leitura de partituras.",
  corpo: [
    "As pausas musicais são símbolos que representam momentos de silêncio durante uma música.",
    "Assim como as figuras musicais representam a duração dos sons, as pausas indicam quanto tempo devemos permanecer em silêncio.",
    "Cada figura musical possui uma pausa correspondente com a mesma duração.",
    "A pausa de semibreve representa um silêncio equivalente à duração de uma semibreve. Em um compasso 4/4, ela corresponde a quatro tempos.",
    "A pausa de mínima equivale à duração de uma mínima. Em um compasso 4/4, corresponde a dois tempos.",
    "A pausa de semínima corresponde a um tempo em um compasso 4/4.",
    "A pausa de colcheia corresponde a meio tempo, enquanto a pausa de semicolcheia corresponde a um quarto de tempo, considerando a semínima como unidade de tempo.",
    "Também existem pausas de fusa e semifusa, que representam silêncios ainda mais curtos.",
    "As pausas são importantes porque organizam o ritmo, criam momentos de silêncio e permitem que a música tenha respiração e expressão.",
    "Exercício prático: conte 1, 2, 3, 4 em voz alta. Bata palmas nos tempos 1 e 3 e permaneça em silêncio nos tempos 2 e 4.",
    "Agora experimente alternar dois tempos de som com dois tempos de silêncio, mantendo sempre a mesma velocidade."
  ],
  resumo: "As pausas musicais representam períodos de silêncio. Cada pausa possui a mesma duração de sua figura musical correspondente. Elas ajudam a organizar o ritmo e a expressão musical.",
  quiz: [
    { q: "O que representam as pausas musicais?", o: ["A altura das notas", "Momentos de silêncio", "A velocidade da música", "O volume dos instrumentos"], c: 1 },
    { q: "Em um compasso 4/4, quantos tempos corresponde uma pausa de mínima?", o: ["1", "2", "3", "4"], c: 1 },
    { q: "Qual pausa corresponde à duração de uma semínima?", o: ["Pausa de mínima", "Pausa de colcheia", "Pausa de semínima", "Pausa de semibreve"], c: 2 },
    { q: "Em um compasso 4/4, quanto tempo dura uma pausa de colcheia?", o: ["Meio tempo", "Um tempo", "Dois tempos", "Quatro tempos"], c: 0 },
    { q: "Por que as pausas são importantes na música?", o: ["Porque eliminam o ritmo", "Porque substituem as claves", "Porque organizam os silêncios e o ritmo", "Porque aumentam a altura das notas"], c: 2 }
  ]
},
  {
  id: 11,
  etapa: 3,
  titulo: "Pulso e Ritmo",

  objetivo: "Entender a diferença entre pulso e ritmo e aprender a identificá-los na música.",

  corpo: [
    "O pulso é uma batida regular que acompanha a música. Podemos compará-lo às batidas de um relógio, que acontecem em intervalos constantes.",

    "Quando você escuta uma música e começa a bater o pé acompanhando as batidas, provavelmente está seguindo o pulso musical.",

    "O ritmo é a organização dos sons e silêncios ao longo do tempo. Ele pode combinar notas longas, curtas e pausas, criando diferentes padrões.",

    "A principal diferença é que o pulso mantém uma referência regular de tempo, enquanto o ritmo pode variar dentro dessa referência.",

    "Exemplo prático: bata quatro palmas igualmente espaçadas. Esse é o pulso. Agora bata duas palmas rápidas, espere um pouco e bata mais uma. Você criou um padrão rítmico.",

    "💡 VOCÊ SABIA? O coração humano possui batimentos que podem lembrar um pulso regular. Porém, na música, o pulso é uma referência de tempo que pode ser mantida mesmo quando o ritmo muda.",

    "EXERCÍCIO PRÁTICO: escolha uma música de que você gosta. Primeiro, bata o pé acompanhando o pulso. Depois, tente bater palmas acompanhando o ritmo da melodia. Perceba a diferença."
  ],

  resumo: "Pulso é a referência regular de tempo da música. Ritmo é a organização de sons e silêncios com diferentes durações.",

  quiz: [
    {
      q: "O que é o pulso musical?",
      o: [
        "Uma batida regular que acompanha a música",
        "O volume de uma música",
        "O instrumento mais agudo"
      ],
      c: 0
    },
    {
      q: "O que é ritmo?",
      o: [
        "A velocidade do som no ar",
        "A organização dos sons e silêncios no tempo",
        "A altura das notas musicais"
      ],
      c: 1
    },
    {
      q: "Qual atividade ajuda a perceber o pulso?",
      o: [
        "Ler apenas o nome das notas",
        "Aumentar o volume do instrumento",
        "Bater o pé acompanhando as batidas regulares"
      ],
      c: 2
    },
    {
      q: "Qual é a principal diferença entre pulso e ritmo?",
      o: [
        "O pulso é regular e o ritmo pode apresentar diferentes durações",
        "O pulso só existe no piano",
        "O ritmo não utiliza silêncios"
      ],
      c: 0
    },
    {
      q: "Um ritmo musical pode conter pausas?",
      o: [
        "Não, apenas sons",
        "Sim, sons e silêncios fazem parte do ritmo",
        "Somente quando não existe pulso"
      ],
      c: 1
    }
  ]
},
 {
  id: 12,
  etapa: 3,
  titulo: "Compasso e Barra de Compasso",

  objetivo: "Entender o que é compasso e como as barras de compasso organizam a música.",

  corpo: [
    "O compasso é uma forma de organizar a música em grupos de tempos. Esses grupos ajudam os músicos a acompanhar o ritmo.",

    "Imagine que você está contando: 1, 2, 3, 4 | 1, 2, 3, 4. Cada grupo de quatro tempos pode representar um compasso.",

    "A barra de compasso é uma linha vertical que atravessa o pentagrama. Ela separa um compasso do próximo.",

    "Existem diferentes tipos de barras: a barra simples separa compassos, a barra dupla pode indicar uma mudança de seção e a barra final indica o encerramento da música.",

    "💡 CURIOSIDADE: A escrita musical mudou muito ao longo da história. As barras de compasso passaram a ser utilizadas de forma mais sistemática conforme a notação musical evoluiu.",

    "EXERCÍCIO PRÁTICO: bata palmas contando 1, 2, 3, 4. Repita a contagem várias vezes, mantendo as batidas regulares.",

    "Agora conte 1, 2, 3 | 1, 2, 3. Perceba como podemos organizar a música em grupos diferentes."
  ],

  resumo: "O compasso organiza a música em grupos de tempos. As barras de compasso separam esses grupos na partitura.",

  quiz: [
    {
      q: "O que é um compasso musical?",
      o: [
        "Um instrumento musical",
        "Uma divisão da música em grupos de tempos",
        "Uma nota musical"
      ],
      c: 1
    },
    {
      q: "Qual é a função da barra de compasso?",
      o: [
        "Separar os compassos",
        "Aumentar o volume",
        "Indicar notas agudas"
      ],
      c: 0
    },
    {
      q: "Qual sequência apresenta grupos de quatro tempos?",
      o: [
        "1, 2 | 1, 2",
        "1, 2, 3 | 1, 2, 3",
        "1, 2, 3, 4 | 1, 2, 3, 4"
      ],
      c: 2
    },
    {
      q: "O que a barra final indica?",
      o: [
        "O início da música",
        "O encerramento da música",
        "Uma nota mais forte"
      ],
      c: 1
    },
    {
      q: "O que a barra dupla pode indicar?",
      o: [
        "Uma mudança de seção",
        "Uma nota mais grave",
        "Um aumento de velocidade"
      ],
      c: 0
    }
  ]
},
 {
  id: 13,
  etapa: 3,
  titulo: "Fórmula de Compasso 4/4",

  objetivo: "Compreender o significado da fórmula de compasso 4/4 e aprender a contar seus tempos corretamente.",

  corpo: [
    "A fórmula de compasso é representada por dois números escritos um sobre o outro no início da partitura, depois da clave e da armadura de clave, quando houver.",

    "O compasso 4/4 é um dos mais utilizados na música. Ele também é conhecido como compasso quaternário simples.",

    "O número de cima, 4, indica que cada compasso contém quatro unidades de tempo.",

    "O número de baixo, 4, indica que a semínima é a figura musical utilizada como unidade de tempo.",

    "Isso significa que um compasso 4/4 possui o equivalente a quatro semínimas. Também podemos preencher o compasso com outras combinações de figuras e pausas que somem a mesma duração.",

    "EXEMPLO: quatro semínimas completam um compasso 4/4. Duas mínimas também completam esse compasso, assim como uma semibreve.",

    "Para contar o compasso 4/4, podemos dizer: UM, dois, três, quatro | UM, dois, três, quatro. O primeiro tempo costuma receber o acento principal.",

    "💡 VOCÊ SABIA? O compasso 4/4 é tão comum que muitas partituras utilizam a letra C estilizada para representá-lo. Esse símbolo é chamado de compasso comum.",

    "EXERCÍCIO PRÁTICO: coloque uma música com batida regular e tente contar 1, 2, 3, 4 acompanhando o pulso. Depois bata palmas no primeiro tempo de cada grupo.",

    "DESAFIO: experimente tocar quatro batidas iguais sobre uma mesa e repetir o padrão sem acelerar nem diminuir a velocidade."
  ],

  resumo: "O compasso 4/4 possui quatro unidades de tempo por compasso, e a semínima é a unidade de tempo. O primeiro tempo geralmente recebe o acento principal.",

  quiz: [
    {
      q: "O que indica o número de cima na fórmula 4/4?",
      o: [
        "A quantidade de instrumentos",
        "Quatro unidades de tempo por compasso",
        "A velocidade da música"
      ],
      c: 1
    },
    {
      q: "O que indica o número de baixo na fórmula 4/4?",
      o: [
        "A semínima como unidade de tempo",
        "Quatro compassos na música",
        "O volume do instrumento"
      ],
      c: 0
    },
    {
      q: "Quantas semínimas completam um compasso 4/4?",
      o: [
        "Duas",
        "Três",
        "Quatro"
      ],
      c: 2
    },
    {
      q: "Qual destas combinações completa um compasso 4/4?",
      o: [
        "Uma única semínima",
        "Duas mínimas",
        "Três colcheias"
      ],
      c: 1
    },
    {
      q: "Qual tempo costuma receber o acento principal no compasso 4/4?",
      o: [
        "O primeiro tempo",
        "O terceiro tempo",
        "O quarto tempo"
      ],
      c: 0
    }
  ]
},
{
  id: 14,
  etapa: 3,
  titulo: "Fórmula de Compasso 3/4",

  objetivo: "Aprender o significado da fórmula de compasso 3/4, identificar seus três tempos e compreender como ela é utilizada na música.",

  corpo: [
    "Na aula anterior, aprendemos que o compasso 4/4 possui quatro tempos de semínima. Agora vamos conhecer o compasso 3/4, que organiza a música em grupos de três tempos.",

    "A fórmula de compasso 3/4 apresenta dois números. O número de cima, 3, indica que cada compasso possui três unidades de tempo.",

    "O número de baixo, 4, indica que a semínima é a figura musical utilizada como unidade de tempo.",

    "Portanto, um compasso 3/4 pode ser preenchido por três semínimas ou por outras combinações de figuras e pausas que tenham a mesma duração total.",

    "EXEMPLO: uma mínima e uma semínima completam um compasso 3/4. Seis colcheias também completam esse compasso.",

    "Para contar o compasso 3/4, podemos dizer: UM, dois, três | UM, dois, três. O primeiro tempo geralmente recebe o acento principal.",

    "O compasso 3/4 é chamado de ternário simples. Ele é muito conhecido por aparecer em diversas valsas, que apresentam uma sensação de movimento em três tempos.",

    "Uma diferença importante é que o compasso 4/4 organiza quatro tempos, enquanto o 3/4 organiza três. Essa mudança altera a maneira como sentimos e contamos a música.",

    "💡 VOCÊ SABIA? A valsa se tornou muito popular na Europa e é um dos exemplos mais conhecidos de música escrita em compasso 3/4.",

    "EXERCÍCIO PRÁTICO: bata palmas contando 1, 2, 3 | 1, 2, 3. Faça uma palma um pouco mais forte no número 1 e mantenha as outras duas mais suaves.",

    "DESAFIO MUSICAL: compare duas contagens. Primeiro conte 1, 2, 3, 4 e depois 1, 2, 3. Perceba como o agrupamento das batidas muda."
  ],

  resumo: "O compasso 3/4 possui três unidades de tempo por compasso, e a semínima é a unidade de tempo. É chamado de ternário simples e aparece frequentemente nas valsas.",

  quiz: [
    {
      q: "Quantos tempos de semínima existem em um compasso 3/4?",
      o: [
        "Dois",
        "Três",
        "Quatro"
      ],
      c: 1
    },
    {
      q: "O que indica o número 4 na parte inferior da fórmula 3/4?",
      o: [
        "A semínima como unidade de tempo",
        "Quatro instrumentos",
        "Quatro compassos"
      ],
      c: 0
    },
    {
      q: "Qual combinação completa corretamente um compasso 3/4?",
      o: [
        "Uma mínima e uma semínima",
        "Uma semibreve",
        "Duas semínimas"
      ],
      c: 0
    },
    {
      q: "Qual estilo de dança é muito associado ao compasso 3/4?",
      o: [
        "Samba",
        "Valsa",
        "Marcha militar"
      ],
      c: 1
    },
    {
      q: "Qual é a contagem correta de um compasso 3/4?",
      o: [
        "1, 2 | 1, 2",
        "1, 2, 3, 4 | 1, 2, 3, 4",
        "1, 2, 3 | 1, 2, 3"
      ],
      c: 2
    }
  ]
},
  { id: 15, etapa: 3, titulo: "Leitura Métrica e Solfejo" }
];

const PERIODOS = [
  { id: "pre", nome: "Pré-História", anos: "até ~3000 a.C.", resumo: "Voz, percussão corporal e flautas de osso.", marcos: ["Flautas de osso com mais de 40 mil anos", "Música ligada a rituais"], comp: "Sem autoria conhecida", cur: "Instrumentos mais antigos já encontrados são flautas." },
  { id: "ant", nome: "Antiguidade", anos: "~3000 a.C. – 476", resumo: "Egito, Grécia e Roma estudam o som e criam instrumentos como a lira.", marcos: ["Pitágoras relaciona notas e proporções", "Música no teatro grego"], comp: "Pitágoras (teórico)", cur: "A palavra 'música' vem das Musas gregas." },
  { id: "med", nome: "Idade Média", anos: "476 – 1400", resumo: "Canto gregoriano e primeiros sistemas de escrita musical.", marcos: ["Guido d'Arezzo e o nome das notas", "Polifonia nas catedrais"], comp: "Hildegard von Bingen, Guido d'Arezzo", cur: "Os nomes Dó-Ré-Mi vêm de um hino latino." },
  { id: "ren", nome: "Renascimento", anos: "1400 – 1600", resumo: "Vozes entrelaçadas com clareza e a difusão da imprensa musical.", marcos: ["Impressão de partituras", "Madrigais"], comp: "Palestrina, Josquin des Prez", cur: "A imprensa musical espalhou partituras pela Europa." },
  { id: "bar", nome: "Barroco", anos: "1600 – 1750", resumo: "Ópera, contraste e baixo contínuo.", marcos: ["Nascimento da ópera", "Concertos e fugas"], comp: "Bach, Vivaldi, Handel", cur: "Vivaldi escreveu centenas de concertos." },
  { id: "cla", nome: "Classicismo", anos: "1750 – 1820", resumo: "Equilíbrio, clareza e forma sonata.", marcos: ["Sinfonia e quarteto de cordas", "Piano ganha destaque"], comp: "Haydn, Mozart, Beethoven", cur: "Mozart compôs desde os cinco anos." },
  { id: "rom", nome: "Romantismo", anos: "1820 – 1900", resumo: "Expressão emocional, virtuosismo e orquestras maiores.", marcos: ["Poemas sinfônicos", "Nacionalismo musical"], comp: "Chopin, Liszt, Tchaikovsky", cur: "Chopin escreveu quase só para piano." },
  { id: "xx", nome: "Século XX e atual", anos: "1900 – hoje", resumo: "Jazz, música eletrônica, gravação e novas linguagens.", marcos: ["Gravação e rádio", "Jazz, rock e música eletrônica", "Música brasileira: samba, choro, bossa nova"], comp: "Debussy, Stravinsky, Villa-Lobos", cur: "A gravação permitiu ouvir música sem estar no local." }
];

const GLOSS = [
  ["Som", "Vibração que o ouvido percebe."], ["Silêncio", "Ausência de som, também escrita na música por pausas."],
  ["Altura", "Propriedade que diferencia sons graves de agudos."], ["Duração", "Tempo que um som permanece."],
  ["Intensidade", "Força do som: fraco ou forte."], ["Timbre", "Cor do som; diferencia instrumentos e vozes."],
  ["Ritmo", "Organização dos sons e silêncios no tempo."], ["Melodia", "Sequência de sons de alturas diferentes."],
  ["Harmonia", "Combinação de sons simultâneos."], ["Pulso", "Batida regular que sentimos na música."],
  ["Compasso", "Divisão do tempo em grupos de pulsos, separados por barras."], ["Clave", "Símbolo que define o nome das notas no pentagrama."],
  ["Pentagrama", "Conjunto de cinco linhas e quatro espaços onde as notas são escritas."], ["Nota", "Símbolo de um som: Dó, Ré, Mi, Fá, Sol, Lá, Si."]
];
