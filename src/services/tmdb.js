const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
  accept: "application/json",
};

async function tmdbFetch(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do TMDB.");
  }

  return response.json();
}

export function getPopularMovies() {
  return tmdbFetch("/movie/popular?language=pt-BR&page=1");
}

export function getTopRatedMovies() {
  return tmdbFetch("/movie/top_rated?language=pt-BR&page=1");
}

export function getNowPlayingMovies() {
  return tmdbFetch("/movie/now_playing?language=pt-BR&page=1");
}

export function getUpcomingMovies() {
  return tmdbFetch("/movie/upcoming?language=pt-BR&page=1");
}

export function getMovieDetails(id) {
  return tmdbFetch(`/movie/${id}?language=pt-BR`);
}

export function getMovieCredits(id) {
  return tmdbFetch(`/movie/${id}/credits?language=pt-BR`);
}

export function getMovieVideos(id) {
  return tmdbFetch(`/movie/${id}/videos?language=pt-BR`);
}

export function getSimilarMovies(id) {
  return tmdbFetch(`/movie/${id}/similar?language=pt-BR&page=1`);
}