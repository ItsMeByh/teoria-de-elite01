// Para adicionar uma aula: preencha "corpo", "resumo" e "quiz" na aula correspondente
// (ou inclua um novo objeto em LESSONS). Nada mais precisa mudar.
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
  { id: 5, etapa: 2, titulo: "Pentagrama" },
  { id: 6, etapa: 2, titulo: "Clave de Sol" },
  { id: 7, etapa: 2, titulo: "Clave de Fá" },
  { id: 8, etapa: 2, titulo: "Leitura das Notas" },
  { id: 9, etapa: 3, titulo: "Figuras Musicais" },
  { id: 10, etapa: 3, titulo: "Pausas Musicais" },
  { id: 11, etapa: 3, titulo: "Pulso e Ritmo" },
  { id: 12, etapa: 3, titulo: "Compasso e Barra de Compasso" },
  { id: 13, etapa: 3, titulo: "Fórmula de Compasso 4/4" },
  { id: 14, etapa: 3, titulo: "Leitura Rítmica" },
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
