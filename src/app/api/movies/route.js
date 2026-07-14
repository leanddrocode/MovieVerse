import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category") || "popular";

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=pt-BR&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
        accept: "application/json",
      },
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}