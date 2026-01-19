export const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <section className="hero">
        <h1>About CinemaFlix</h1>
        <p>Unlimited Movies, Shows & Entertainment</p>
      </section>
      <section className="about">
        <h2>Welcome to CinemaFlix</h2>
        <p>
          CinemaFlix is a modern movie streaming platform where you can explore
          the latest movies, popular web series, and timeless classics. Our goal
          is to deliver a smooth and immersive entertainment experience.
        </p>

        <div className="cards">
          <div className="card">
            <h3>🎬 Latest Movies</h3>
            <p>Watch newly released movies across all genres.</p>
          </div>

          <div className="card">
            <h3>📺 Popular Shows</h3>
            <p>Binge-watch trending web series and originals.</p>
          </div>

          <div className="card">
            <h3>⚡ HD Streaming</h3>
            <p>Enjoy fast, smooth and high-quality streaming.</p>
          </div>

          <div className="card">
            <h3>⭐ Membership</h3>
            <p>Get Cinema Membership with 30-day refund guarantee.</p>
          </div>
        </div>
      </section>
      <footer>
        <p>© 2026 CinemaFlix. All Rights Reserved.</p>
      </footer>
    </>
  );
};
