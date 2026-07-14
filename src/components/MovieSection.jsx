import MovieCard from "./MovieCard";

export default function MovieSection({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <section style={{ marginTop: "50px" }}>
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
          fontSize: "28px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
             id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
}