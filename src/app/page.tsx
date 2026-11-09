const movies = [
  { title: 'The Silent Harbor', year: '2025', genre: 'Drama', badge: 'Novo' },
  { title: 'Velvet Horizon', year: '2024', genre: 'Sci‑fi', badge: 'Top 10' },
  { title: 'North of Daybreak', year: '2021', genre: 'Aventura', badge: 'Popular' },
  { title: 'Glass Signal', year: '2023', genre: 'Suspense', badge: 'Premium' },
];

export default function HomePage() {
  return (
    <main>
      <header className="hdr">
        <a href="/" className="logo" aria-label="Kingsley Pictures home">
          <b>Kingsley</b>
          <span>PICTURES</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#">Início</a>
          <a href="#">Catálogo</a>
          <a href="#">Minha Lista</a>
          <a href="#">Premium</a>
        </nav>

        <div className="search" aria-label="Busca">
          <input type="search" placeholder="Buscar filme" aria-label="Buscar filme" />
        </div>
      </header>

      <section
        className="hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1400&q=80')" }}
      >
        <div>
          <div className="row" style={{ marginBottom: '.75rem' }}>
            <span className="tag">Destaque</span>
            <span className="tag">4K</span>
          </div>
          <h1>O futuro não é só uma tela. É uma experiência.</h1>
          <p>
            Descubra filmes, séries e estreias em um catálogo pensado para quem busca qualidade,
            conforto e narrativa memorável.
          </p>
          <div className="row" style={{ marginTop: '1rem' }}>
            <a href="#" className="btn">Assistir agora</a>
            <a href="#" className="btn ghost">Saiba mais</a>
          </div>
        </div>
      </section>

      <section className="rail">
        <h2>Em alta</h2>
        <div className="track" aria-label="Carrossel de destaques">
          {movies.map((movie) => (
            <article key={movie.title} className="card">
              <div className="poster">
                <span className="badge">{movie.badge}</span>
                <div className="noposter">{movie.title}</div>
              </div>
              <div className="ct">{movie.title}</div>
              <div className="cm">
                <span>{movie.year}</span>
                <span>{movie.genre}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rail">
        <h2>Catálogo</h2>
        <div className="grid">
          {movies.map((movie) => (
            <article key={`${movie.title}-grid`} className="card">
              <div className="poster">
                <div className="noposter">{movie.title}</div>
              </div>
              <div className="ct">{movie.title}</div>
              <div className="cm">
                <span>{movie.genre}</span>
                <span>{movie.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
