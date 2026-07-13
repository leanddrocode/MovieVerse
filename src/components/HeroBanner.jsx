export default function HeroBanner({ movie }) {
  if (!movie) return null;

  return (
    <section
      style={{
        position: "relative",
        height: "500px",
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "40px",
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "15px",
          }}
        >
          {movie.title}
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "15px",
          }}
        >
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <p
          style={{
            lineHeight: "1.6",
            marginBottom: "25px",
          }}
        >
          {movie.overview}
        </p>

        <button
          style={{
            background: "#e50914",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          ▶ Ver detalhes
        </button>
      </div>
    </section>
  );
}