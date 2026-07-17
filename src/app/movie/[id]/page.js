import MovieCard from "@/components/MovieCard";

export default async function MoviePage({ params }) {
  const { id } = await params;

  const response = await fetch(
    `http://localhost:3000/api/movie/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return (
      <main
        style={{
          background: "#111827",
          minHeight: "100vh",
          color: "white",
          padding: "40px",
        }}
      >
        <h1>Erro ao carregar o filme.</h1>
      </main>
    );
  }

  const data = await response.json();

  const movie = data.movie;
  const credits = data.credits;
  const videos = data.videos;
  const similar = data.similar;

  const trailer = videos?.results?.find(
    (video) =>
      video.type === "Trailer" &&
      video.site === "YouTube"
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(17,24,39,.75), rgba(17,24,39,1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          alignItems: "flex-end",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          {movie.title}
        </h1>
      </div>

      <main
        style={{
          background: "#111827",
          minHeight: "100vh",
          color: "white",
          padding: "40px",
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: "300px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        />

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <p style={{ marginTop: "10px" }}>
          📅 {movie.release_date}
        </p>

        <p
          style={{
            marginTop: "30px",
            maxWidth: "900px",
            lineHeight: "1.7",
          }}
        >
          {movie.overview}
        </p>

        <h2
          style={{
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          🎬 Trailer
        </h2>

        {trailer ? (
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer"
            style={{
              borderRadius: "12px",
              border: "none",
              maxWidth: "100%",
            }}
            allowFullScreen
          />
        ) : (
          <p>Trailer não disponível.</p>
        )}

        <h2
          style={{
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          🎭 Elenco Principal
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingBottom: "20px",
          }}
        >
          {credits?.cast?.slice(0, 10).map((actor) => (
            <div
              key={actor.id}
              style={{
                minWidth: "120px",
                textAlign: "center",
              }}
            >
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              )}

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                {actor.name}
              </p>
            </div>
          ))}
        </div>

        <h2
          style={{
            marginTop: "60px",
            marginBottom: "20px",
          }}
        >
          🍿 Filmes Semelhantes
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {similar?.results
            ?.filter((movie) => movie.poster_path)
            .slice(0, 6)
            .map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
        </div>
      </main>
    </>
  );
}