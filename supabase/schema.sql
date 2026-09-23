-- Teoria de Elite: cole tudo no SQL Editor do Supabase e clique em Run.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null, email text not null, idade int, nivel_musical text,
  is_admin boolean not null default false,
  criado_em timestamptz not null default now(), ultimo_acesso timestamptz not null default now());
create table public.progresso (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  xp int not null default 0, estrelas int not null default 0, aulas_concluidas int not null default 0,
  progresso_geral int not null default 0, nivel int not null default 0, streak int not null default 0,
  dia date, hist text[] not null default '{}', ultima_atividade timestamptz);
create table public.aulas_concluidas (
  user_id uuid references public.profiles(id) on delete cascade, lesson_id int,
  concluida boolean not null default true, concluida_em timestamptz not null default now(),
  xp_recebido int not null default 0, primary key (user_id, lesson_id));
create table public.avaliacoes (
  id bigserial primary key, user_id uuid not null references public.profiles(id) on delete cascade,
  avaliacao text not null, acertos int, total int, nota int not null, criada_em timestamptz not null default now());
create table public.conquistas (
  user_id uuid references public.profiles(id) on delete cascade, achievement_id text,
  desbloqueada_em timestamptz not null default now(), primary key (user_id, achievement_id));

-- Cria perfil e progresso automaticamente a cada novo cadastro
create function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, nome, email, idade, nivel_musical)
  values (new.id, coalesce(new.raw_user_meta_data->>'nome', 'Aluno'), new.email, nullif(new.raw_user_meta_data->>'idade', '')::int, new.raw_user_meta_data->>'nivel');
  insert into public.progresso (user_id) values (new.id);
  return new;
end $$;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- Permissão de administrador vem do banco, nunca do navegador
create function public.is_admin() returns boolean language sql security definer stable set search_path = public as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false) $$;

-- Segurança por linha (RLS)
alter table public.profiles enable row level security;
create policy "perfil proprio" on public.profiles for select using (auth.uid() = id);
create policy "perfil admin le" on public.profiles for select using (public.is_admin());
create policy "perfil atualiza proprio" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
revoke update on public.profiles from anon, authenticated;
grant update (nome, idade, nivel_musical, ultimo_acesso) on public.profiles to authenticated; -- aluno não altera is_admin

do $$ declare t text; begin
  foreach t in array array['progresso','aulas_concluidas','avaliacoes','conquistas'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('create policy "proprio" on public.%I for all using (auth.uid() = user_id) with check (auth.uid() = user_id)', t);
    execute format('create policy "admin le" on public.%I for select using (public.is_admin())', t);
  end loop;
end $$;
