# Kingsley Pictures — Fase 1 (fundação)

Next.js 15 (App Router) + Supabase + Vercel. Português (BR), mobile-first.

## Como subir
1. Crie um projeto Supabase novo (região sa-east-1). Rode `supabase/migrations/0001_init.sql` no SQL Editor (ou `supabase db push`).
2. Supabase > Authentication: ative **Confirm email**, defina a URL do site e `https://SEU-DOMINIO/auth/callback` em *Redirect URLs*, ative proteção contra senhas vazadas e MFA.
3. Copie `.env.example` para `.env.local` e preencha URL e chave **publishable** do projeto.
4. `npm install` (gera o lockfile; faça commit dele) e `npm run dev`.
5. GitHub: suba o repositório. Vercel: *Import Project*, cadastre as mesmas variáveis e faça o deploy.
6. Para virar equipe: no SQL Editor, `insert into public.staff (user_id, role) values ('<uuid do usuário>', 'owner');`

## O que está implementado (escrito, ainda NÃO executado)
Cadastro com data de nascimento, login, confirmação de e-mail, logout, home (destaque + carrosséis), catálogo com busca e filtros no banco, página do filme, Minha lista, "continue assistindo", player HLS com progresso salvo, verificação no servidor de classificação indicativa e de assinatura premium, solicitações LGPD (exportação, correção, exclusão), banco com RLS em todas as tabelas, licenças (publicação bloqueada sem licença aprovada e vigente), auditoria, robots/sitemap, cabeçalhos de segurança.

## O que NÃO está pronto
- **Nada foi instalado, compilado ou testado** (o ambiente de criação não tem internet). Rode `npm install && npm run build` e corrija o que aparecer.
- Painel administrativo (cadastro de filmes, licenças, planos, métricas) — hoje só por SQL/dashboard do Supabase.
- Vídeo: `src/lib/video.ts` é um ponto de integração vazio. Falta escolher o provedor (Mux, Cloudflare Stream, Bunny...), com custo, e gerar URL assinada.
- Pagamentos e webhooks (checkout, renovação, reembolso, idempotência via `payment_events`).
- Seções "Mais populares" e "Recomendados", ordem das seções pelo painel, sugestões na digitação, e-mails transacionais além dos do Supabase Auth, legendas/áudio no player, controle de dispositivos, perfis familiares.
- Textos de Termos e Privacidade (placeholders): exigem advogado. Idem CNPJ, contratos de distribuição e tributação.
- Senhas: o Supabase Auth usa bcrypt (não Argon2id). Limites de tentativa do Auth estão ativos; não há rate limiting próprio no app nem CSP.
- Limitação das licenças: `license_starts_on/ends_on` usam o menor início e o maior fim das licenças aprovadas; com lacunas entre contratos, ajuste a regra.
- Se a Data API não expõe tabelas novas por padrão no seu projeto, faça os `GRANT` para `anon`/`authenticated` (RLS continua valendo).
