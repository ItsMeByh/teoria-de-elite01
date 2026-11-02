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
 {
  id: 15,
  etapa: 3,
  titulo: "Fórmula de Compasso 2/4",

  objetivo: "Compreender a fórmula de compasso 2/4, aprender a contar seus dois tempos e identificar suas características na música.",

  corpo: [
    "Nas aulas anteriores, conhecemos os compassos 4/4 e 3/4. Agora vamos aprender o compasso 2/4, que organiza a música em grupos de dois tempos.",

    "A fórmula de compasso 2/4 possui dois números. O número de cima, 2, indica que cada compasso contém duas unidades de tempo.",

    "O número de baixo, 4, indica que a semínima é a figura musical utilizada como unidade de tempo.",

    "Isso significa que cada compasso 2/4 possui o equivalente à duração de duas semínimas.",

    "EXEMPLO: duas semínimas completam um compasso 2/4. Uma mínima também completa esse compasso, assim como quatro colcheias.",

    "O compasso 2/4 é chamado de binário simples porque organiza a música em dois tempos, com subdivisão binária de cada tempo.",

    "Para contar o compasso 2/4, podemos dizer: UM, dois | UM, dois | UM, dois. O primeiro tempo costuma ser forte e o segundo, fraco.",

    "Esse tipo de compasso aparece em muitas marchas e em diferentes estilos musicais, ajudando a criar uma sensação regular de dois tempos.",

    "COMPARAÇÃO: no compasso 2/4 contamos dois tempos; no 3/4 contamos três; e no 4/4 contamos quatro. Todos utilizam a semínima como unidade de tempo.",

    "💡 VOCÊ SABIA? A organização em dois tempos é bastante natural para movimentos como caminhar, pois podemos associar as batidas à alternância dos passos.",

    "EXERCÍCIO PRÁTICO: bata palmas contando 1, 2 | 1, 2. Faça uma palma mais forte no número 1 e uma mais suave no número 2.",

    "DESAFIO MUSICAL: caminhe lentamente enquanto conta 1, 2 | 1, 2. Tente manter os passos regulares e perceber a alternância entre os tempos."
  ],

  resumo: "O compasso 2/4 possui duas unidades de tempo por compasso, e a semínima é a unidade de tempo. É um compasso binário simples, geralmente com o primeiro tempo forte e o segundo fraco.",

  quiz: [
    {
      q: "Quantos tempos de semínima existem em um compasso 2/4?",
      o: [
        "Dois",
        "Três",
        "Quatro"
      ],
      c: 0
    },
    {
      q: "O que indica o número de baixo na fórmula 2/4?",
      o: [
        "A velocidade da música",
        "A semínima como unidade de tempo",
        "A quantidade de instrumentos"
      ],
      c: 1
    },
    {
      q: "Qual combinação completa um compasso 2/4?",
      o: [
        "Três semínimas",
        "Uma semibreve",
        "Uma mínima"
      ],
      c: 2
    },
    {
      q: "Como é chamado o compasso 2/4?",
      o: [
        "Binário simples",
        "Ternário simples",
        "Quaternário composto"
      ],
      c: 0
    },
    {
      q: "Qual é a contagem correta do compasso 2/4?",
      o: [
        "1, 2, 3 | 1, 2, 3",
        "1, 2 | 1, 2",
        "1, 2, 3, 4 | 1, 2, 3, 4"
      ],
      c: 1
    }
  ]
},
// A lista continua com a aula 16
{
  id: 16,
  etapa: 3,
  titulo: "Ponto de Aumento",

  objetivo: "Aprender como o ponto de aumento modifica a duração das figuras musicais.",

  corpo: [
    "🎵 O QUE É? O ponto de aumento é um pontinho colocado à direita de uma figura musical.",

    "Ele aumenta a duração da figura em 50% do seu valor original. Isso significa que acrescentamos metade do tempo que ela já possui.",

    "🎼 EXEMPLO 1: uma mínima vale 2 tempos. Com o ponto de aumento, ganha mais 1 tempo e passa a valer 3 tempos.",

    "🎼 EXEMPLO 2: uma semínima vale 1 tempo. Com o ponto, ganha mais meio tempo e passa a valer 1 tempo e meio.",

    "💡 CURIOSIDADE: o ponto de aumento também pode aparecer ao lado de uma pausa musical! Nesse caso, aumenta o tempo de silêncio em 50%.",

    "👏 VAMOS PRATICAR? Conte 1, 2, 3 lentamente, imaginando uma mínima pontuada sendo sustentada durante os três tempos."
  ],

  resumo: "O ponto de aumento acrescenta 50% da duração original de uma figura musical ou pausa.",

  quiz: [
    {
      q: "Quanto o ponto de aumento acrescenta à duração de uma figura?",
      o: ["25%", "50%", "100%"],
      c: 1
    },
    {
      q: "Uma mínima vale 2 tempos. Quanto vale uma mínima pontuada?",
      o: ["2 tempos", "3 tempos", "4 tempos"],
      c: 1
    },
    {
      q: "Uma semínima vale 1 tempo. Quanto vale uma semínima pontuada?",
      o: ["1 tempo e meio", "2 tempos", "3 tempos"],
      c: 0
    },
    {
      q: "Onde colocamos o ponto de aumento?",
      o: ["À esquerda da figura", "Em cima da figura", "À direita da figura"],
      c: 2
    },
    {
      q: "O ponto de aumento também pode ser usado em pausas?",
      o: ["Sim", "Não", "Somente em compassos 4/4"],
      c: 0
    }
  ]
},
{
  id: 17,
  etapa: 3,
  titulo: "Ligadura de Valor",
  objetivo: "Aprender como unir a duração de duas notas de mesma altura.",
  corpo: [
    "🎵 A ligadura de valor é uma linha curva que une duas notas de mesma altura.",
    "Quando duas notas estão ligadas, tocamos um único som durante a soma de suas durações.",
    "🎼 EXEMPLO: uma mínima de 2 tempos ligada a uma semínima de 1 tempo forma um som sustentado por 3 tempos.",
    "A ligadura de valor também pode unir notas separadas por uma barra de compasso.",
    "💡 CURIOSIDADE: a ligadura ajuda a escrever sons longos sem precisar criar uma figura musical diferente.",
    "👏 PRATIQUE: conte três tempos mantendo um único som, sem interrompê-lo."
  ],
  resumo: "A ligadura de valor soma as durações de notas de mesma altura, formando um único som.",
  quiz: [
    { q: "Qual é a função da ligadura de valor?", o: ["Aumentar a intensidade", "Somar durações", "Acelerar a música"], c: 1 },
    { q: "A ligadura de valor une notas de qual altura?", o: ["Mesma altura", "Alturas sempre diferentes", "Qualquer altura sem distinção"], c: 0 },
    { q: "Uma mínima ligada a uma semínima, valendo 2 e 1 tempos, dura quanto?", o: ["1 tempo", "2 tempos", "3 tempos"], c: 2 },
    { q: "As notas ligadas por ligadura de valor são tocadas como:", o: ["Um som contínuo", "Dois sons separados", "Uma pausa"], c: 0 },
    { q: "A ligadura de valor pode atravessar uma barra de compasso?", o: ["Não", "Sim", "Somente no final da música"], c: 1 }
  ]
},
{
  id: 18,
  etapa: 3,
  titulo: "Ligadura de Expressão",
  objetivo: "Reconhecer a ligadura de expressão e compreender sua função musical.",
  corpo: [
    "🎼 A ligadura de expressão é uma linha curva que indica que um grupo de notas deve ser executado de maneira ligada.",
    "Ela orienta a articulação musical, ajudando a criar frases suaves e contínuas.",
    "🎵 DIFERENÇA: a ligadura de valor soma durações; a ligadura de expressão orienta a maneira de tocar as notas.",
    "No violino, por exemplo, várias notas sob uma ligadura podem ser executadas em um mesmo movimento do arco.",
    "💡 CURIOSIDADE: o modo de executar uma ligadura pode variar conforme o instrumento.",
    "👏 PRATIQUE: cante Dó, Ré e Mi suavemente, tentando ligar os três sons."
  ],
  resumo: "A ligadura de expressão indica uma execução ligada, enquanto a ligadura de valor soma durações.",
  quiz: [
    { q: "O que indica a ligadura de expressão?", o: ["Uma pausa", "Notas executadas de maneira ligada", "Aumento de 50%"], c: 1 },
    { q: "Qual ligadura soma a duração das notas?", o: ["Ligadura de valor", "Ligadura de expressão", "Nenhuma"], c: 0 },
    { q: "A ligadura de expressão ajuda a criar:", o: ["Frases musicais ligadas", "Silêncio obrigatório", "Compassos extras"], c: 0 },
    { q: "A execução da ligadura pode variar conforme o instrumento?", o: ["Sim", "Não", "Nunca"], c: 0 },
    { q: "A ligadura de expressão determina que todas as notas tenham a mesma altura?", o: ["Sim", "Não", "Somente no violino"], c: 1 }
  ]
},
{
  id: 19,
  etapa: 3,
  titulo: "Fermata",
  objetivo: "Compreender o sinal de fermata e sua influência na duração musical.",
  corpo: [
    "🎵 A fermata é um sinal musical que permite prolongar uma nota ou pausa além do valor escrito.",
    "Seu símbolo se parece com um pequeno arco com um ponto abaixo dele.",
    "🎼 IMPORTANTE: a fermata não determina uma quantidade fixa de tempos extras.",
    "A duração depende da interpretação musical e, quando houver, da orientação do regente.",
    "💡 CURIOSIDADE: a fermata pode criar momentos de grande expectativa em uma apresentação.",
    "👏 PRATIQUE: sustente uma nota e prolongue seu som um pouco além da duração escrita."
  ],
  resumo: "A fermata indica o prolongamento de uma nota ou pausa, sem determinar uma duração fixa.",
  quiz: [
    { q: "Qual é a função da fermata?", o: ["Diminuir sempre a duração", "Prolongar uma nota ou pausa", "Repetir um compasso"], c: 1 },
    { q: "A fermata acrescenta sempre 50% da duração?", o: ["Sim", "Não", "Somente em semínimas"], c: 1 },
    { q: "A fermata pode aparecer sobre uma pausa?", o: ["Sim", "Não", "Nunca"], c: 0 },
    { q: "Quem pode orientar a duração de uma fermata em uma execução coletiva?", o: ["O regente", "A barra de compasso", "O nome da nota"], c: 0 },
    { q: "A fermata pode criar qual efeito?", o: ["Expectativa musical", "Mudança automática de clave", "Nova nota musical"], c: 0 }
  ]
},
{
  id: 20,
  etapa: 3,
  titulo: "Sinais de Repetição",
  objetivo: "Identificar sinais que indicam a repetição de trechos musicais.",
  corpo: [
    "🎼 Algumas músicas possuem partes que devem ser tocadas mais de uma vez.",
    "Para evitar escrever o mesmo trecho novamente, utilizamos sinais de repetição.",
    "🎵 A barra de repetição final, representada por :||, indica que devemos voltar e repetir um trecho.",
    "Se houver uma barra de repetição inicial correspondente, voltamos até ela. Caso contrário, normalmente retornamos ao começo.",
    "💡 CURIOSIDADE: os sinais de repetição deixam as partituras mais curtas e organizadas.",
    "👏 PRATIQUE: bata quatro palmas e depois repita a mesma sequência."
  ],
  resumo: "Os sinais de repetição indicam trechos que devem ser executados novamente.",
  quiz: [
    { q: "Para que servem os sinais de repetição?", o: ["Repetir trechos musicais", "Aumentar o volume", "Alterar a clave"], c: 0 },
    { q: "Qual símbolo pode indicar o final de um trecho a repetir?", o: ["𝄽", ":||", "♯"], c: 1 },
    { q: "Por que utilizar sinais de repetição?", o: ["Para evitar escrever trechos iguais novamente", "Para apagar notas", "Para mudar o instrumento"], c: 0 },
    { q: "Se existir uma barra inicial correspondente, para onde voltamos?", o: ["Para ela", "Sempre para a última nota", "Para a próxima página"], c: 0 },
    { q: "A repetição modifica obrigatoriamente o valor das figuras?", o: ["Sim", "Não", "Somente das pausas"], c: 1 }
  ]
},
{
  id: 21,
  etapa: 3,
  titulo: "Andamento Musical",
  objetivo: "Entender como o andamento determina a velocidade de execução musical.",
  corpo: [
    "🎵 O andamento indica a velocidade com que executamos uma música.",
    "Uma música pode ter andamento lento, moderado ou rápido.",
    "🎼 Algumas indicações tradicionais são Largo, Andante, Moderato e Allegro.",
    "Também podemos encontrar indicações em BPM, que significa batidas por minuto.",
    "💡 CURIOSIDADE: um metrônomo ajuda os músicos a manter o andamento durante o estudo.",
    "👏 PRATIQUE: bata palmas devagar e depois aumente a velocidade, mantendo a regularidade."
  ],
  resumo: "O andamento indica a velocidade da música e pode ser expresso por palavras ou BPM.",
  quiz: [
    { q: "O que o andamento indica?", o: ["A velocidade da música", "O nome da nota", "A altura do pentagrama"], c: 0 },
    { q: "Qual indicação costuma representar andamento rápido?", o: ["Largo", "Allegro", "Lento"], c: 1 },
    { q: "O que significa BPM?", o: ["Batidas por minuto", "Barras por melodia", "Baixos por música"], c: 0 },
    { q: "Qual equipamento ajuda a manter a pulsação regular?", o: ["Metrônomo", "Estante", "Afinador de arco"], c: 0 },
    { q: "Andamento e intensidade significam a mesma coisa?", o: ["Sim", "Não", "Sempre"], c: 1 }
  ]
},
{
  id: 22,
  etapa: 3,
  titulo: "Intensidade e Dinâmica",
  objetivo: "Compreender como a dinâmica indica variações de intensidade sonora.",
  corpo: [
    "🎵 A dinâmica musical orienta a intensidade com que os sons devem ser executados.",
    "A letra p significa piano, uma indicação de execução suave.",
    "A letra f significa forte, uma indicação de execução com maior intensidade.",
    "🎼 Crescendo significa aumentar gradualmente a intensidade. Diminuendo indica diminuí-la gradualmente.",
    "💡 CURIOSIDADE: uma música pode transmitir sensações diferentes apenas mudando sua dinâmica.",
    "👏 PRATIQUE: cante uma nota suavemente, aumente o volume aos poucos e depois diminua."
  ],
  resumo: "A dinâmica orienta a intensidade da música, incluindo piano, forte, crescendo e diminuendo.",
  quiz: [
    { q: "O que indica a dinâmica musical?", o: ["A intensidade sonora", "O número de linhas", "O nome da clave"], c: 0 },
    { q: "O que significa p?", o: ["Piano, execução suave", "Pausa", "Presto"], c: 0 },
    { q: "O que significa f?", o: ["Fraco", "Forte", "Fermata"], c: 1 },
    { q: "O que significa crescendo?", o: ["Aumentar gradualmente a intensidade", "Acelerar obrigatoriamente", "Parar de tocar"], c: 0 },
    { q: "O que significa diminuendo?", o: ["Aumentar o volume", "Diminuir gradualmente a intensidade", "Repetir a música"], c: 1 }
  ]
},
{
  id: 23,
  etapa: 3,
  titulo: "Legato e Staccato",
  objetivo: "Conhecer duas maneiras diferentes de articular os sons musicais.",
  corpo: [
    "🎼 Articulação musical é a maneira como iniciamos, ligamos ou separamos os sons.",
    "🎵 Legato significa executar as notas de maneira ligada e contínua.",
    "Staccato indica notas executadas de maneira destacada, com separação entre os sons.",
    "O staccato costuma ser indicado por um pequeno ponto acima ou abaixo da cabeça da nota.",
    "💡 ATENÇÃO: o ponto de staccato não é o ponto de aumento. O ponto de aumento fica à direita da figura e acrescenta 50% à duração.",
    "👏 PRATIQUE: toque ou cante três notas ligadas e depois as mesmas três notas separadamente."
  ],
  resumo: "Legato indica sons ligados; staccato indica sons destacados e separados.",
  quiz: [
    { q: "O que significa legato?", o: ["Notas ligadas", "Notas sempre fortes", "Silêncio"], c: 0 },
    { q: "O que significa staccato?", o: ["Notas destacadas", "Notas mais longas", "Notas dobradas"], c: 0 },
    { q: "Onde costuma aparecer o ponto de staccato?", o: ["Acima ou abaixo da nota", "Sempre à direita", "No início do pentagrama"], c: 0 },
    { q: "O ponto de staccato é igual ao ponto de aumento?", o: ["Sim", "Não", "Somente no compasso 4/4"], c: 1 },
    { q: "Qual articulação favorece uma execução contínua?", o: ["Staccato", "Legato", "Pausa"], c: 1 }
  ]
},
{
  id: 24,
  etapa: 3,
  titulo: "Revisão de Ritmo e Expressão",
  objetivo: "Revisar os principais sinais musicais estudados até agora.",
  corpo: [
    "🎼 Chegou o momento de revisar o que aprendemos sobre duração e expressão musical.",
    "O ponto de aumento acrescenta metade da duração original de uma figura.",
    "A ligadura de valor soma durações; a ligadura de expressão orienta uma execução ligada.",
    "🎵 A fermata permite prolongar um som ou silêncio. Os sinais de repetição indicam trechos que devem ser tocados novamente.",
    "O andamento determina a velocidade, enquanto a dinâmica orienta a intensidade.",
    "👏 DESAFIO: explique com suas próprias palavras a diferença entre legato, staccato e ligadura de valor."
  ],
  resumo: "Revisão de ponto de aumento, ligaduras, fermata, repetição, andamento, dinâmica e articulação.",
  quiz: [
    { q: "Quanto acrescenta o ponto de aumento?", o: ["25%", "50%", "100%"], c: 1 },
    { q: "Qual sinal permite somar durações de notas da mesma altura?", o: ["Ligadura de valor", "Staccato", "Fermata"], c: 0 },
    { q: "O que determina o andamento?", o: ["A intensidade", "A velocidade", "A altura"], c: 1 },
    { q: "Qual indicação representa execução suave?", o: ["Forte", "Piano", "Crescendo"], c: 1 },
    { q: "O que indica o staccato?", o: ["Sons destacados", "Sons obrigatoriamente mais fortes", "Notas ligadas"], c: 0 }
  ]
},
{
  id: 25,
  etapa: 3,
  titulo: "Desafio dos Fundamentos Musicais",
  objetivo: "Consolidar os conhecimentos de leitura, ritmo e expressão musical.",
  corpo: [
    "🏆 Parabéns por chegar ao desafio da Aula 25 do Teoria de Elite!",
    "Até aqui você estudou elementos importantes da escrita musical, como notas, claves, figuras, pausas e sinais de expressão.",
    "🎼 Um bom músico não aprende apenas os nomes dos símbolos: ele precisa compreender como utilizá-los durante a execução.",
    "Leia cada pergunta com calma e tente responder sem consultar as aulas anteriores.",
    "💡 CURIOSIDADE: revisar os fundamentos com frequência ajuda a desenvolver uma leitura musical mais segura.",
    "👏 MISSÃO FINAL: escolha uma pequena melodia e tente identificar suas notas, figuras, pausas e indicações musicais."
  ],
  resumo: "Avaliação de revisão dos fundamentos de leitura, duração e expressão musical.",
  quiz: [
    { q: "Quantas linhas possui um pentagrama?", o: ["4", "5", "6"], c: 1 },
    { q: "Qual sinal aumenta uma figura em 50% de sua duração original?", o: ["Fermata", "Ponto de aumento", "Staccato"], c: 1 },
    { q: "Uma mínima de 2 tempos ligada por ligadura de valor a uma semínima de 1 tempo dura:", o: ["2 tempos", "3 tempos", "4 tempos"], c: 1 },
    { q: "Qual termo indica execução ligada?", o: ["Legato", "Staccato", "Forte"], c: 0 },
    { q: "O que indica um crescendo?", o: ["Diminuir a velocidade", "Aumentar gradualmente a intensidade", "Repetir um compasso"], c: 1 }
  ]
}
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
