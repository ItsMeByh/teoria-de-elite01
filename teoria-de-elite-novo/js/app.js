const $ = (s, r = document) => r.querySelector(s);
const KEY = "te:v1";
const NIVEIS = ["Iniciante", "Aprendiz", "Leitor", "Músico", "Maestro"];
const NIVEIS_CONHEC = ["Não sei nada", "Sei pouco", "Sei o básico", "Sei bastante coisa", "Avançado"];
let S = null;
try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const nivel = () => Math.min(Math.floor(S.xp / 100), 4);
const pct = () => Math.round(S.feitas.length / LESSONS.length * 100);
const livre = l => l.id === 1 || S.feitas.includes(l.id - 1);
const guia = m => `<div class="guia"><span class="sel">TE</span><p>${m}</p></div>`;
const barra = p => `<div class="barra"><i style="width:${p}%"></i></div>`;
const stat = (v, l) => `<div class="card stat"><b>${v}</b><span>${l}</span></div>`;
function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 2600); }

const CONQ = [
  { id: "passo", nome: "Primeiro passo", d: "Concluiu a primeira aula.", ok: () => S.feitas.length >= 1 },
  { id: "ritmo", nome: "Ritmo constante", d: "Concluiu 5 aulas.", ok: () => S.feitas.length >= 5 },
  { id: "leitor", nome: "Leitor musical", d: "Tirou 70% ou mais em um simulado.", ok: () => S.simulados.some(s => s.p >= 70) },
  { id: "hist", nome: "Historiador", d: "Explorou todos os períodos da história.", ok: () => S.hist.length >= PERIODOS.length }
];
function checar() {
  CONQ.forEach(c => { if (!S.conquistas.includes(c.id) && c.ok()) { S.conquistas.push(c.id); toast("Conquista: " + c.nome); } });
  save();
}
function tick() {
  const dia = d => d.toISOString().slice(0, 10), hoje = dia(new Date());
  if (S.dia === hoje) return;
  S.streak = S.dia === dia(new Date(Date.now() - 864e5)) ? S.streak + 1 : 1;
  S.dia = hoje; save();
}

// ---------- Telas ----------
const home = () => `<section class="hero pg">
<svg class="pauta" viewBox="0 0 600 120" aria-hidden="true">${[0, 1, 2, 3, 4].map(i => `<line x1="0" x2="600" y1="${20 + i * 20}" y2="${20 + i * 20}" style="--d:${i * .15}s"/>`).join("")}${[[120, 80], [210, 60], [300, 100], [390, 40], [480, 70]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="9" style="--d:${1 + i * .3}s"/>`).join("")}</svg>
<h1>Teoria de Elite</h1><p class="lead">Sua jornada musical começa aqui.</p>
<p class="mute">Uma plataforma gratuita para aprender música de forma organizada e constante: teoria, história, prática e avaliações em um só caminho.</p>
<a class="btn" href="#/${S ? "painel" : "entrada"}">${S ? "CONTINUAR" : "COMEÇAR"}</a></section>`;

const entrada = () => `<section class="pg"><h2>Antes de começar</h2><p class="mute">Seus dados ficam salvos apenas neste navegador.</p>
${guia("Sou o guia da sua jornada. Diga quem você é e eu organizo o caminho.")}
<form id="perfil"><label>Nome<input name="nome" required maxlength="40" autocomplete="given-name" value="${S ? esc(S.nome) : ""}"></label>
<label>Idade<input name="idade" type="number" min="5" max="120" required value="${S ? S.idade : ""}"></label>
<label>Seu nível de conhecimento musical<select name="nivel">${NIVEIS_CONHEC.map(n => `<option ${S && S.nivel === n ? "selected" : ""}>${n}</option>`).join("")}</select></label>
<button class="btn">${S ? "SALVAR PERFIL" : "ENTRAR NA JORNADA"}</button></form></section>`;

function proxima() { return LESSONS.find(l => !S.feitas.includes(l.id) && livre(l)); }

const painel = () => {
  const p = proxima(), n = nivel();
  return `<section class="pg"><p class="mute">Nível ${String(n + 1).padStart(2, "0")} · ${NIVEIS[n]}</p><h2>Olá, ${esc(S.nome)}</h2>
