import { getMovieDetails } from "@/services/tmdb";


export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const movie = await getMovieDetails(id);

    return Response.json(movie);

  } catch (error) {
    return Response.json(
      {
        error: "Erro ao buscar detalhes do filme."
      },
      {
        status: 500,
      }
    );
  }
}