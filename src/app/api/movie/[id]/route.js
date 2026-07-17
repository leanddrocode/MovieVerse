import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
  getSimilarMovies,
} from "@/services/tmdb";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const [
      movie,
      credits,
      videos,
      similar,
    ] = await Promise.all([
      getMovieDetails(id),
      getMovieCredits(id),
      getMovieVideos(id),
      getSimilarMovies(id),
    ]);

    return Response.json({
      movie,
      credits,
      videos,
      similar,
    });

  } catch (error) {
    return Response.json(
      {
        error: "Erro ao buscar detalhes do filme.",
      },
      {
        status: 500,
      }
    );
  }
}