${barra(S.xp % 100)}<p class="mute">${S.xp % 100}/100 XP para o próximo nível</p>
<div class="grid">${stat(S.xp, "XP")}${stat(pct() + "%", "da jornada")}${stat(S.feitas.length + "/" + LESSONS.length, "aulas")}${stat(S.estrelas, "estrelas")}${stat(S.streak + " dia(s)", "sequência")}</div>
${guia(p ? `Seu próximo passo: <b>${esc(p.titulo)}</b>.` : "Você concluiu tudo o que está disponível. Novas aulas virão.")}
${p ? `<a class="btn" href="#/aula/${p.id}">${S.feitas.length ? "CONTINUAR" : "PRIMEIRA AULA"}</a>` : ""}
<h3 style="margin-top:32px">Conquistas</h3><div class="grid">${conqCards()}</div></section>`;
};
const conqCards = () => CONQ.map(c => `<div class="card conq ${S.conquistas.includes(c.id) ? "on" : ""}"><h3>${c.nome}</h3><span class="mute">${c.d}</span></div>`).join("");

const jornada = () => `<section class="pg"><h2>Jornada musical</h2>${barra(pct())}<p class="mute">${pct()}% concluído</p>
${STAGES.map(e => {
  const ls = LESSONS.filter(l => l.etapa === e.id), f = ls.filter(l => S.feitas.includes(l.id)).length, at = proxima();
  return `<div class="etapa"><header><p class="mute">Etapa ${String(e.id).padStart(2, "0")}${ls.length ? ` · ${f}/${ls.length}` : ""}</p><h3>${e.nome}</h3><p class="mute">${e.desc}</p></header>
<div class="trilha">${ls.map(l => {
    const feita = S.feitas.includes(l.id), ab = livre(l), st = feita ? "feita" : at && at.id === l.id ? "atual" : ab ? "" : "bloq";
    return `<a class="lic ${st}" ${ab ? `href="#/aula/${l.id}"` : `aria-disabled="true"`}><span>${String(l.id).padStart(2, "0")}</span><span>${l.titulo}</span><small>${feita ? "Concluída" : !ab ? "Bloqueada" : l.corpo ? "Disponível" : "Em preparação"}</small></a>`;
  }).join("")}</div></div>`;
}).join("")}</section>`;

let okq = new Set();
function aula(id) {
  const l = LESSONS.find(x => x.id == id);
  if (!l) return `<section class="pg"><h2>Aula não encontrada</h2><a class="btn" href="#/jornada">Voltar</a></section>`;
  if (!livre(l)) return `<section class="pg"><h2>Aula bloqueada</h2><p class="mute">Conclua a aula anterior para liberar esta.</p><a class="btn" href="#/jornada">Voltar à jornada</a></section>`;
  const e = STAGES.find(x => x.id === l.etapa);
  if (!l.corpo) return `<section class="pg"><p class="mute">Etapa ${e.id} · ${e.nome}</p><h2>${l.titulo}</h2>${guia("Esta aula está em preparação.")}<a class="btn" href="#/jornada">Voltar à jornada</a></section>`;
  const feita = S.feitas.includes(l.id);
  okq = new Set(feita ? l.quiz.map((_, i) => i) : []);
  return `<section class="pg"><p class="mute">Etapa ${e.id} · ${e.nome} · Aula ${l.id}</p><h2>${l.titulo}</h2>
