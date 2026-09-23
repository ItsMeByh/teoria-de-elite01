// Camada de banco/autenticação (Supabase). Sem configuração, DB.on = false e o site usa só localStorage.
const DB = (() => {
  const c = window.TE_CFG || {}, on = !!(c.url && c.key && window.supabase);
  const sb = on ? supabase.createClient(c.url, c.key) : null;
  const ok = r => { if (r.error) throw r.error; return r.data; };
  const user = async () => { const { data } = await sb.auth.getSession(); return data.session ? data.session.user : null; };
  const avaliacao = async (id, x) => ok(await sb.from("avaliacoes").insert({ user_id: id, avaliacao: "Simulado: Fundamentos", acertos: x.a, total: x.n, nota: x.p }));

  async function carregar(u, legacy) {
    const [p, g, a, q, v] = await Promise.all([
      sb.from("profiles").select("*").eq("id", u.id).single(),
      sb.from("progresso").select("*").eq("user_id", u.id).single(),
      sb.from("aulas_concluidas").select("lesson_id").eq("user_id", u.id),
      sb.from("conquistas").select("achievement_id").eq("user_id", u.id),
      sb.from("avaliacoes").select("*").eq("user_id", u.id).order("criada_em")]);
    const P = ok(p), G = ok(g);
    const s = { uid: u.id, admin: P.is_admin, nome: P.nome, idade: P.idade, nivel: P.nivel_musical, xp: G.xp, estrelas: G.estrelas, streak: G.streak, dia: G.dia || "", hist: G.hist || [],
      feitas: ok(a).map(x => x.lesson_id), conquistas: ok(q).map(x => x.achievement_id), simulados: ok(v).map(x => ({ a: x.acertos, n: x.total, p: x.nota })) };
    if (legacy && !s.xp && !s.feitas.length && (legacy.xp || (legacy.feitas || []).length)) { // migração do localStorage
      Object.assign(s, { xp: legacy.xp, estrelas: legacy.estrelas, streak: legacy.streak || 0, dia: legacy.dia || "", hist: legacy.hist || [], feitas: legacy.feitas || [], conquistas: legacy.conquistas || [], simulados: legacy.simulados || [] });
      for (const x of s.simulados) await avaliacao(u.id, x);
    }
    ok(await sb.from("profiles").update({ ultimo_acesso: new Date().toISOString() }).eq("id", u.id));
    return s;
  }

  let t;
  const sync = s => { clearTimeout(t); t = setTimeout(() => enviar(s), 400); };
  async function enviar(s) {
    try {
      const id = s.uid;
      ok(await sb.from("progresso").upsert({ user_id: id, xp: s.xp, estrelas: s.estrelas, aulas_concluidas: s.feitas.length, progresso_geral: Math.round(s.feitas.length / LESSONS.length * 100), nivel: Math.min(Math.floor(s.xp / 100), 4), streak: s.streak, dia: s.dia || null, hist: s.hist, ultima_atividade: new Date().toISOString() }));
      if (s.feitas.length) ok(await sb.from("aulas_concluidas").upsert(s.feitas.map(l => ({ user_id: id, lesson_id: l, xp_recebido: 50 })), { onConflict: "user_id,lesson_id", ignoreDuplicates: true }));
      if (s.conquistas.length) ok(await sb.from("conquistas").upsert(s.conquistas.map(a => ({ user_id: id, achievement_id: a })), { onConflict: "user_id,achievement_id", ignoreDuplicates: true }));
    } catch (e) { console.error(e); window.toast && toast("Sem conexão. O progresso será enviado no próximo salvamento."); }
  }

  async function admLista() {
    const [p, g] = await Promise.all([sb.from("profiles").select("*"), sb.from("progresso").select("*")]);
    const G = Object.fromEntries(ok(g).map(x => [x.user_id, x]));
    return ok(p).filter(x => !x.is_admin).map(x => ({ ...x, g: G[x.id] || {} }));
  }
  async function admAluno(id) {
    const [p, g, a, q, v] = await Promise.all([
      sb.from("profiles").select("*").eq("id", id).single(), sb.from("progresso").select("*").eq("user_id", id).maybeSingle(),
      sb.from("aulas_concluidas").select("*").eq("user_id", id).order("concluida_em"), sb.from("conquistas").select("*").eq("user_id", id),
      sb.from("avaliacoes").select("*").eq("user_id", id).order("criada_em", { ascending: false })]);
    return { p: ok(p), g: ok(g), a: ok(a), q: ok(q), v: ok(v) };
  }

  return { on, user, carregar, sync, avaliacao, admLista, admAluno,
    entrar: async (e, s) => ok(await sb.auth.signInWithPassword({ email: e, password: s })),
    cadastrar: async f => ok(await sb.auth.signUp({ email: f.email, password: f.senha, options: { data: { nome: f.nome, idade: f.idade, nivel: f.nivel } } })),
    sair: () => sb.auth.signOut(),
    perfil: async s => ok(await sb.from("profiles").update({ nome: s.nome, idade: s.idade, nivel_musical: s.nivel }).eq("id", s.uid)) };
})();
