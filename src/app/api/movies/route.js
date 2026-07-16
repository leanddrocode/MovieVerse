import {
  getPopularMovies,
  getTopRatedMovies,
} from "@/services/tmdb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let data;

    switch (category) {
      case "top_rated":
        data = await getTopRatedMovies();
        break;

      case "popular":
      default:
        data = await getPopularMovies();
        break;
    }

    return Response.json(data);

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}