<p><b>Objetivo:</b> ${l.objetivo}</p><div class="card" style="margin:18px 0">${l.corpo.map(p => `<p>${p}</p>`).join("")}</div>
<h3>Quiz</h3>${l.quiz.map((q, i) => `<div class="q"><p>${q.q}</p>${q.o.map((o, j) => `<button class="op" data-act="resp" data-q="${i}" data-o="${j}">${o}</button>`).join("")}</div>`).join("")}
<div class="card"><b>Resumo:</b> ${l.resumo}</div><p style="margin-top:22px">
<button class="btn" id="concluir" data-act="concluir" ${feita || okq.size === l.quiz.length ? "" : "disabled"}>${feita ? "AULA CONCLUÍDA ✓" : "CONCLUIR AULA"}</button></p></section>`;
}
function responder(b) {
  const l = LESSONS.find(x => x.id == location.hash.split("/")[2]), i = +b.dataset.q, ok = +b.dataset.o === l.quiz[i].c;
  b.classList.add(ok ? "ok" : "err");
  if (ok) { okq.add(i); b.parentElement.querySelectorAll(".op").forEach(x => x.disabled = true); }
  if (okq.size === l.quiz.length && !S.feitas.includes(l.id)) $("#concluir").disabled = false;
}
function concluir() {
  const l = LESSONS.find(x => x.id == location.hash.split("/")[2]);
  if (S.feitas.includes(l.id)) return;
  S.feitas.push(l.id); S.xp += 50; S.estrelas += 1; checar();
  toast("+50 XP · +1 estrela");
  const p = proxima(); location.hash = p && p.corpo ? "#/aula/" + p.id : "#/jornada";
}

const historia = () => `<section class="pg"><h2>História da Música</h2><p class="mute">Explore cada período. ${S ? S.hist.length : 0}/${PERIODOS.length} visitados.</p>
<div class="tl">${PERIODOS.map(p => `<details data-p="${p.id}"><summary><b>${p.nome}</b><span class="mute">${p.anos}</span></summary><div class="det"><p>${p.resumo}</p><ul>${p.marcos.map(m => `<li>${m}</li>`).join("")}</ul><p><b>Compositores:</b> ${p.comp}</p><p><b>Curiosidade:</b> ${p.cur}</p></div></details>`).join("")}</div></section>`;

const materiais = () => `<section class="pg"><h2>Materiais</h2><label>Buscar<input id="busca" type="search" placeholder="Ex.: compasso"></label>
<h3 style="margin-top:24px">Glossário</h3><div class="grid" id="gl">${GLOSS.map(g => `<div class="card" data-t="${esc(g[0] + " " + g[1]).toLowerCase()}"><h3>${g[0]}</h3><span class="mute">${g[1]}</span></div>`).join("")}</div>
<h3>Resumos das aulas</h3><div class="grid" id="rs">${LESSONS.filter(l => l.resumo).map(l => `<a class="card" href="#/aula/${l.id}" data-t="${esc(l.titulo + " " + l.resumo).toLowerCase()}"><h3>${l.titulo}</h3><span class="mute">${l.resumo}</span></a>`).join("")}</div></section>`;

const banco = () => LESSONS.filter(l => l.quiz).flatMap(l => l.quiz.map(q => ({ ...q, a: l.id, t: l.titulo })));
const avaliacoes = () => {
  const b = banco(), h = S.simulados.slice(-3).reverse();
  return `<section class="pg"><h2>Simulado: Fundamentos</h2><p class="mute">${b.length} questões das aulas disponíveis. XP só na primeira tentativa.</p><div id="sim">
${b.map((q, i) => `<div class="q"><p>${i + 1}. ${q.q}</p>${q.o.map((o, j) => `<label class="op"><input type="radio" name="q${i}" value="${j}">${o}</label>`).join("")}</div>`).join("")}
<button class="btn" data-act="finalizar">FINALIZAR</button></div><div id="res"></div>
${h.length ? `<h3 style="margin-top:28px">Últimas tentativas</h3>${h.map(s => `<p class="mute">${s.a}/${s.n} acertos · ${s.p}%</p>`).join("")}` : ""}</section>`;
};
function finalizar() {
  const b = banco(), r = b.map((q, i) => { const x = document.querySelector(`input[name=q${i}]:checked`); return x ? +x.value === q.c : null; });
  if (r.includes(null)) return toast("Responda todas as questões.");
  const a = r.filter(Boolean).length, n = b.length, p = Math.round(a / n * 100), xp = S.simulados.length ? 0 : a * 5;
  S.simulados.push({ a, n, p }); S.xp += xp; checar();
  const rev = [...new Map(b.filter((_, i) => !r[i]).map(q => [q.a, q.t]))];
  $("#sim").hidden = true;
  $("#res").innerHTML = `<div class="grid">${stat(a, "acertos")}${stat(n - a, "erros")}${stat(p + "%", "aproveitamento")}${stat("+" + xp, "XP")}</div>${barra(p)}
