window.DesafioOuvido = (() => {
  const notas = [
    { nome: "Dó", hz: 261.63 },
    { nome: "Ré", hz: 293.66 },
    { nome: "Mi", hz: 329.63 },
    { nome: "Fá", hz: 349.23 },
    { nome: "Sol", hz: 392.00 },
    { nome: "Lá", hz: 440.00 },
    { nome: "Si", hz: 493.88 }
  ];

  let notaAtual = null;
  let acertos = 0;
  let tentativas = 0;
  let audio = null;

  function novaNota() {
    notaAtual = notas[Math.floor(Math.random() * notas.length)];
    return notaAtual;
  }

  function tocar() {
    if (!notaAtual) novaNota();

    const AudioContexto = window.AudioContext || window.webkitAudioContext;
    if (!AudioContexto) return;

    if (!audio) audio = new AudioContexto();
    if (audio.state === "suspended") audio.resume();

    const oscilador = audio.createOscillator();
    const volume = audio.createGain();

    oscilador.type = "sine";
    oscilador.frequency.value = notaAtual.hz;

    volume.gain.setValueAtTime(0.0001, audio.currentTime);
    volume.gain.exponentialRampToValueAtTime(0.25, audio.currentTime + 0.03);
    volume.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 1);

    oscilador.connect(volume);
    volume.connect(audio.destination);

    oscilador.start();
    oscilador.stop(audio.currentTime + 1);
  }

  function responder(nome) {
    if (!notaAtual) return null;

    const acertou = nome === notaAtual.nome;
    tentativas++;

    if (acertou) acertos++;

    const resultado = {
      acertou,
      resposta: notaAtual.nome,
      acertos,
      tentativas
    };

    notaAtual = null;
    return resultado;
  }

  return { notas, novaNota, tocar, responder };
})();
