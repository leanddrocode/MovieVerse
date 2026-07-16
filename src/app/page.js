"use client";

import { useEffect, useState } from "react";

import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieSection from "../components/MovieSection";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getMovies() {
      try {
        const [popularResponse, topRatedResponse] = await Promise.all([
          fetch("/api/movies?category=popular"),
          fetch("/api/movies?category=top_rated"),
        ]);

        const popularData = await popularResponse.json();
        const topRatedData = await topRatedResponse.json();

        setMovies(popularData.results || []);
        setTopRatedMovies(topRatedData.results || []);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }

    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <HeroBanner movie={movies[0]} />

      <main
        style={{
          background: "#111827",
          minHeight: "100vh",
          color: "white",
          padding: "140px 40px 40px",
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-2">
          🔥 Filmes Populares
        </h2>

        <p className="text-gray-400 mb-8">
          Descubra os filmes mais populares do momento.
        </p>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <MovieGrid movies={filteredMovies} />

        <MovieSection
          title="⭐ Mais Bem Avaliados"
          movies={topRatedMovies}
        />
      </main>
    </>
  );
}