${rev.length ? `<h3>Revise</h3>${rev.map(([id, t]) => `<p><a href="#/aula/${id}" style="color:var(--gold)">${t}</a></p>`).join("")}` : guia("Sem erros. Desempenho excelente.")}<p style="margin-top:20px"><a class="btn sec" href="#/avaliacoes">REFAZER</a></p>`;
  scrollTo({ top: 0 });
}

const progresso = () => `<section class="pg"><h2>Progresso</h2>${barra(pct())}<p class="mute">${pct()}% da jornada · ${S.feitas.length} de ${LESSONS.length} aulas</p>
<div class="grid">${STAGES.map(e => { const ls = LESSONS.filter(l => l.etapa === e.id), f = ls.filter(l => S.feitas.includes(l.id)).length; return `<div class="card"><h3>${e.nome}</h3>${barra(ls.length ? f / ls.length * 100 : 0)}<span class="mute">${ls.length ? f + "/" + ls.length : "Em breve"}</span></div>`; }).join("")}</div>
<h3>Conquistas</h3><div class="grid">${conqCards()}</div><h3>Simulados realizados: ${S.simulados.length}</h3>
<p style="margin-top:24px"><a class="btn sec" href="#/entrada">EDITAR PERFIL</a></p></section>`;

const sobre = () => `<section class="pg"><h2>Sobre o Teoria de Elite</h2>
<p>Teoria de Elite é uma plataforma gratuita e independente para aprender música de forma organizada, acessível e interessante.</p>
<p>Ela foi criada para que o estudo tenha um caminho claro: você sabe onde está, o que aprendeu e qual é o próximo passo.</p>
<p>Criador e fundador: <b>Gabriel Gracioli Cacho</b>.</p><p style="margin-top:22px"><a class="btn" href="#/${S ? "jornada" : "entrada"}">${S ? "IR PARA A JORNADA" : "COMEÇAR"}</a></p></section>`;

// IA auxiliar: para conectar uma IA real, defina window.TE_IA = async pergunta => resposta
async function responderIA(q) {
  if (window.TE_IA) return window.TE_IA(q);
  const t = q.toLowerCase();
  if (/exerc/.test(t)) return "Exercício de ritmo: conte 1-2-3-4 em pulso constante batendo o pé. Bata palmas nos tempos 1 e 3 e diga baixinho os tempos 2 e 4. Repita por 1 minuto.";
  const g = GLOSS.find(x => t.includes(x[0].toLowerCase()));
  return g ? `${g[0]}: ${g[1]}` : "Ainda não sei responder isso. Pergunte sobre compasso, clave, pentagrama, pulso, timbre, melodia ou harmonia.";
}
const ia = () => `<section class="pg"><h2>Precisa de ajuda?</h2><p class="mute">Assistente de apoio. Ele complementa o curso, não o substitui.</p>
<div class="chat" id="chat"><div class="msg">Pergunte, por exemplo: "Explique o que é um compasso".</div></div>
<form class="row" id="fia" style="max-width:none"><input name="q" required placeholder="Sua pergunta" autocomplete="off"><button class="btn">ENVIAR</button></form></section>`;

// ---------- Rotas ----------
const ROTAS = { "": home, entrada, painel, jornada, historia, materiais, avaliacoes, progresso, sobre, ia, aula };
const GRUPO = { "": "a", entrada: "a", painel: "a", jornada: "b", aula: "b", historia: "c", materiais: "c", avaliacoes: "b", progresso: "b", sobre: "a", ia: "c" };
const PUBLICAS = ["", "entrada", "sobre"];
function render() {
  const [r, arg] = location.hash.slice(2).split("/"), rota = ROTAS[r] ? r : "";
  if (!S && !PUBLICAS.includes(rota)) return location.hash = "#/entrada";
  if (S) tick();
  document.body.dataset.g = GRUPO[rota];
  $("#app").innerHTML = ROTAS[rota](arg);
  $("#nav").classList.remove("open"); $("#mb").setAttribute("aria-expanded", "false");
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#/" + (rota === "aula" ? "jornada" : rota)));
  scrollTo({ top: 0 });
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  ({ resp: responder, concluir, finalizar })[b.dataset.act](b);
});
document.addEventListener("submit", async e => {
  e.preventDefault();
  if (e.target.id === "perfil") {
    const f = Object.fromEntries(new FormData(e.target)), n = f.nome.trim();
    if (!n) return toast("Informe seu nome.");
    S = S ? { ...S, nome: n, idade: +f.idade, nivel: f.nivel } : { nome: n, idade: +f.idade, nivel: f.nivel, xp: 0, estrelas: 0, feitas: [], conquistas: [], simulados: [], hist: [], dia: "", streak: 0 };
    save(); location.hash = "#/painel";
  }
  if (e.target.id === "fia") {
    const i = e.target.q, q = i.value.trim(), c = $("#chat"); i.value = "";
    c.insertAdjacentHTML("beforeend", `<div class="msg eu">${esc(q)}</div>`);
    const r = await responderIA(q);
    c.insertAdjacentHTML("beforeend", `<div class="msg">${esc(r)}</div>`); c.scrollTop = c.scrollHeight;
  }
});
document.addEventListener("input", e => {
  if (e.target.id !== "busca") return;
  const v = e.target.value.toLowerCase();
  document.querySelectorAll("#gl .card,#rs .card").forEach(c => c.hidden = !c.dataset.t.includes(v));
});
document.addEventListener("toggle", e => {
  const d = e.target; if (!d.dataset || !d.dataset.p || !d.open || !S) return;
  if (!S.hist.includes(d.dataset.p)) { S.hist.push(d.dataset.p); checar(); }
}, true);
$("#mb").onclick = () => { const o = $("#nav").classList.toggle("open"); $("#mb").setAttribute("aria-expanded", o); };
addEventListener("hashchange", render);
render();
