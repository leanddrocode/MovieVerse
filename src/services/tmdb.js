const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
  accept: "application/json",
};

export async function getPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?language=pt-BR&page=1`,
    {
      headers,
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes populares.");
  }

  return response.json();
}